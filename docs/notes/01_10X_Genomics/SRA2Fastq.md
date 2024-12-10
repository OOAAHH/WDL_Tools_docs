---
title: SRA2Fastq
createTime: 2024/12/10 14:35:47
permalink: /01_10X_Genomics/411xd9jc/
---
## 写在前面

SRA文件是NCBI的测序数据格式，通常用于存储高通量测序数据，有些情况下SRA的解析结果可能不如人意，我们这里给出了多个工作流的例子，对应不同的情况。

## 示例

整体上，我们的工作流的功能是：
1. 解析SRA文件
2. 重命名文件
3. 压缩文件

### 示例1：对于最常见的情况
> 代码的github[地址](https://github.com/rnacentre/WDL_Tools/blob/main/_SRAtoFastqgz)

我们使用`1.1.1_SRAtoFastqgz.wdl`和`1.1.2_FastqgzNamed.wdl`，它们分别实现了对SRA的解析和按照Cellranger的格式重命名。
```json
# 1.1.1_SRAtoFastqgz
{
    File sra_file # 输入的SRA文件 
    File sratoolkit_tar_gz # 10X Genomics软件包路径
    String memory = "8 GB" # 内存
    String disk_space = "300 GB" # 数据盘尺寸
    Int cpu = 2 # 核数
}
```

```json
# 1.1.2_FastqgzNamed
{
    Array[File] fastq_file_paths # 输入的SRA文件(数组)
    String sample_name # 重命名时使用的样本名
    String disk_space = "150 GB" # 数据盘尺寸
    Int cpu = 1 # 核数
}
```

当然我们也有一个优化的版本：`1.1_SRAtoFasterqgz.wdl`，它使用了fasterq-dump工具，速度更快。并继承了重命名文件的逻辑。
```json
# 1.1_SRAtoFasterqgz
{
    File sra_file # 输入的SRA文件
    File sratoolkit_tar_gz # 10X Genomics软件包路径
    String sample # 重命名时使用的样本名
    String memory = "8 GB" # 内存
    String disk_space = "300 GB" # 数据盘尺寸
    Int cpu = 8 # 核数
}
```

### 示例2：对于比较复杂的情况

对于空间转录组和VDJ的数据，我们可能需要考虑使用`--split-3`还是`--split-files`参数。此外，某些时候我们很难直接判断SRA解析出的fastq数据的身份，到底谁是R1，谁是R2，尤其是对于VDJ数据。VDJ的fastq数据在尺寸上非常接近，有经验的生物信息学工程师可以凭借经验判断（比如直接观察文件保守序列的情况，==在文件非常多的时候这是不现实的==），但对于新手来说，可能需要一些额外的帮助。

我们在这里利用了VDJ的R1文件具备大量保守序列的特点来设计一个特殊的方法。从计算机存储数据的角度来看，保守序列越多，文件中重复的字段就应该越多，理论上我们可以通过计算文件中重复字段的比例来判断文件的身份。考虑到我们需要把文件转换为fastq.gz的形式，我们利用pigz工具来实现这样的想法。具体而言，当我们尝试让pigz用最大的压缩率压缩文件，此时pigz会尝试主动寻找文件中的重复的部分来提高压缩率。==如果文件中重复字段越多，压缩率就会越高，反之则越低。压缩率越高则文件越小，反之则越大==。这样我们就在原有代码改动最小的情况下，实现了对VDJ数据R1和R2的区分。

> 对应的代码在`1.3_newNamedLogic.wdl`以及`1.4_newNamedLogic_split3.wdl`。分别对应`--split-files`和`--split-3`两种情况。
```json
# 1.3_newNamedLogic 对应--split-files
{
    File sra_file # 输入的SRA文件
    File sratoolkit_tar_gz # 10X Genomics软件包路径
    String sample # 重命名时使用的样本名
    String memory # 内存
    String disk_space # 数据盘尺寸
    Int cpu # 核数
    String lane # 测序lane
}
```

```json
# 1.4_newNamedLogic_split3 对应--split-3
{
    File sra_file # 输入的SRA文件
    File sratoolkit_tar_gz # 10X Genomics软件包路径
    String sample # 重命名时使用的样本名
    String memory # 内存
    String disk_space # 数据盘尺寸
    Int cpu # 核数
    String lane # 测序lane
}
```

### 示例3：迈向更加集约化的工作流

> 我们面临的场景是大规模的数据分析，因此1%的性能提升也是值得的。

在《WDL 代码模式，最简代码模式》中，我们给出了一个加速开发的想法，使用WDL内封装您提前构建的python脚本，这样我们只需要考虑如何处理文件和变量的传递，降低迁移成本。

我们在这里展示一个使用rust程序替代python脚本的例子，这直接带来了12%的性能提升。

文件在`2.1_newNamedLogic_Rust.wdl`，使用方式上稍有不同，现在split-3和split-files的参数需要通过`--split-3`和`--split-files`来指定。

```json
# 2.1_newNamedLogic_Rust
{
    File sra_file = this.sra_file # 输入的SRA文件
    File sratoolkit_tar_gz # 10X Genomics软件包路径
    String sample = "sample" # 重命名时使用的样本名
    String memory = "8 GB" # 内存
    String disk_space = "300 GB" # 数据盘尺寸
    Int cpu = 8 # 核数
    String lane = "L001" # 测序lane
    String split_option = "--split-files" # 解析参数, 对应--split-3和--split-files
}
```

rust程序的代码在`_SRAtoFastqgz/2.0_rust/rustFiles/src/main.rs`，它被封装在`2.1_newNamedLogic_Rust.wdl`中。

```rust :collapsed-lines=10
// 2.1_newNamedLogic_Rust.rs
use clap::Parser;
use regex::Regex;
use std::collections::HashMap;
use std::env;
use std::fs;
use std::process::Command;
use glob::glob;

#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
struct Args {
    /// Sample name
    #[arg(short, long)]
    sample: String,

    /// Lane
    #[arg(short, long)]
    lane: String,

    /// Number of CPUs
    #[arg(short, long, default_value_t = 1)]
    cpu: usize,

    /// Path to sratoolkit tar.gz file
    #[arg(short, long)]
    sratoolkit_tar_gz: String,

    /// Path to SRA file
    #[arg(short, long)]
    sra_file: String,
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let args = Args::parse();

    // Replace '.' with '_' in sample name
    let sample = args.sample.replace(".", "_");
    let lane = args.lane;

    // Create sratoolkit directory
    fs::create_dir_all("sratoolkit")?;

    // Extract sratoolkit tar.gz file
    let tar_status = Command::new("tar")
        .arg("-xzf")
        .arg(&args.sratoolkit_tar_gz)
        .arg("-C")
        .arg("sratoolkit")
        .arg("--strip-components")
        .arg("1")
        .status()?;

    if !tar_status.success() {
        eprintln!("Failed to extract sratoolkit tar.gz file.");
        std::process::exit(1);
    }

    // Update PATH to include sratoolkit/bin
    let current_dir = env::current_dir()?;
    let sratoolkit_bin = current_dir.join("sratoolkit").join("bin");
    let path_var = env::var("PATH").unwrap_or_default();
    let new_path = format!("{}:{}", sratoolkit_bin.display(), path_var);
    env::set_var("PATH", &new_path);

    // Run fasterq-dump
    let fasterq_status = Command::new("fasterq-dump")
        .arg("--split-files")
        .arg("-e")
        .arg(args.cpu.to_string())
        .arg("--include-technical")
        .arg(&args.sra_file)
        .status()?;

    if !fasterq_status.success() {
        eprintln!("Failed to run fasterq-dump.");
        std::process::exit(1);
    }

    // Find all .fastq files
    let mut files: Vec<String> = Vec::new();
    for entry in glob("*.fastq")? {
        match entry {
            Ok(path) => {
                if let Some(filename) = path.to_str() {
                    files.push(filename.to_string());
                }
            }
            Err(e) => eprintln!("Error reading file: {:?}", e),
        }
    }

    // Map files based on suffix
    let re = Regex::new(r"_(\d)\.fastq$").unwrap();
    let mut file_suffixes: HashMap<String, String> = HashMap::new();
    for f in files {
        if let Some(caps) = re.captures(&f) {
            let suffix = caps.get(1).unwrap().as_str().to_string();
            file_suffixes.insert(suffix, f);
        }
    }

    // Initialize variables to hold file paths
    let mut i1_file = None;
    let mut i2_file = None;
    let mut r1_file = None;
    let mut r2_file = None;

    match file_suffixes.len() {
        2 => {
            r1_file = file_suffixes.get("1").cloned();
            r2_file = file_suffixes.get("2").cloned();
        }
        3 => {
            i1_file = file_suffixes.get("1").cloned();
            r1_file = file_suffixes.get("2").cloned();
            r2_file = file_suffixes.get("3").cloned();
        }
        4 => {
            i1_file = file_suffixes.get("1").cloned();
            i2_file = file_suffixes.get("2").cloned();
            r1_file = file_suffixes.get("3").cloned();
            r2_file = file_suffixes.get("4").cloned();
        }
        _ => {
            eprintln!("Unexpected number of .fastq files.");
            std::process::exit(1);
        }
    }

    // Define new filenames and list to compress
    let mut new_filenames: Vec<String> = Vec::new();

    if let Some(ref i1) = i1_file {
        let i1_new_filename = format!("{}_S1_{}_I1_001.fastq", sample, lane);
        fs::copy(i1, &i1_new_filename)?;
        new_filenames.push(i1_new_filename);
    }

    if let Some(ref i2) = i2_file {
        let i2_new_filename = format!("{}_S1_{}_I2_001.fastq", sample, lane);
        fs::copy(i2, &i2_new_filename)?;
        new_filenames.push(i2_new_filename);
    }

    if let Some(ref r1) = r1_file {
        let r1_new_filename = format!("{}_S1_{}_R1_001.fastq", sample, lane);
        fs::copy(r1, &r1_new_filename)?;
        new_filenames.push(r1_new_filename);
    }

    if let Some(ref r2) = r2_file {
        let r2_new_filename = format!("{}_S1_{}_R2_001.fastq", sample, lane);
        fs::copy(r2, &r2_new_filename)?;
        new_filenames.push(r2_new_filename);
    }

    // Compress the new files with pigz
    for fastq in new_filenames {
        let pigz_status = Command::new("pigz")
            .arg("-p")
            .arg(args.cpu.to_string())
            .arg(&fastq)
            .status()?;

        if pigz_status.success() {
            println!("Successfully compressed: {}", fastq);
        } else {
            eprintln!("Failed to compress: {}", fastq);
        }
    }

    Ok(())
}
```
