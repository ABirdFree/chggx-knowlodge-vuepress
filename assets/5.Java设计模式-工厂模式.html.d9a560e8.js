import{_ as n,o as s,c as a,a as p}from"./app.099ebd34.js";const t={},e=p(`<h1 id="java\u8BBE\u8BA1\u6A21\u5F0F-\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#java\u8BBE\u8BA1\u6A21\u5F0F-\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> Java\u8BBE\u8BA1\u6A21\u5F0F-\u5DE5\u5382\u6A21\u5F0F</h1><p><strong>\u770B\u4E00\u4E2A\u5177\u4F53\u7684\u9700\u6C42</strong></p><p>\u770B\u4E00\u4E2A\u62AB\u8428\u7684\u9879\u76EE\uFF1A\u8981\u4FBF\u4E8E\u62AB\u8428\u79CD\u7C7B\u7684\u6269\u5C55\uFF0C\u8981\u4FBF\u4E8E\u7EF4\u62A4</p><ol><li>\u62AB\u8428\u7684\u79CD\u7C7B\u5F88\u591A(\u6BD4\u5982 GreekPizz\u3001CheesePizz \u7B49)\u3002</li><li>\u62AB\u8428\u7684\u5236\u4F5C\u6709 prepare\uFF0Cbake, cut, box\u3002</li><li>\u5B8C\u6210\u62AB\u8428\u5E97\u8BA2\u8D2D\u529F\u80FD\u3002</li></ol><h2 id="_0-\u4F20\u7EDF\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#_0-\u4F20\u7EDF\u5F62\u5F0F" aria-hidden="true">#</a> 0. \u4F20\u7EDF\u5F62\u5F0F</h2><p><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/20230103163938.png?x-oss-process=style/shuiyin_1" alt=""></p><h3 id="_1-\u5236\u4F5C\u62AB\u8428" tabindex="-1"><a class="header-anchor" href="#_1-\u5236\u4F5C\u62AB\u8428" aria-hidden="true">#</a> 1. \u5236\u4F5C\u62AB\u8428</h3><ol><li>pizza \u62BD\u8C61\u7C7B\uFF1Aprepare \u51C6\u5907\u539F\u6750\u6599, \u4E0D\u540C\u7684\u62AB\u8428\u4E0D\u4E00\u6837\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u505A\u6210\u62BD\u8C61\u65B9\u6CD5</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">/**
 * \u5C06Pizza \u7C7B\u505A\u6210\u62BD\u8C61
 */</span>
public abstract class Pizza <span class="token punctuation">{</span>

   <span class="token comment">/**
    * \u540D\u5B57
    */</span>
   protected String name;

   <span class="token comment">/**
    * prepare \u51C6\u5907\u539F\u6750\u6599, \u4E0D\u540C\u7684\u62AB\u8428\u4E0D\u4E00\u6837\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u505A\u6210\u62BD\u8C61\u65B9\u6CD5
    */</span>
   public abstract void prepare();


   <span class="token comment">/**
    * bake
    */</span>
   public void bake() <span class="token punctuation">{</span>
      System.out.println(name + <span class="token string">&quot; baking;&quot;</span>);
   <span class="token punctuation">}</span>

   <span class="token comment">/**
    * cut
    */</span>
   public void cut() <span class="token punctuation">{</span>
      System.out.println(name + <span class="token string">&quot; cutting;&quot;</span>);
   <span class="token punctuation">}</span>

   <span class="token comment">/**
    * box
    */</span>
   public void box() <span class="token punctuation">{</span>
      System.out.println(name + <span class="token string">&quot; boxing;&quot;</span>);
   <span class="token punctuation">}</span>

   public void setName(String name) <span class="token punctuation">{</span>
      this.name = name;
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5976\u916A\u62AB\u8428 CheesePizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheesePizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u7ED9\u5236\u4F5C\u5976\u916A\u62AB\u8428 \u51C6\u5907\u539F\u6750\u6599 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u5E0C\u814A\u62AB\u8428 GreekPizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GreekPizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u7ED9\u5E0C\u814A\u62AB\u8428 \u51C6\u5907\u539F\u6750\u6599 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>	

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u80E1\u6912\u62AB\u8428PepperPizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PepperPizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u7ED9\u80E1\u6912\u62AB\u8428\u51C6\u5907\u539F\u6750\u6599 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u8BA2\u8D2D\u62AB\u8428" tabindex="-1"><a class="header-anchor" href="#_2-\u8BA2\u8D2D\u62AB\u8428" aria-hidden="true">#</a> 2. \u8BA2\u8D2D\u62AB\u8428</h3><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/image-20230103170854643.png?x-oss-process=style/shuiyin_1" alt="image-20230103170854643" style="zoom:80%;"><ol><li>OrderPizza \u8BA2\u8D2D\u62AB\u8428</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderPizza</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
	 * \u6784\u9020\u5668
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">OrderPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> orderType<span class="token punctuation">;</span> <span class="token comment">// \u8BA2\u8D2D\u62AB\u8428\u7684\u7C7B\u578B</span>
		<span class="token keyword">do</span> <span class="token punctuation">{</span>
			orderType <span class="token operator">=</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;greek&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GreekPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				pizza<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot; \u5E0C\u814A\u62AB\u8428 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				pizza<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot; \u5976\u916A\u62AB\u8428 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;pepper&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PepperPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				pizza<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot; \u80E1\u6912\u62AB\u8428 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">//\u8F93\u51FApizza \u5236\u4F5C\u8FC7\u7A0B</span>
			pizza<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			pizza<span class="token punctuation">.</span><span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			pizza<span class="token punctuation">.</span><span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			pizza<span class="token punctuation">.</span><span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

   <span class="token doc-comment comment">/**
    * \u5199\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5BA2\u6237\u5E0C\u671B\u8BA2\u8D2D\u7684\u62AB\u8428\u79CD\u7C7B
    */</span>
   <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token class-name">BufferedReader</span> strin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;input pizza \u79CD\u7C7B:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">String</span> str <span class="token operator">=</span> strin<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> str<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>PizzaStore \u76F8\u5F53\u4E8E\u4E00\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u53D1\u51FA\u8BA2\u8D2D</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u76F8\u5F53\u4E8E\u4E00\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u53D1\u51FA\u8BA2\u8D2D
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PizzaStore</span> <span class="token punctuation">{</span>

   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token keyword">new</span> <span class="token class-name">OrderPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>input pizza \u79CD\u7C7B:
greek
 \u7ED9\u5E0C\u814A\u62AB\u8428 \u51C6\u5907\u539F\u6750\u6599 
 \u5E0C\u814A\u62AB\u8428  baking;
 \u5E0C\u814A\u62AB\u8428  cutting;
 \u5E0C\u814A\u62AB\u8428  boxing;
input pizza \u79CD\u7C7B:
cheese
 \u7ED9\u5236\u4F5C\u5976\u916A\u62AB\u8428 \u51C6\u5907\u539F\u6750\u6599 
 \u5976\u916A\u62AB\u8428  baking;
 \u5976\u916A\u62AB\u8428  cutting;
 \u5976\u916A\u62AB\u8428  boxing;
input pizza \u79CD\u7C7B:
pepper
 \u7ED9\u80E1\u6912\u62AB\u8428\u51C6\u5907\u539F\u6750\u6599 
\u80E1\u6912\u62AB\u8428 baking;
\u80E1\u6912\u62AB\u8428 cutting;
\u80E1\u6912\u62AB\u8428 boxing;
input pizza \u79CD\u7C7B:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u4F20\u7EDF\u7684\u65B9\u5F0F\u7684\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-\u4F20\u7EDF\u7684\u65B9\u5F0F\u7684\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 3. \u4F20\u7EDF\u7684\u65B9\u5F0F\u7684\u4F18\u7F3A\u70B9</h3><ol><li><p>\u4F18\u70B9\u662F\u6BD4\u8F83\u597D\u7406\u89E3\uFF0C\u7B80\u5355\u6613\u64CD\u4F5C\u3002</p></li><li><p>\u7F3A\u70B9\u662F\u8FDD\u53CD\u4E86\u8BBE\u8BA1\u6A21\u5F0F\u7684ocp\u539F\u5219\uFF0C\u5373<code>\u5BF9\u6269\u5C55\u5F00\u653E\uFF0C\u5BF9\u4FEE\u6539\u5173\u95ED</code>\u3002\u5373\u5F53\u6211\u4EEC\u7ED9\u7C7B\u589E\u52A0\u65B0\u529F\u80FD\u7684\u65F6\u5019\uFF0C\u5C3D\u91CF\u4E0D\u4FEE\u6539\u4EE3\u7801\uFF0C\u6216\u8005\u5C3D\u53EF\u80FD\u5C11\u4FEE\u6539\u4EE3\u7801.</p></li><li><p>\u6BD4\u5982\u6211\u4EEC\u8FD9\u65F6\u8981\u65B0\u589E\u52A0\u4E00\u4E2APizza\u7684\u79CD\u7C7B(Pepper\u62AB\u8428)\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u5982\u4E0B\u4FEE\u6539\uFF0C\u7EF4\u62A4\u6210\u672C\u9AD8\u3002</p><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/image-20230128151311400.png?x-oss-process=style/shuiyin_1" alt="image-20230128151311400" style="zoom:80%;"></li></ol><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/image-20230128145841411.png?x-oss-process=style/shuiyin_1" alt="image-20230128145841411" style="zoom:80%;"><ol start="4"><li><p>\u6539\u8FDB\u7684\u601D\u8DEF\u5206\u6790</p><p>**\u5206\u6790\uFF1A**\u4FEE\u6539\u4EE3\u7801\u53EF\u4EE5\u63A5\u53D7\uFF0C\u4F46\u662F\u5982\u679C\u6211\u4EEC\u5728\u5176\u5B83\u7684\u5730\u65B9\u4E5F\u6709\u521B\u5EFAPizza\u7684\u4EE3\u7801\uFF0C\u5C31\u610F\u5473\u7740\uFF0C\u4E5F\u9700\u8981\u4FEE\u6539\uFF0C\u800C\u521B\u5EFAPizza\u7684\u4EE3\u7801\uFF0C<strong>\u5F80\u5F80\u6709\u591A\u5904</strong>\u3002</p></li></ol><p>\u200B **\u601D\u8DEF\uFF1A**\u628A\u521B\u5EFAPizza\u5BF9\u8C61\u5C01\u88C5\u5230\u4E00\u4E2A\u7C7B\u4E2D\uFF0C\u8FD9\u6837\u6211\u4EEC\u6709\u65B0\u7684Pizza\u79CD\u7C7B\u65F6\uFF0C\u53EA\u9700\u8981\u4FEE\u6539\u8BE5\u7C7B\u5C31\u53EF\uFF0C<strong>\u5176\u5B83\u6709\u521B\u5EFA\u5230Pizza\u5BF9\u8C61\u7684\u4EE3\u7801\u5C31\u4E0D\u9700\u8981\u4FEE\u6539\u4E86</strong>.-&gt; \u7B80\u5355\u5DE5\u5382\u6A21\u5F0F</p><h2 id="_1-\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F-\u9759\u6001\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F-\u9759\u6001\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> 1.\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F(\u9759\u6001\u5DE5\u5382\u6A21\u5F0F )</h2><h3 id="_1-\u57FA\u672C\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a> 1. \u57FA\u672C\u4ECB\u7ECD</h3><ol><li><p>\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u662F\u5C5E\u4E8E<u>\u521B\u5EFA\u578B\u6A21\u5F0F</u>\uFF0C\u662F\u5DE5\u5382\u6A21\u5F0F\u7684\u4E00\u79CD\u3002<strong>\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u662F\u7531\u4E00\u4E2A\u5DE5\u5382\u5BF9\u8C61\u51B3\u5B9A\u521B\u5EFA\u51FA\u54EA\u4E00\u79CD\u4EA7\u54C1\u7C7B\u7684\u5B9E\u4F8B</strong>\u3002\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u662F\u5DE5\u5382\u6A21\u5F0F\u5BB6\u65CF\u4E2D\u6700\u7B80\u5355\u5B9E\u7528\u7684\u6A21\u5F0F</p></li><li><p>\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\uFF1A\u5B9A\u4E49\u4E86\u4E00\u4E2A\u521B\u5EFA\u5BF9\u8C61\u7684\u7C7B\uFF0C\u7531\u8FD9\u4E2A\u7C7B\u6765<strong>\u5C01\u88C5\u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u884C\u4E3A</strong>(\u4EE3\u7801)</p></li><li><p>\u5728\u8F6F\u4EF6\u5F00\u53D1\u4E2D\uFF0C\u5F53\u6211\u4EEC\u4F1A\u7528\u5230\u5927\u91CF\u7684\u521B\u5EFA\u67D0\u79CD\u3001\u67D0\u7C7B\u6216\u8005\u67D0\u6279\u5BF9\u8C61\u65F6\uFF0C\u5C31\u4F1A\u4F7F\u7528\u5230\u5DE5\u5382\u6A21\u5F0F.</p></li></ol><h3 id="_2-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 2. \u4EE3\u7801\u5B9E\u73B0</h3><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/image-20230128165347860.png?x-oss-process=style/shuiyin_1" alt="image-20230128165347860" style="zoom:80%;"><p>\u5B9A\u5236\u62AB\u8428\u4EE3\u7801\u540C\u4F20\u7EDF\u5F62\u5F0F\u3002</p><p>\u200B 1. \u7B80\u5355\u5DE5\u5382\u7C7B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u7B80\u5355\u5DE5\u5382\u7C7B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimpleFactory</span> <span class="token punctuation">{</span>

   <span class="token doc-comment comment">/**
    * \u6839\u636EorderType \u8FD4\u56DE\u5BF9\u5E94\u7684Pizza \u5BF9\u8C61 \u7B80\u5355\u5DE5\u5382\u7C7B
    */</span>
   <span class="token keyword">public</span> <span class="token class-name">Pizza</span> <span class="token function">createPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> orderType<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F7F\u7528\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;greek&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GreekPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         pizza<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot; \u5E0C\u814A\u62AB\u8428 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         pizza<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot; \u5976\u916A\u62AB\u8428 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;pepper&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PepperPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         pizza<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot; \u80E1\u6912\u62AB\u8428 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      <span class="token keyword">return</span> pizza<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>OrderPizza \u8BA2\u8D2D\u62AB\u8428</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderPizza</span> <span class="token punctuation">{</span>

   <span class="token doc-comment comment">/**
    * \u5B9A\u4E49\u4E00\u4E2A\u7B80\u5355\u5DE5\u5382\u5BF9\u8C61
    */</span>
   <span class="token class-name">SimpleFactory</span> simpleFactory<span class="token punctuation">;</span>
   <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

   <span class="token doc-comment comment">/**
    * \u6784\u9020\u5668
    */</span>
   <span class="token keyword">public</span> <span class="token class-name">OrderPizza</span><span class="token punctuation">(</span><span class="token class-name">SimpleFactory</span> simpleFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setFactory</span><span class="token punctuation">(</span>simpleFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFactory</span><span class="token punctuation">(</span><span class="token class-name">SimpleFactory</span> simpleFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u7528\u6237\u8F93\u5165\u7684</span>
      <span class="token class-name">String</span> orderType <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

      <span class="token comment">//\u8BBE\u7F6E\u7B80\u5355\u5DE5\u5382\u5BF9\u8C61</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>simpleFactory <span class="token operator">=</span> simpleFactory<span class="token punctuation">;</span>
      
      <span class="token keyword">do</span> <span class="token punctuation">{</span>
         orderType <span class="token operator">=</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
         pizza <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>simpleFactory<span class="token punctuation">.</span><span class="token function">createPizza</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">;</span>
         
         <span class="token comment">//\u8F93\u51FApizza</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>pizza <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u8BA2\u8D2D\u6210\u529F</span>
            pizza<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pizza<span class="token punctuation">.</span><span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pizza<span class="token punctuation">.</span><span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pizza<span class="token punctuation">.</span><span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u8BA2\u8D2D\u62AB\u8428\u5931\u8D25 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token doc-comment comment">/**
    * \u5199\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5BA2\u6237\u5E0C\u671B\u8BA2\u8D2D\u7684\u62AB\u8428\u79CD\u7C7B
    */</span>
   <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token class-name">BufferedReader</span> strin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;input pizza \u79CD\u7C7B:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">String</span> str <span class="token operator">=</span> strin<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> str<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>PizzaStore \u76F8\u5F53\u4E8E\u4E00\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u53D1\u51FA\u8BA2\u8D2D</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u76F8\u5F53\u4E8E\u4E00\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u53D1\u51FA\u8BA2\u8D2D
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PizzaStore</span> <span class="token punctuation">{</span>

   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u4F7F\u7528\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F</span>
      <span class="token keyword">new</span> <span class="token class-name">OrderPizza</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;~~\u9000\u51FA\u7A0B\u5E8F~~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u4EE3\u7801\u9759\u6001\u5F62\u5F0F\u7684\u6539\u9020" tabindex="-1"><a class="header-anchor" href="#_3-\u4EE3\u7801\u9759\u6001\u5F62\u5F0F\u7684\u6539\u9020" aria-hidden="true">#</a> 3. \u4EE3\u7801\u9759\u6001\u5F62\u5F0F\u7684\u6539\u9020</h3><ol><li>\u9759\u6001\u5DE5\u5382\u7C7B</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u7B80\u5355\u5DE5\u5382\u7C7B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimpleFactory</span> <span class="token punctuation">{</span>

   <span class="token doc-comment comment">/**
    * \u7B80\u5355\u5DE5\u5382\u6A21\u5F0F \u4E5F\u53EB \u9759\u6001\u5DE5\u5382\u6A21\u5F0F
    */</span>
   
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Pizza</span> <span class="token function">createPizza2</span><span class="token punctuation">(</span><span class="token class-name">String</span> orderType<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F7F\u7528\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;greek&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GreekPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         pizza<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot; \u5E0C\u814A\u62AB\u8428 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         pizza<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot; \u5976\u916A\u62AB\u8428 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;pepper&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PepperPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         pizza<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u80E1\u6912\u62AB\u8428&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      <span class="token keyword">return</span> pizza<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>OrderPizza \u8BA2\u8D2D\u62AB\u8428</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderPizza2</span> <span class="token punctuation">{</span>

   <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   <span class="token class-name">String</span> orderType <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

   <span class="token doc-comment comment">/**
    * \u6784\u9020\u5668
    */</span>
   <span class="token keyword">public</span> <span class="token class-name">OrderPizza2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      
      <span class="token keyword">do</span> <span class="token punctuation">{</span>
         orderType <span class="token operator">=</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         pizza <span class="token operator">=</span> <span class="token class-name">SimpleFactory</span><span class="token punctuation">.</span><span class="token function">createPizza2</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">;</span>

         <span class="token comment">// \u8F93\u51FApizza</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>pizza <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BA2\u8D2D\u6210\u529F</span>
            pizza<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pizza<span class="token punctuation">.</span><span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pizza<span class="token punctuation">.</span><span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pizza<span class="token punctuation">.</span><span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u8BA2\u8D2D\u62AB\u8428\u5931\u8D25 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token doc-comment comment">/**
    * \u5199\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5BA2\u6237\u5E0C\u671B\u8BA2\u8D2D\u7684\u62AB\u8428\u79CD\u7C7B
    */</span>
   <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token class-name">BufferedReader</span> strin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;input pizza \u79CD\u7C7B:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">String</span> str <span class="token operator">=</span> strin<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> str<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>PizzaStore \u76F8\u5F53\u4E8E\u4E00\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u53D1\u51FA\u8BA2\u8D2D</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u76F8\u5F53\u4E8E\u4E00\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u53D1\u51FA\u8BA2\u8D2D
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PizzaStore</span> <span class="token punctuation">{</span>

   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">new</span> <span class="token class-name">OrderPizza2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F" aria-hidden="true">#</a> 2.\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F</h2><p><strong>\u65B0\u7684\u9700\u6C42</strong></p><p>\u62AB\u8428\u9879\u76EE\u65B0\u7684\u9700\u6C42\uFF1A\u5BA2\u6237\u5728\u70B9\u62AB\u8428\u65F6\uFF0C\u53EF\u4EE5\u70B9\u4E0D\u540C\u53E3\u5473\u7684\u62AB\u8428\uFF0C\u6BD4\u5982 \u5317\u4EAC\u7684\u5976\u916Apizza\u3001\u5317\u4EAC\u7684\u80E1\u6912pizza \u6216\u8005\u662F\u4F26\u6566\u7684\u5976\u916Apizza\u3001\u4F26\u6566\u7684\u80E1\u6912pizza\u3002</p><p><strong>\u601D\u8DEF1</strong></p><p>\u4F7F\u7528\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\uFF0C\u521B\u5EFA\u4E0D\u540C\u7684\u7B80\u5355\u5DE5\u5382\u7C7B\uFF0C\u6BD4\u5982BJPizzaSimpleFactory\u3001LDPizzaSimpleFactory \u7B49\u7B49.\u4ECE\u5F53\u524D\u8FD9\u4E2A\u6848\u4F8B\u6765\u8BF4\uFF0C\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u662F\u8003\u8651\u5230\u9879\u76EE\u7684\u89C4\u6A21\uFF0C\u4EE5\u53CA\u8F6F\u4EF6\u7684\u53EF\u7EF4\u62A4\u6027\u3001\u53EF\u6269\u5C55\u6027\u5E76\u4E0D\u662F\u7279\u522B\u597D\u3002</p><p><strong>\u601D\u8DEF2</strong></p><p>\u4F7F\u7528\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u3002</p><h3 id="_1-\u57FA\u672C\u4ECB\u7ECD-1" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u4ECB\u7ECD-1" aria-hidden="true">#</a> 1. \u57FA\u672C\u4ECB\u7ECD</h3><p><strong>\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u8BBE\u8BA1\u65B9\u6848</strong>\uFF1A\u5C06\u62AB\u8428\u9879\u76EE\u7684\u5B9E\u4F8B\u5316\u529F\u80FD\u62BD\u8C61\u6210\u62BD\u8C61\u65B9\u6CD5\uFF0C\u5728\u4E0D\u540C\u7684\u53E3\u5473\u70B9\u9910\u5B50\u7C7B\u4E2D\u5177\u4F53\u5B9E\u73B0\u3002</p><p><strong>\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F</strong>\uFF1A\u5B9A\u4E49\u4E86\u4E00\u4E2A\u521B\u5EFA\u5BF9\u8C61\u7684\u62BD\u8C61\u65B9\u6CD5\uFF0C\u7531\u5B50\u7C7B\u51B3\u5B9A\u8981\u5B9E\u4F8B\u5316\u7684\u7C7B\u3002\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u5C06<strong>\u5BF9\u8C61\u7684\u5B9E\u4F8B\u5316\u63A8\u8FDF\u5230\u5B50\u7C7B</strong>\u3002</p><h3 id="_2-\u4EE3\u7801\u5B9E\u73B0-1" tabindex="-1"><a class="header-anchor" href="#_2-\u4EE3\u7801\u5B9E\u73B0-1" aria-hidden="true">#</a> 2. \u4EE3\u7801\u5B9E\u73B0</h3><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/image-20230128172512648.png?x-oss-process=style/shuiyin_1" alt="image-20230128172512648" style="zoom:67%;"><h4 id="_1-\u5236\u4F5C\u62AB\u8428-1" tabindex="-1"><a class="header-anchor" href="#_1-\u5236\u4F5C\u62AB\u8428-1" aria-hidden="true">#</a> 1. \u5236\u4F5C\u62AB\u8428</h4><ol><li>pizza \u62BD\u8C61\u7C7B\uFF1Aprepare \u51C6\u5907\u539F\u6750\u6599, \u4E0D\u540C\u7684\u62AB\u8428\u4E0D\u4E00\u6837\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u505A\u6210\u62BD\u8C61\u65B9\u6CD5</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u5C06Pizza \u7C7B\u505A\u6210\u62BD\u8C61
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>

   <span class="token doc-comment comment">/**
    * \u540D\u5B57
    */</span>
   <span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

   <span class="token doc-comment comment">/**
    * prepare \u51C6\u5907\u539F\u6750\u6599, \u4E0D\u540C\u7684\u62AB\u8428\u4E0D\u4E00\u6837\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u505A\u6210\u62BD\u8C61\u65B9\u6CD5
    */</span>
   <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


   <span class="token doc-comment comment">/**
    * bake
    */</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; baking;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token doc-comment comment">/**
    * cut
    */</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; cutting;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token doc-comment comment">/**
    * box \u6253\u5305
    */</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; boxing;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5317\u4EAC\u7684\u5976\u916Apizza BJCheesePizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BJCheesePizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u5317\u4EAC\u7684\u5976\u916Apizza&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u5317\u4EAC\u7684\u5976\u916Apizza \u51C6\u5907\u539F\u6750\u6599&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u5317\u4EAC\u7684\u80E1\u6912pizza BJPepperPizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BJPepperPizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u5317\u4EAC\u7684\u80E1\u6912pizza&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u5317\u4EAC\u7684\u80E1\u6912pizza \u51C6\u5907\u539F\u6750\u6599&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u4F26\u6566\u7684\u5976\u916Apizza LDCheesePizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LDCheesePizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span><span class="token punctuation">{</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F26\u6566\u7684\u5976\u916Apizza&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u4F26\u6566\u7684\u5976\u916Apizza \u51C6\u5907\u539F\u6750\u6599&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\u4F26\u6566\u7684\u80E1\u6912pizza LDPepperPizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LDPepperPizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span><span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F26\u6566\u7684\u80E1\u6912pizza&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u4F26\u6566\u7684\u80E1\u6912pizza \u51C6\u5907\u539F\u6750\u6599&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u8BA2\u8D2D\u62AB\u8428-1" tabindex="-1"><a class="header-anchor" href="#_2-\u8BA2\u8D2D\u62AB\u8428-1" aria-hidden="true">#</a> 2. \u8BA2\u8D2D\u62AB\u8428</h4><ol><li>OrderPizza\u62BD\u8C61\u7C7B\uFF1AcreatePizza\u62BD\u8C61\u65B9\u6CD5\uFF0C\u8BA9\u5404\u4E2A\u5DE5\u5382\u5B50\u7C7B\u81EA\u5DF1\u5B9E\u73B0\u3002</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">OrderPizza</span> <span class="token punctuation">{</span>

   <span class="token doc-comment comment">/**
    * \u5B9A\u4E49\u4E00\u4E2A\u62BD\u8C61\u65B9\u6CD5\uFF0CcreatePizza , \u8BA9\u5404\u4E2A\u5DE5\u5382\u5B50\u7C7B\u81EA\u5DF1\u5B9E\u73B0
    */</span>
   <span class="token keyword">abstract</span> <span class="token class-name">Pizza</span> <span class="token function">createPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> orderType<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token doc-comment comment">/**
    * \u6784\u9020\u5668
    */</span>
   <span class="token keyword">public</span> <span class="token class-name">OrderPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token comment">// \u8BA2\u8D2D\u62AB\u8428\u7684\u7C7B\u578B</span>
      <span class="token class-name">String</span> orderType<span class="token punctuation">;</span>
      <span class="token keyword">do</span> <span class="token punctuation">{</span>
         orderType <span class="token operator">=</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//\u62BD\u8C61\u65B9\u6CD5\uFF0C\u7531\u5DE5\u5382\u5B50\u7C7B\u5B8C\u6210</span>
         pizza <span class="token operator">=</span> <span class="token function">createPizza</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//\u8F93\u51FApizza \u5236\u4F5C\u8FC7\u7A0B</span>
         pizza<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         pizza<span class="token punctuation">.</span><span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         pizza<span class="token punctuation">.</span><span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         pizza<span class="token punctuation">.</span><span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         
      <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>


   <span class="token doc-comment comment">/**
    * \u5199\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5BA2\u6237\u5E0C\u671B\u8BA2\u8D2D\u7684\u62AB\u8428\u79CD\u7C7B
    * <span class="token keyword">@return</span>
    */</span>
   <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token class-name">BufferedReader</span> strin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;input pizza \u79CD\u7C7B:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">String</span> str <span class="token operator">=</span> strin<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> str<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5317\u4EACpizza BJOrderPizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BJOrderPizza</span> <span class="token keyword">extends</span> <span class="token class-name">OrderPizza</span> <span class="token punctuation">{</span>

   
   <span class="token annotation punctuation">@Override</span>
   <span class="token class-name">Pizza</span> <span class="token function">createPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> orderType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   
      <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>orderType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BJCheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>orderType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;pepper&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BJPepperPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token keyword">return</span> pizza<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u4F26\u6566pizza LDOrderPizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LDOrderPizza</span> <span class="token keyword">extends</span> <span class="token class-name">OrderPizza</span> <span class="token punctuation">{</span>

   
   <span class="token annotation punctuation">@Override</span>
   <span class="token class-name">Pizza</span> <span class="token function">createPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> orderType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   
      <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>orderType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LDCheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>orderType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;pepper&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LDPepperPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token keyword">return</span> pizza<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>PizzaStore \u76F8\u5F53\u4E8E\u4E00\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u53D1\u51FA\u8BA2\u8D2D</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PizzaStore</span> <span class="token punctuation">{</span>

   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">String</span> loc <span class="token operator">=</span> <span class="token string">&quot;bj&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>loc<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;bj&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">//\u521B\u5EFA\u5317\u4EAC\u53E3\u5473\u7684\u5404\u79CDPizza</span>
         <span class="token keyword">new</span> <span class="token class-name">BJOrderPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
         <span class="token comment">//\u521B\u5EFA\u4F26\u6566\u53E3\u5473\u7684\u5404\u79CDPizza</span>
         <span class="token keyword">new</span> <span class="token class-name">LDOrderPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>input pizza \u79CD\u7C7B:
cheese
 \u5317\u4EAC\u7684\u5976\u916Apizza \u51C6\u5907\u539F\u6750\u6599
\u5317\u4EAC\u7684\u5976\u916Apizza baking;
\u5317\u4EAC\u7684\u5976\u916Apizza cutting;
\u5317\u4EAC\u7684\u5976\u916Apizza boxing;
input pizza \u79CD\u7C7B:
pepper
 \u5317\u4EAC\u7684\u80E1\u6912pizza \u51C6\u5907\u539F\u6750\u6599
\u5317\u4EAC\u7684\u80E1\u6912pizza baking;
\u5317\u4EAC\u7684\u80E1\u6912pizza cutting;
\u5317\u4EAC\u7684\u80E1\u6912pizza boxing;
input pizza \u79CD\u7C7B:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> 3.\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F</h2><h3 id="_1-\u57FA\u672C\u4ECB\u7ECD-2" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u4ECB\u7ECD-2" aria-hidden="true">#</a> 1. \u57FA\u672C\u4ECB\u7ECD</h3><ol><li><p>\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\uFF1A\u5B9A\u4E49\u4E86\u4E00\u4E2A<strong>interface</strong>\u7528\u4E8E\u521B\u5EFA\u76F8\u5173\u6216\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\u5BF9\u8C61\u7C07\uFF0C\u800C\u65E0\u9700\u6307\u660E\u5177\u4F53\u7684\u7C7B</p></li><li><p>\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u53EF\u4EE5\u5C06<strong>\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F</strong>\u548C<strong>\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F</strong>\u8FDB\u884C\u6574\u5408\u3002</p></li><li><p>\u4ECE\u8BBE\u8BA1\u5C42\u9762\u770B\uFF0C\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u5C31\u662F\u5BF9\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u7684\u6539\u8FDB(\u6216\u8005\u79F0\u4E3A\u8FDB\u4E00\u6B65\u7684\u62BD\u8C61)\u3002</p></li><li><p>\u5C06\u5DE5\u5382\u62BD\u8C61\u6210\u4E24\u5C42\uFF0CAbsFactory(\u62BD\u8C61\u5DE5\u5382) \u548C \u5177\u4F53\u5B9E\u73B0\u7684\u5DE5\u5382\u5B50\u7C7B\u3002\u7A0B\u5E8F\u5458\u53EF\u4EE5\u6839\u636E\u521B\u5EFA\u5BF9\u8C61\u7C7B\u578B\u4F7F\u7528\u5BF9\u5E94\u7684\u5DE5\u5382\u5B50\u7C7B\u3002\u8FD9\u6837\u5C06\u5355\u4E2A\u7684\u7B80\u5355\u5DE5\u5382\u7C7B\u53D8\u6210\u4E86<strong>\u5DE5\u5382\u7C07</strong>\uFF0C\u5229\u4E8E\u4EE3\u7801\u7684\u7EF4\u62A4\u548C\u6269\u5C55\u3002</p></li><li><p>\u7C7B\u56FE</p><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/image-20230201115337241.png?x-oss-process=style/shuiyin_1" alt="image-20230201115337241" style="zoom:67%;"></li></ol><h3 id="_2-\u4EE3\u7801\u5B9E\u73B0-2" tabindex="-1"><a class="header-anchor" href="#_2-\u4EE3\u7801\u5B9E\u73B0-2" aria-hidden="true">#</a> 2. \u4EE3\u7801\u5B9E\u73B0</h3><h4 id="_1-\u5236\u4F5C\u62AB\u8428-2" tabindex="-1"><a class="header-anchor" href="#_1-\u5236\u4F5C\u62AB\u8428-2" aria-hidden="true">#</a> 1. \u5236\u4F5C\u62AB\u8428</h4><ol><li>pizza \u62BD\u8C61\u7C7B\uFF1Aprepare \u51C6\u5907\u539F\u6750\u6599, \u4E0D\u540C\u7684\u62AB\u8428\u4E0D\u4E00\u6837\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u505A\u6210\u62BD\u8C61\u65B9\u6CD5</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u5C06Pizza \u7C7B\u505A\u6210\u62BD\u8C61
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>

   <span class="token doc-comment comment">/**
    * \u540D\u5B57
    */</span>
   <span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

   <span class="token doc-comment comment">/**
    * prepare \u51C6\u5907\u539F\u6750\u6599, \u4E0D\u540C\u7684\u62AB\u8428\u4E0D\u4E00\u6837\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u505A\u6210\u62BD\u8C61\u65B9\u6CD5
    */</span>
   <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


   <span class="token doc-comment comment">/**
    * bake
    */</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; baking;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token doc-comment comment">/**
    * cut
    */</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; cutting;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token doc-comment comment">/**
    * box \u6253\u5305
    */</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; boxing;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5317\u4EAC\u7684\u5976\u916Apizza BJCheesePizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BJCheesePizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u5317\u4EAC\u7684\u5976\u916Apizza&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u5317\u4EAC\u7684\u5976\u916Apizza \u51C6\u5907\u539F\u6750\u6599&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u5317\u4EAC\u7684\u80E1\u6912pizza BJPepperPizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BJPepperPizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u5317\u4EAC\u7684\u80E1\u6912pizza&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u5317\u4EAC\u7684\u80E1\u6912pizza \u51C6\u5907\u539F\u6750\u6599&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u4F26\u6566\u7684\u5976\u916Apizza LDCheesePizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LDCheesePizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span><span class="token punctuation">{</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F26\u6566\u7684\u5976\u916Apizza&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u4F26\u6566\u7684\u5976\u916Apizza \u51C6\u5907\u539F\u6750\u6599&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\u4F26\u6566\u7684\u80E1\u6912pizza LDPepperPizza</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LDPepperPizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span><span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F26\u6566\u7684\u80E1\u6912pizza&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; \u4F26\u6566\u7684\u80E1\u6912pizza \u51C6\u5907\u539F\u6750\u6599&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u8BA2\u8D2D\u62AB\u8428-2" tabindex="-1"><a class="header-anchor" href="#_2-\u8BA2\u8D2D\u62AB\u8428-2" aria-hidden="true">#</a> 2. \u8BA2\u8D2D\u62AB\u8428</h4><ol><li>AbsFactory\uFF1A\u4E00\u4E2A\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u62BD\u8C61\u5C42(\u63A5\u53E3)</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u4E00\u4E2A\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7684\u62BD\u8C61\u5C42(\u63A5\u53E3)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AbsFactory</span> <span class="token punctuation">{</span>
   <span class="token doc-comment comment">/**
    * \u8BA9\u4E0B\u9762\u7684\u5DE5\u5382\u5B50\u7C7B\u6765 \u5177\u4F53\u5B9E\u73B0
    */</span>
   <span class="token keyword">public</span> <span class="token class-name">Pizza</span> <span class="token function">createPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> orderType<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>BJFactory\uFF1A\u5317\u4EAC\u5DE5\u5382\u5B50\u7C7B</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u8FD9\u662F\u5DE5\u5382\u5B50\u7C7B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BJFactory</span> <span class="token keyword">implements</span> <span class="token class-name">AbsFactory</span> <span class="token punctuation">{</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">Pizza</span> <span class="token function">createPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> orderType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;~\u4F7F\u7528\u7684\u662F\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>orderType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BJCheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>orderType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;pepper&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BJPepperPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> pizza<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>LDFactory\uFF1A\u4F26\u6566\u5DE5\u5382\u5B50\u7C7B</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LDFactory</span> <span class="token keyword">implements</span> <span class="token class-name">AbsFactory</span> <span class="token punctuation">{</span>

   <span class="token annotation punctuation">@Override</span>
   <span class="token keyword">public</span> <span class="token class-name">Pizza</span> <span class="token function">createPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> orderType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;~\u4F7F\u7528\u7684\u662F\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>orderType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LDCheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>orderType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;pepper&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LDPepperPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> pizza<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>OrderPizza\uFF1A</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderPizza</span> <span class="token punctuation">{</span>

   <span class="token class-name">AbsFactory</span> factory<span class="token punctuation">;</span>

   <span class="token doc-comment comment">/**
    * \u6784\u9020\u5668
    * <span class="token keyword">@param</span> <span class="token parameter">factory</span>
    */</span>
   <span class="token keyword">public</span> <span class="token class-name">OrderPizza</span><span class="token punctuation">(</span><span class="token class-name">AbsFactory</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setFactory</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">setFactory</span><span class="token punctuation">(</span><span class="token class-name">AbsFactory</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token comment">// \u7528\u6237\u8F93\u5165</span>
      <span class="token class-name">String</span> orderType <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>factory <span class="token operator">=</span> factory<span class="token punctuation">;</span>
      <span class="token keyword">do</span> <span class="token punctuation">{</span>
         orderType <span class="token operator">=</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// factory \u53EF\u80FD\u662F\u5317\u4EAC\u7684\u5DE5\u5382\u5B50\u7C7B\uFF0C\u4E5F\u53EF\u80FD\u662F\u4F26\u6566\u7684\u5DE5\u5382\u5B50\u7C7B</span>
         pizza <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createPizza</span><span class="token punctuation">(</span>orderType<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// \u8BA2\u8D2Dok</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>pizza <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pizza<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pizza<span class="token punctuation">.</span><span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pizza<span class="token punctuation">.</span><span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pizza<span class="token punctuation">.</span><span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BA2\u8D2D\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token doc-comment comment">/**
    * \u5199\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5BA2\u6237\u5E0C\u671B\u8BA2\u8D2D\u7684\u62AB\u8428\u79CD\u7C7B
    * <span class="token keyword">@return</span>
    */</span>
   <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token class-name">BufferedReader</span> strin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;input pizza \u79CD\u7C7B:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">String</span> str <span class="token operator">=</span> strin<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> str<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>PizzaStore\uFF1A\u76F8\u5F53\u4E8E\u4E00\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u53D1\u51FA\u8BA2\u8D2D</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PizzaStore</span> <span class="token punctuation">{</span>

   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token comment">//new OrderPizza(new BJFactory());</span>
      <span class="token keyword">new</span> <span class="token class-name">OrderPizza</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LDFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5DE5\u5382\u6A21\u5F0Fjdk\u6E90\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_4-\u5DE5\u5382\u6A21\u5F0Fjdk\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a> 4. \u5DE5\u5382\u6A21\u5F0FJDK\u6E90\u7801\u5206\u6790</h2><p><strong>\u5DE5\u5382\u6A21\u5F0F\u5728JDK-Calendar\u5E94\u7528\u7684\u6E90\u7801\u5206\u6790</strong></p><ol><li><p>JDK \u4E2D\u7684Calendar\u7C7B\u4E2D\uFF0C\u5C31\u4F7F\u7528\u4E86\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F</p></li><li><p>\u6E90\u7801\u5206\u6790+Debug\u6E90\u7801+\u8BF4\u660E</p></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Factory</span> <span class="token punctuation">{</span>

   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// TODO Auto-generated method stub</span>
      <span class="token comment">// getInstance \u662F Calendar \u9759\u6001\u65B9\u6CD5</span>
      <span class="token class-name">Calendar</span> cal <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u6CE8\u610F\u6708\u4EFD\u4E0B\u6807\u4ECE0\u5F00\u59CB\uFF0C\u6240\u4EE5\u53D6\u6708\u4EFD\u8981+1</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5E74:&quot;</span> <span class="token operator">+</span> cal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">YEAR</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6708:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>cal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MONTH</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u65E5:&quot;</span> <span class="token operator">+</span> cal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_MONTH</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u65F6:&quot;</span> <span class="token operator">+</span> cal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">HOUR_OF_DAY</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5206:&quot;</span> <span class="token operator">+</span> cal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MINUTE</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u79D2:&quot;</span> <span class="token operator">+</span> cal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">SECOND</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Calendar.getInstance()</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Calendar</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createCalendar</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token class-name">Locale<span class="token punctuation">.</span>Category</span><span class="token punctuation">.</span><span class="token constant">FORMAT</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>createCalendar</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Calendar</span> <span class="token function">createCalendar</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span> zone<span class="token punctuation">,</span>
                                       <span class="token class-name">Locale</span> aLocale<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">CalendarProvider</span> provider <span class="token operator">=</span>
        <span class="token class-name">LocaleProviderAdapter</span><span class="token punctuation">.</span><span class="token function">getAdapter</span><span class="token punctuation">(</span><span class="token class-name">CalendarProvider</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span>
                             <span class="token punctuation">.</span><span class="token function">getCalendarProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>provider <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> provider<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IllegalArgumentException</span> iae<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// fall back to the default instantiation</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Calendar</span> cal <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>aLocale<span class="token punctuation">.</span><span class="token function">hasExtensions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> caltype <span class="token operator">=</span> aLocale<span class="token punctuation">.</span><span class="token function">getUnicodeLocaleType</span><span class="token punctuation">(</span><span class="token string">&quot;ca&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>caltype <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>caltype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;buddhist&quot;</span><span class="token operator">:</span>
            cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BuddhistCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;japanese&quot;</span><span class="token operator">:</span>
                cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JapaneseImperialCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;gregory&quot;</span><span class="token operator">:</span>
                cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cal <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// If no known calendar type is explicitly specified,</span>
        <span class="token comment">// perform the traditional way to create a Calendar:</span>
        <span class="token comment">// create a BuddhistCalendar for th_TH locale,</span>
        <span class="token comment">// a JapaneseImperialCalendar for ja_JP_JP locale, or</span>
        <span class="token comment">// a GregorianCalendar for any other locales.</span>
        <span class="token comment">// NOTE: The language, country and variant strings are interned.</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>aLocale<span class="token punctuation">.</span><span class="token function">getLanguage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;th&quot;</span> <span class="token operator">&amp;&amp;</span> aLocale<span class="token punctuation">.</span><span class="token function">getCountry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;TH&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BuddhistCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>aLocale<span class="token punctuation">.</span><span class="token function">getVariant</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;JP&quot;</span> <span class="token operator">&amp;&amp;</span> aLocale<span class="token punctuation">.</span><span class="token function">getLanguage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;ja&quot;</span>
                   <span class="token operator">&amp;&amp;</span> aLocale<span class="token punctuation">.</span><span class="token function">getCountry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;JP&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JapaneseImperialCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_5-\u603B\u7ED3" aria-hidden="true">#</a> 5. \u603B\u7ED3</h2><p>\u5DE5\u5382\u6A21\u5F0F\u5176\u5B9E\u662F\u52A0\u4E86\u4E00\u5C42\u63A5\u53E3\u901A\u8FC7\u589E\u52A0\u63A5\u53E3\u6216\u8005\u7236\u7C7B\u7684\u5F62\u5F0F\u53BB\u964D\u4F4E\u8026\u5408\u6027\uFF0C\u5E76\u4E14\u5982\u679C\u6709\u529F\u80FD\u7684\u6269\u5F20\uFF0C\u662F\u4E0D\u9700\u8981\u5728\u539F\u6765\u7684\u4EE3\u7801\u4E0A\u6539\u52A8\u7684\u3002</p><ol><li>\u5DE5\u5382\u6A21\u5F0F\u7684\u610F\u4E49</li></ol><p>\u5C06\u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u4EE3\u7801\u63D0\u53D6\u51FA\u6765\uFF0C\u653E\u5230\u4E00\u4E2A\u7C7B\u4E2D\u7EDF\u4E00\u7BA1\u7406\u548C\u7EF4\u62A4\uFF0C\u8FBE\u5230\u548C\u4E3B\u9879\u76EE\u7684\u4F9D\u8D56\u5173\u7CFB\u7684\u89E3\u8026\u3002\u4ECE\u800C\u63D0\u9AD8\u9879\u76EE\u7684\u6269\u5C55\u548C\u7EF4\u62A4\u6027\u3002</p><ol start="2"><li><p>\u4E09\u79CD\u5DE5\u5382\u6A21\u5F0F (\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u3001\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u3001\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F)</p></li><li><p>\u8BBE\u8BA1\u6A21\u5F0F\u7684<strong>\u4F9D\u8D56\u62BD\u8C61</strong>\u539F\u5219</p></li></ol><p>\u200B \uF0D8 \u521B\u5EFA\u5BF9\u8C61\u5B9E\u4F8B\u65F6\uFF0C\u4E0D\u8981\u76F4\u63A5 new \u7C7B, \u800C\u662F\u628A\u8FD9\u4E2Anew \u7C7B\u7684\u52A8\u4F5C\u653E\u5728\u4E00\u4E2A\u5DE5\u5382\u7684\u65B9\u6CD5\u4E2D\uFF0C\u5E76\u8FD4\u56DE\u3002\u6709\u7684\u4E66\u4E0A\u8BF4\uFF0C\u53D8\u91CF\u4E0D\u8981\u76F4\u63A5\u6301\u6709\u5177\u4F53\u7C7B\u7684\u5F15\u7528\u3002</p><p>\u200B \uF0D8 \u4E0D\u8981\u8BA9\u7C7B\u7EE7\u627F\u5177\u4F53\u7C7B\uFF0C\u800C\u662F\u7EE7\u627F\u62BD\u8C61\u7C7B\u6216\u8005\u662F\u5B9E\u73B0interface(\u63A5\u53E3)</p><p>\u200B \uF0D8 \u4E0D\u8981\u8986\u76D6\u57FA\u7C7B\u4E2D\u5DF2\u7ECF\u5B9E\u73B0\u7684\u65B9\u6CD5\u3002</p>`,123),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","5.Java\u8BBE\u8BA1\u6A21\u5F0F-\u5DE5\u5382\u6A21\u5F0F.html.vue"]]);export{k as default};
