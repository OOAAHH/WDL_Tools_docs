<template><div><h2 id="最简wdl代码模式" tabindex="-1"><a class="header-anchor" href="#最简wdl代码模式"><span>最简WDL代码模式</span></a></h2>
<blockquote>
<p>本文展示一个最简WDL代码结构
诸多WDL教程比较复杂，为了进一步提速，这里我们展示一个最简WDL代码结构，只需要一个task即可。
task内部包含input、command、output、runtime四个部分。
在您有了多个WDL之后，如果您想依据他们构建复杂的工作流，您可以在WDL中加入<code v-pre>“import &quot;../../../../../tasks/test/example.wdl&quot; as testExample”</code>引入其他的WDL，并依据call命令构建更复杂的调度。</p>
</blockquote>
<div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes light-plus aurora-x vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">version </span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">1.0</span><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic"> # WDL版本号</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">task hello_world </span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">{</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#82AAFF">  input</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF"> {</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> </span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # 输入参数</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    Array</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">File</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">]</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> fastq_file_paths</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    String disk_space = </span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">150 GB</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    Int cpu = </span><span style="--shiki-light:#098658;--shiki-dark:#F78C6C">1</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">  command </span><span style="--shiki-light:#000000;--shiki-dark:#C792EA">&#x3C;&#x3C;&#x3C;</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # 任务执行的命令</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # 下面是一个python代码块，可以执行python代码</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    python3 </span><span style="--shiki-light:#000000;--shiki-dark:#C792EA">&#x3C;&#x3C;</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">CODE</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#82AAFF">    print</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">hello world</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    CODE</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # 下面是SHELL代码块，可以执行SHELL代码</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    echo </span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">hello world</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#C792EA">  >>></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">  output </span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">{</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # 输出参数</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    Array</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">[</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">File</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">]</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> renamed_fastq_files = </span><span style="--shiki-light:#000000;--shiki-dark:#82AAFF">glob</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">(</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">./*_L001_*_001.fastq.gz</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    String sample_name_out = sample_name</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">  runtime </span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">{</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-light-font-style:inherit;--shiki-dark:#546E7A;--shiki-dark-font-style:italic">    # 运行时参数</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    docker</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF"> "</span><span style="--shiki-light:#A31515;--shiki-dark:#C3E88D">registry-vpc.miracle.ac.cn/gznl/ooaahhdocker/python_pigz:1.0</span><span style="--shiki-light:#A31515;--shiki-dark:#89DDFF">"</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    cpu</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> cpu</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB">    disk</span><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">:</span><span style="--shiki-light:#000000;--shiki-dark:#BBBBBB"> disk_space</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">  }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#89DDFF">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>runtime的部分，您可以指定docker镜像，cpu，disk等参数。这里可以在多个task中复用。</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>推荐在command中使用python代码块，这样您可以把所有的python代码都写在一个文件中，便于管理。</p>
</div>
</div></template>


