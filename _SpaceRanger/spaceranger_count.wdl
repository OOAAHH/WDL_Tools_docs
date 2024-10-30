version 1.0

workflow spaceranger_count {
    input {
        # Tar.gz cellranger_atac packges
        File spaceranger_tar_gz = "s3://bioos-wcnjupodeig44rr6t02v0/Example_10X_data/spaceranger-3.0.0.tar.gz"

        # Sample ID
        String sample
        # A comma-separated list of input FASTQs directories
        Array[File] fastq_file_paths
        # we difined that each lanes' output files as a run: per run pre CellRanger job.
        String run_id

        # A reference genome name tar.gz file
        File reference_tar_gz = "s3://bioos-wcnjupodeig44rr6t02v0/Example_10X_data/RAW/refdata-cellranger-GRCh38-3.0.0.tar.gz"

        # Probe set for FFPE samples, choosing from human_probe_v1, human_probe_v2, mouse_probe_v1 or a user-provided csv file. Default to '', not FFPE
        String probe_set = ""
        # if need
        File? probe_file
        # Whether to filter the probe set using the "included" column of the probe set CSV. Default: true
        Boolean filter_probes = true

        # Brightfield tissue H&E image in .jpg or .tiff format.
        File? image
        # Multi-channel, dark-background fluorescence image as either a single, multi-layer .tiff file, multiple .tiff or .jpg files, or a pre-combined color .tiff or .jpg file.
        Array[File]? darkimage
        # A semi-colon ';' separated string denoting all dark images. This option is equivalent to darkimage and should only be used by spaceranger_workflow
        String? darkimagestr
        # A color composite of one or more fluorescence image channels saved as a single-page, single-file color .tiff or .jpg.
        File? colorizedimage
        # Brightfield image generated by the CytAssist instrument.
        File? cytaimage

        # Index of DAPI channel (1-indexed) of fluorescence image, only used in the CytaAssist case, with dark background image.
        Int? dapi_index

        # Visium slide serial number.
        String? slide
        # Visium capture area identifier. Options for Visium are A1, B1, C1, D1.
        String? area
        # Slide layout file indicating capture spot and fiducial spot positions.
        File? slidefile
        # Use this option if the slide serial number and area identifier have been lost. Choose from visium-1, visium-2 and visium-2-large.
        String? unknown_slide

        # Use with automatic image alignment to specify that images may not be in canonical orientation with the hourglass in the top left corner of the image. The automatic fiducial alignment will attempt to align any rotation or mirroring of the image.
        Boolean reorient_images = true
        # Alignment file produced by the manual Loupe alignment step. A --image must be supplied in this case.
        File? loupe_alignment

        # Target panel CSV for targeted gene expression analysis
        File? target_panel

        # Perform secondary analysis of the gene-barcode matrix (dimensionality reduction, clustering and visualization). Default: false
        Boolean secondary = false

        # Hard trim the input Read 1 to this length before analysis
        Int? r1_length
        # Hard trim the input Read 2 to this length before analysis
        Int? r2_length

        # Number of cpus per spaceranger job
        Int num_cpu = 32
        # Memory string, e.g. 120G
        String memory = "120 GB"
        # Disk space in GB
        String disk_space = "500 GB"

        String spaceranger_version = "2.1.0"

    }

    call run_spaceranger_count {
        input:
            spaceranger_tar_gz = spaceranger_tar_gz,
            sample = sample,
            run_id = run_id,
            fastq_file_paths = fastq_file_paths,
            reference_tar_gz = reference_tar_gz,
            probe_file = probe_file,
            probe_set = probe_set,
            filter_probes = filter_probes,
            image = image,
            darkimage = darkimage,
            darkimagestr = darkimagestr,
            colorizedimage = colorizedimage,
            cytaimage = cytaimage,
            dapi_index = dapi_index,
            slide = slide,
            area = area,
            slidefile = slidefile,
            unknown_slide = unknown_slide,
            reorient_images = reorient_images,
            loupe_alignment = loupe_alignment,
            target_panel = target_panel,
            secondary = secondary,
            r1_length = r1_length,
            r2_length = r2_length,
            spaceranger_version = spaceranger_version,
            num_cpu = num_cpu,
            memory = memory,
            disk_space = disk_space,
    }
}

task run_spaceranger_count {
    input {
        File spaceranger_tar_gz
        String sample
        Array[File] fastq_file_paths
        String run_id
        File reference_tar_gz
        String? probe_set
        File? probe_file
        Boolean filter_probes
        File? image
        Array[File]? darkimage
        String? darkimagestr
        File? colorizedimage
        File? cytaimage
        Int? dapi_index
        String? slide
        String? area
        File? slidefile
        String? unknown_slide
        Boolean reorient_images
        File? loupe_alignment
        File? target_panel
        Boolean secondary
        Int? r1_length
        Int? r2_length
        String spaceranger_version

        Int num_cpu
        String memory
        String disk_space

    }

    command {
        set -e
        export TMPDIR=/tmp
        export BACKEND=BACKEND


        if [ -n "~{probe_set}" ]; then
            if [ ! -f "~{probe_file}" ]; then
                echo "Error: probe_set is provided but probe_file is missing."
                exit 1
            fi
        fi

        mkdir spaceranger
        tar -zxf ${spaceranger_tar_gz} -C spaceranger --strip-components 1
        # Set PATH to include SpaceRanger binaries
        export PATH=$(pwd)/spaceranger:$PATH

        mkdir -p genome_dir
        tar xf ~{reference_tar_gz} -C genome_dir --strip-components 1

        python <<CODE
        import os
        import re
        import sys
        from subprocess import check_call, CalledProcessError, DEVNULL, STDOUT


        # Convert the WDL Array[File] input to a Python list
        fastq_file_paths = ["${sep='","' fastq_file_paths}"]
        fastq_dirs = set([os.path.dirname(f) for f in fastq_file_paths])
        print(fastq_dirs)

        call_args = ['spaceranger', 'count', '--id=~{run_id}', '--transcriptome=genome_dir', '--fastqs=' + ','.join(list(fastq_dirs)), '--sample=~{sample}','--create-bam=true', '--jobmode=local']

        def not_null(input_file):
            return (input_file != '') and (os.path.basename(input_file) != 'null')

        def get_darkimages(darkimage, darkimagestr):
            darkimages = []
            if darkimage:
                darkimages = [file for file in darkimage]
            elif darkimagestr:
                darkimages = darkimagestr.split(';')
            return darkimages

        def compare_versions(version1, version2):
            v1 = [int(v) for v in version1.split('.')]
            v2 = [int(v) for v in version2.split('.')]
            for i in range(max(len(v1), len(v2))):
                part1 = v1[i] if i < len(v1) else 0
                part2 = v2[i] if i < len(v2) else 0
                if part1 > part2:
                    return 1
                elif part1 < part2:
                    return -1
            return 0

        has_cyta = not_null('~{cytaimage}')
        if not_null('~{probe_file}'):
            call_args.append('--probe-set=~{probe_file}')
            if version.parse('~{spaceranger_version}') >= version.parse('2.0.0'):
                call_args.append('--filter-probes=~{filter_probes}')
            else:
                if '~{filter_probes}' == 'false':
                    call_args.append('--no-probe-filter')
            if has_cyta and "~{probe_set}" == "human_probe_v1":
                print("CytAssit enabled FFPE is only compatible with human probe set v2!", file = sys.stderr)
                sys.exit(1)
            if not has_cyta and "~{probe_set}" == "human_probe_v2":
                print("Non-CytAssist enabled FFPE is only compatible with human probe set v1!", file = sys.stderr)
                sys.exit(1)

        if not_null('~{target_panel}'):
            call_args.append('--target-panel=~{target_panel}')

        has_image = not_null('~{image}')
        darkimages = get_darkimages('~{sep=";" darkimage}', '~{darkimagestr}')
        has_cimage = not_null('~{colorizedimage}')

        ntrue = has_image + (len(darkimages) > 0) + has_cimage
        if ntrue == 0 and not has_cyta:
            print("Please set one of the following arguments: image, darkimage, colorizedimage or cytaimage!", file = sys.stderr)
            sys.exit(1)
        elif ntrue > 1:
            print("Please only set one of the following arguments: image, darkimage or colorizedimage!", file = sys.stderr)
            sys.exit(1)

        if has_cyta:
            call_args.append('--cytaimage=~{cytaimage}')

        if has_image:
            call_args.append('--image=~{image}')
        elif len(darkimages) > 0:
            call_args.extend(['--darkimage=' + x for x in darkimages])
            if has_cyta and "~{dapi_index}" != '':
                call_args.append('--dapi-index=~{dapi_index}')
        elif has_cimage:
            call_args.append('--colorizedimage=~{colorizedimage}')

        if '~{area}' == '' and '~{slide}' == '':
            if '~{unknown_slide}' == '':
                print("Please provide an input for the 'unknown_slide' argument, choosing from 'visium-1', 'visium-2', and 'visium-2-large'!", file = sys.stderr)
                sys.exit(1)
            call_args.append('--unknown-slide=~{unknown_slide}')
        else:
            if '~{area}' == '':
                print("Please provide an input for the 'area' argument!", file = sys.stderr)
                sys.exit(1)
            if '~{slide}' == '':
                print("Please provide an input for the 'slide' argument!", file = sys.stderr)
                sys.exit(1)
            call_args.extend(['--area=~{area}', '--slide=~{slide}'])
            if not_null('~{slidefile}'):
                call_args.append('--slidefile=~{slidefile}')

        #if not has_cyta:
            #if not not_null('~{loupe_alignment}'):  # The argument '--reorient-images <true|false>' cannot be used with '--loupe-alignment <PATH>'
                #if version.parse('~{spaceranger_version}') >= version.parse('2.0.0'):
                    #call_args.append('--reorient-images=~{reorient_images}')
                #elif '~{reorient_images}' == 'true':
                    #call_args.append('--reorient-images')

        if not has_cyta:
            if not not_null('~{loupe_alignment}'):  # The argument '--reorient-images <true|false>' cannot be used with '--loupe-alignment <PATH>'
                if compare_versions('~{spaceranger_version}', '2.0.0') >= 0:
                    call_args.append('--reorient-images=~{reorient_images}')
                elif '~{reorient_images}' == 'true':
                    call_args.append('--reorient-images')

        if not_null('~{loupe_alignment}'):
            call_args.append('--loupe-alignment=~{loupe_alignment}')
        elif len(darkimages) > 0 or has_cimage:
            # see here: https://support.10xgenomics.com/spatial-gene-expression/software/pipelines/latest/using/image-recommendations
            print("Automatic fiducial alignment of fluorescene images is not supported. Please provide manual alignment JSON files via the LoupeAlignment column in the sample sheet!", file = sys.stderr)
            sys.exit(1)
        if '~{secondary}' != 'true':
            call_args.append('--nosecondary')

        if '~{r1_length}' != '':
            call_args.append('--r1-length=~{r1_length}')
        r2_length = '~{r2_length}'
        if r2_length == '' and not_null('~{probe_file}') and version.parse('~{spaceranger_version}') < version.parse('2.0.0'):
            r2_length = '50'
        if r2_length != '':
            call_args.append('--r2-length=' + r2_length)

        print(' '.join(call_args))
        check_call(call_args)

        # To h5ad
        import scanpy as sc
        adata = sc.read_10x_h5("~{run_id}/outs/filtered_feature_bc_matrix.h5")
        adata.write_h5ad("~{run_id}/outs/filtered_feature_bc_matrix.h5ad")

        CODE

        tar -czvf ~{run_id}_outs.tar.gz ~{run_id}/outs
    }

    output {
        File output_count_directory = "~{run_id}_outs.tar.gz"
        File output_metrics_summary = "~{run_id}/outs/metrics_summary.csv"
        File output_web_summary = "~{run_id}/outs/web_summary.html"
        File output_bam = "~{run_id}/outs/possorted_genome_bam.bam"
        File output_h5ad = "~{run_id}/outs/filtered_feature_bc_matrix.h5ad"
    }

    runtime {
        docker: "ooaahhdocker/py39_scanpy1-10-1"
        memory: memory
        disk: disk_space
        cpu: num_cpu
    }
}
