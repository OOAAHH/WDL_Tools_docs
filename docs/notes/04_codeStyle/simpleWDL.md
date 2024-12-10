---
title: simpleWDL
createTime: 2024/12/10 14:36:54
permalink: /04_codeStyle/f0noxt1w/
---
## 最简WDL代码模式

> 本文展示一个最简WDL代码结构
诸多WDL教程比较复杂，为了进一步提速，这里我们展示一个最简WDL代码结构，只需要一个task即可。
task内部包含input、command、output、runtime四个部分。
> 在您有了多个WDL之后，如果您想依据他们构建复杂的工作流，您可以在WDL中加入`“import "../../../../../tasks/test/example.wdl" as testExample”`引入其他的WDL，并依据call命令构建更复杂的调度。

```python
version 1.0 # WDL版本号

task hello_world {
  input { 
    # 输入参数
    Array[File] fastq_file_paths
    String disk_space = "150 GB"
    Int cpu = 1
  }

  command <<<
    # 任务执行的命令
    # 下面是一个python代码块，可以执行python代码
    python3 <<CODE
    print("hello world")
    CODE
    # 下面是SHELL代码块，可以执行SHELL代码
    echo "hello world"
  >>>

  output {
    # 输出参数
    Array[File] renamed_fastq_files = glob("./*_L001_*_001.fastq.gz")
    String sample_name_out = sample_name
  }

  runtime {
    # 运行时参数
    docker: "registry-vpc.miracle.ac.cn/gznl/ooaahhdocker/python_pigz:1.0"
    cpu: cpu
    disk: disk_space
  }
}
```

:::tip
runtime的部分，您可以指定docker镜像，cpu，disk等参数。这里可以在多个task中复用。
:::

:::tip
推荐在command中使用python代码块，这样您可以把所有的python代码都写在一个文件中，便于管理。
:::