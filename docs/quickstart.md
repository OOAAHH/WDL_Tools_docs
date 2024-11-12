---
title: 快速开始
createTime: 2024/10/30 11:20:18
permalink: /quickstart/
---
## 👏**欢迎来到Ribo🄲🆅**

---

> ==RiboCV==是一个文档网站，在这里我们将展示如何使用BioOS上的计算资源。

> 我们假设我们的用户唯一需要的前置知识是如何在计算机上熟练的使用浏览器、复制粘贴、点击鼠标。~~您一定是会这个的，对吧。~~

### 写在开头

本文的目的在于让您快速对BioOS上的计算资源有初步的了解，并进行一些简单的操作。BioOS支持多种操作方式，包括网页、命令行、API等。本文将介绍如何通过==网页==操作BioOS。
> 命令行、API等工具的文档在[这里](https://cloud.miracle.ac.cn/docs)，你可能需要内网环境。

### 您需要准备

- 一个BioOS账号
- 一个BioOS Workspace

:::: tip
::: tabs
@tab 账号在哪？
看看您的邮箱，或者联系管理员。

@tab Workspace是什么？
Workspace是BioOS中的重要概念，是你的代码和数据存储的抽象概念，就像是一个文件夹。您在首次登录自己的账户时，您可以在系统引导下创建一个Workspace。
:::
::::

### 主要内容

通过本文，您将学会如何完成一个简单的计算任务，包括以下几个方面：

⚙️ **向BioOS中导入工作流文件**

🔍 **认识BioOS中存储数据的方式**

🔗 **利用json传递计算参数**

🚀 **运行工作流并查看运行结果**

## 让我们开始吧！🕺💃

### ⚙️ 向BioOS中导入工作流文件

> 这里已经准备好了一个==工作流文件==，您可以将其导入到BioOS中。
:::: demo-wrapper title="example.wdl"

```python :collapsed-lines=8
<!-- @include: ./example.wdl -->
```

::::

这个过程如下图所示

<ImageCard
  image="../images/WDLinput.gif"
  title="导入工作流"
  description="跟随“蓝色按钮”的指引，完成工作流的导入。记得为工作流命名，并撰写注释。"
  href="/"
  author="Hughes"
  date="2024/10/30"
/>

### 🔍 **认识BioOS中存储数据的方式**

> 在BioOS中，数据存储在==桶==中。

### 🔗 **利用json传递计算参数**

> 在BioOS中，计算参数通过==json==文件传递。

### 🚀 **运行工作流并查看运行结果**
