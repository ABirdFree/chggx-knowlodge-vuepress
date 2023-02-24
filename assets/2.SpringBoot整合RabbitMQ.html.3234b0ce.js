import{_ as p,r as o,o as c,c as i,b as s,d as n,e,a}from"./app.099ebd34.js";const l={},u=a(`<h1 id="springboot\u6574\u5408rabbitmq" tabindex="-1"><a class="header-anchor" href="#springboot\u6574\u5408rabbitmq" aria-hidden="true">#</a> SpringBoot\u6574\u5408RabbitMQ</h1><h2 id="_1-\u642D\u5EFA\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_1-\u642D\u5EFA\u73AF\u5883" aria-hidden="true">#</a> 1. \u642D\u5EFA\u73AF\u5883</h2><h4 id="_1-1-\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4F9D\u8D56" aria-hidden="true">#</a> 1.1 \u4F9D\u8D56</h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--RabbitMQ\u4F9D\u8D56--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-amqp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-\u914D\u7F6E\u6587\u4EF6-yml" tabindex="-1"><a class="header-anchor" href="#_1-2-\u914D\u7F6E\u6587\u4EF6-yml" aria-hidden="true">#</a> 1.2 \u914D\u7F6E\u6587\u4EF6(yml)</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token comment"># \u9879\u76EE\u540D\u79F0</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> rabbitmq<span class="token punctuation">-</span>springboot

  <span class="token comment"># \u914D\u7F6ERabbitMQ</span>
  <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> 116.196.118.167 <span class="token comment"># \u4E3B\u673A</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5672</span> <span class="token comment"># \u7AEF\u53E3\u53F7</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> chggx <span class="token comment"># \u7528\u6237\u540D</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> Llxc326868 <span class="token comment"># \u5BC6\u7801</span>
    <span class="token key atrule">virtual-host</span><span class="token punctuation">:</span> /virtual_chggx <span class="token comment"># \u7C7B\u4F3C\u4E8E\u6570\u636E\u5E93</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#_1-3-\u6A21\u677F" aria-hidden="true">#</a> 1.3 \u6A21\u677F</h4><p><code>RabbitTemplate</code> \u7528\u6765\u7B80\u5316\u64CD\u4F5C \u4F7F\u7528\u65F6\u5019\u76F4\u63A5\u5728\u9879\u76EE\u4E2D\u6CE8\u5165\u5373\u53EF\u4F7F\u7528</p><p><code>\u53EA\u6709\u6D88\u8D39\u8005\u5B58\u5728\u65F6,\u624D\u521B\u5EFA\u961F\u5217,\u4EA4\u6362\u673A</code></p>`,9),d={id:"_2-hello-world\u6A21\u578B-\u7B80\u5355\u961F\u5217",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#_2-hello-world\u6A21\u578B-\u7B80\u5355\u961F\u5217","aria-hidden":"true"},"#",-1),k={href:"https://www.rabbitmq.com/tutorials/tutorial-one-python.html",target:"_blank",rel:"noopener noreferrer"},v=a(`<h4 id="\u751F\u4EA7\u8005" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u8005" aria-hidden="true">#</a> \u751F\u4EA7\u8005</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: CHGGX
 * @Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> \u7B80\u5355\u961F\u5217\u751F\u4EA7\u8005 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token annotation punctuation">@SpringBootTest</span><span class="token punctuation">(</span>classes <span class="token operator">=</span> <span class="token class-name">RabbitmaSpringbootApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpProducer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6CE8\u5165RabbitTemplate
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u961F\u5217
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">QUEUE_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;sp_queue&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7B80\u5355\u961F\u5217\u751F\u4EA7\u8005
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53D1\u9001\u7684\u6D88\u606F</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;hello simple !&quot;</span><span class="token punctuation">;</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token constant">QUEUE_NAME</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6D88\u8D39\u8005" tabindex="-1"><a class="header-anchor" href="#\u6D88\u8D39\u8005" aria-hidden="true">#</a> \u6D88\u8D39\u8005</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: CHGGX
 * @Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> \u7B80\u5355\u961F\u5217\u6D88\u8D39\u8005 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queuesToDeclare <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;sp_queue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpConsumer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> \u76D1\u542C\u7684\u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@RabbitHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sp receive msg:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>@RabbitListener</code>: \u4F5C\u7528\u5728\u7C7B\u4E0A.\u65B9\u6CD5\u4E0A\u6DFB\u52A0<code>@RabbitHandler</code></p></blockquote>`,5),m={id:"_3-work\u6A21\u578B\u4F7F\u7528-\u5DE5\u4F5C\u961F\u5217",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#_3-work\u6A21\u578B\u4F7F\u7528-\u5DE5\u4F5C\u961F\u5217","aria-hidden":"true"},"#",-1),g={href:"https://www.rabbitmq.com/tutorials/tutorial-two-python.html",target:"_blank",rel:"noopener noreferrer"},h=a(`<h3 id="_3-1-\u8F6E\u8BE2\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-1-\u8F6E\u8BE2\u6A21\u5F0F" aria-hidden="true">#</a> 3.1 \u8F6E\u8BE2\u6A21\u5F0F</h3><ul><li>\u4F60\u4E00\u4E2A\u6211\u4E00\u4E2A,\u5E73\u5747\u5206\u53D1</li></ul><h4 id="\u751F\u4EA7\u8005-1" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u8005-1" aria-hidden="true">#</a> \u751F\u4EA7\u8005</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: CHGGX
 * @Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> \u5DE5\u4F5C\u961F\u5217\u751F\u4EA7\u8005(\u8F6E\u8BE2\u5206\u53D1) <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token annotation punctuation">@SpringBootTest</span><span class="token punctuation">(</span>classes <span class="token operator">=</span> <span class="token class-name">RabbitmaSpringbootApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WorkProducer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6CE8\u5165RabbitTemplate
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u961F\u5217
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">QUEUE_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;work_queue&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7B80\u5355\u961F\u5217\u751F\u4EA7\u8005
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u53D1\u9001\u7684\u6D88\u606F</span>
            <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;hello work robin !&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
            rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token constant">QUEUE_NAME</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6D88\u8D39\u8005-1" tabindex="-1"><a class="header-anchor" href="#\u6D88\u8D39\u8005-1" aria-hidden="true">#</a> \u6D88\u8D39\u8005</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: CHGGX
 * @Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> \u5DE5\u4F5C\u961F\u5217\u6D88\u8D39\u8005(\u8F6E\u8BE2\u5206\u53D1) <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WorkConsumer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6D88\u8D39\u8005
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> \u76D1\u542C\u7684\u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queuesToDeclare <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;work_queue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive01</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;[1] work receive msg:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D88\u8D39\u8005
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> \u76D1\u542C\u7684\u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queuesToDeclare <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;work_queue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive02</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;[2] work receive msg:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>@RabbitListener</code>: \u4F5C\u7528\u5728\u65B9\u6CD5\u4E0A</p></blockquote><h3 id="_2-fair-dipatch\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-fair-dipatch\u6A21\u5F0F" aria-hidden="true">#</a> 2. fair dipatch\u6A21\u5F0F</h3><ul><li>\u80FD\u8005\u591A\u52B3</li></ul>`,9),y={id:"_4-fanout-\u5E7F\u64AD\u6A21\u578B-publish-subscribe",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#_4-fanout-\u5E7F\u64AD\u6A21\u578B-publish-subscribe","aria-hidden":"true"},"#",-1),q={href:"https://www.rabbitmq.com/tutorials/tutorial-three-python.html",target:"_blank",rel:"noopener noreferrer"},_=a(`<h4 id="\u751F\u4EA7\u8005-2" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u8005-2" aria-hidden="true">#</a> \u751F\u4EA7\u8005</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: CHGGX
 * @Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> \u53D1\u5E03\u8BA2\u9605\u961F\u5217\u751F\u4EA7\u8005(\u5E7F\u64AD\u6A21\u578B fanout\u5206\u53D1) <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token annotation punctuation">@SpringBootTest</span><span class="token punctuation">(</span>classes <span class="token operator">=</span> <span class="token class-name">RabbitmaSpringbootApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PsProducer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6CE8\u5165RabbitTemplate
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4EA4\u6362\u673A
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">EXCHANGE_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;ps_exchange&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u53D1\u5E03\u8BA2\u9605\u961F\u5217\u751F\u4EA7\u8005
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53D1\u9001\u7684\u6D88\u606F</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;hello ps fanout !&quot;</span><span class="token punctuation">;</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token constant">EXCHANGE_NAME</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6D88\u8D39\u8005-2" tabindex="-1"><a class="header-anchor" href="#\u6D88\u8D39\u8005-2" aria-hidden="true">#</a> \u6D88\u8D39\u8005</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: CHGGX
 * @Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> \u53D1\u5E03\u8BA2\u9605\u961F\u5217\u6D88\u8D39\u8005 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PsConsumer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6D88\u8D39\u8005
     * bindings: \u7ED1\u5B9A\u4EA4\u6362\u673A\u548C\u961F\u5217
     *
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> \u76D1\u542C\u7684\u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">,</span> <span class="token comment">// \u521B\u5EFA\u4E34\u65F6\u961F\u5217</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;ps_exchange&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;fanout&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u8981\u7ED1\u5B9A\u7684\u4EA4\u6362\u673A\u540D\u79F0,\u7C7B\u578Bfanout\u5206\u53D1</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive01</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;[1] ps receive msg:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D88\u8D39\u8005
     * bindings: \u7ED1\u5B9A\u4EA4\u6362\u673A\u548C\u961F\u5217
     *
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> \u76D1\u542C\u7684\u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">,</span> <span class="token comment">// \u521B\u5EFA\u4E34\u65F6\u961F\u5217</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;ps_exchange&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;fanout&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u8981\u7ED1\u5B9A\u7684\u4EA4\u6362\u673A\u540D\u79F0,\u7C7B\u578Bfanout\u5206\u53D1</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive02</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;[2] ps receive msg:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),f={id:"_5-direct-\u8DEF\u7531\u6A21\u578B-routing",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#_5-direct-\u8DEF\u7531\u6A21\u578B-routing","aria-hidden":"true"},"#",-1),S={href:"https://www.rabbitmq.com/tutorials/tutorial-four-python.html",target:"_blank",rel:"noopener noreferrer"},R=a(`<h4 id="\u751F\u4EA7\u8005-3" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u8005-3" aria-hidden="true">#</a> \u751F\u4EA7\u8005</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: CHGGX
 * @Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> Route\u6A21\u5F0F\u751F\u4EA7\u8005(direct) <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token annotation punctuation">@SpringBootTest</span><span class="token punctuation">(</span>classes <span class="token operator">=</span> <span class="token class-name">RabbitmaSpringbootApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RtProducer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6CE8\u5165RabbitTemplate
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4EA4\u6362\u673A
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">EXCHANGE_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;rt_exchange&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u53D1\u5E03\u8BA2\u9605\u961F\u5217\u751F\u4EA7\u8005
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53D1\u9001\u7684\u6D88\u606F</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;hello ps info route direct !&quot;</span><span class="token punctuation">;</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token constant">EXCHANGE_NAME</span><span class="token punctuation">,</span> <span class="token string">&quot;waring&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6D88\u8D39\u8005-3" tabindex="-1"><a class="header-anchor" href="#\u6D88\u8D39\u8005-3" aria-hidden="true">#</a> \u6D88\u8D39\u8005</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: CHGGX
 * @Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> Route\u6A21\u5F0F\u6D88\u8D39\u8005(direct) <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RtConsumer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6D88\u8D39\u8005
     * bindings: \u7ED1\u5B9A\u4EA4\u6362\u673A\u548C\u961F\u5217
     *
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> \u76D1\u542C\u7684\u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">,</span> <span class="token comment">// \u521B\u5EFA\u4E34\u65F6\u961F\u5217</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;rt_exchange&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u8981\u7ED1\u5B9A\u7684\u4EA4\u6362\u673A\u540D\u79F0,\u7C7B\u578Bdirect</span>
                    key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;waring&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">}</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive01</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;[1] ps receive msg:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D88\u8D39\u8005
     * bindings: \u7ED1\u5B9A\u4EA4\u6362\u673A\u548C\u961F\u5217
     *
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> \u76D1\u542C\u7684\u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">,</span> <span class="token comment">// \u521B\u5EFA\u4E34\u65F6\u961F\u5217</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;rt_exchange&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u8981\u7ED1\u5B9A\u7684\u4EA4\u6362\u673A\u540D\u79F0,\u7C7B\u578Bdirect</span>
                    key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;waring&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">}</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive02</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;[2] ps receive msg:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u751F\u4EA7\u8005\u7684routeKey\u8BBE\u7F6E\u7684key,\u5F53\u6D88\u8D39\u8005\u4E2D\u7684key\u4E2D\u4E0D\u5305\u542Broutekey\u7684key\u65F6,\u6D88\u8D39\u8005\u63A5\u53D7\u6D88\u606F,\u53CD\u4E4B\u4E0D\u63A5\u53D7</p></blockquote>`,5),A={id:"_6-topic-\u4E3B\u9898\u6A21\u5F0F-topics",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#_6-topic-\u4E3B\u9898\u6A21\u5F0F-topics","aria-hidden":"true"},"#",-1),T={href:"https://www.rabbitmq.com/tutorials/tutorial-five-python.html",target:"_blank",rel:"noopener noreferrer"},j=a(`<ul><li><p>\u901A\u914D\u7B26</p><p>*: \u5339\u914D\u5355\u4E2A</p><p>\u200B a.* a.save/a.b</p><p>#: \u5339\u914D\u591A\u4E2A</p><p>\u200B a.# a.b/a.b.c/a.b.c.d</p></li></ul><h4 id="\u751F\u4EA7\u8005-4" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u8005-4" aria-hidden="true">#</a> \u751F\u4EA7\u8005</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: CHGGX
 * @Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> \u8BA2\u9605\u6A21\u5F0F\u751F\u4EA7\u8005(topic) <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token annotation punctuation">@SpringBootTest</span><span class="token punctuation">(</span>classes <span class="token operator">=</span> <span class="token class-name">RabbitmaSpringbootApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TpProducer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6CE8\u5165RabbitTemplate
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4EA4\u6362\u673A
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">EXCHANGE_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;tp_exchange&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u751F\u4EA7\u8005\u961F\u5217\u751F\u4EA7\u8005
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53D1\u9001\u7684\u6D88\u606F</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;hello ps user.save topic !&quot;</span><span class="token punctuation">;</span>
        rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token constant">EXCHANGE_NAME</span><span class="token punctuation">,</span> <span class="token string">&quot;user.save&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6D88\u8D39\u8005-4" tabindex="-1"><a class="header-anchor" href="#\u6D88\u8D39\u8005-4" aria-hidden="true">#</a> \u6D88\u8D39\u8005</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author: CHGGX
 * @Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> \u8BA2\u9605\u6A21\u5F0F\u6D88\u8D39\u8005(topic) <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TpConsumer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6D88\u8D39\u8005
     * bindings: \u7ED1\u5B9A\u4EA4\u6362\u673A\u548C\u961F\u5217
     *
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> \u76D1\u542C\u7684\u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">,</span> <span class="token comment">// \u521B\u5EFA\u4E34\u65F6\u961F\u5217</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;tp_exchange&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;topic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u8981\u7ED1\u5B9A\u7684\u4EA4\u6362\u673A\u540D\u79F0,\u7C7B\u578Btopic</span>
                    key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;order.#&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;produce.#&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;user.*&quot;</span><span class="token punctuation">}</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive01</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;[1] tp receive msg:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D88\u8D39\u8005
     * bindings: \u7ED1\u5B9A\u4EA4\u6362\u673A\u548C\u961F\u5217
     *
     * <span class="token keyword">@param</span> <span class="token parameter">message</span> \u76D1\u542C\u7684\u6D88\u606F
     */</span>
    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>
                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">,</span> <span class="token comment">// \u521B\u5EFA\u4E34\u65F6\u961F\u5217</span>
                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;tp_exchange&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;topic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u8981\u7ED1\u5B9A\u7684\u4EA4\u6362\u673A\u540D\u79F0,\u7C7B\u578Btopic</span>
                    key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;user.save&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;user.*&quot;</span><span class="token punctuation">}</span>
            <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive02</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;[2] tp receive msg:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4EE5\u4E0A\u6240\u6709\u7684\u961F\u5217\u57FA\u4E8E\u6CE8\u89E3\u5F00\u53D1</p></blockquote>`,6);function C(G,Q){const t=o("ExternalLinkIcon");return c(),i("div",null,[u,s("h2",d,[r,n(" 2. hello world\u6A21\u578B ("),s("a",k,[n("\u7B80\u5355\u961F\u5217"),e(t)]),n(")")]),v,s("h2",m,[b,n(" 3. work\u6A21\u578B\u4F7F\u7528("),s("a",g,[n("\u5DE5\u4F5C\u961F\u5217"),e(t)]),n(")")]),h,s("h2",y,[w,n(" 4. Fanout \u5E7F\u64AD\u6A21\u578B ("),s("a",q,[n("Publish/Subscribe"),e(t)]),n(")")]),_,s("h2",f,[x,n(" 5. Direct \u8DEF\u7531\u6A21\u578B ("),s("a",S,[n("Routing"),e(t)]),n(")")]),R,s("h2",A,[E,n(" 6. Topic \u4E3B\u9898\u6A21\u5F0F ("),s("a",T,[n("Topics"),e(t)]),n(")")]),j])}const H=p(l,[["render",C],["__file","2.SpringBoot\u6574\u5408RabbitMQ.html.vue"]]);export{H as default};
