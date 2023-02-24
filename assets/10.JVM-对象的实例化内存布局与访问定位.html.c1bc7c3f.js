import{_ as i,r as c,o as l,c as p,b as n,d as s,e,a as t}from"./app.099ebd34.js";const o={},r=t('<h1 id="jvm-\u5BF9\u8C61\u7684\u5B9E\u4F8B\u5316\u5185\u5B58\u5E03\u5C40\u4E0E\u8BBF\u95EE\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#jvm-\u5BF9\u8C61\u7684\u5B9E\u4F8B\u5316\u5185\u5B58\u5E03\u5C40\u4E0E\u8BBF\u95EE\u5B9A\u4F4D" aria-hidden="true">#</a> JVM-\u5BF9\u8C61\u7684\u5B9E\u4F8B\u5316\u5185\u5B58\u5E03\u5C40\u4E0E\u8BBF\u95EE\u5B9A\u4F4D</h1><p>\u9762\u8BD5\u9898</p><ol><li><p>\u5BF9\u8C61\u5728JVM\u4E2D\u662F\u600E\u4E48\u5B58\u50A8\u7684\uFF1F</p></li><li><p>\u5BF9\u8C61\u5934\u4FE1\u606F\u91CC\u9762\u6709\u54EA\u4E9B\u4E1C\u897F\uFF1F</p></li><li><p>Java\u5BF9\u8C61\u5934\u91CC\u6709\u4EC0\u4E48\uFF1F</p></li></ol><h2 id="_1-\u5BF9\u8C61\u5B9E\u4F8B\u5316" tabindex="-1"><a class="header-anchor" href="#_1-\u5BF9\u8C61\u5B9E\u4F8B\u5316" aria-hidden="true">#</a> 1. \u5BF9\u8C61\u5B9E\u4F8B\u5316</h2>',4),d={id:"_1-\u5BF9\u8C61\u7684\u5B9E\u4F8B\u5316",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#_1-\u5BF9\u8C61\u7684\u5B9E\u4F8B\u5316","aria-hidden":"true"},"#",-1),m={href:"https://www.processon.com/mindmap/5fe800d507912910e48272b1",target:"_blank",rel:"noopener noreferrer"},v=t(`<p><img src="http://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202012/27/113336-985463.png" alt="1609040015175"></p><h3 id="_2-\u5BF9\u8C61\u7684\u521B\u5EFA\u5B57\u8282\u7801\u89D2\u5EA6" tabindex="-1"><a class="header-anchor" href="#_2-\u5BF9\u8C61\u7684\u521B\u5EFA\u5B57\u8282\u7801\u89D2\u5EA6" aria-hidden="true">#</a> 2. \u5BF9\u8C61\u7684\u521B\u5EFA\u5B57\u8282\u7801\u89D2\u5EA6</h3><ol><li>\u6E90\u7801</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u6267\u884C\u547D\u4EE4</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-p</span> ObjectTest.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u7ED3\u679C</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>D:<span class="token punctuation">\\</span>java-code<span class="token punctuation">\\</span>java<span class="token punctuation">\\</span>jvm<span class="token punctuation">\\</span>target<span class="token punctuation">\\</span>classes<span class="token punctuation">\\</span>com<span class="token punctuation">\\</span>chggx<span class="token punctuation">\\</span>jvm<span class="token punctuation">\\</span>chapter1<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>javap <span class="token parameter variable">-v</span> <span class="token parameter variable">-p</span> ObjectTest.class
Classfile /D:/java-code/java/jvm/target/classes/com/chggx/jvm/chapter10/ObjectTest.class
  Last modified <span class="token number">2020</span>-12-27<span class="token punctuation">;</span> size <span class="token number">468</span> bytes
  MD5 checksum 2a4d696213cdd30c4a65ce13dcab2338
  Compiled from <span class="token string">&quot;ObjectTest.java&quot;</span>
public class com.chggx.jvm.chapter10.ObjectTest
  minor version: <span class="token number">0</span>
  major version: <span class="token number">52</span>
  flags: ACC_PUBLIC, ACC_SUPER
Constant pool:
   <span class="token comment">#1 = Methodref          #2.#19         // java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span>
   <span class="token comment">#2 = Class              #20            // java/lang/Object</span>
   <span class="token comment">#3 = Class              #21            // com/chggx/jvm/chapter10/ObjectTest</span>
   <span class="token comment">#4 = Utf8               &lt;init&gt;</span>
   <span class="token comment">#5 = Utf8               ()V</span>
   <span class="token comment">#6 = Utf8               Code</span>
   <span class="token comment">#7 = Utf8               LineNumberTable</span>
   <span class="token comment">#8 = Utf8               LocalVariableTable</span>
   <span class="token comment">#9 = Utf8               this</span>
  <span class="token comment">#10 = Utf8               Lcom/chggx/jvm/chapter10/ObjectTest;</span>
  <span class="token comment">#11 = Utf8               main</span>
  <span class="token comment">#12 = Utf8               ([Ljava/lang/String;)V</span>
  <span class="token comment">#13 = Utf8               args</span>
  <span class="token comment">#14 = Utf8               [Ljava/lang/String;</span>
  <span class="token comment">#15 = Utf8               o</span>
  <span class="token comment">#16 = Utf8               Ljava/lang/Object;</span>
  <span class="token comment">#17 = Utf8               SourceFile</span>
  <span class="token comment">#18 = Utf8               ObjectTest.java</span>
  <span class="token comment">#19 = NameAndType        #4:#5          // &quot;&lt;init&gt;&quot;:()V</span>
  <span class="token comment">#20 = Utf8               java/lang/Object</span>
  <span class="token comment">#21 = Utf8               com/chggx/jvm/chapter10/ObjectTest</span>
<span class="token punctuation">{</span>
  public com.chggx.jvm.chapter10.ObjectTest<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    descriptor: <span class="token punctuation">(</span><span class="token punctuation">)</span>V
    flags: ACC_PUBLIC
    Code:
      <span class="token assign-left variable">stack</span><span class="token operator">=</span><span class="token number">1</span>, <span class="token assign-left variable">locals</span><span class="token operator">=</span><span class="token number">1</span>, <span class="token assign-left variable">args_size</span><span class="token operator">=</span><span class="token number">1</span>
         <span class="token number">0</span>: aload_0
         <span class="token number">1</span>: invokespecial <span class="token comment">#1                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span>
         <span class="token number">4</span>: <span class="token builtin class-name">return</span>
      LineNumberTable:
        line <span class="token number">8</span>: <span class="token number">0</span>
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            <span class="token number">0</span>       <span class="token number">5</span>     <span class="token number">0</span>  this   Lcom/chggx/jvm/chapter10/ObjectTest<span class="token punctuation">;</span>

  public static void main<span class="token punctuation">(</span>java.lang.String<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    descriptor: <span class="token punctuation">(</span><span class="token punctuation">[</span>Ljava/lang/String<span class="token punctuation">;</span><span class="token punctuation">)</span>V
    flags: ACC_PUBLIC, ACC_STATIC
    Code: 
      <span class="token assign-left variable">stack</span><span class="token operator">=</span><span class="token number">2</span>, <span class="token assign-left variable">locals</span><span class="token operator">=</span><span class="token number">2</span>, <span class="token assign-left variable">args_size</span><span class="token operator">=</span><span class="token number">1</span> 
      	// \u521B\u5EFA\u5BF9\u8C61\u7684\u6B65\u9AA4
         <span class="token number">0</span>: new           <span class="token comment">#2                  // class java/lang/Object</span>
         <span class="token number">3</span>: dup
         <span class="token number">4</span>: invokespecial <span class="token comment">#1                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span>
         <span class="token number">7</span>: astore_1
         <span class="token number">8</span>: <span class="token builtin class-name">return</span>
      LineNumberTable:
        line <span class="token number">11</span>: <span class="token number">0</span>
        line <span class="token number">12</span>: <span class="token number">8</span>
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            <span class="token number">0</span>       <span class="token number">9</span>     <span class="token number">0</span>  args   <span class="token punctuation">[</span>Ljava/lang/String<span class="token punctuation">;</span>
            <span class="token number">8</span>       <span class="token number">1</span>     <span class="token number">1</span>     o   Ljava/lang/Object<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
SourceFile: <span class="token string">&quot;ObjectTest.java&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_2-\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40" aria-hidden="true">#</a> 2. \u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40</h2>`,9),b={id:"_1-\u5185\u5B58\u5E03\u5C40",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_1-\u5185\u5B58\u5E03\u5C40","aria-hidden":"true"},"#",-1),h={href:"https://www.processon.com/mindmap/5fe8604c5653bb05478cf2d9",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[n("img",{src:"http://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202012/28/103126-564742.png",alt:"1609122684316"})],-1),_={id:"_2-\u56FE\u793A",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#_2-\u56FE\u793A","aria-hidden":"true"},"#",-1),f={href:"https://www.processon.com/diagraming/5fe800cb63768932a287afa5",target:"_blank",rel:"noopener noreferrer"},x=t('<p><img src="http://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202012/28/102727-523260.png" alt="1609122446392"></p><h2 id="_3-\u5BF9\u8C61\u7684\u8BBF\u95EE\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#_3-\u5BF9\u8C61\u7684\u8BBF\u95EE\u5B9A\u4F4D" aria-hidden="true">#</a> 3. \u5BF9\u8C61\u7684\u8BBF\u95EE\u5B9A\u4F4D</h2><h3 id="_1-jvm\u662F\u5982\u4F55\u901A\u8FC7\u6808\u5E27\u4E2D\u7684\u5BF9\u8C61\u5F15\u7528\u8BBF\u95EE\u5230\u5176\u5185\u90E8\u7684\u5BF9\u8C61\u5B9E\u4F8B\u7684\u5462" tabindex="-1"><a class="header-anchor" href="#_1-jvm\u662F\u5982\u4F55\u901A\u8FC7\u6808\u5E27\u4E2D\u7684\u5BF9\u8C61\u5F15\u7528\u8BBF\u95EE\u5230\u5176\u5185\u90E8\u7684\u5BF9\u8C61\u5B9E\u4F8B\u7684\u5462" aria-hidden="true">#</a> 1. JVM\u662F\u5982\u4F55\u901A\u8FC7\u6808\u5E27\u4E2D\u7684\u5BF9\u8C61\u5F15\u7528\u8BBF\u95EE\u5230\u5176\u5185\u90E8\u7684\u5BF9\u8C61\u5B9E\u4F8B\u7684\u5462\uFF1F</h3><p><img src="http://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202012/28/103606-334156.png" alt="1609122965324"></p><p>\u53E5\u67C4\u8BBF\u95EE\u56FE\u793A</p><p><img src="http://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202012/28/104357-491595.png" alt="1609123436285"></p><p>\u76F4\u63A5\u6307\u9488\u56FE\u793A</p><p><img src="http://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202012/28/104629-339715.png" alt="1609123588332"></p>',8);function y(C,O){const a=c("ExternalLinkIcon");return l(),p("div",null,[r,n("h3",d,[u,s(" 1. "),n("a",m,[s("\u5BF9\u8C61\u7684\u5B9E\u4F8B\u5316"),e(a)])]),v,n("h3",b,[k,s(" 1. "),n("a",h,[s("\u5185\u5B58\u5E03\u5C40"),e(a)])]),g,n("h3",_,[j,s(" 2. "),n("a",f,[s("\u56FE\u793A"),e(a)])]),x])}const L=i(o,[["render",y],["__file","10.JVM-\u5BF9\u8C61\u7684\u5B9E\u4F8B\u5316\u5185\u5B58\u5E03\u5C40\u4E0E\u8BBF\u95EE\u5B9A\u4F4D.html.vue"]]);export{L as default};
