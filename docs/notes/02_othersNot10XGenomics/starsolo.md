---
title: starsolo
createTime: 2024/12/10 09:35:00
permalink: /02_othersNot10XGenomics/starsolo/
---
> 代码在[此处](https://github.com/rnacentre/WDL_Tools/blob/main/_SeqWell%26DropSeq%26BD/StarSolo_count.wdl)

## Starsolo

为了便于工作流的可重复性，我们推荐您使用json文件来描述和存档您的实验参数。

## 写在前面

[Starsolo](https://github.com/alexdobin/STAR/blob/master/docs/STARsolo.md) 是一个内置STAR比对算法的非常优秀的比对工具，理论上来说，它可以实现和Cellranger相同的效果。在我们这里，它被用于分析使用Smart-seq、Drop-seq、seq-well以及BD这些测序技术产生的测序数据。

> Starsolo 和 Cellranger 一样，可以为用户输出表达矩阵文件（h5及h5ad格式）、BAM文件。

相较于Cellranger，Starsolo的使用方式非常灵活，这里我们只提供一种比较普适的例子。

让我们开始吧！

### 对于一个典型的Starsolo实验，我们的输入部分的json的内容如下

> 这是一个分析seq-well数据的例子，代码中的注释为每个参数提供了快速参考，您可以参考这些注释来设置您的参数。详细的文档在[这里](https://github.com/alexdobin/STAR/blob/master/doc/STARmanual.pdf。

```json
{
  "assay": "SeqWell", # 设置测序技术 // [!code ++]
  "barcode_read": "read1", # 设置barcode的读取位置 // [!code ++]
  "disk_space": "300 GB", # 设置磁盘空间// [!code ++]
  "fastq_files": "this.fastqgz", # 设置fastq文件// [!code ++]
  "genome_name": "hg38_3.0.0", # 设置参考基因组的名称// [!code ++]
  "limitBAMsortRAM": null, # 设置bam排序的内存限制
  "memory": "24 GB", # 设置内存 // [!code ++]
  "num_cpu": 8, # 设置cpu数量// [!code ++]
  "outBAMsortingBinsN": null, # 设置bam排序的bins数量
  "outSAMtype": null, # 设置输出文件的类型
  "reference_tar_gz": "s3://bioos-wcnjupodeig44rr6t02v0/Example_10X_data/RAW/starsoloref.tar.gz", # 设置参考基因组的压缩包 // [!code ++]
  "sample_ID": "this.date", # 设置样本名称 // [!code ++]
  "soloAdapterMismatchesNmax": null, # 设置adapter的mismatch最大容忍数量
  "soloAdapterSequence": null, # 设置adapter的序列
  "soloBarcodeMate": null, # 设置barcode的读取位置
  "soloBarcodeReadLength": null, # 设置barcode的长度
  "soloCBlen": null, # 设置barcode的长度
  "soloCBmatchWLtype": null, # 设置barcode的匹配类型
  "soloCBposition": null, # 设置barcode的位置 类似0_0_0_12：从0开始，长度为12
  "soloCBstart": null, # 设置barcode的开始位置
  "soloCBwhitelist": null, # 设置barcode的白名单
  "soloCellFilter": null, # 设置细胞过滤
  "soloFeatures": "Gene", # 设置输出文件的属性 // [!code ++]
  "soloInputSAMattrBarcodeQual": null, # 设置输入文件的barcode质量
  "soloInputSAMattrBarcodeSeq": null, # 设置输入文件的barcode序列
  "soloMultiMappers": null, # 设置多基因映射（当你使用的是10XGenomics的测序技术时，这个参数是必须的，尤其是考虑到多个reads可能映射到同一个基因）
  "soloOutFormatFeaturesGeneField3": null, # 设置输出文件的属性
  "soloStrand": null, # 设置strand
  "soloType": null, # 设置UMI和barcode的类型
  "soloUMIdedup": null, # 设置UMI去重
  "soloUMIfiltering": null, # 设置UMI过滤
  "soloUMIlen": null, # 设置UMI的长度
  "soloUMIposition": null, # 设置UMI的位置
  "soloUMIstart": null # 设置UMI的开始位置
}
```

看起来很复杂，但没关系。仔细观察，您会发现，这个json文件的部分参数已经自动设置好了，在大部分情况下，您只需要依次填写您自己的参数即可。并且，这里为了=适配=更多的测序技术，暴露了很多参数，而在大多数情况下，他们中的很多是不需要填写的。
这里 ==唯一需要注意== 的是：您需要根据您的测序技术的实际情况对UMI和barcode参数进行设置。

## 举例

### seq-well和drop-seq

对于seq-well和drop-seq，他们的参数比较相似，我们直接把他们的需要的参数内置在了工作流文件中。
> 具体而言，他们在代码中的表示如下：
```python
# 其它代码
if '~{assay}' in ['SeqWell', 'DropSeq']: # 如果您在测序技术中使用了关键词'SeqWell'或'DropSeq' // [!code focus]
    args_dict['--soloType'] = 'CB_UMI_Simple' # 设置UMI和barcode的类型 // [!code focus]
    args_dict['--soloCBstart'] = '1' # 设置barcode的开始位置 // [!code focus]
    args_dict['--soloCBlen'] = '12' # 设置barcode的长度 // [!code focus]
    args_dict['--soloUMIstart'] = '13' # 设置UMI的开始位置 // [!code focus]
    args_dict['--soloUMIlen'] = '8' # 设置UMI的长度 // [!code focus]
    args_dict['--outSAMtype'] = ['BAM', 'SortedByCoordinate'] # 设置bam的类型 // [!code focus]
    args_dict['--outSAMattributes'] = ['CR', 'UR', 'CY', 'UY', 'CB', 'UB'] # 设置bam的属性 // [!code focus]
    barcode_read = 'read1' # 设置barcode的读取位置, seq-well和drop-seq的barcode在read1中。 // [!code focus]
# 其它代码
```

正如您所见，对于非10X Genomics的测序技术，Starsolo的参数设置非常简单，只需要设置UMI和barcode的类型、开始位置、长度、以及输出文件的属性即可。
