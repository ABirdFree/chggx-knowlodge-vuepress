import{_ as n,o as s,c as e,a}from"./app.099ebd34.js";const i={},l=a(`<h1 id="redis\u7684\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#redis\u7684\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3" aria-hidden="true">#</a> Redis\u7684\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3</h1><blockquote><p>\u8FDB\u5165 <code>/usr/local/bin/redis-config</code> \u6253\u5F00\u914D\u7F6E\u6587\u4EF6 <code>redis.conf</code></p></blockquote><h2 id="_1-\u5355\u4F4D" tabindex="-1"><a class="header-anchor" href="#_1-\u5355\u4F4D" aria-hidden="true">#</a> 1. \u5355\u4F4D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1k =&gt; 1000 bytes</span>
<span class="token comment"># 1kb =&gt; 1024 bytes</span>
<span class="token comment"># 1m =&gt; 1000000 bytes</span>
<span class="token comment"># 1mb =&gt; 1024*1024 bytes</span>
<span class="token comment"># 1g =&gt; 1000000000 bytes</span>
<span class="token comment"># 1gb =&gt; 1024*1024*1024 bytes</span>
<span class="token comment">#</span>
<span class="token comment"># units are case insensitive so 1GB 1Gb 1gB are all the same.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u6587\u4EF6 <code>unit\u5355\u4F4D</code> redis.conf\u5BF9\u5185\u5B58\u5927\u5C0F\u7684\u5927\u5C0F\u5199\u4E0D\u654F\u611F</p><h2 id="_2-\u5305\u542B-includes" tabindex="-1"><a class="header-anchor" href="#_2-\u5305\u542B-includes" aria-hidden="true">#</a> 2. \u5305\u542B <code>INCLUDES</code></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">################################## INCLUDES ###################################</span>

<span class="token comment"># Include one or more other config files here.  This is useful if you</span>
<span class="token comment"># have a standard template that goes to all Redis servers but also need</span>
<span class="token comment"># to customize a few per-server settings.  Include files can include</span>
<span class="token comment"># other files, so use this wisely.</span>
<span class="token comment">#</span>
<span class="token comment"># Notice option &quot;include&quot; won&#39;t be rewritten by command &quot;CONFIG REWRITE&quot;</span>
<span class="token comment"># from admin or Redis Sentinel. Since Redis always uses the last processed</span>
<span class="token comment"># line as value of a configuration directive, you&#39;d better put includes</span>
<span class="token comment"># at the beginning of this file to avoid overwriting config change at runtime.</span>
<span class="token comment">#</span>
<span class="token comment"># If instead you are interested in using includes to override configuration</span>
<span class="token comment"># options, it is better to use include as the last line.</span>
<span class="token comment">#</span>
<span class="token comment"># include /path/to/local.conf</span>
<span class="token comment"># include /path/to/other.conf</span>

<span class="token comment">################################## MODULES #####################################</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u7F51\u7EDC-network" tabindex="-1"><a class="header-anchor" href="#_3-\u7F51\u7EDC-network" aria-hidden="true">#</a> 3. \u7F51\u7EDC <code>NETWORK</code></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7ED1\u5B9A\u7684ip\u5730\u5740</span>
<span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1

<span class="token comment"># \u4FDD\u62A4\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u662F\u5F00\u542F\u72B6\u6001\uFF0C\u53EA\u5141\u8BB8\u672C\u5730\u5BA2\u6237\u7AEF\u8FDE\u63A5\uFF0C \u53EF\u4EE5\u8BBE\u7F6E\u5BC6\u7801\u6216\u6DFB\u52A0bind\u6765\u8FDE\u63A5</span>
protected-mode <span class="token function">yes</span>

<span class="token comment"># \u7AEF\u53E3\u53F7\uFF0C\u9ED8\u8BA4\u4E3A6379\uFF0C\u5982\u679C\u8BBE\u4E3A0\uFF0Credis\u5C06\u4E0D\u5728socket \u4E0A\u76D1\u542C\u4EFB\u4F55\u5BA2\u6237\u7AEF\u8FDE\u63A5</span>
port <span class="token number">6379</span>

<span class="token comment"># TCP\u76D1\u542C\u7684\u6700\u5927\u5BB9\u7EB3\u6570\u91CF\uFF0C\u5728\u9AD8\u5E76\u53D1\u7684\u73AF\u5883\u4E0B\uFF0C\u4F60\u9700\u8981\u628A\u8FD9\u4E2A\u503C\u8C03\u9AD8\u4EE5\u907F\u514D\u5BA2\u6237\u7AEF\u8FDE\u63A5\u7F13\u6162\u7684\u95EE\u9898\u3002Linux \u5185\u6838\u4F1A\u628A\u8FD9\u4E2A\u503C\u7F29\u5C0F\u6210 /proc/sys/net/core/somaxconn\u5BF9\u5E94\u7684\u503C\uFF0C\u8981\u63D0\u5347\u5E76\u53D1\u91CF\u9700\u8981\u4FEE\u6539\u8FD9\u4E24\u4E2A\u503C\u624D\u80FD\u8FBE\u5230\u76EE\u7684</span>
tcp-backlog <span class="token number">511</span>

<span class="token comment"># \u6307\u5B9Aredis\u76D1\u542C\u7684unix socket\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E0D\u542F\u7528\uFF0Cunixsocketper\u6307\u5B9A\u6587\u4EF6\u7684\u6743\u9650</span>
unixsocket /tmp/redis.sock
unixsocketperm <span class="token number">700</span>

<span class="token comment"># \u6307\u5B9A\u5728\u4E00\u4E2A client \u7A7A\u95F2\u591A\u5C11\u79D2\u4E4B\u540E\u5173\u95ED\u8FDE\u63A5\uFF080\u8868\u793A\u6C38\u4E0D\u5173\u95ED\uFF09</span>
<span class="token function">timeout</span> <span class="token number">0</span>

<span class="token comment"># \u5355\u4F4D\u662F\u79D2\uFF0C\u8868\u793A\u5C06\u5468\u671F\u6027\u7684\u4F7F\u7528SO_KEEPALIVE\u68C0\u6D4B\u5BA2\u6237\u7AEF\u662F\u5426\u8FD8\u5904\u4E8E\u5065\u5EB7\u72B6\u6001\uFF0C\u907F\u514D\u670D\u52A1\u5668\u4E00\u76F4\u963B\u585E\uFF0C\u5B98\u65B9\u7ED9\u51FA\u7684\u5EFA\u8BAE\u503C\u662F300s\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A0\uFF0C\u5219\u4E0D\u4F1A\u5468\u671F\u6027\u7684\u68C0\u6D4B</span>
tcp-keepalive <span class="token number">300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u901A\u7528\u914D\u7F6E-general" tabindex="-1"><a class="header-anchor" href="#_4-\u901A\u7528\u914D\u7F6E-general" aria-hidden="true">#</a> 4. \u901A\u7528\u914D\u7F6E <code> GENERAL</code></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9ED8\u8BA4\u60C5\u51B5\u4E0B redis \u4E0D\u662F\u4F5C\u4E3A\u5B88\u62A4\u8FDB\u7A0B\u8FD0\u884C(\u540E\u53F0\u7684\u65B9\u5F0F\u8FD0\u884C)\u7684 (\u9ED8\u8BA4\u662F no) \uFF0C\u5982\u679C\u4F60\u60F3\u8BA9\u5B83\u5728\u540E\u53F0\u8FD0\u884C\uFF0C\u4F60\u5C31\u628A\u5B83\u6539\u6210 yes\u3002\u5F53redis\u4F5C\u4E3A\u5B88\u62A4\u8FDB\u7A0B\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u5B83\u4F1A\u5199\u4E00\u4E2A pid \u5230 /var/run/redis.pid \u6587\u4EF6\u91CC\u9762</span>
daemonize <span class="token function">yes</span> 

<span class="token comment"># \u53EF\u4EE5\u901A\u8FC7upstart\u548Csystemd\u7BA1\u7406Redis\u5B88\u62A4\u8FDB\u7A0B</span>
<span class="token comment"># \u9009\u9879\uFF1A</span>
<span class="token comment">#   supervised no - \u6CA1\u6709\u76D1\u7763\u4E92\u52A8</span>
<span class="token comment">#   supervised upstart - \u901A\u8FC7\u5C06Redis\u7F6E\u4E8ESIGSTOP\u6A21\u5F0F\u6765\u542F\u52A8\u4FE1\u53F7</span>
<span class="token comment">#   supervised systemd - signal systemd\u5C06READY = 1\u5199\u5165$ NOTIFY_SOCKET</span>
<span class="token comment">#   supervised auto - \u68C0\u6D4Bupstart\u6216systemd\u65B9\u6CD5\u57FA\u4E8E UPSTART_JOB\u6216NOTIFY_SOCKET\u73AF\u5883\u53D8\u91CF</span>
supervised no 

<span class="token comment"># \u914D\u7F6EPID\u6587\u4EF6\u8DEF\u5F84\uFF0C\u5F53redis\u4F5C\u4E3A\u5B88\u62A4\u8FDB\u7A0B\u8FD0\u884C\u7684\u65F6\u5019(\u540E\u53F0\u7684\u65B9\u5F0F\u8FD0\u884C)\uFF0C\u5B83\u4F1A\u628A pid \u9ED8\u8BA4\u5199\u5230 /var/redis/run/redis_6379.pid \u6587\u4EF6\u91CC\u9762</span>
pidfile /var/run/redis_6379.pid

<span class="token comment"># \u5B9A\u4E49\u65E5\u5FD7\u7EA7\u522B\u3002</span>
<span class="token comment">#  \u53EF\u4EE5\u662F\u4E0B\u9762\u7684\u8FD9\u4E9B\u503C\uFF1A</span>
<span class="token comment">#  debug\uFF08\u8BB0\u5F55\u5927\u91CF\u65E5\u5FD7\u4FE1\u606F\uFF0C\u9002\u7528\u4E8E\u5F00\u53D1\u3001\u6D4B\u8BD5\u9636\u6BB5\uFF09</span>
<span class="token comment">#  verbose\uFF08\u8F83\u591A\u65E5\u5FD7\u4FE1\u606F\uFF09</span>
<span class="token comment">#  notice\uFF08\u9002\u91CF\u65E5\u5FD7\u4FE1\u606F\uFF0C\u4F7F\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\uFF09</span>
<span class="token comment">#  warning\uFF08\u4EC5\u6709\u90E8\u5206\u91CD\u8981\u3001\u5173\u952E\u4FE1\u606F\u624D\u4F1A\u88AB\u8BB0\u5F55\uFF09</span>
loglevel notice

<span class="token comment"># \u65E5\u5FD7\u6587\u4EF6\u7684\u4F4D\u7F6E\uFF0C\u5F53\u6307\u5B9A\u4E3A\u7A7A\u5B57\u7B26\u4E32\u65F6\uFF0C\u4E3A\u6807\u51C6\u8F93\u51FA\uFF0C\u5982\u679Credis\u5DF2\u5B88\u62A4\u8FDB\u7A0B\u6A21\u5F0F\u8FD0\u884C\uFF0C\u90A3\u4E48\u65E5\u5FD7\u5C06\u4F1A\u8F93\u51FA\u5230/dev/null</span>
logfile <span class="token string">&quot;&quot;</span>

<span class="token comment"># \u8981\u60F3\u628A\u65E5\u5FD7\u8BB0\u5F55\u5230\u7CFB\u7EDF\u65E5\u5FD7\uFF0C\u5C31\u628A\u5B83\u6539\u6210 yes\uFF0C\u4E5F\u53EF\u4EE5\u53EF\u9009\u62E9\u6027\u7684\u66F4\u65B0\u5176\u4ED6\u7684syslog \u53C2\u6570\u4EE5\u8FBE\u5230\u4F60\u7684\u8981\u6C42</span>
syslog-enabled no

<span class="token comment"># \u8BBE\u7F6E\u7CFB\u7EDF\u65E5\u5FD7\u7684ID</span>
syslog-ident redis

<span class="token comment"># \u6307\u5B9A\u7CFB\u7EDF\u65E5\u5FD7\u8BBE\u7F6E\uFF0C\u5FC5\u987B\u662F USER \u6216\u8005\u662F LOCAL0-LOCAL7 \u4E4B\u95F4\u7684\u503C</span>
syslog-facility local0

<span class="token comment"># \u8BBE\u7F6E\u6570\u636E\u5E93\u7684\u6570\u76EE (\u9ED8\u8BA4\u670916\u4E2A\u6570\u636E\u5E93)\u3002\u9ED8\u8BA4\u7684\u6570\u636E\u5E93\u662FDB 0 \uFF0C\u53EF\u4EE5\u5728\u6BCF\u4E2A\u8FDE\u63A5\u4E0A\u4F7F\u7528select  &lt;dbid&gt; \u547D\u4EE4\u9009\u62E9\u4E00\u4E2A\u4E0D\u540C\u7684\u6570\u636E\u5E93\uFF0Cdbid\u662F\u4E00\u4E2A\u4ECB\u4E8E0\u5230databases - 1 \u4E4B\u95F4\u7684\u6570\u503C\u3002</span>
databases <span class="token number">16</span>

<span class="token comment"># \u662F\u5426\u603B\u662F\u663E\u793ALOGO</span>
always-show-logo <span class="token function">yes</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u5FEB\u7167-snapshotting" tabindex="-1"><a class="header-anchor" href="#_5-\u5FEB\u7167-snapshotting" aria-hidden="true">#</a> 5. \u5FEB\u7167 <code>SNAPSHOTTING</code></h2><p>\u6301\u4E45\u5316\uFF0C \u5728\u89C4\u5B9A\u7684\u65F6\u95F4\u5185\uFF0C\u6267\u884C\u4E86\u591A\u5C11\u6B21\u64CD\u4F5C\uFF0C\u5219\u4F1A\u6301\u4E45\u5316\u5230\u6587\u4EF6 .rdb. aof</p><p>redis \u662F\u5185\u5B58\u6570\u636E\u5E93\uFF0C\u5982\u679C\u6CA1\u6709\u6301\u4E45\u5316\uFF0C\u90A3\u4E48\u6570\u636E\u65AD\u7535\u53CA\u5931\uFF01</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B58 DB \u5230\u78C1\u76D8\uFF1A</span>
<span class="token comment">#    \u683C\u5F0F\uFF1Asave &lt;\u95F4\u9694\u65F6\u95F4\uFF08\u79D2\uFF09&gt; &lt;\u5199\u5165\u6B21\u6570&gt;</span>
<span class="token comment">#    \u6839\u636E\u7ED9\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u548C\u5199\u5165\u6B21\u6570\u5C06\u6570\u636E\u4FDD\u5B58\u5230\u78C1\u76D8</span>

<span class="token comment">#    \u6CE8\u610F\uFF1A\u4F60\u53EF\u4EE5\u6CE8\u91CA\u6389\u6240\u6709\u7684 save \u884C\u6765\u505C\u7528\u4FDD\u5B58\u529F\u80FD\u3002</span>
<span class="token comment">#    \u4E5F\u53EF\u4EE5\u76F4\u63A5\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32\u6765\u5B9E\u73B0\u505C\u7528\uFF1Asave &quot;&quot;</span>
<span class="token comment"># \u5982\u679C900s\u5185\uFF0C\u5982\u679C\u81F3\u5C11\u6709\u4E00\u4E2A1 key\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u6211\u4EEC\u53CA\u65F6\u8FDB\u884C\u6301\u4E45\u5316\u64CD\u4F5C </span>
save <span class="token number">900</span> <span class="token number">1</span> 
<span class="token comment"># \u5982\u679C300s\u5185\uFF0C\u5982\u679C\u81F3\u5C1110 key\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u6211\u4EEC\u53CA\u65F6\u8FDB\u884C\u6301\u4E45\u5316\u64CD\u4F5C </span>
save <span class="token number">300</span> <span class="token number">10</span> 
<span class="token comment"># \u5982\u679C60s\u5185\uFF0C\u5982\u679C\u81F3\u5C1110000 key\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u6211\u4EEC\u53CA\u65F6\u8FDB\u884C\u6301\u4E45\u5316\u64CD\u4F5C </span>
save <span class="token number">60</span> <span class="token number">10000</span>

<span class="token comment"># \u6301\u4E45\u5316\u5982\u679C\u51FA\u9519\uFF0C\u662F\u5426\u8FD8\u9700\u8981\u7EE7\u7EED\u5DE5\u4F5C\uFF01</span>
<span class="token comment">#  \u5982\u679C\u7528\u6237\u5F00\u542F\u4E86RDB\u5FEB\u7167\u529F\u80FD\uFF0C\u90A3\u4E48\u5728redis\u6301\u4E45\u5316\u6570\u636E\u5230\u78C1\u76D8\u65F6\u5982\u679C\u51FA\u73B0\u5931\u8D25\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Credis\u4F1A\u505C\u6B62\u63A5\u53D7\u6240\u6709\u7684\u5199\u8BF7\u6C42\u3002</span>
<span class="token comment">#  \u8FD9\u6837\u505A\u7684\u597D\u5904\u5728\u4E8E\u53EF\u4EE5\u8BA9\u7528\u6237\u5F88\u660E\u786E\u7684\u77E5\u9053\u5185\u5B58\u4E2D\u7684\u6570\u636E\u548C\u78C1\u76D8\u4E0A\u7684\u6570\u636E\u5DF2\u7ECF\u5B58\u5728\u4E0D\u4E00\u81F4\u4E86\u3002</span>
<span class="token comment">#  \u5982\u679Credis\u4E0D\u987E\u8FD9\u79CD\u4E0D\u4E00\u81F4\uFF0C\u4E00\u610F\u5B64\u884C\u7684\u7EE7\u7EED\u63A5\u6536\u5199\u8BF7\u6C42\uFF0C\u5C31\u53EF\u80FD\u4F1A\u5F15\u8D77\u4E00\u4E9B\u707E\u96BE\u6027\u7684\u540E\u679C\u3002</span>
<span class="token comment">#  \u5982\u679C\u4E0B\u4E00\u6B21RDB\u6301\u4E45\u5316\u6210\u529F\uFF0Credis\u4F1A\u81EA\u52A8\u6062\u590D\u63A5\u53D7\u5199\u8BF7\u6C42\u3002</span>
<span class="token comment">#  \u5982\u679C\u4E0D\u5728\u4E4E\u8FD9\u79CD\u6570\u636E\u4E0D\u4E00\u81F4\u6216\u8005\u6709\u5176\u4ED6\u7684\u624B\u6BB5\u53D1\u73B0\u548C\u63A7\u5236\u8FD9\u79CD\u4E0D\u4E00\u81F4\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5173\u95ED\u8FD9\u4E2A\u529F\u80FD\uFF0C\u4EE5\u4FBF\u5728\u5FEB\u7167\u5199\u5165\u5931\u8D25\u65F6\uFF0C\u4E5F\u80FD\u786E\u4FDDredis\u7EE7\u7EED\u63A5\u53D7\u65B0\u7684\u5199\u8BF7\u6C42\u3002</span>
stop-writes-on-bgsave-error <span class="token function">yes</span> 

<span class="token comment">#  \u5BF9\u4E8E\u5B58\u50A8\u5230\u78C1\u76D8\u4E2D\u7684\u5FEB\u7167\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u662F\u5426\u8FDB\u884C\u538B\u7F29\u5B58\u50A8\u3002</span>
<span class="token comment">#  \u5982\u679C\u662F\u7684\u8BDD\uFF0Credis\u4F1A\u91C7\u7528LZF\u7B97\u6CD5\u8FDB\u884C\u538B\u7F29\u3002\u5982\u679C\u4F60\u4E0D\u60F3\u6D88\u8017CPU\u6765\u8FDB\u884C\u538B\u7F29\u7684\u8BDD\uFF0C</span>
<span class="token comment">#  \u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5173\u95ED\u6B64\u529F\u80FD\uFF0C\u4F46\u662F\u5B58\u50A8\u5728\u78C1\u76D8\u4E0A\u7684\u5FEB\u7167\u4F1A\u6BD4\u8F83\u5927\u3002</span>
rdbcompression <span class="token function">yes</span>

<span class="token comment"># \u5728\u5B58\u50A8\u5FEB\u7167\u540E\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u8BA9redis\u4F7F\u7528CRC64\u7B97\u6CD5\u6765\u8FDB\u884C\u6570\u636E\u6821\u9A8C\uFF0C\u4F46\u662F\u8FD9\u6837\u505A\u4F1A\u589E\u52A0\u5927\u7EA610%\u7684\u6027\u80FD\u6D88\u8017\uFF0C\u5982\u679C\u5E0C\u671B\u83B7\u53D6\u5230\u6700\u5927\u7684\u6027\u80FD\u63D0\u5347\uFF0C\u53EF\u4EE5\u5173\u95ED\u6B64\u529F\u80FD\u3002[\u4FDD\u5B58rdb\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u8FDB\u884C\u9519\u8BEF\u7684\u68C0\u67E5\u6821\u9A8C\uFF01]</span>
rdbchecksum <span class="token function">yes</span> 

<span class="token comment"># \u8BBE\u7F6E\u5FEB\u7167\u7684\u6587\u4EF6\u540D</span>
dbfilename dump.rdb

<span class="token comment"># \u8BBE\u7F6E\u5FEB\u7167\u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u9879\u4E00\u5B9A\u662F\u4E2A\u76EE\u5F55\uFF0C\u800C\u4E0D\u80FD\u662F\u6587\u4EF6\u540D</span>
<span class="token function">dir</span> ./ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u4E3B\u4ECE\u590D\u5236-replication" tabindex="-1"><a class="header-anchor" href="#_6-\u4E3B\u4ECE\u590D\u5236-replication" aria-hidden="true">#</a> 6. \u4E3B\u4ECE\u590D\u5236 <code>REPLICATION</code></h2><blockquote><p>\u8BE6\u89C1\u4E3B\u4ECE\u590D\u5236</p></blockquote><h2 id="_7-\u5B89\u5168-security" tabindex="-1"><a class="header-anchor" href="#_7-\u5B89\u5168-security" aria-hidden="true">#</a> 7. \u5B89\u5168 <code>SECURITY</code></h2><h3 id="\u8BBE\u7F6E\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5BC6\u7801" aria-hidden="true">#</a> \u8BBE\u7F6E\u5BC6\u7801</h3><ul><li>\u65B9\u5F0F\u4E00: \u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># requirepass foobared</span>
<span class="token comment"># \u8BBE\u7F6Eredis\u5BC6\u7801</span>
requirepass <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u65B9\u5F0F\u4E8C: \u547D\u4EE4\u884C</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get requirepass <span class="token comment"># \u83B7\u53D6redis\u5BC6\u7801</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;requirepass&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config <span class="token builtin class-name">set</span> requirepass <span class="token string">&quot;123456&quot;</span> <span class="token comment"># \u8BBE\u7F6Eredis\u5BC6\u7801</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get requirepass <span class="token comment"># \u6CA1\u6709\u5BC6\u7801,\u6240\u6709\u547D\u4EE4\u6CA1\u6709\u6743\u9650</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span> 
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth <span class="token number">123456</span> <span class="token comment"># \u4F7F\u7528\u5BC6\u7801\u8BA4\u8BC1\u767B\u5F55</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get requirepass
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;requirepass&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;123456&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BC6\u7801\u8BA4\u8BC1\u767B\u5F55</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u65B9\u5F0F\u4E0D\u5B89\u5168</span>
<span class="token punctuation">[</span>root@VM-0-14-centos bin<span class="token punctuation">]</span><span class="token comment"># redis-cli -p 6379 -a 123456</span>
Warning: Using a password with <span class="token string">&#39;-a&#39;</span> or <span class="token string">&#39;-u&#39;</span> option on the <span class="token builtin class-name">command</span> line interface may not be safe.
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 

<span class="token comment"># 2. \u5B89\u5168</span>
<span class="token punctuation">[</span>root@VM-0-14-centos bin<span class="token punctuation">]</span><span class="token comment"># redis-cli -p 6379</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth <span class="token number">123456</span> <span class="token comment"># \u4F7F\u7528\u5BC6\u7801\u8BA4\u8BC1\u767B\u5F55</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-\u9650\u5236-clients" tabindex="-1"><a class="header-anchor" href="#_8-\u9650\u5236-clients" aria-hidden="true">#</a> 8. \u9650\u5236 <code>CLIENTS</code></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#   \u8BBE\u7F6E&quot;\u5BA2\u6237\u7AEF\u6700\u5927\u5E76\u53D1\u8FDE\u63A5\u6570&quot;\uFF0C\u9ED8\u8BA4\u65E0\u9650\u5236\uFF0CRedis\u53EF\u4EE5\u540C\u65F6\u6253\u5F00\u7684\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6570\u4E3ARedis\u8FDB\u7A0B\u53EF\u4EE5\u6253\u5F00\u7684\u6700\u5927\u6587\u4EF6. \u63CF\u8FF0\u7B26\u6570-32\uFF08redis server\u81EA\u8EAB\u4F1A\u4F7F\u7528\u4E00\u4E9B\uFF09\uFF0C\u5982\u679C\u8BBE\u7F6E maxclients\u4E3A0. \u8868\u793A\u4E0D\u4F5C\u9650\u5236\u3002\u5F53\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6570\u5230\u8FBE\u9650\u5236\u65F6\uFF0CRedis\u4F1A\u5173\u95ED\u65B0\u7684\u8FDE\u63A5\u5E76\u5411\u5BA2\u6237\u7AEF\u8FD4\u56DEmax number of clients reached\u9519\u8BEF\u4FE1\u606F</span>
maxclients <span class="token number">10000</span>

<span class="token comment"># redis \u914D\u7F6E\u6700\u5927\u7684\u5185\u5B58\u5BB9\u91CF</span>
<span class="token comment"># \u6307\u5B9ARedis\u6700\u5927\u5185\u5B58\u9650\u5236\uFF0CRedis\u5728\u542F\u52A8\u65F6\u4F1A\u628A\u6570\u636E\u52A0\u8F7D\u5230\u5185\u5B58\u4E2D\uFF0C\u8FBE\u5230\u6700\u5927\u5185\u5B58\u540E\uFF0CRedis\u4F1A\u5148\u5C1D\u8BD5\u6E05\u9664\u5DF2\u5230\u671F\u6216\u5373\u5C06\u5230\u671F\u7684Key. \u5F53\u6B64\u65B9\u6CD5\u5904\u7406\u540E\uFF0C\u4ECD\u7136\u5230\u8FBE\u6700\u5927\u5185\u5B58\u8BBE\u7F6E\uFF0C\u5C06\u65E0\u6CD5\u518D\u8FDB\u884C\u5199\u5165\u64CD\u4F5C\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8FDB\u884C\u8BFB\u53D6\u64CD\u4F5C\u3002Redis\u65B0\u7684vm\u673A\u5236\uFF0C\u4F1A\u628AKey\u5B58\u653E\u5185\u5B58\uFF0CValue\u4F1A\u5B58\u653E\u5728swap\u533A\uFF0C\u683C\u5F0F\uFF1Amaxmemory &lt;bytes&gt;</span>
maxmemory <span class="token operator">&lt;</span>bytes<span class="token operator">&gt;</span> 

<span class="token comment"># \u5185\u5B58\u5230\u8FBE\u4E0A\u9650\u4E4B\u540E\u7684\u5904\u7406\u7B56\u7565</span>
<span class="token comment"># 1\u3001volatile-lru\uFF1A\u53EA\u5BF9\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684key\u8FDB\u884CLRU\uFF08\u9ED8\u8BA4\u503C\uFF09 2\u3001allkeys-lru \uFF1A \u5220\u9664lru\u7B97\u6CD5\u7684key 3\u3001volatile-random\uFF1A\u968F\u673A\u5220\u9664\u5373\u5C06\u8FC7\u671Fkey 4\u3001allkeys-random\uFF1A\u968F\u673A\u5220\u9664 5\u3001volatile-ttl \uFF1A \u5220\u9664\u5373\u5C06\u8FC7\u671F\u7684 6\u3001noeviction \uFF1A \u6C38\u4E0D\u8FC7\u671F\uFF0C\u8FD4\u56DE\u9519\u8BEF</span>
maxmemory-policy noeviction

<span class="token comment">#  LRU \u548C minimal TTL \u7B97\u6CD5\u90FD\u4E0D\u662F\u7CBE\u51C6\u7684\u7B97\u6CD5\uFF0C\u4F46\u662F\u76F8\u5BF9\u7CBE\u786E\u7684\u7B97\u6CD5(\u4E3A\u4E86\u8282\u7701\u5185\u5B58)</span>
<span class="token comment">#  \u968F\u610F\u4F60\u53EF\u4EE5\u9009\u62E9\u6837\u672C\u5927\u5C0F\u8FDB\u884C\u68C0\uFF0Credis\u9ED8\u8BA4\u9009\u62E93\u4E2A\u6837\u672C\u8FDB\u884C\u68C0\u6D4B\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7maxmemory-samples\u8FDB\u884C\u8BBE\u7F6E\u6837\u672C\u6570</span>
maxmemory-samples <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-aof\u6A21\u5F0F-append-only-mode" tabindex="-1"><a class="header-anchor" href="#_9-aof\u6A21\u5F0F-append-only-mode" aria-hidden="true">#</a> 9. aof\u6A21\u5F0F <code>APPEND ONLY MODE</code></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>appendonly no <span class="token comment"># \u9ED8\u8BA4\u662F\u4E0D\u5F00\u542Faof\u6A21\u5F0F\u7684\uFF0C\u9ED8\u8BA4\u662F\u4F7F\u7528rdb\u65B9\u5F0F\u6301\u4E45\u5316\u7684\uFF0C\u5728\u5927\u90E8\u5206\u6240\u6709\u7684\u60C5\u51B5\u4E0B\uFF0C rdb\u5B8C\u5168\u591F\u7528\uFF01 </span>

appendfilename <span class="token string">&quot;appendonly.aof&quot;</span> <span class="token comment"># \u6301\u4E45\u5316\u7684\u6587\u4EF6\u7684\u540D\u5B57 </span>

<span class="token comment"># appendfsync always # \u6BCF\u6B21\u4FEE\u6539\u90FD\u4F1A sync\u3002\u6D88\u8017\u6027\u80FD </span>
appendfsync everysec <span class="token comment"># \u6BCF\u79D2\u6267\u884C\u4E00\u6B21 sync\uFF0C\u53EF\u80FD\u4F1A\u4E22\u5931\u8FD91s\u7684\u6570\u636E\uFF01</span>
<span class="token comment"># appendfsync no # \u4E0D\u6267\u884C sync\uFF0C\u8FD9\u4E2A\u65F6\u5019\u64CD\u4F5C\u7CFB\u7EDF\u81EA\u5DF1\u540C\u6B65\u6570\u636E\uFF0C\u901F\u5EA6\u6700\u5FEB\uFF01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),c=[l];function d(t,o){return s(),e("div",null,c)}const p=n(i,[["render",d],["__file","7.Redis\u7684\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3.html.vue"]]);export{p as default};
