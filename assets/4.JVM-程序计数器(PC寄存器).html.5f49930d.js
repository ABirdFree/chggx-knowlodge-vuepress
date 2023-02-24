import{_ as n,o as s,c as a,a as e}from"./app.099ebd34.js";const i={},l=e(`<h1 id="jvm-\u7A0B\u5E8F\u8BA1\u6570\u5668-pc\u5BC4\u5B58\u5668" tabindex="-1"><a class="header-anchor" href="#jvm-\u7A0B\u5E8F\u8BA1\u6570\u5668-pc\u5BC4\u5B58\u5668" aria-hidden="true">#</a> JVM-\u7A0B\u5E8F\u8BA1\u6570\u5668(PC\u5BC4\u5B58\u5668)</h1><h2 id="_1-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-\u4ECB\u7ECD" aria-hidden="true">#</a> 1. \u4ECB\u7ECD</h2><p>JVM\u4E2D\u7684\u7A0B\u5E8F\u8BA1\u6570\u5BC4\u5B58\u5668\uFF08Program Counter Register\uFF09\u4E2D\uFF0CRegister\u7684\u547D\u540D\u6E90\u4E8ECPU\u7684\u5BC4\u5B58\u5668\uFF0C\u5BC4\u5B58\u5668\u5B58\u50A8\u6307\u4EE4\u76F8\u5173\u7684\u73B0\u573A\u4FE1\u606F\u3002CPU\u53EA\u6709\u628A\u6570\u636E\u88C5\u8F7D\u5230\u5BC4\u5B58\u5668\u624D\u80FD\u591F\u8FD0\u884C\u3002\u8FD9\u91CC\uFF0C\u5E76\u975E\u662F\u5E7F\u4E49\u4E0A\u6240\u6307\u7684\u7269\u7406\u5BC4\u5B58\u5668\uFF0C\u6216\u8BB8\u5C06\u5176\u7FFB\u8BD1\u4E3APC\u8BA1\u6570\u5668\uFF08\u6216\u6307\u4EE4\u8BA1\u6570\u5668\uFF09\u4F1A\u66F4\u52A0\u8D34\u5207\uFF08\u4E5F\u79F0\u4E3A\u7A0B\u5E8F\u94A9\u5B50\uFF09\uFF0C\u5E76\u4E14\u4E5F\u4E0D\u5BB9\u6613\u5F15\u8D77\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\u8BEF\u4F1A\u3002JVM\u4E2D\u7684PC\u5BC4\u5B58\u5668\u662F\u5BF9\u7269\u7406PC\u5BC4\u5B58\u5668\u7684\u4E00\u79CD\u62BD\u8C61\u6A21\u62DF\u3002</p><p><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/2022/\u8FD0\u884C\u65F6\u6570\u636E\u533A\u7B80\u56FE.png" alt=""></p><blockquote><p>\u6808\u6CA1\u6709\u5783\u573E\u56DE\u6536,\u6709\u5185\u5B58\u6EA2\u51FA(OOM)</p><p>\u5806\u548C\u65B9\u6CD5\u533A\u6709\u5783\u573E\u56DE\u6536(GC/OOM)</p><p>PC\u5BC4\u5B58\u5668\u6CA1\u6709GC\u548COOM</p></blockquote><h2 id="_2-\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u4F5C\u7528" aria-hidden="true">#</a> 2. \u4F5C\u7528</h2><p><code>PC\u5BC4\u5B58\u5668\u7528\u6765\u5B58\u50A8\u6307\u5411\u4E0B\u4E00\u6761\u6307\u4EE4\u7684\u5730\u5740</code>\uFF0C\u4E5F\u5373\u5C06\u8981\u6267\u884C\u7684\u6307\u4EE4\u4EE3\u7801\u3002\u7531\u6267\u884C\u5F15\u64CE\u8BFB\u53D6\u4E0B\u4E00\u6761\u6307\u4EE4\u3002</p><p><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/2022/PC\u5BC4\u5B58\u5668\u4F5C\u7528.png" alt=""></p><p>\u5B83\u662F\u4E00\u5757\u5F88\u5C0F\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u51E0\u4E4E\u53EF\u4EE5\u5FFD\u7565\u4E0D\u8BB0\u3002\u4E5F\u662F\u8FD0\u884C\u901F\u5EA6\u6700\u5FEB\u7684\u5B58\u50A8\u533A\u57DF\u3002</p><p>\u5728JVM\u89C4\u8303\u4E2D\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u6709\u5B83\u81EA\u5DF1\u7684\u7A0B\u5E8F\u8BA1\u6570\u5668\uFF0C\u662F\u7EBF\u7A0B\u79C1\u6709\u7684\uFF0C\u751F\u547D\u5468\u671F\u4E0E\u7EBF\u7A0B\u7684\u751F\u547D\u5468\u671F\u4FDD\u6301\u4E00\u81F4\u3002</p><p>\u4EFB\u4F55\u65F6\u95F4\u4E00\u4E2A\u7EBF\u7A0B\u90FD\u53EA\u6709\u4E00\u4E2A\u65B9\u6CD5\u5728\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u6240\u8C13\u7684<code>\u5F53\u524D\u65B9\u6CD5</code>\u3002\u7A0B\u5E8F\u8BA1\u6570\u5668\u4F1A\u5B58\u50A8\u5F53\u524D\u7EBF\u7A0B\u6B63\u5728\u6267\u884C\u7684Java\u65B9\u6CD5\u7684JVM\u6307\u4EE4\u5730\u5740\uFF1B\u6216\u8005\uFF0C\u5982\u679C\u662F\u5728\u6267\u884Cnative\u65B9\u6CD5\uFF0C\u5219\u662F\u672A\u6307\u5B9A\u503C\uFF08undefned\uFF09\u3002</p><p>\u5B83\u662F\u7A0B\u5E8F\u63A7\u5236\u6D41\u7684\u6307\u793A\u5668\uFF0C\u5206\u652F\u3001\u5FAA\u73AF\u3001\u8DF3\u8F6C\u3001\u5F02\u5E38\u5904\u7406\u3001\u7EBF\u7A0B\u6062\u590D\u7B49\u57FA\u7840\u529F\u80FD\u90FD\u9700\u8981\u4F9D\u8D56\u8FD9\u4E2A\u8BA1\u6570\u5668\u6765\u5B8C\u6210\u3002\u5B57\u8282\u7801\u89E3\u91CA\u5668\u5DE5\u4F5C\u65F6\u5C31\u662F\u901A\u8FC7\u6539\u53D8\u8FD9\u4E2A\u8BA1\u6570\u5668\u7684\u503C\u6765\u9009\u53D6\u4E0B\u4E00\u6761\u9700\u8981\u6267\u884C\u7684\u5B57\u8282\u7801\u6307\u4EE4\u3002</p><p>\u5B83\u662F\u552F\u4E00\u4E00\u4E2A\u5728Java\u865A\u62DF\u673A\u89C4\u8303\u4E2D\u6CA1\u6709\u89C4\u5B9A\u4EFB\u4F55outotMemoryError\u60C5\u51B5\u7684\u533A\u57DF\u3002</p><blockquote><p>\u6E38\u6807,\u96C6\u5408\u8FED\u4EE3\u5668</p></blockquote><h2 id="_3-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-\u6848\u4F8B" aria-hidden="true">#</a> 3. \u6848\u4F8B</h2><p>\u6211\u4EEC\u9996\u5148\u5199\u4E00\u4E2A\u7B80\u5355\u7684\u4EE3\u7801</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: CHGGX
 * @Date: 2020/09/06 8:26
 * @Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> PC\u5BC4\u5B58\u5668\u6848\u4F8B <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PCRegisterTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53CD\u7F16\u8BD1\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>javap <span class="token parameter variable">-verbose</span> PCRegisterTest.class
\u6216\u8005 javap <span class="token parameter variable">-v</span> PCRegisterTest.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F97\u5230\u4E0B\u9762\u7ED3\u679C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Classfile /D:/java-code/java/jvm/target/classes/com/chggx/jvm/chapter04/PCRegi
sterTest.class
  Last modified <span class="token number">2020</span>-9-6<span class="token punctuation">;</span> size <span class="token number">501</span> bytes
  MD5 checksum 588b9b406f9e4a1537c4970fa22c6fd7
  Compiled from <span class="token string">&quot;PCRegisterTest.java&quot;</span>
public class com.chggx.jvm.chapter04.PCRegisterTest
  minor version: <span class="token number">0</span>
  major version: <span class="token number">52</span>
  flags: ACC_PUBLIC, ACC_SUPER
Constant pool:
   <span class="token comment">#1 = Methodref          #3.#21         // java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span>
   <span class="token comment">#2 = Class              #22            // com/chggx/jvm/chapter04/PCRegiste</span>
rTest
   <span class="token comment">#3 = Class              #23            // java/lang/Object</span>
   <span class="token comment">#4 = Utf8               &lt;init&gt;</span>
   <span class="token comment">#5 = Utf8               ()V</span>
   <span class="token comment">#6 = Utf8               Code</span>
   <span class="token comment">#7 = Utf8               LineNumberTable</span>
   <span class="token comment">#8 = Utf8               LocalVariableTable</span>
   <span class="token comment">#9 = Utf8               this</span>
  <span class="token comment">#10 = Utf8               Lcom/chggx/jvm/chapter04/PCRegisterTest;</span>
  <span class="token comment">#11 = Utf8               main</span>
  <span class="token comment">#12 = Utf8               ([Ljava/lang/String;)V</span>
  <span class="token comment">#13 = Utf8               args</span>
  <span class="token comment">#14 = Utf8               [Ljava/lang/String;</span>
  <span class="token comment">#15 = Utf8               i</span>
  <span class="token comment">#16 = Utf8               I</span>
  <span class="token comment">#17 = Utf8               j</span>
  <span class="token comment">#18 = Utf8               k</span>
  <span class="token comment">#19 = Utf8               SourceFile</span>
  <span class="token comment">#20 = Utf8               PCRegisterTest.java</span>
  <span class="token comment">#21 = NameAndType        #4:#5          // &quot;&lt;init&gt;&quot;:()V</span>
  <span class="token comment">#22 = Utf8               com/chggx/jvm/chapter04/PCRegisterTest</span>
  <span class="token comment">#23 = Utf8               java/lang/Object</span>
<span class="token punctuation">{</span>
  public com.chggx.jvm.chapter04.PCRegisterTest<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    descriptor: <span class="token punctuation">(</span><span class="token punctuation">)</span>V
    flags: ACC_PUBLIC
    Code:
      <span class="token assign-left variable">stack</span><span class="token operator">=</span><span class="token number">1</span>, <span class="token assign-left variable">locals</span><span class="token operator">=</span><span class="token number">1</span>, <span class="token assign-left variable">args_size</span><span class="token operator">=</span><span class="token number">1</span>
         <span class="token number">0</span>: aload_0
         <span class="token number">1</span>: invokespecial <span class="token comment">#1                  // Method java/lang/Object.&quot;&lt;ini</span>
t<span class="token operator">&gt;</span><span class="token string">&quot;:()V
         4: return
      LineNumberTable:
        line 8: 0
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0       5     0  this   Lcom/chggx/jvm/chapter04/PCRegisterTest;

  public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=4, args_size=1
         0: bipush        10
         2: istore_1
         3: bipush        20
         5: istore_2
         6: iload_1
         7: iload_2
         8: iadd
         9: istore_3
        10: return
      LineNumberTable:
        line 11: 0
        line 12: 3
        line 13: 6
        line 14: 10
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0      11     0  args   [Ljava/lang/String;
            3       8     1     i   I
            6       5     2     j   I
           10       1     3     k   I
}
SourceFile: &quot;</span>PCRegisterTest.java&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u9762\u53CD\u7F16\u8BD1\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA: \u53D1\u73B0\u5728\u5B57\u8282\u7801\u7684\u5DE6\u8FB9\u6709\u4E00\u4E2A\u884C\u53F7\u6807\u8BC6\uFF0C\u5B83\u5176\u5B9E\u5C31\u662F\u6307\u4EE4\u5730\u5740\uFF0C\u7528\u4E8E\u6307\u5411\u5F53\u524D\u6267\u884C\u5230\u54EA\u91CC\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token assign-left variable">stack</span><span class="token operator">=</span><span class="token number">2</span>, <span class="token assign-left variable">locals</span><span class="token operator">=</span><span class="token number">4</span>, <span class="token assign-left variable">args_size</span><span class="token operator">=</span><span class="token number">1</span>
         <span class="token number">0</span>: bipush        <span class="token number">10</span>
         <span class="token number">2</span>: istore_1
         <span class="token number">3</span>: bipush        <span class="token number">20</span>
         <span class="token number">5</span>: istore_2
         <span class="token number">6</span>: iload_1
         <span class="token number">7</span>: iload_2
         <span class="token number">8</span>: iadd
         <span class="token number">9</span>: istore_3
        <span class="token number">10</span>: <span class="token builtin class-name">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/2022/\u53CD\u7F16\u8BD1.png" alt=""></p><h2 id="_4-\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> 4. \u5E38\u89C1\u95EE\u9898</h2><h3 id="\u4F7F\u7528pc\u5BC4\u5B58\u5668\u5B58\u50A8\u5B57\u8282\u7801\u6307\u4EE4\u5730\u5740\u6709\u4EC0\u4E48\u7528\u5462-\u95EE\u4EC0\u4E48\u4F7F\u7528pc\u5BC4\u5B58\u5668\u8BB0\u5F55\u5F53\u524D\u7EBF\u7A0B\u6267\u884C\u5730\u5740\u5462" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528pc\u5BC4\u5B58\u5668\u5B58\u50A8\u5B57\u8282\u7801\u6307\u4EE4\u5730\u5740\u6709\u4EC0\u4E48\u7528\u5462-\u95EE\u4EC0\u4E48\u4F7F\u7528pc\u5BC4\u5B58\u5668\u8BB0\u5F55\u5F53\u524D\u7EBF\u7A0B\u6267\u884C\u5730\u5740\u5462" aria-hidden="true">#</a> \u4F7F\u7528PC\u5BC4\u5B58\u5668\u5B58\u50A8\u5B57\u8282\u7801\u6307\u4EE4\u5730\u5740\u6709\u4EC0\u4E48\u7528\u5462\uFF1F\uFF08\u95EE\u4EC0\u4E48\u4F7F\u7528PC\u5BC4\u5B58\u5668\u8BB0\u5F55\u5F53\u524D\u7EBF\u7A0B\u6267\u884C\u5730\u5740\u5462\uFF1F\uFF09</h3><p>\u56E0\u4E3ACPU\u9700\u8981\u4E0D\u505C\u5730\u5947\u5E7B\u5404\u4E2A\u7EBF\u7A0B\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5207\u6362\u56DE\u6765\u4EE5\u540E\uFF0C\u5C31\u5F97\u77E5\u9053\u63A5\u7740\u4ECE\u54EA\u5F00\u59CB\u7EE7\u7EED\u6267\u884C\u3002</p><p>JVM\u7684\u5B57\u8282\u7801\u89E3\u91CA\u5668\u5C31\u9700\u8981\u901A\u8FC7\u6539\u53D8PC\u5BC4\u5B58\u5668\u7684\u503C\u6765\u660E\u786E\u4E0B\u4E00\u8DF3\u5E94\u8BE5\u6267\u884C\u4EC0\u4E48\u6837\u7684\u5B57\u8282\u7801\u6307\u4EE4\u3002</p><p><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/2022/\u4F7F\u7528PC\u5BC4\u5B58\u5668\u5B58\u50A8\u5B57\u8282\u7801\u6307\u4EE4\u5730\u5740\u6709\u4EC0\u4E48\u7528\u5462\uFF1F.png" alt=""></p><h3 id="pc\u5BC4\u5B58\u5668\u95EE\u4EC0\u4E48\u4F1A\u88AB\u8BBE\u5B9A\u4E3A\u79C1\u6709\u7684" tabindex="-1"><a class="header-anchor" href="#pc\u5BC4\u5B58\u5668\u95EE\u4EC0\u4E48\u4F1A\u88AB\u8BBE\u5B9A\u4E3A\u79C1\u6709\u7684" aria-hidden="true">#</a> PC\u5BC4\u5B58\u5668\u95EE\u4EC0\u4E48\u4F1A\u88AB\u8BBE\u5B9A\u4E3A\u79C1\u6709\u7684\uFF1F</h3><p>\u6211\u4EEC\u90FD\u77E5\u9053\u6240\u8C13\u7684\u591A\u7EBF\u7A0B\u5728\u4E00\u4E2A\u7279\u5B9A\u7684\u65F6\u95F4\u6BB5\u5185\u53EA\u4F1A\u6267\u884C\u5176\u4E2D\u4E00\u4E2A\u7EBF\u7A0B\u7684\u65B9\u6CD5\uFF0CCPU\u4F1A\u4E0D\u505C\u7684\u505A\u4EFB\u52A1\u5207\u6362\uFF0C\u8FD9\u6837\u5FC5\u7136\u5BFC\u81F4\u7ECF\u5E38\u4E2D\u65AD\u6216\u6062\u590D\uFF0C\u5982\u4F55\u4FDD\u8BC1\u5206\u6BEB\u65E0\u5DEE\u5462\uFF1F<code>\u4E3A\u4E86\u80FD\u591F\u51C6\u786E\u7684\u8BB0\u5F55\u5404\u4E2A\u7EBF\u7A0B\u6B63\u5728\u6267\u884C\u7684\u5F53\u524D\u5B57\u8282\u7801\u6307\u4EE4\u5730\u5740\uFF0C\u6700\u597D\u7684\u529E\u6CD5\u81EA\u7136\u662F\u4E3A\u6BCF\u4E00\u4E2A\u7EBF\u7A0B\u90FD\u5206\u914D\u4E00\u4E2APC\u5BC4\u5B58\u5668</code>\u3002\u8FD9\u6837\u4E00\u6765\u5404\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u4FBF\u53EF\u4EE5\u8FDB\u884C\u72EC\u7ACB\u8BA1\u7B97\uFF0C\u4ECE\u800C\u4E0D\u4F1A\u51FA\u73B0\u76F8\u4E92\u5E72\u6270\u7684\u60C5\u51B5\u3002</p><p>\u7531\u4E8ECPU\u65F6\u95F4\u7247\u8F6E\u9650\u5236\uFF0C\u4F17\u591A\u7EBF\u7A0B\u5728\u5E76\u53D1\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4EFB\u4F55\u4E00\u4E2A\u786E\u5B9A\u7684\u662F\u54E6\uFF0C\u4E00\u4E2A\u5904\u7406\u5668\u6216\u8005\u591A\u4E2A\u5904\u7406\u5668\u4E2D\u7684\u4E00\u4E2A\u5185\u6838\uFF0C\u53EA\u4F1A\u6267\u884C\u67D0\u4E2A\u7EBF\u7A0B\u4E2D\u7684\u4E00\u6761\u6307\u4EE4\u3002</p><p>\u8FD9\u4E2A\u5FC5\u7136\u5BFC\u81F4\u7ECF\u5E38\u4E2D\u65AD\u6216\u6062\u590D\uFF0C\u5982\u4F55\u4FDD\u8BC1\u5206\u6BEB\u65E0\u5DEE\u5462\uFF1F\u6BCF\u4E2A\u7EBF\u7A0B\u5728\u521B\u5EFA\u540E\uFF0C\u90FD\u4F1A\u4EA7\u751F\u81EA\u5DF1\u7684\u7A0B\u5E8F\u8BA1\u6570\u5668\u548C\u6808\u5E27\uFF0C\u7A0B\u5E8F\u8BA1\u6570\u5668\u5728\u5404\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u4E92\u4E0D\u5F71\u54CD\u3002</p><p><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/2022/PC\u5BC4\u5B58\u5668\u95EE\u4EC0\u4E48\u4F1A\u88AB\u8BBE\u5B9A\u4E3A\u79C1\u6709\u7684\uFF1F.png" alt=""></p><h3 id="cpu\u65F6\u95F4\u7247" tabindex="-1"><a class="header-anchor" href="#cpu\u65F6\u95F4\u7247" aria-hidden="true">#</a> CPU\u65F6\u95F4\u7247</h3><p>CPU\u65F6\u95F4\u7247\u5373CPU\u5206\u914D\u7ED9\u5404\u4E2A\u7A0B\u5E8F\u7684\u65F6\u95F4\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u88AB\u5206\u914D\u4E00\u4E2A\u65F6\u95F4\u6BB5\uFF0C\u79F0\u4F5C\u5B83\u7684\u65F6\u95F4\u7247\u3002</p><p>\u5728\u5B8F\u89C2\u4E0A\uFF1A\u6211\u4EEC\u53EF\u4EE5\u540C\u65F6\u6253\u5F00\u591A\u4E2A\u5E94\u7528\u7A0B\u5E8F\uFF0C\u6BCF\u4E2A\u7A0B\u5E8F\u5E76\u884C\u4E0D\u6096\uFF0C\u540C\u65F6\u8FD0\u884C\u3002</p><p>\u4F46\u5728\u5FAE\u89C2\u4E0A\uFF1A\u7531\u4E8E\u53EA\u6709\u4E00\u4E2ACPU\uFF0C\u4E00\u6B21\u53EA\u80FD\u5904\u7406\u7A0B\u5E8F\u8981\u6C42\u7684\u4E00\u90E8\u5206\uFF0C\u5982\u4F55\u5904\u7406\u516C\u5E73\uFF0C\u4E00\u79CD\u65B9\u6CD5\u5C31\u662F\u5F15\u5165\u65F6\u95F4\u7247\uFF0C\u6BCF\u4E2A\u7A0B\u5E8F\u8F6E\u6D41\u6267\u884C\u3002</p><p><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/2022/CPU\u65F6\u95F4\u7247.png" alt=""></p>`,39),c=[l];function t(p,r){return s(),a("div",null,c)}const d=n(i,[["render",t],["__file","4.JVM-\u7A0B\u5E8F\u8BA1\u6570\u5668(PC\u5BC4\u5B58\u5668).html.vue"]]);export{d as default};
