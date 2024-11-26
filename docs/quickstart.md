---
title: 快速开始
createTime: 2024/10/30 11:20:18
permalink: /quickstart/
---
## 👏**欢迎来到Ribo🄲🆅**

---

> ==RiboCV==是一个文档网站，在这里我们将展示如何使用BioOS上的计算资源。

> 我们假设我们的用户唯一需要的前置知识是如何在计算机上熟练的使用浏览器、复制粘贴、点击鼠标。

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

这样有很多好处，比如：
只要你有“钥匙”，即==桶的访问密钥==，你就可以任意访问这和使用个桶中的数据，参阅[数据管理](https://cloud.miracle.ac.cn/docs/6653/126131)。

- 数据可以被多个工作流使用
- 数据可以被多个用户使用
- 数据可以被重复使用

> 当然你也可以自己上传数据到桶中。

在我们的例子中，我们将使用数据模型，并将其挂载到我们的workspace中。

<ImageCard
  image="../images/qu_1.gif"
  title="使用公共数据"
  description="跟随指引（dataset>选择数据集合>按meta信息选择数据集>点击“分析”按钮挂载数据到具体的workspace中），完成数据模型的导入。"
  href="/"
  author="Hughes"
  date="2024/10/30"
/>

### 🔗 **利用json传递计算参数**

> 在BioOS中，计算参数通过==json==文件传递。

我们已经完成了前置工作，现在让我们回到我们的工作流，并为其添加计算参数。

> 这里已经准备好了一个==计算参数文件==，您可以将其导入到BioOS中。

这是我们的计算参数文件：
:::: demo-wrapper title="example.json"

```json :collapsed-lines=8
<!-- @include: ./example.json -->
```

::::

这是我们的输出文件：
:::: demo-wrapper title="example_output.json"

```json :collapsed-lines=8
<!-- @include: ./eaxmple_output.json -->
```

::::

这次我们使用的例子是一个简单的计算任务，它将根据文件的大小，重命名文件。在实际使用中，您可以编写更加复杂的工作流。

<ImageCard
  image="../images/qu_2.gif"
  title="添加计算参数"
  description="跟随指引，完成计算参数的添加。"
  href="/"
  author="Hughes"
  date="2024/10/30"
/>

我们完成了工作流和计算参数的准备工作，只需使用this.语法，即可实现对我们当前选中的数据模型的操作。现在让我们运行工作流。

### 🚀 **运行工作流并查看运行结果**

> 运行工作流的过程如下图所示：

<ImageCard
  image="../images/qu_3.gif"
  title="运行工作流"
  description="点击开始运行，完成工作流的投递。在运行过程中，您可以点击“运行日志”查看工作流的运行状态。在运行结束后，您可以点击运行结果“查看”或“下载”访问工作流的输出。"
  href="/"
  author="Hughes"
  date="2024/10/30"
/>

> 日志中会显示工作流的运行状态，如果运行失败，您可以根据错误信息进行调整。
> 尤其是您有了一定的开发经验后，这里显示的日志信息可能对您调整工作流有很大帮助。

我们推荐您在运行参数里使用this.语法，来引用当前选中的数据模型。这样，您的输出结果将自动和输入数据关联起来，方便您后续的分析。尤其是在您需要多次运行同一工作流时，这一点尤为重要。

## 总结

我们通过一个简单的例子，展示了如何在BioOS中完成一个工作流的导入、数据模型的使用、计算参数的传递、工作流的运行以及工作流结果的查看。

希望您对BioOS有了一个初步的了解，并能够利用BioOS完成更多的分析任务。
