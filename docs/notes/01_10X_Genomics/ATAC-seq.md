---
title: ATAC-seq
createTime: 2024/11/12 11:39:30
permalink: /01_10X_Genomics/wkziuqgs/
---

> [WDL代码](https://github.com/rnacentre/WDL_Tools/tree/main/_CellRanger_ATAC)

## ATAC-seq 参考基因组制作

```json
{
  "cellranger_atac_make_reference.cellranger_atac_tar_gz": "s3://bioos-wcnjupodeig44rr6t02v0/Example_10X_data/cellranger-atac-2.1.0.tar.gz", # 参考基因组文件路径
  "cellranger_atac_make_reference.cpu": null, # cpu 核心数
  "cellranger_atac_make_reference.disk_space": null, # 数据盘尺寸
  "cellranger_atac_make_reference.fasta": null, # 参考基因组fasta文件路径
  "cellranger_atac_make_reference.genome": null, # 参考基因组名
  "cellranger_atac_make_reference.gtf": null, # 参考基因组gtf文件路径
  "cellranger_atac_make_reference.input_motifs": null, # (可选)输入motifs文件路径
  "cellranger_atac_make_reference.memory": null, # 内存
  "cellranger_atac_make_reference.non_nuclear_contigs": null, # (可选)非核基因组contigs
  "cellranger_atac_make_reference.organism": null # 物种
}
```

## ATAC-seq 数据分析

```json
{
  "cellranger_count_workflow.cellranger_atac_tar_gz": null, # 参考基因组文件路径
  "cellranger_count_workflow.chemistry": "auto", # chemistry选择 3'v2 等
  "cellranger_count_workflow.cpu": 32, # cpu 核心数
  "cellranger_count_workflow.dim_reduce": null, # (可选)降维方法
  "cellranger_count_workflow.disk_space": "500 GB", # 数据盘尺寸
  "cellranger_count_workflow.fastq_file_paths": null, # 原始数据文件路径
  "cellranger_count_workflow.force_cells": null, # (可选)强制细胞数，如果你有强力的理由相信你的数据中存在大量细胞，可以设置此参数
  "cellranger_count_workflow.memory": "225 GB", # 内存
  "cellranger_count_workflow.no_bam": null, # (可选)True则不生成bam文件
  "cellranger_count_workflow.peaks": null, # 输入peaks（.bed）文件路径
  "cellranger_count_workflow.reference_genome_tar_gz": null, # 参考基因组文件路径
  "cellranger_count_workflow.run_id": null, # 运行id
  "cellranger_count_workflow.sample": null, # 样本名
  "cellranger_count_workflow.secondary": null # (可选)二级分析
}
```