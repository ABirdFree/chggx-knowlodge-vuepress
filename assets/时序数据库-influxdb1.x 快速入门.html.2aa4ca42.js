import{_ as n,o as s,c as a,a as e}from"./app.099ebd34.js";const i={},l=e(`<h1 id="\u65F6\u5E8F\u6570\u636E\u5E93-influxdb1-x-\u5FEB\u901F\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#\u65F6\u5E8F\u6570\u636E\u5E93-influxdb1-x-\u5FEB\u901F\u5165\u95E8" aria-hidden="true">#</a> \u65F6\u5E8F\u6570\u636E\u5E93-influxdb1.x \u5FEB\u901F\u5165\u95E8</h1><h2 id="_1-influxdb1-x-docker\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-influxdb1-x-docker\u5B89\u88C5" aria-hidden="true">#</a> 1. InfluxDB1.x Docker\u5B89\u88C5</h2><h3 id="_1-docker\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-docker\u5B89\u88C5" aria-hidden="true">#</a> 1. docker\u5B89\u88C5</h3><blockquote><p>docker\u5B89\u88C5InfluxDB1.x \uFF08influxdb1.8.4\uFF09</p></blockquote><h4 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1. \u5B89\u88C5</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span>  <span class="token parameter variable">--name</span> influxdb <span class="token parameter variable">-p</span> <span class="token number">8087</span>:8086 influxdb:1.8.4 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF1A\u8FD9\u91CC\u7AEF\u53E3\u4F7F\u75288087\u3002\uFF08\u7AEF\u53E38086\u5B89\u88C52.x\u7248\u672C\u5DF2\u4F7F\u7528\uFF09</p></blockquote><h4 id="_2-\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B" aria-hidden="true">#</a> 2. \u67E5\u770B</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/2022/20220625145733.png" alt=""></p><h4 id="_3-\u8FDB\u5165\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_3-\u8FDB\u5165\u5BB9\u5668" aria-hidden="true">#</a> 3. \u8FDB\u5165\u5BB9\u5668</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> \u5BB9\u5668\u540D\u79F0/\u5BB9\u5668ID bin/bash

-- \u5982\uFF1A\u5BB9\u5668\u540D\u79F0
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> influxdb /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-\u76F4\u63A5\u8F93\u5165influx\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_4-\u76F4\u63A5\u8F93\u5165influx\u542F\u52A8" aria-hidden="true">#</a> 4. \u76F4\u63A5\u8F93\u5165influx\u542F\u52A8</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8influxdb</span>
influx 

<span class="token comment"># \u9000\u51FA</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/2022/20220625150330.png" alt=""></p><h4 id="_5-\u4FEE\u6539\u8D26\u6237\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_5-\u4FEE\u6539\u8D26\u6237\u4FE1\u606F" aria-hidden="true">#</a> 5. \u4FEE\u6539\u8D26\u6237\u4FE1\u606F</h4><blockquote><p>\u3010\u9700\u8FDB\u5165influxdb\u4E2D\u64CD\u4F5C\u3011</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u7528\u6237</span>
SHOW USERS

<span class="token comment"># \u521B\u5EFA\u7528\u6237</span>
CREATE <span class="token environment constant">USER</span> <span class="token string">&quot;username&quot;</span> WITH PASSWORD <span class="token string">&#39;password&#39;</span>

<span class="token comment"># \u8D4B\u4E88\u7528\u6237\u7BA1\u7406\u5458\u6743\u9650</span>
GRANT ALL PRIVILEGES TO username

<span class="token comment"># \u521B\u5EFA\u7BA1\u7406\u5458\u6743\u9650\u7684\u7528\u6237</span>
CREATE <span class="token environment constant">USER</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> WITH PASSWORD <span class="token string">&#39;&lt;password&gt;&#39;</span> WITH ALL PRIVILEGES

<span class="token comment"># \u4FEE\u6539\u7528\u6237\u5BC6\u7801</span>
SET PASSWORD FOR username <span class="token operator">=</span> <span class="token string">&#39;password&#39;</span>

<span class="token comment"># \u64A4\u6D88\u6743\u9650</span>
REVOKE ALL ON mydb FROM username

<span class="token comment"># \u67E5\u770B\u6743\u9650</span>
SHOW GRANTS FOR username

<span class="token comment"># \u5220\u9664\u7528\u6237</span>
DROP <span class="token environment constant">USER</span> <span class="token string">&quot;username&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-\u5728\u914D\u7F6E\u6587\u4EF6\u542F\u7528\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#_6-\u5728\u914D\u7F6E\u6587\u4EF6\u542F\u7528\u8BA4\u8BC1" aria-hidden="true">#</a> 6. \u5728\u914D\u7F6E\u6587\u4EF6\u542F\u7528\u8BA4\u8BC1</h4><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cinfluxdb\u7684\u914D\u7F6E\u6587\u4EF6\u662F\u7981\u7528\u8BA4\u8BC1\u7B56\u7565\u7684\uFF0C\u6240\u4EE5\u9700\u8981\u4FEE\u6539\u8BBE\u7F6E\u4E00\u4E0B\u3002 \u7F16\u8F91\u914D\u7F6E\u6587\u4EF6vim /etc/influxdb/influxdb.conf\uFF0C\u628A [http] \u4E0B\u7684 auth-enabled \u9009\u9879\u8BBE\u7F6E\u4E3A true</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165influxdb\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> influxdb /bin/bash

<span class="token comment"># \u7F16\u8F91\u6570\u636E</span>
<span class="token function">vim</span> /etc/influxdb/influxdb.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u672A\u5B8C\u5F85\u7EED\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002</p>`,22),d=[l];function c(r,t){return s(),a("div",null,d)}const u=n(i,[["render",c],["__file","\u65F6\u5E8F\u6570\u636E\u5E93-influxdb1.x \u5FEB\u901F\u5165\u95E8.html.vue"]]);export{u as default};
