import{_ as e,o,c as a,a as c}from"./app.099ebd34.js";const i={},t=c('<h1 id="jvm-\u672C\u5730\u65B9\u6CD5\u6808" tabindex="-1"><a class="header-anchor" href="#jvm-\u672C\u5730\u65B9\u6CD5\u6808" aria-hidden="true">#</a> JVM-\u672C\u5730\u65B9\u6CD5\u6808</h1><ul><li><p><code>Java\u865A\u62DF\u673A\u6808\u7528\u4E8E\u7BA1\u7406Java\u65B9\u6CD5\u7684\u8C03\u7528\uFF0C\u800C\u672C\u5730\u65B9\u6CD5\u6808\u7528\u4E8E\u7BA1\u7406\u672C\u5730\u65B9\u6CD5\u7684\u8C03\u7528\u3002</code></p></li><li><p>\u672C\u5730\u65B9\u6CD5\u6808\uFF0C\u4E5F\u662F<code>\u7EBF\u7A0B\u79C1\u6709\u7684\u3002</code></p></li><li><p>\u5141\u8BB8\u88AB\u5B9E\u73B0\u6210\u56FA\u5B9A\u6216\u8005\u53EF\u52A8\u6001\u6269\u5C55\u7684\u5185\u5B58\u5927\u5C0F\u3002\uFF08\u5728\u5185\u5B58\u6EA2\u51FA\u65B9\u9762\u662F\u76F8\u540C\u7684\uFF09</p><p>\u5982\u679C\u7EBF\u7A0B\u8BF7\u6C42\u5206\u914D\u7684\u6808\u5BB9\u91CF\u8D85\u8FC7\u672C\u5730\u65B9\u6CD5\u6808\u5141\u8BB8\u7684\u6700\u5927\u5BB9\u91CF\uFF0CJava\u865A\u62DF\u673A\u5C06\u4F1A\u629B\u51FA\u4E00\u4E2AStackoverflowError\u5F02\u5E38\u3002</p><p>\u361D\u672C\u5730\u65B9\u6CD5\u6808\u53EF\u4EE5\u52A8\u6001\u6269\u5C55\uFF0C\u5E76\u4E14\u5728\u5E38\u662F\u6269\u5C55\u7684\u65F6\u5019\u65E0\u6CD5\u7533\u8BF7\u5230\u8DB3\u591F\u7684\u5185\u5B58\uFF0C\u6216\u8005\u5728\u521B\u5EFA\u65B0\u7684\u7EBF\u7A0B\u662F\u6CA1\u6709\u8DB3\u591F\u7684\u5185\u5B58\u53BB\u521B\u5EFA\u5BF9\u5E94\u7684\u672C\u5730\u65B9\u6CD5\u6808\uFF0C\u90A3\u4E48Java\u865A\u62DF\u673A\u6808\u5C06\u4F1A\u629B\u51FA\u4E00\u4E2AOutOfMemoryError\u5F02\u5E38\u3002</p></li><li><p>\u672C\u5730\u65B9\u6CD5\u662F\u4F7F\u7528C\u8BED\u8A00\u5B9E\u73B0\u7684\u3002</p></li><li><p>\u5B83\u7684\u5177\u4F53\u505A\u6CD5\u662FNative Method Stack\u4E2D\u767B\u8BB0native\u65B9\u6CD5\uFF0C\u5728Execution Engine\u6267\u884C\u65F6\u52A0\u8F7D\u672C\u5730\u65B9\u6CD5\u5E93\u3002</p></li></ul><p><img src="https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202010/03/230742-366040.png" alt="1601737662435"></p><p><code>\u5F53\u67D0\u4E2A\u7EBF\u7A0B\u8C03\u7528\u4E00\u4E2A\u672C\u5730\u65B9\u6CD5\u65F6\uFF0C\u5B83\u5C31\u8FDB\u5165\u4E86\u4E00\u4E2A\u5168\u65B0\u7684\u5E76\u4E14\u4E0D\u518D\u53D7\u865A\u62DF\u673A\u9650\u5236\u7684\u4E16\u754C\u3002\u5B83\u548C\u865A\u62DF\u673A\u62E5\u6709\u540C\u6837\u7684\u6743\u9650\u3002</code></p><ul><li>\u672C\u5730\u65B9\u6CD5\u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u65B9\u6CD5\u63A5\u53E3\u6765<code>\u8BBF\u95EE\u865A\u62DF\u673A\u5185\u90E8\u7684\u8FD0\u884C\u65F6\u6570\u636E\u533A\u3002</code></li><li>\u5B83\u751A\u81F3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u672C\u5730\u5904\u7406\u5668\u4E2D\u7684\u5BC4\u5B58\u5668</li><li>\u76F4\u63A5\u4ECE\u672C\u5730\u5185\u5B58\u7684\u5806\u4E2D\u5206\u914D\u4EFB\u610F\u6570\u91CF\u7684\u5185\u5B58\u3002</li></ul><p><code>\u5E76\u4E0D\u662F\u6240\u6709\u7684JVM\u90FD\u652F\u6301\u672C\u5730\u65B9\u6CD5\u3002\u56E0\u4E3AJava\u865A\u62DF\u673A\u89C4\u8303\u5E76\u6CA1\u6709\u660E\u786E\u8981\u6C42\u672C\u5730\u65B9\u6CD5\u6808\u7684\u4F7F\u7528\u8BED\u8A00\u3001\u5177\u4F53\u5B9E\u73B0\u65B9\u5F0F\u3001\u6570\u636E\u7ED3\u6784\u7B49\u3002</code>\u5982\u679CJVM\u4EA7\u54C1\u4E0D\u6253\u7B97\u652F\u6301native\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u65E0\u9700\u5B9E\u73B0\u672C\u5730\u65B9\u6CD5\u6808\u3002</p><p>\u5728Hotspot JVM\u4E2D\uFF0C\u76F4\u63A5\u5C06\u672C\u5730\u65B9\u6CD5\u6808\u548C\u865A\u62DF\u673A\u6808\u5408\u4E8C\u4E3A\u4E00\u3002</p>',7),l=[t];function p(r,n){return o(),a("div",null,l)}const d=e(i,[["render",p],["__file","7.JVM-\u672C\u5730\u65B9\u6CD5\u6808.html.vue"]]);export{d as default};
