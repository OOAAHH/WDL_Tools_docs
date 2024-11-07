<template><div><h2 id="wdl-tools-for-bioos" tabindex="-1"><a class="header-anchor" href="#wdl-tools-for-bioos"><span>WDL Tools for BioOS</span></a></h2>
<ul>
<li>An Auto Pipeline</li>
<li>Robustness</li>
<li>Designed for Bio-os</li>
</ul>
<p>Here, we need a script, a program or an other things, to meet our need.</p>
<p><a href="https://git.io/typing-svg" target="_blank" rel="noopener noreferrer"><img src="https://readme-typing-svg.herokuapp.com?font=Courier+New&amp;pause=1000&amp;color=6B4DF7&amp;multiline=true&amp;random=false&amp;width=435&amp;height=80&amp;lines=站++在++巨++人++的++肩++膀++;Stand+on+the+shoulders+of+giants" alt="Typing SVG"></a></p>
<h2 id="what-we-need" tabindex="-1"><a class="header-anchor" href="#what-we-need"><span>What we need?</span></a></h2>
<p>We have a platform built for fetch raw sequencing data to our system. Once the data is under our gover, we will get our pipline on woring. Given the complexity of the situation, our tools should be packaged as stand-alone toolkits, or they should take advantage of infrastructure that is readily available.</p>
<h2 id="what-we-have-now" tabindex="-1"><a class="header-anchor" href="#what-we-have-now"><span>What we have,now</span></a></h2>
<ul>
<li>
<p>10X Cellranger count WDL</p>
</li>
<li>
<p>10X Cellranger ATAC count WDL</p>
</li>
<li>
<p>10X Cellranger VDJ WDL</p>
</li>
<li>
<p>10X Spaceranger WDL</p>
</li>
<li>
<p>10X Cellranger multi WDL (for GEX + VDJ-T/VDJ-B or both of them)</p>
</li>
<li>
<p>SeqWell &amp; Drop-seq &amp; BD WDL (STARsolo)</p>
</li>
<li>
<p>SMART-seq WDL (STARsolo, too)
<code v-pre>Praise the god of STAR</code></p>
</li>
<li>
<p>Dockers at here: <code v-pre>https://hub.docker.com/repositories/ooaahhdocker</code></p>
</li>
</ul>
<h2 id="update" tabindex="-1"><a class="header-anchor" href="#update"><span>Update</span></a></h2>
<h3 id="_2024-10-10-let-s-have-a-try" tabindex="-1"><a class="header-anchor" href="#_2024-10-10-let-s-have-a-try"><span>2024.10.10 : let's have a try</span></a></h3>
<p>Try using rust as an encapsulation for the command part of the wdl, replacing python.
The results are here: <code v-pre>_SRAtoFastqgz/2.0_rust</code>.</p>
<p>I'm looking forward to this being a start, a start to be able to judge the type of vdj files (or any other files) quickly.</p>
<h3 id="_2024-10-9-attenton" tabindex="-1"><a class="header-anchor" href="#_2024-10-9-attenton"><span>2024.10.9 : ATTENTON!</span></a></h3>
<p>All of those images' name should be replaced as followed.</p>
<ul>
<li><strong>registry-vpc.miracle.ac.cn/gznl/</strong>
<ul>
<li>registry-vpc.miracle.ac.cn/gznl/ooaahhdocker/ooaahhdocker/python_pigz:1.0</li>
<li>registry-vpc.miracle.ac.cn/gznl/ooaahhdocker/py39_scanpy1-10-1</li>
<li>registry-vpc.miracle.ac.cn/gznl/ooaahhdocker/starsolo2:3.0</li>
<li>registry-vpc.miracle.ac.cn/gznl/ooaahhdocker/starsolo2:2.0</li>
<li>registry-vpc.miracle.ac.cn/gznl/python:3.9.19-slim-bullseye</li>
</ul>
</li>
</ul>
<h3 id="_2024-5-14-function-added" tabindex="-1"><a class="header-anchor" href="#_2024-5-14-function-added"><span>2024.5.14 : Function added</span></a></h3>
<ul>
<li>For cellranger count WDL, updated naming conventions of h5ad files.
<ul>
<li><code v-pre>filtered_feature_bc_matrix.h5ad</code> convert to <code v-pre>~{sample}_filtered_feature_bc_matrix.h5ad</code></li>
</ul>
</li>
</ul>
<h3 id="_2024-5-11-refining-code-logic" tabindex="-1"><a class="header-anchor" href="#_2024-5-11-refining-code-logic"><span>2024.5.11 : Refining Code Logic</span></a></h3>
<ul>
<li>When handling the extraction of SRA files to fastq files, an issue with file attribution was encountered, making it difficult to accurately determine the correct naming of the extracted fastq files. Solution: The R1 data contains a large number of duplicate sequences composed of barcodes and UMIs. When performing high compression ratio file compression, the size of the R1 data file should be smaller than that of R2.</li>
<li>Simply reverse the order of the file compression and renaming logic.</li>
</ul>
<h3 id="_2024-5-9-multi-need-to-set-na-as" tabindex="-1"><a class="header-anchor" href="#_2024-5-9-multi-need-to-set-na-as"><span>2024.5.9 : multi need to set NA as []</span></a></h3>
<ul>
<li>Array[File] Cannot accept input with an empty string, use [] as insted.</li>
</ul>
<h3 id="_2024-5-4-updated-naming-logic-for-files" tabindex="-1"><a class="header-anchor" href="#_2024-5-4-updated-naming-logic-for-files"><span>2024.5.4 : Updated naming logic for files</span></a></h3>
<ul>
<li>The extent of the impact &quot;SRA &gt; fastq.gz&quot;</li>
</ul>
<h3 id="_2024-4-28-added-unplanned-wdl-files" tabindex="-1"><a class="header-anchor" href="#_2024-4-28-added-unplanned-wdl-files"><span>2024.4.28 : Added unplanned WDL files</span></a></h3>
<ul>
<li>10X Cellranger multi WDL</li>
</ul>
<h3 id="_2024-4-28-bugs-fix" tabindex="-1"><a class="header-anchor" href="#_2024-4-28-bugs-fix"><span>2024.4.28 : Bugs fix</span></a></h3>
<ul>
<li>For VDJ files(SRA), we have to use parameters: &quot;<code v-pre>--split-file</code> combined with <code v-pre>--include-technologies</code>&quot;.</li>
<li>ps. For SpaceRanger, we need to use parameters <code v-pre>--split-3</code>. Therefore, in the case of 10X, we need to choose the appropriate workflow for the specific situation.</li>
</ul>
<h3 id="_2024-4-26-function-added" tabindex="-1"><a class="header-anchor" href="#_2024-4-26-function-added"><span>2024.4.26 : Function added</span></a></h3>
<ul>
<li>For local fastq files, I had added <code v-pre>cellranger_singleFile.wdl</code>.</li>
</ul>
<h3 id="_2024-4-23-function-added" tabindex="-1"><a class="header-anchor" href="#_2024-4-23-function-added"><span>2024.4.23 : Function added</span></a></h3>
<ul>
<li>Increased the output of h5ad&amp;bam files as much as possible.</li>
</ul>
<h3 id="_2024-4-22-added-starsolo-wdl-files-which-could-used-in-bd-seqwell-dropseq-without-umitools" tabindex="-1"><a class="header-anchor" href="#_2024-4-22-added-starsolo-wdl-files-which-could-used-in-bd-seqwell-dropseq-without-umitools"><span>2024.4.22 : Added STARsolo WDL files, which could used in BD&amp;SeqWell&amp;Dropseq, without umitools.</span></a></h3>
<ul>
<li>
<p>ps. Set <code v-pre>--soloBarcodeReadLength=0</code> to skip the barcode and umi checks.</p>
</li>
<li>
<p>Docker pull: ooaahhdocker/starsolo2:3.0, with python3.9/scanpy1.10.1/star2.7.11 inside.</p>
</li>
<li>
<p>Attention!</p>
<ul>
<li>To make the agreement between STARsolo and CellRanger even more perfect, you can add</li>
</ul>
<p><code v-pre>args_dict['--genomeSAsparseD'] = ['3']</code></p>
<ul>
<li>CellRanger 3.0.0 use advanced filtering based on the EmptyDrop algorithm developed by Lun et al. This algorithm calls extra cells compared to the knee filtering, allowing for       cells that have relatively fewer UMIs but are transcriptionally different from the ambient RNA. In STARsolo, this filtering can be activated by:</li>
</ul>
<p><code v-pre>args_dict['--soloCellFilter'] =['EmptyDrops_CR']</code></p>
</li>
</ul>
<h3 id="_2024-4-16-must-come-with-full-image-information-slide-number-etc" tabindex="-1"><a class="header-anchor" href="#_2024-4-16-must-come-with-full-image-information-slide-number-etc"><span>2024.4.16 : Must come with full image information, slide number, etc.</span></a></h3>
<ul>
<li>For spaceranger, complete image information is a must, and the data provided by some authors is incomplete.</li>
</ul>
<h3 id="_2024-4-12-the-technical-roadmap-has-been-updated-and-sra-files-are-now-reused-using-fasterq-dump" tabindex="-1"><a class="header-anchor" href="#_2024-4-12-the-technical-roadmap-has-been-updated-and-sra-files-are-now-reused-using-fasterq-dump"><span>2024.4.12 : The technical roadmap has been updated, and sra files are now reused using fasterq-dump</span></a></h3>
<ul>
<li>Docker pull: ooaahhdocker/python_pigz:1.0 with python3.9/pigz, which meet fastq file to fastq compressed file fast implementation.</li>
</ul>
<h3 id="_2024-4-11-resolving-compatibility-issues" tabindex="-1"><a class="header-anchor" href="#_2024-4-11-resolving-compatibility-issues"><span>2024.4.11 : Resolving compatibility issues</span></a></h3>
<ul>
<li>Lower versions of cellranger(2.9.6) are unable to handle newer 10X scRNA-seq data.</li>
<li>Added a way to externally import the cellranger package</li>
</ul>
</div></template>


