---
title: Arg-multi-data
createTime: 2024/11/12 14:19:22
permalink: /01_10X_Genomics/m2qft3jy/
---

> [WDL代码](https://github.com/rnacentre/WDL_Tools/tree/main/_CellRanger_multi)
> 该工作流用于处理多组学数据联合分析，**需要提前构建数据模型**。

`_CellRanger_multi/cellranger_multi.wdl` 的参数如下：

```json
{
  "GE_fastq_file_directory": null, # 基因表达fastq文件夹(文件夹还是文件路径取决于你的数据模型)
  "GE_fastq_file_paths": null, # 基因表达fastq文件路径(文件夹还是文件路径取决于你的数据模型)
  "GE_run_id": null, # 基因表达run_id
  "GE_run_lanes": 1, # 基因表达run_lanes
  "VDJ_B_fastq_file_directory": null, # 免疫组库fastq文件夹(文件夹还是文件路径取决于你的数据模型)
  "VDJ_B_fastq_file_paths": null, # 免疫组库fastq文件路径(文件夹还是文件路径取决于你的数据模型)
  "VDJ_B_run_id": null, # 免疫组库run_id
  "VDJ_B_run_lanes": 1, # 免疫组库run_lanes
  "VDJ_T_fastq_file_directory": null, # 免疫组库fastq文件夹(文件夹还是文件路径取决于你的数据模型)
  "VDJ_T_fastq_file_paths": null, # 免疫组库fastq文件路径(文件夹还是文件路径取决于你的数据模型)
  "VDJ_T_run_id": null, # 免疫组库run_id
  "VDJ_T_run_lanes": 1, # 免疫组库run_lanes
  "VDJ_ref_tar_gz": "s3://bioos-wcnjupodeig44rr6t02v0/analysis/sco5tra5eig49htini970/cellranger_vdj_create_reference/a37b5d72-994f-49a1-a28f-2569f03448f2/call-run_cellranger_vdj_create_reference/execution/dsadasd_ref.tar.gz", # V(D)J参考文件
  "cellranger_tar_gz": "s3://bioos-wcnjupodeig44rr6t02v0/Example_10X_data/cellranger-7.2.0.tar.gz", # cellranger 软件包
  "check_library_compatibility": null, # （可选）是否检查库兼容性
  "chemistry": "auto", # 化学方法
  "cpu": 32, # cpu 数量
  "disk_space": "300 GB", # 磁盘空间
  "expect_cells": null, # 预期细胞数量(如果你一定要指定细胞数量，请设置此参数)
  "force_cells": null, # 强制细胞数量(如果你一定要指定细胞数量，请设置此参数)
  "gene_expression_ref_tar_gz": "s3://bioos-wcnjupodeig44rr6t02v0/Example_10X_data/RAW/refdata-cellranger-GRCh38-3.0.0.tar.gz", # 基因表达参考文件
  "include_introns": null, # 是否包含内含子
  "memory": "235 GB", # 内存
  "output_csv_path": null, # 输出csv路径
  "r1_length": null, # r1长度
  "r2_length": null, # r2长度
  "run_id": null # run_id
}
```

> 示例，根据实际情况选填参数。

```json
    GE_fastq_file_paths:["s3://bioos-wcnjupodeig44rr6t02v0/analysis/scol0uvdeig..."],
    GE_run_id: "ERR9588963",
    GE_run_lanes: 1,
    VDJ_B_fastq_file_paths: ["s3://bioos-wcnjupodeig44rr6t02v0/analysis/scokv0rteig..."],
    VDJ_B_run_id: "ERR9588951",
    VDJ_B_run_lanes: 1,
    VDJ_T_fastq_file_paths: ["s3://bioos-wcnjupodeig44rr6t02v0/analysis/scokv0rteig..."],
    VDJ_T_run_id: "ERR9588958",
    VDJ_T_run_lanes: 1,
    VDJ_ref_tar_gz: "s3://bioos-wcnjupodeig44rr6t02v0/analysis/sco5tra5eig49htini970/cellranger_vdj_create_reference/a37b5d72-994f-49a1-a28f-2569f03448f2/call-run_cellranger_vdj_create_reference/execution/dsadasd_ref.tar.gz",
    cellranger_tar_gz: "s3://bioos-wcnjupodeig44rr6t02v0/Example_10X_data/cellranger-7.2.0.tar.gz",
    chemistry: "auto",
    cpu: 4,
    disk_space: "500 GB",
    gene_expression_ref_tar_gz: "s3://bioos-wcnjupodeig44rr6t02v0/Example_10X_data/R...",
    memory: "239 GB",
    output_csv_path: "dasdad.csv",
    run_id: "test",
```
