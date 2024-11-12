---
title: Spatial-seq
createTime: 2024/11/12 14:12:47
permalink: /01_10X_Genomics/9gvbjj6i/
---

> [WDL代码](https://github.com/rnacentre/WDL_Tools/tree/main/_SpaceRanger)
> 参数的选择与测序技术**强相关**，请务必在计算前仔细阅读10X官方文档。

## spaceranger_count 参数 注释

```json
{
  "spaceranger_count.area": null, # 区域
  "spaceranger_count.colorizedimage": null, # 染色图像
  "spaceranger_count.cytaimage": null, # 细胞图像
  "spaceranger_count.dapi_index": null, # dapi 索引
  "spaceranger_count.darkimage": null, # 暗图像
  "spaceranger_count.darkimagestr": null, # 暗图像字符串
  "spaceranger_count.disk_space": "500 GB", # 数据盘尺寸
  "spaceranger_count.fastq_file_paths": null, # 原始数据文件路径
  "spaceranger_count.filter_probes": true, # 是否过滤探针
  "spaceranger_count.image": null, # 图像
  "spaceranger_count.loupe_alignment": null, # loupe 对齐
  "spaceranger_count.memory": "120 GB", # 内存
  "spaceranger_count.num_cpu": 32, # cpu 核心数
  "spaceranger_count.probe_file": null, # 探针文件
  "spaceranger_count.probe_set": null, # 探针集
  "spaceranger_count.r1_length": null, # r1 长度
  "spaceranger_count.r2_length": null, # r2 长度
  "spaceranger_count.reference_tar_gz": "s3://bioos-wcnjupodeig44rr6t02v0/Example_10X_data/RAW/refdata-cellranger-GRCh38-3.0.0.tar.gz", # 参考基因组路径
  "spaceranger_count.reorient_images": true, # 是否重新对齐图像
  "spaceranger_count.run_id": null, # 运行id
  "spaceranger_count.sample": null, # 样本
  "spaceranger_count.secondary": false, # 是否进行二级分析
  "spaceranger_count.slide": null, # slide （如果有）
  "spaceranger_count.slidefile": null, # 幻灯片文件
  "spaceranger_count.spaceranger_tar_gz": "s3://bioos-wcnjupodeig44rr6t02v0/Example_10X_data/spaceranger-3.0.0.tar.gz", # spaceranger 路径
  "spaceranger_count.spaceranger_version": "2.1.0", # spaceranger 版本
  "spaceranger_count.target_panel": null, # 目标panel
  "spaceranger_count.unknown_slide": null # 未知slide
}
```
