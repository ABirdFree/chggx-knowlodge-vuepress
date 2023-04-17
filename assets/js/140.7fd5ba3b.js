(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{488:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"springcloud-h-sleuth分布式请求链路跟踪"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-h-sleuth分布式请求链路跟踪"}},[t._v("#")]),t._v(" SpringCloud.H-Sleuth分布式请求链路跟踪")]),t._v(" "),s("blockquote",[s("p",[t._v("笔记日期：2020.5.20")])]),t._v(" "),s("h3",{attrs:{id:"_1-概念-官网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念-官网"}},[t._v("#")]),t._v(" 1. 概念 "),s("a",{attrs:{href:"https://cloud.spring.io/spring-cloud-sleuth/reference/html/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_1-为什么出现-解决了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么出现-解决了"}},[t._v("#")]),t._v(" 1. 为什么出现? 解决了?")]),t._v(" "),s("ul",[s("li",[t._v("问题")])]),t._v(" "),s("p",[t._v("在微服务框架中，一个由客户端发起的请求在后端系统中会经过多个不同的服务节点调用来协调产生最后的请求结果，每一个前段请求都会形成一条复杂的分布式服务调用链路，链路中的任何一环出现"),s("strong",[t._v("高延迟")]),t._v("或"),s("strong",[t._v("错误")]),t._v("都会引起整个请求最后的失败。")]),t._v(" "),s("h4",{attrs:{id:"_2-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-是什么"}},[t._v("#")]),t._v(" 2. 是什么?")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("SpringCloud Sleuth")]),t._v("提供了一套完整的"),s("strong",[t._v("服务跟踪")]),t._v("的解决方案")]),t._v(" "),s("li",[t._v("在分布式系统中提供追踪解决方案并且兼容支持了zipkin")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/20210223160302.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("Sleuth 负责收集整理，Zipkin负责展现。")])]),t._v(" "),s("h3",{attrs:{id:"_2-环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-环境搭建"}},[t._v("#")]),t._v(" 2. 环境搭建")]),t._v(" "),s("h4",{attrs:{id:"_1-zipkin-下载地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-zipkin-下载地址"}},[t._v("#")]),t._v(" 1. zipkin "),s("a",{attrs:{href:"https://dl.bintray.com/openzipkin/maven/io/zipkin/java/zipkin-server/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("SpringCloud从F版起已不需要自己构建Zipkin Server了，只需调用jar包")]),t._v(" "),s("p",[t._v("安装: java -jar zipkin-server-2.12.9-exec.jar")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/20210223160306.png",alt:""}})]),t._v(" "),s("p",[t._v("访问: http://localhost:9411/zipkin/")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/20210223160311.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"_2-服务搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-服务搭建"}},[t._v("#")]),t._v(" 2. 服务搭建")]),t._v(" "),s("ul",[s("li",[t._v("依赖")])]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--包含了sleuth+zipkin 分布式链路跟踪--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-zipkin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[t._v("配置")])]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zipkin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置zipkin")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("base-url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9411")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sleuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("simple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 采样率介于0~1之间,1表示全部采集")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("probability")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("ul",[s("li",[t._v("controller")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * sleuth分布式链路跟踪测试\n * @return\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/zipkin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("paymentZipkin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi, i am paymentZipkin server fall back.,welcome to chggx, O(∩_∩)O哈哈~"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("ul",[s("li",[s("p",[t._v("测试")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("访问上面地址")]),t._v(" "),s("p",[t._v("http://localhost/consumer/payment/zipkin")])]),t._v(" "),s("li",[s("p",[t._v("查看"),s("a",{attrs:{href:"http://localhost:9411/zipkin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("zipkin"),s("OutboundLink")],1)])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/20210223160317.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);