---
title: VDJ-seq
createTime: 2024/11/12 11:54:09
permalink: /01_10X_Genomics/6tdyw856/
---

> [WDL代码](https://github.com/rnacentre/WDL_Tools/tree/main/_CellRanger_VDJ)

## VDJ-seq make reference

```json
{
  "cellranger_vdj_create_reference.cellranger_tar_gz": null, # 10X Genomics软件包路径
  "cellranger_vdj_create_reference.disk_space": "100 GB", # 数据盘尺寸
  "cellranger_vdj_create_reference.genome": null, # 参考基因组名
  "cellranger_vdj_create_reference.input_fasta": null, # 输入fasta文件路径
  "cellranger_vdj_create_reference.input_gtf": null, # 输入gtf文件路径
  "cellranger_vdj_create_reference.memory": "32 GB", # 内存
  "cellranger_vdj_create_reference.num_cpu": 8 # cpu核心数
}
```

## VDJ-seq count

```json
{
  "cellranger_vdj.cellranger_tar_gz": "s3://bioos-wcnjupodeig44rr6t02v0/Example_10X_data/cellranger-7.2.0.tar.gz", # 10X Genomics软件包路径
  "cellranger_vdj.chain": "auto", # 链类型
  "cellranger_vdj.denovo": false, # 如果设置了 --denovo，在组装过程中将不使用 V(D)J 参考序列。
  "cellranger_vdj.disk_space": "500 GB", # 数据盘尺寸
  "cellranger_vdj.fastq_file_paths": null, # 输入fastq文件路径
  "cellranger_vdj.memory": "120 GB", # 内存
  "cellranger_vdj.num_cpu": 8, # cpu核心数
  "cellranger_vdj.reference_tar_gz": "s3://bioos-wcnjupodeig44rr6t02v0/analysis/sco5tra5eig49htini970/cellranger_vdj_create_reference/a37b5d72-994f-49a1-a28f-2569f03448f2/call-run_cellranger_vdj_create_reference/execution/dsadasd_ref.tar.gz", # 参考基因组路径
  "cellranger_vdj.sample_id": null # 样本名
}
```

==--denovo==
--reference 参数是可选的。如果指定了 --denovo 且未指定 --reference，则必须提--inner_enrichment_primers 参数。--denovo 选项最适合在没有 V(D)J 参考序列的情况下进行完全的 De Novo 组装。如果你有 V(D)J 参考序列，即使使用 --denovo，结果也会相似但稍微较差。
