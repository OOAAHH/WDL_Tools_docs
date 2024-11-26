<template><div><h2 id="👏欢迎来到riboc🆅" tabindex="-1"><a class="header-anchor" href="#👏欢迎来到riboc🆅"><span>👏<strong>欢迎来到Ribo🄲🆅</strong></span></a></h2>
<hr>
<blockquote>
<p><mark>RiboCV</mark>是一个文档网站，在这里我们将展示如何使用BioOS上的计算资源。</p>
</blockquote>
<blockquote>
<p>我们假设我们的用户唯一需要的前置知识是如何在计算机上熟练的使用浏览器、复制粘贴、点击鼠标。</p>
</blockquote>
<h3 id="写在开头" tabindex="-1"><a class="header-anchor" href="#写在开头"><span>写在开头</span></a></h3>
<p>本文的目的在于让您快速对BioOS上的计算资源有初步的了解，并进行一些简单的操作。BioOS支持多种操作方式，包括网页、命令行、API等。本文将介绍如何通过<mark>网页</mark>操作BioOS。</p>
<blockquote>
<p>命令行、API等工具的文档在<a href="https://cloud.miracle.ac.cn/docs" target="_blank" rel="noopener noreferrer">这里</a>，你可能需要内网环境。</p>
</blockquote>
<h3 id="您需要准备" tabindex="-1"><a class="header-anchor" href="#您需要准备"><span>您需要准备</span></a></h3>
<ul>
<li>一个BioOS账号</li>
<li>一个BioOS Workspace</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<Tabs id="41" :data='[{"id":"账号在哪？"},{"id":"Workspace是什么？"}]'>
<template #title0="{ value, isActive }">账号在哪？</template><template #title1="{ value, isActive }">Workspace是什么？</template><template #tab0="{ value, isActive }"><p>看看您的邮箱，或者联系管理员。</p>
</template><template #tab1="{ value, isActive }"><p>Workspace是BioOS中的重要概念，是你的代码和数据存储的抽象概念，就像是一个文件夹。您在首次登录自己的账户时，您可以在系统引导下创建一个Workspace。</p>
</template></Tabs></div>
<h3 id="主要内容" tabindex="-1"><a class="header-anchor" href="#主要内容"><span>主要内容</span></a></h3>
<p>通过本文，您将学会如何完成一个简单的计算任务，包括以下几个方面：</p>
<p>⚙️ <strong>向BioOS中导入工作流文件</strong></p>
<p>🔍 <strong>认识BioOS中存储数据的方式</strong></p>
<p>🔗 <strong>利用json传递计算参数</strong></p>
<p>🚀 <strong>运行工作流并查看运行结果</strong></p>
<h2 id="让我们开始吧-🕺💃" tabindex="-1"><a class="header-anchor" href="#让我们开始吧-🕺💃"><span>让我们开始吧！🕺💃</span></a></h2>
<h3 id="⚙️-向bioos中导入工作流文件" tabindex="-1"><a class="header-anchor" href="#⚙️-向bioos中导入工作流文件"><span>⚙️ 向BioOS中导入工作流文件</span></a></h3>
<blockquote>
<p>这里已经准备好了一个<mark>工作流文件</mark>，您可以将其导入到BioOS中。</p>
</blockquote>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>example.wdl</p></h4>
  </div>
  <div class="demo-container" >
<div class="language-python line-numbers-mode has-collapsed collapsed" data-ext="python" data-title="python" style="--vp-collapsed-lines:8;"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes light-plus aurora-x vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">version </span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">1.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">task rename_fastq_files_based_on_size </span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">{</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#82AAFF">  input</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF"> {</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    Array</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">File</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">]</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> fastq_file_paths</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    String sample_name</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    String disk_space = </span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">150 GB</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    Int cpu = </span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">1</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">  command </span><span style="--shiki-light:#000000;--shiki-dark:#C792EA">&#x3C;&#x3C;&#x3C;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    python3 </span><span style="--shiki-light:#000000;--shiki-dark:#C792EA">&#x3C;&#x3C;</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">CODE</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#89DDFF">    import</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> os</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#89DDFF">    import</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> shutil</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # Convert file paths from WDL array to Python list</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    files = </span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">~{sep='</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF"> "</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">' fastq_file_paths}</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">]</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    sample_name = </span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">~</span><span style="--shiki-light:#0000FF;--shiki-dark:#F78C6C">{sample_name}</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # Calculate file sizes and sort them</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    file_sizes = </span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[(</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">f</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> os</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">.</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">path</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">.</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">getsize</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">f</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">))</span><span style="--shiki-light:#AF00DB;--shiki-dark:#89DDFF"> for</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> f </span><span style="--shiki-light:#AF00DB;--shiki-dark:#89DDFF">in</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> files</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">]</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    file_sizes</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">.</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">sort</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#001080;--shiki-dark:#F78C6C">key</span><span style="--shiki-light:#000000;--shiki-dark:#C792EA">=</span><span style="--shiki-light:#0000FF;--shiki-dark:#C792EA">lambda</span><span style="--shiki-light:#001080;--shiki-dark:#F78C6C"> x</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF"> x</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">1</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # Initialize variables to hold file paths</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    i1_file</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> r1_file</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> r2_file = </span><span style="--shiki-light:#0000FF;--shiki-dark:#F78C6C">None</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span><span style="--shiki-light:#0000FF;--shiki-dark:#F78C6C"> None</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span><span style="--shiki-light:#0000FF;--shiki-dark:#F78C6C"> None</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # Determine the number of files and assign accordingly</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#89DDFF">    if</span><span style="--shiki-light:#795E26;--shiki-dark:#82AAFF"> len</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">files</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">)</span><span style="--shiki-light:#000000;--shiki-dark:#C792EA"> ==</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C"> 2</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">        r1_file</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> r2_file = file_sizes</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">0</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">][</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">0</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">],</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> file_sizes</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">1</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">][</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">0</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">]</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#89DDFF">    elif</span><span style="--shiki-light:#795E26;--shiki-dark:#82AAFF"> len</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">files</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">)</span><span style="--shiki-light:#000000;--shiki-dark:#C792EA"> ==</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C"> 3</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">        i1_file</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> r1_file</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> r2_file = file_sizes</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">0</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">][</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">0</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">],</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> file_sizes</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">1</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">][</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">0</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">],</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> file_sizes</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">2</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">][</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">0</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # Define new filenames</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    i1_new_filename = </span><span style="--shiki-light:#0000FF;--shiki-dark:#C792EA">f</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">"</span><span style="--shiki-light:#0000FF;--shiki-dark:#F78C6C">{</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">sample_name</span><span style="--shiki-light:#0000FF;--shiki-dark:#F78C6C">}</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">_S1_L001_I1_001.fastq.gz"</span><span style="--shiki-light:#AF00DB;--shiki-dark:#89DDFF"> if</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> i1_file </span><span style="--shiki-light:#AF00DB;--shiki-dark:#89DDFF">else</span><span style="--shiki-light:#0000FF;--shiki-dark:#F78C6C"> None</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    r1_new_filename = </span><span style="--shiki-light:#0000FF;--shiki-dark:#C792EA">f</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">"</span><span style="--shiki-light:#0000FF;--shiki-dark:#F78C6C">{</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">sample_name</span><span style="--shiki-light:#0000FF;--shiki-dark:#F78C6C">}</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">_S1_L001_R1_001.fastq.gz"</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    r2_new_filename = </span><span style="--shiki-light:#0000FF;--shiki-dark:#C792EA">f</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">"</span><span style="--shiki-light:#0000FF;--shiki-dark:#F78C6C">{</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">sample_name</span><span style="--shiki-light:#0000FF;--shiki-dark:#F78C6C">}</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">_S1_L001_R2_001.fastq.gz"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # Copy and rename files</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#89DDFF">    if</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> i1_file</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">        shutil</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">.</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">copy2</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">i1_file</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF"> i1_new_filename</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    shutil</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">.</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">copy2</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">r1_file</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF"> r1_new_filename</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    shutil</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">.</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">copy2</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">r2_file</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF"> r2_new_filename</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # Output new filenames for verification</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#89DDFF">    if</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> i1_new_filename</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#82AAFF">        print</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">i1_new_filename</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">)</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#82AAFF">    print</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">r1_new_filename</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">)</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#82AAFF">    print</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">r2_new_filename</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    CODE</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#C792EA">  >>></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">  output </span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">{</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    Array</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">File</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">]</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> renamed_fastq_files = </span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">glob</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">./*_L001_*_001.fastq.gz</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    String sample_name_out = sample_name</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">  runtime </span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">{</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    docker</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF"> "</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">registry-vpc.miracle.ac.cn/gznl/ooaahhdocker/python_pigz:1.0</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    cpu</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> cpu</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    disk</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> disk_space</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">  }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">workflow example_workflow </span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">{</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#82AAFF">  input</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF"> {</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    Array</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">File</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">]</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> fastq_file_paths</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    String sample_name</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    String disk_space = </span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">150 GB</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    Int cpu = </span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">1</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">  call rename_fastq_files_based_on_size </span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">{</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#82AAFF">    input</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">      fastq_file_paths = fastq_file_paths</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">      sample_name = sample_name</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">      disk_space = disk_space</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">      cpu = cpu</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">  output </span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">{</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    Array</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">File</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">]</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> renamed_files = rename_fastq_files_based_on_size</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">.</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">renamed_fastq_files</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    String sample_name_out = rename_fastq_files_based_on_size</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">.</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">sample_name_out</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">  }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></div></div><p>这个过程如下图所示</p>
<ImageCard
  image="../images/WDLinput.gif"
  title="导入工作流"
  description="跟随“蓝色按钮”的指引，完成工作流的导入。记得为工作流命名，并撰写注释。"
  href="/"
  author="Hughes"
  date="2024/10/30"
/>
<h3 id="🔍-认识bioos中存储数据的方式" tabindex="-1"><a class="header-anchor" href="#🔍-认识bioos中存储数据的方式"><span>🔍 <strong>认识BioOS中存储数据的方式</strong></span></a></h3>
<blockquote>
<p>在BioOS中，数据存储在<mark>桶</mark>中。</p>
</blockquote>
<p>这样有很多好处，比如：
只要你有“钥匙”，即<mark>桶的访问密钥</mark>，你就可以任意访问这和使用个桶中的数据，参阅<a href="https://cloud.miracle.ac.cn/docs/6653/126131" target="_blank" rel="noopener noreferrer">数据管理</a>。</p>
<ul>
<li>数据可以被多个工作流使用</li>
<li>数据可以被多个用户使用</li>
<li>数据可以被重复使用</li>
</ul>
<blockquote>
<p>当然你也可以自己上传数据到桶中。</p>
</blockquote>
<p>在我们的例子中，我们将使用数据模型，并将其挂载到我们的workspace中。</p>
<ImageCard
  image="../images/qu_1.gif"
  title="使用公共数据"
  description="跟随指引（dataset>选择数据集合>按meta信息选择数据集>点击“分析”按钮挂载数据到具体的workspace中），完成数据模型的导入。"
  href="/"
  author="Hughes"
  date="2024/10/30"
/>
<h3 id="🔗-利用json传递计算参数" tabindex="-1"><a class="header-anchor" href="#🔗-利用json传递计算参数"><span>🔗 <strong>利用json传递计算参数</strong></span></a></h3>
<blockquote>
<p>在BioOS中，计算参数通过<mark>json</mark>文件传递。</p>
</blockquote>
<p>我们已经完成了前置工作，现在让我们回到我们的工作流，并为其添加计算参数。</p>
<blockquote>
<p>这里已经准备好了一个<mark>计算参数文件</mark>，您可以将其导入到BioOS中。</p>
</blockquote>
<p>这是我们的计算参数文件：</p>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>example.json</p></h4>
  </div>
  <div class="demo-container" >
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes light-plus aurora-x vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">{</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#89DDFF">  "</span><span style="--shiki-light:#0451A5;--shiki-dark:#C792EA">example_workflow.cpu</span><span style="--shiki-light:#0451A5;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C"> 1</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#89DDFF">  "</span><span style="--shiki-light:#0451A5;--shiki-dark:#C792EA">example_workflow.disk_space</span><span style="--shiki-light:#0451A5;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF"> "</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">150 GB</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#89DDFF">  "</span><span style="--shiki-light:#0451A5;--shiki-dark:#C792EA">example_workflow.fastq_file_paths</span><span style="--shiki-light:#0451A5;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF"> "</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">this.fastqgz</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#89DDFF">  "</span><span style="--shiki-light:#0451A5;--shiki-dark:#C792EA">example_workflow.sample_name</span><span style="--shiki-light:#0451A5;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF"> "</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">this.input-cram</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></div><p>这是我们的输出文件：</p>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>example_output.json</p></h4>
  </div>
  <div class="demo-container" >
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes light-plus aurora-x vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">{</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#89DDFF">    "</span><span style="--shiki-light:#0451A5;--shiki-dark:#C792EA">example_workflow.renamed_files</span><span style="--shiki-light:#0451A5;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF"> "</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">this.fastqgz3</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">,</span></span>
<span class="line"><span style="--shiki-light:#0451A5;--shiki-dark:#89DDFF">    "</span><span style="--shiki-light:#0451A5;--shiki-dark:#C792EA">example_workflow.sample_name_out</span><span style="--shiki-light:#0451A5;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF"> "</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">this.Tpye</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></div><p>这次我们使用的例子是一个简单的计算任务，它将根据文件的大小，重命名文件。在实际使用中，您可以编写更加复杂的工作流。</p>
<ImageCard
  image="../images/qu_2.gif"
  title="添加计算参数"
  description="跟随指引，完成计算参数的添加。"
  href="/"
  author="Hughes"
  date="2024/10/30"
/>
<p>我们完成了工作流和计算参数的准备工作，只需使用this.语法，即可实现对我们当前选中的数据模型的操作。现在让我们运行工作流。</p>
<h3 id="🚀-运行工作流并查看运行结果" tabindex="-1"><a class="header-anchor" href="#🚀-运行工作流并查看运行结果"><span>🚀 <strong>运行工作流并查看运行结果</strong></span></a></h3>
<blockquote>
<p>运行工作流的过程如下图所示：</p>
</blockquote>
<ImageCard
  image="../images/qu_3.gif"
  title="运行工作流"
  description="点击开始运行，完成工作流的投递。在运行过程中，您可以点击“运行日志”查看工作流的运行状态。在运行结束后，您可以点击运行结果“查看”或“下载”访问工作流的输出。"
  href="/"
  author="Hughes"
  date="2024/10/30"
/>
<blockquote>
<p>日志中会显示工作流的运行状态，如果运行失败，您可以根据错误信息进行调整。
尤其是您有了一定的开发经验后，这里显示的日志信息可能对您调整工作流有很大帮助。</p>
</blockquote>
<p>我们推荐您在运行参数里使用this.语法，来引用当前选中的数据模型。这样，您的输出结果将自动和输入数据关联起来，方便您后续的分析。尤其是在您需要多次运行同一工作流时，这一点尤为重要。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>我们通过一个简单的例子，展示了如何在BioOS中完成一个工作流的导入、数据模型的使用、计算参数的传递、工作流的运行以及工作流结果的查看。</p>
<p>希望您对BioOS有了一个初步的了解，并能够利用BioOS完成更多的分析任务。</p>
</div></template>


