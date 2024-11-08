---
title: 人工智能协助代码开发
createTime: 2024/11/07 14:45:46
permalink: /04_codeStyle/meandAI/
---

## 快速实现

- **1. 复制对GPT输入代码风格化的要求**

- **--->>> 2. 编写包含你所有的要求和想法的伪代码**

- **--------->>> 3. 拆分伪代码，分模块实现**

### 完整示例
[点击看chatgpt o1-mini模型的开发示例](https://chatgpt.com/share/66e56444-484d-484d-984d-484d484d484d)


## 引言

> 本文通过几个例子展示了用GPT敲代码的几个模式，您需要确保您的键盘具有Ctrl键、C键、V键。

> 受文本长度限制，本文尽量不对任何内容的驱动原理做出解释。

#### 读者应该明确
> [!note]
> 1. **工程控制论正在推动电子计算机技术革命的深入。这样一个现实已经来到了人类面前: 由电子计算机和机器智能装备起来的人,已经成为更有作为、更高超的人!    ———钱学森 《工程控制论·序言》**
> 2. **君子不器。    ———孔子《论语·为政篇》**
> 3. **[“值得怀疑的是，一切已有的机械发明，是否减轻了任何人每天的辛劳。”](https://www.marxists.org/chinese/marx-engels-2/44/019.htm)    ———约翰·斯图亚特·穆勒《政治经济学原理》**

::: important 重要
AI放大了人类的能力边界，但社会生活的主体依然是自然人。
:::

## 第一部分：对GPT输入代码风格化的要求

> 跟我复制

> 如果你有一些类似于“整洁代码”的偏好，或者你有明确的编程习惯，请在进行代码产出时，明确告诉GPT，如同下面的文本所示。

```txt :collapsed-lines=8
You are an advanced AI model designed to solve complex programming challenges by applying a combination of sophisticated reasoning techniques. To ensure your code outputs are technically precise, secure, efficient, and well-documented, follow these structured instructions:

Break Down the Coding Task:

Begin by applying Chain of Thought (CoT) reasoning to decompose the programming task into logical, manageable components. Clearly articulate each step in the coding process, whether it's designing an algorithm, structuring code, or implementing specific functions. Outline the dependencies between components, ensuring that the overall system design is coherent and modular. Verify the correctness of each step before proceeding, ensuring that your code is logically sound and modular.

Rationalize Each Coding Decision:

As you develop the code, use Step-by-Step Rationalization (STaR) to provide clear, logical justifications for every decision made during the coding process. Consider and document alternative design choices, explaining why the chosen approach is preferred based on criteria such as performance, scalability, and maintainability. Ensure that each line of code has a clear purpose and is well-commented for maintainability.

Optimize Code for Efficiency and Reliability:

Incorporate A Search principles* to evaluate and optimize the efficiency of your code. Select the most direct and cost-effective algorithms and data structures, considering time complexity, space complexity, and resource management. Develop and run test cases, including edge cases, to ensure code efficiency and reliability. Profile the code to identify and optimize any performance bottlenecks.

Consider and Evaluate Multiple Code Solutions:

Leverage Tree of Thoughts (ToT) to explore different coding approaches and solutions in parallel. Evaluate each potential solution using A Search principles*, prioritizing those that offer the best balance between performance, readability, and maintainability. Document why less favorable solutions were rejected, providing transparency and aiding future code reviews.

Simulate Adaptive Learning in Coding:

Reflect on your coding decisions throughout the session as if you were learning from each outcome. Apply Q-Learning principles to prioritize coding strategies that lead to robust and optimized code. At the conclusion of each coding task, summarize key takeaways and areas for improvement to guide future development.

Continuously Monitor and Refine Your Coding Process:

Engage in Process Monitoring to continuously assess the progress of your coding task. Periodically review the codebase for technical debt and refactoring opportunities, ensuring long-term maintainability and code quality. Ensure that each segment of the code aligns with the overall project goals and requirements. Use real-time feedback to refine your coding approach, making necessary adjustments to maintain the quality and effectiveness of the code throughout the development process.

Incorporate Security Best Practices:

Apply security best practices, including input validation, encryption, and secure coding techniques, to safeguard against vulnerabilities. Ensure that the code is robust against common security threats.

Highlight Code Readability:

Prioritize code readability by using clear variable names, consistent formatting, and logical organization. Ensure that the code is easy to understand and maintain, facilitating future development and collaboration.

Include Collaboration Considerations:

Consider how the code will be used and understood by other developers. Write comprehensive documentation and follow team coding standards to facilitate collaboration and ensure that the codebase remains accessible and maintainable for all contributors.

Final Instruction:

By following these instructions, you will ensure that your coding approach is methodical, well-reasoned, and optimized for technical precision and efficiency. Your goal is to deliver the most logical, secure, efficient, and well-documented code possible by fully integrating these advanced reasoning techniques into your programming workflow. 
```

## 第二部分：把你的想法转换为伪代码或类似的逻辑描述

### 📏范式

常见的范式有：
- ==命令式编程（Imperative Programming）==
        程序由一系列的命令或语句组成，计算机按照这些命令执行操作。这是最早也是最基本的编程范式。典型代表：C 和 Java
 - ==声明式编程（Declarative Programming）==：程序员只需要描述他们想要的结果，而不需要详细说明如何达到这个结果。典型代表：SQL 和 HTML 
 - ==面向对象编程（Object-Oriented Programming）==：程序被组织成对象，每个对象都包含数据和操作数据的方法。面向对象编程强调的是数据抽象和封装，以及对象之间的交互。典型代表：Java 和 Python

### 为什么需要伪代码？

回想一下🤔，当我们和GPT之类的产品进行交互时，我们的交互方式大致上有两类：
举个例子，当我需要让GPT帮我写一个算法时，我可能会：
#### 第一种交互方式
> “我需要你写一段代码，这段代码第一行是`def`，然后是函数名，然后是3个参数，然后是四行函数体。函数体中需要有`return`。它第一行是……最后一行是……。”

这是一种典型的命令式交互，非常好使。

#### 第二种交互方式
> “直接说，我需要一个算法，这个算法需要满足以下要求：……”

这是一种典型的声明式交互，主要关注结果的描述和需求，而不需要详细说明如何达到这个结果。

::: warning 警告

声明式交互在代码实现上具有更大的风险，尤其是==你缺乏对代码的深入理解时==，比如李逵和李鬼:

![Alt text](http://k.sinaimg.cn/n/sinacn/w500h229/20180102/7226-fyqefvx1303978.jpg/w700d1q75cms.jpg?by=cms_fixed_width)
:::

::: important 重要

- 这里最**核心的逻辑**是，你和GPT之间的信息越一致，那么你得到的代码就越符合你的预期。

- 正是基于这个逻辑，我们才需要在第二步进行==伪代码交互==。

:::

#### 伪代码的交互

我提供一个比较极端的例子，假设你想要一个按照一定规则拆分矩阵的代码，并把结果存在你的类中，你和GPT的交互的伪代码如下：

```python
定义函数 ():

    寻找矩阵的因数(n):
        对于 i 从 4 到 n（包含 n）：
            如果 n 能被 i 整除：
                返回 i
        返回 n  # 如果没有找到因数，返回 n 本身

    获取矩阵的行数和列数:
        rows, cols = 矩阵的形状

    找到大于 3 的最小因数:
        row_factor = smallest_factor_greater_than_three(rows)
        col_factor = smallest_factor_greater_than_three(cols)

    # 第一拆分方法：按因数拆分行和列
    将矩阵按行拆分为多个子矩阵:
        row_split = 按 row_factor 将矩阵垂直拆分
    将每个子矩阵按列拆分为更小的矩阵:
        small_matrices = 对于每个 sub_matrix 在 row_split 中，按 col_factor 水平拆分

    # 第二拆分方法：取相邻列的接缝区域
    初始化 seam_matrices_cols 为一个空列表
    对于 每个 row_matrices 在 small_matrices 中（按行遍历）：
        初始化 row_seams 为一个空列表
        对于 j 从 0 到 (小矩阵数量 - 2)：
            获取当前小矩阵的最后一列和下一个小矩阵的第一列
            seam_matrix = 合并 当前小矩阵的最后一列 和 下一个小矩阵的第一列（按列合并）
            将 seam_matrix 添加到 row_seams 中
        将 row_seams 添加到 seam_matrices_cols 中

    # 第三拆分方法：取相邻行的小矩阵进行垂直拼接
    初始化 seam_matrices_rows 为一个空列表
    对于 i 从 0 到 (行的小矩阵数量 - 2)：
        初始化 row_seams 为一个空列表
        对于 j 从 0 到 (列的小矩阵数量 - 1)：
            获取当前行的小矩阵和下一行的小矩阵
            top_matrix = 当前行的小矩阵[j]
            bottom_matrix = 下一行的小矩阵[j]
            拼接 top_matrix 的最后一行和 bottom_matrix 的第一行
            seam_matrix = 合并 top_matrix 的最后一行 和 bottom_matrix 的第一行（按行合并）
            将 seam_matrix 添加到 row_seams 中
        将 row_seams 添加到 seam_matrices_rows 中

    # 将拆分结果存储到对象属性中
    self.small_matrices = small_matrices
    self.seam_matrices_cols = seam_matrices_cols
    self.seam_matrices_rows = seam_matrices_rows
```

::: tip 提示
### 🙋好，那么好，这时候聪明的你就要问了：
> # “我都写到这种程度了，为什么我不亲自写一遍？好像工作量是差不多的。”

:::

根据我的观察，如果你写了伪代码，在GPT的帮助下，它既可以是python也可以是C++，甚至可以是Java。它既可以是面向对象的，也可以是函数式的。==你可以把更多的时间花在思考上，而不是写代码上。== 算法上的革新带来的进步，远比你写代码tricks带来的进步要大。

再者，正如笑容不会消失，笑容只会从一个人的脸上转移到另一个人的脸上。复杂性也是一样的，复杂性不会消失，复杂性只会从这里转移到那里。在这里，我们可以尝试把复杂性转移到机器上。很多优秀的工程师都有这样的习惯，把代码写的像诗一样的优雅，充满了各种隐喻、抽象。也正是这个原因，维护自然语言的伪代码的复杂性，远比你维护代码的复杂性要低。

## 第三部分：怎么让GPT整点复杂的东西？

::: tip 提示
诚然，大语言模型的技术一直在进步，但是，受限于其上下文能力，基于效率上的考虑，我们应该尝试把真实的工程进行模块化、结构化。
:::

### 这一点和完成一个大型工程一摸一样

> GPT先天的适合增量更新的模式，为了春分利用这一点，需要作为“架构师”的你首先对你的工程进行定义。

::: tip 提示
确保模块间的解耦，有些时候你会想用不同的大模型来完成不同的模块。
:::

> 你可以参考下面的步骤来定义你的模块。

### **3.1 定义互相解耦的模块**
1. **模块划分原则**
   - 高内聚低耦合
   - 明确的接口和责任
2. **识别关键功能模块**
   - 功能分解的方法
   - 示例：将一个Web应用划分为前端、后端、数据库等模块
3. **接口设计**
   - 模块间通信的标准
   - 使用API和协议确保模块独立性

### **3.2 模块化的实施步骤**
1. **需求分析与功能分解**
   - 收集和分析项目需求
   - 将需求转化为功能模块
2. **模块设计与规划**
   - 为每个模块制定详细设计
   - 确定模块之间的依赖关系
3. **逐个模块的开发与测试**
   - 按照规划顺序开发模块
   - 独立测试每个模块的功能和性能
4. **集成与系统测试**
   - 将各模块集成到整体系统中
   - 进行系统级别的测试和优化

### **3.3 利用GPT进行模块化开发**

#### 1. 分块粘贴伪代码

## 作为结论

### 实践：让我们在这里引入一个具体的例子

::: tip 提示
我利用刚刚例子中的伪代码和拆分模块的思想制作了promote，你可以在这里看到完整的上下文信息。
> 我创建了chatGPT（o1-mini模型）[分享链接](https://chatgpt.com/share/66e56444-484d-484d-984d-484d484d484d)，点击链接，你可以在这里看到一个完整的例子。
:::

::: important 重要

### 我们实际上做了什么？

- **1. 复制对GPT输入代码风格化的要求**

- **--->>> 2. 编写包含你所有的要求和想法的伪代码**

- **--------->>> 3. 拆分伪代码，分模块实现**

:::

> ==具体的==（注意代码块右侧的复制按钮）：
::: tabs

@tab 1/5 复制

==这里同上==
```txt :collapsed-lines=8
You are an advanced AI model designed to solve complex programming challenges by applying a combination of sophisticated reasoning techniques. To ensure your code outputs are technically precise, secure, efficient, and well-documented, follow these structured instructions:

Break Down the Coding Task:

Begin by applying Chain of Thought (CoT) reasoning to decompose the programming task into logical, manageable components. Clearly articulate each step in the coding process, whether it's designing an algorithm, structuring code, or implementing specific functions. Outline the dependencies between components, ensuring that the overall system design is coherent and modular. Verify the correctness of each step before proceeding, ensuring that your code is logically sound and modular.

Rationalize Each Coding Decision:

As you develop the code, use Step-by-Step Rationalization (STaR) to provide clear, logical justifications for every decision made during the coding process. Consider and document alternative design choices, explaining why the chosen approach is preferred based on criteria such as performance, scalability, and maintainability. Ensure that each line of code has a clear purpose and is well-commented for maintainability.

Optimize Code for Efficiency and Reliability:

Incorporate A Search principles* to evaluate and optimize the efficiency of your code. Select the most direct and cost-effective algorithms and data structures, considering time complexity, space complexity, and resource management. Develop and run test cases, including edge cases, to ensure code efficiency and reliability. Profile the code to identify and optimize any performance bottlenecks.

Consider and Evaluate Multiple Code Solutions:

Leverage Tree of Thoughts (ToT) to explore different coding approaches and solutions in parallel. Evaluate each potential solution using A Search principles*, prioritizing those that offer the best balance between performance, readability, and maintainability. Document why less favorable solutions were rejected, providing transparency and aiding future code reviews.

Simulate Adaptive Learning in Coding:

Reflect on your coding decisions throughout the session as if you were learning from each outcome. Apply Q-Learning principles to prioritize coding strategies that lead to robust and optimized code. At the conclusion of each coding task, summarize key takeaways and areas for improvement to guide future development.

Continuously Monitor and Refine Your Coding Process:

Engage in Process Monitoring to continuously assess the progress of your coding task. Periodically review the codebase for technical debt and refactoring opportunities, ensuring long-term maintainability and code quality. Ensure that each segment of the code aligns with the overall project goals and requirements. Use real-time feedback to refine your coding approach, making necessary adjustments to maintain the quality and effectiveness of the code throughout the development process.

Incorporate Security Best Practices:

Apply security best practices, including input validation, encryption, and secure coding techniques, to safeguard against vulnerabilities. Ensure that the code is robust against common security threats.

Highlight Code Readability:

Prioritize code readability by using clear variable names, consistent formatting, and logical organization. Ensure that the code is easy to understand and maintain, facilitating future development and collaboration.

Include Collaboration Considerations:

Consider how the code will be used and understood by other developers. Write comprehensive documentation and follow team coding standards to facilitate collaboration and ensure that the codebase remains accessible and maintainable for all contributors.

Final Instruction:

By following these instructions, you will ensure that your coding approach is methodical, well-reasoned, and optimized for technical precision and efficiency. Your goal is to deliver the most logical, secure, efficient, and well-documented code possible by fully integrating these advanced reasoning techniques into your programming workflow. 
```

@tab 2/5 编写伪代码

==这里同上==

```python :collapsed-lines=10
定义函数 ():

    寻找矩阵的因数(n):
        对于 i 从 4 到 n（包含 n）：
            如果 n 能被 i 整除：
                返回 i
        返回 n  # 如果没有找到因数，返回 n 本身

    获取矩阵的行数和列数:
        rows, cols = 矩阵的形状

    找到大于 3 的最小因数:
        row_factor = smallest_factor_greater_than_three(rows)
        col_factor = smallest_factor_greater_than_three(cols)

    # 第一拆分方法：按因数拆分行和列
    将矩阵按行拆分为多个子矩阵:
        row_split = 按 row_factor 将矩阵垂直拆分
    将每个子矩阵按列拆分为更小的矩阵:
        small_matrices = 对于每个 sub_matrix 在 row_split 中，按 col_factor 水平拆分

    # 第二拆分方法：取相邻列的接缝区域
    初始化 seam_matrices_cols 为一个空列表
    对于 每个 row_matrices 在 small_matrices 中（按行遍历）：
        初始化 row_seams 为一个空列表
        对于 j 从 0 到 (小矩阵数量 - 2)：
            获取当前小矩阵的最后一列和下一个小矩阵的第一列
            seam_matrix = 合并 当前小矩阵的最后一列 和 下一个小矩阵的第一列（按列合并）
            将 seam_matrix 添加到 row_seams 中
        将 row_seams 添加到 seam_matrices_cols 中

    # 第三拆分方法：取相邻行的小矩阵进行垂直拼接
    初始化 seam_matrices_rows 为一个空列表
    对于 i 从 0 到 (行的小矩阵数量 - 2)：
        初始化 row_seams 为一个空列表
        对于 j 从 0 到 (列的小矩阵数量 - 1)：
            获取当前行的小矩阵和下一行的小矩阵
            top_matrix = 当前行的小矩阵[j]
            bottom_matrix = 下一行的小矩阵[j]
            拼接 top_matrix 的最后一行和 bottom_matrix 的第一行
            seam_matrix = 合并 top_matrix 的最后一行 和 bottom_matrix 的第一行（按行合并）
            将 seam_matrix 添加到 row_seams 中
        将 row_seams 添加到 seam_matrices_rows 中

    # 将拆分结果存储到对象属性中
    self.small_matrices = small_matrices
    self.seam_matrices_cols = seam_matrices_cols
    self.seam_matrices_rows = seam_matrices_rows”。  最终的交付形式为可以独立运行的python脚本，捕获用户输入的两个数字作为矩阵的尺寸。
```

@tab:active 3/5 先主体

==这里我们分块实现==

#### **主体部分**

我构思了一个矩阵拆分的算法，我定义我的模块有：0 验证用户的输入是否合适我们的拆分方法：如是否可以进行因式分解；1 生成矩阵；2 对矩阵进行拆分；3 把拆分后的矩阵和原有的矩阵在一张图片上叠加显示，着重显示拆分矩阵的边界。注意：技术选型为python3。我定义了第2部分的伪代码，代码如下“

```python :collapsed-lines=5
定义函数 ():

    寻找矩阵的因数(n):
        对于 i 从 4 到 n（包含 n）：
            如果 n 能被 i 整除：
                返回 i
        返回 n  # 如果没有找到因数，返回 n 本身

    获取矩阵的行数和列数:
        rows, cols = 矩阵的形状

    找到大于 3 的最小因数:
        row_factor = smallest_factor_greater_than_three(rows)
        col_factor = smallest_factor_greater_than_three(cols)

    # 第一拆分方法：按因数拆分行和列
    将矩阵按行拆分为多个子矩阵:
        row_split = 按 row_factor 将矩阵垂直拆分
    将每个子矩阵按列拆分为更小的矩阵:
        small_matrices = 对于每个 sub_matrix 在 row_split 中，按 col_factor 水平拆分

    # 第二拆分方法：取相邻列的接缝区域
    初始化 seam_matrices_cols 为一个空列表
    对于 每个 row_matrices 在 small_matrices 中（按行遍历）：
        初始化 row_seams 为一个空列表
        对于 j 从 0 到 (小矩阵数量 - 2)：
            获取当前小矩阵的最后一列和下一个小矩阵的第一列
            seam_matrix = 合并 当前小矩阵的最后一列 和 下一个小矩阵的第一列（按列合并）
            将 seam_matrix 添加到 row_seams 中
        将 row_seams 添加到 seam_matrices_cols 中

    # 第三拆分方法：取相邻行的小矩阵进行垂直拼接
    初始化 seam_matrices_rows 为一个空列表
    对于 i 从 0 到 (行的小矩阵数量 - 2)：
        初始化 row_seams 为一个空列表
        对于 j 从 0 到 (列的小矩阵数量 - 1)：
            获取当前行的小矩阵和下一行的小矩阵
            top_matrix = 当前行的小矩阵[j]
            bottom_matrix = 下一行的小矩阵[j]
            拼接 top_matrix 的最后一行和 bottom_matrix 的第一行
            seam_matrix = 合并 top_matrix 的最后一行 和 bottom_matrix 的第一行（按行合并）
            将 seam_matrix 添加到 row_seams 中
        将 row_seams 添加到 seam_matrices_rows 中

    # 将拆分结果存储到对象属性中
    self.small_matrices = small_matrices
    self.seam_matrices_cols = seam_matrices_cols
    self.seam_matrices_rows = seam_matrices_rows
```
”。最终的交付形式为可以独立运行的python脚本，捕获用户输入的两个数字作为矩阵的尺寸。

@tab:active 4/5 进一步进行限定
#### **模块1**

这里上面的提示词有些问题，我没有严格的定义可视化的方式，于是出现了问题。我对可视化的部分做出限定，我希望得到一张png图像，用填写数字的表格代表矩阵，表格使用黑色实线，表格中的每个小格子都是正方形。矩阵被切分的接缝处使用红色粗实线进行区分。

#### **debug**

我在运行这段代码的时候遇到了问题，详细的上下文信息是“ 
```shell
% python test.py
```

```python :collapsed-lines=5
Matrix Splitting Algorithm with Enhanced Visualization
------------------------------------------------------
Enter the number of rows and columns (e.g., '8 12'): 80 12
Generated matrix of size 80x12.
Row factor: 4, Column factor: 4
Matrix split into 20 row-wise submatrices.
Total small matrices after horizontal split: 60
Generated seam matrices for columns: 20 sets.
Traceback (most recent call last):
  File "/Users/hughes/docs/test.py", line 195, in <module>
    main()
  File "/Users/hughes/docs/test.py", line 191, in main
    splitter.split_matrix()
  File "/Users/hughes/docs/test.py", line 99, in split_matrix
    seam_matrix = np.vstack((top_matrix[-1, :].reshape(1, -1), bottom_matrix[0, :].reshape(1, -1)))
                             ~~~~~~~~~~^^^^^^^
IndexError: index -1 is out of bounds for axis 0 with size 0”
``` 

@tab:active 5/5 插入功能点

#### **模块2**

非常好👍，下面我们再对可视化的部分进行功能点的新增，刚刚我们的代码实现了对于按列拆分时的可视化，我们在最终的图像上增加按行拆分矩阵时的线，用绿色的粗实线来表示。在绘图的部分外部套一个tqdm的进度展示，便于在终端中查阅进度。

#### **最终结果**

```python :collapsed-lines=10
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Matrix Splitting Algorithm with Enhanced Visualization

This script captures user input for matrix dimensions, validates the input,
generates a matrix, splits it based on factorization, and visualizes the
original and split matrices with clearly defined grid lines and highlighted
split boundaries. The final visualization is saved as a PNG image.

Enhancements:
1. Added green thick lines to represent row splits.
2. Incorporated tqdm progress bars to monitor plotting progress.

Author: OpenAI ChatGPT
Date: 2024-11-08
"""

import sys
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from tqdm import tqdm  # Import tqdm for progress bars

class MatrixSplitter:
    def __init__(self, rows, cols):
        """
        Initializes the MatrixSplitter with the specified number of rows and columns.

        Parameters:
            rows (int): Number of rows in the matrix.
            cols (int): Number of columns in the matrix.
        """
        self.rows = rows
        self.cols = cols
        self.matrix = None
        self.small_matrices = []  # 2D list: small_matrices[i][j]
        self.seam_matrices_cols = []
        self.seam_matrices_rows = []

    def smallest_factor_greater_than_three(self, n):
        """
        Finds the smallest factor of n that is greater than three.

        Parameters:
            n (int): The number to find a factor for.

        Returns:
            int: The smallest factor greater than three, or n if no such factor exists.
        """
        for i in range(4, n + 1):
            if n % i == 0:
                return i
        return n

    def generate_matrix(self):
        """
        Generates a matrix with random integers between 0 and 99.
        """
        self.matrix = np.random.randint(0, 100, size=(self.rows, self.cols))
        print(f"Generated matrix of size {self.rows}x{self.cols}.")

    def split_matrix(self):
        """
        Splits the matrix into smaller matrices based on factorization.
        """
        # Find factors
        row_factor = self.smallest_factor_greater_than_three(self.rows)
        col_factor = self.smallest_factor_greater_than_three(self.cols)
        print(f"Row factor: {row_factor}, Column factor: {col_factor}")

        # Calculate number of splits
        num_row_splits = self.rows // row_factor
        num_col_splits = self.cols // col_factor

        # First split: Vertical (rows)
        row_split = np.array_split(self.matrix, num_row_splits, axis=0)
        print(f"Matrix split into {len(row_split)} row-wise submatrices.")

        # Further split: Horizontal (columns)
        # Convert small_matrices to a 2D list
        for sub_matrix in row_split:
            cols_split = np.array_split(sub_matrix, num_col_splits, axis=1)
            self.small_matrices.append(cols_split)
        total_small_matrices = len(self.small_matrices) * num_col_splits
        print(f"Total small matrices after horizontal split: {total_small_matrices}")

        # Second split: Seam matrices for columns
        for sub_matrix in row_split:
            row_seams = []
            for j in range(num_col_splits - 1):
                last_col = sub_matrix[:, (j + 1) * col_factor - 1].reshape(-1, 1)
                next_col = sub_matrix[:, (j + 1) * col_factor].reshape(-1, 1)
                seam_matrix = np.hstack((last_col, next_col))
                row_seams.append(seam_matrix)
            self.seam_matrices_cols.append(row_seams)
        print(f"Generated seam matrices for columns: {len(self.seam_matrices_cols)} sets.")

        # Third split: Seam matrices for rows
        for i in range(num_row_splits - 1):
            row_seams = []
            for j in range(num_col_splits):
                # Access small_matrices as a 2D list
                top_matrix = self.small_matrices[i][j]
                bottom_matrix = self.small_matrices[i + 1][j]
                # Get the last row of top_matrix and first row of bottom_matrix
                top_last_row = top_matrix[-1, :].reshape(1, -1)
                bottom_first_row = bottom_matrix[0, :].reshape(1, -1)
                seam_matrix = np.vstack((top_last_row, bottom_first_row))
                row_seams.append(seam_matrix)
            self.seam_matrices_rows.append(row_seams)
        print(f"Generated seam matrices for rows: {len(self.seam_matrices_rows)} sets.")

    def visualize_splits(self, output_filename="matrix_split.png"):
        """
        Visualizes the original and split matrices as a numbered grid with black grid lines,
        red thick lines for column splits, and green thick lines for row splits.
        The visualization is saved as a PNG image.

        Parameters:
            output_filename (str): The filename for the saved PNG image.
        """
        fig, ax = plt.subplots(figsize=(self.cols, self.rows))
        ax.set_xlim(0, self.cols)
        ax.set_ylim(0, self.rows)
        ax.set_xticks(np.arange(0, self.cols + 1, 1))
        ax.set_yticks(np.arange(0, self.rows + 1, 1))
        ax.set_xticklabels([])
        ax.set_yticklabels([])
        ax.grid(which='both', color='black', linewidth=1)

        # Invert y-axis to have the first row at the top
        ax.invert_yaxis()

        # Add numbers to each cell with a progress bar
        total_cells = self.rows * self.cols
        with tqdm(total=total_cells, desc="Plotting cells", unit="cell") as pbar:
            for i in range(self.rows):
                for j in range(self.cols):
                    cell_value = self.matrix[i, j]
                    ax.text(j + 0.5, i + 0.5, str(cell_value),
                            va='center', ha='center', fontsize=8)
                    pbar.update(1)

        # Highlight split boundaries with red thick lines (columns) and green thick lines (rows)
        row_factor = self.smallest_factor_greater_than_three(self.rows)
        col_factor = self.smallest_factor_greater_than_three(self.cols)

        # Horizontal split lines (rows) - Green
        with tqdm(total=self.rows // row_factor - 1, desc="Drawing row splits", unit="split") as pbar:
            for i in range(1, self.rows // row_factor):
                ax.axhline(i * row_factor, color='green', linewidth=2)
                pbar.update(1)

        # Vertical split lines (columns) - Red
        with tqdm(total=self.cols // col_factor - 1, desc="Drawing column splits", unit="split") as pbar:
            for j in range(1, self.cols // col_factor):
                ax.axvline(j * col_factor, color='red', linewidth=2)
                pbar.update(1)

        # Remove whitespace and axes
        plt.axis('off')
        plt.tight_layout()

        # Save the figure
        plt.savefig(output_filename, dpi=300, bbox_inches='tight')
        plt.close()
        print(f"Visualization saved as '{output_filename}'.")

def validate_input(input_str):
    """
    Validates that the input string contains two integers greater than or equal to 4.

    Parameters:
        input_str (str): The input string containing two numbers.

    Returns:
        tuple: A tuple containing two integers (rows, cols).

    Raises:
        ValueError: If input is invalid.
    """
    try:
        parts = input_str.strip().split()
        if len(parts) != 2:
            raise ValueError("Please enter exactly two numbers separated by space.")
        rows, cols = map(int, parts)
        if rows < 4 or cols < 4:
            raise ValueError("Both dimensions must be at least 4.")
        return rows, cols
    except Exception as e:
        raise ValueError(f"Invalid input: {e}")

def main():
    """
    Main function to execute the matrix splitting algorithm.
    """
    print("Matrix Splitting Algorithm with Enhanced Visualization")
    print("------------------------------------------------------")
    try:
        user_input = input("Enter the number of rows and columns (e.g., '8 12'): ")
        rows, cols = validate_input(user_input)
    except ValueError as ve:
        print(ve)
        sys.exit(1)

    splitter = MatrixSplitter(rows, cols)
    splitter.generate_matrix()
    splitter.split_matrix()
    splitter.visualize_splits()

if __name__ == "__main__":
    main()
```

:::

#### 代码的运行效果

> 仔细看看下面的代码，这就是你加上o1-mini的能力

<iframe
  src="https://static.marimo.app/static/meandai-bphn"
  width="100%"
  height="600"
  frameborder="0"
></iframe>



## 结语

> 我必须在这里重申 ==“AI放大了人类的能力边界”==，代码的最终结果极大的取决于 ==“人的思考”== 的质量。

在这里，我推荐书籍《人月神话》[wiki](https://zh.wikipedia.org/wiki/人月神话)，虽然此书是写于1975年，但数十年来多次重印。书中对软件工程的思考，对软件开发中人的因素的思考，非常值得阅读。

over
