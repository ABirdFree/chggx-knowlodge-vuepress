(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{498:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nginx-基础配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-基础配置"}},[s._v("#")]),s._v(" Nginx-基础配置")]),s._v(" "),t("h2",{attrs:{id:"nginx服务器基础配置实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx服务器基础配置实例"}},[s._v("#")]),s._v(" Nginx服务器基础配置实例")]),s._v(" "),t("p",[s._v("前面我们已经对Nginx服务器默认配置文件的结构和涉及的基本指令做了详细的阐述。通过这些指令的合理配置，我们就可以让一台Nginx服务器正常工作，并且提供基本的web服务器功能。")]),s._v(" "),t("p",[s._v("接下来我们将通过一个比较完整和最简单的基础配置实例，来巩固下前面所学习的指令及其配置。")]),s._v(" "),t("p",[s._v("需求如下:")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[s._v("（1）有如下访问：\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\thttp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("//192.168.200.133:8081/server1/location1")]),s._v("\n\t\t访问的是：index_sr1_location1.html\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\thttp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("//192.168.200.133:8081/server1/location2")]),s._v("\n\t\t访问的是：index_sr1_location2.html\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\thttp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("//192.168.200.133:8082/server2/location1")]),s._v("\n\t\t访问的是：index_sr2_location1.html\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\thttp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("//192.168.200.133:8082/server2/location2")]),s._v("\n\t\t访问的是：index_sr2_location2.html\n（2）如果访问的资源不存在，\n\t返回自定义的404页面\n（3）将/server1和/server2的配置使用不同的配置文件分割\n\t将文件放到/home/www/conf.d目录下，然后使用include进行合并\n（4）为/server1和/server2各自创建一个访问日志文件\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("准备相关文件，目录如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303181857957.png",alt:"202303181857957"}})]),s._v(" "),t("p",[s._v("配置的内容如下:")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##全局块 begin##")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置允许运行Nginx工作进程的用户和用户组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("www;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置运行Nginx进程生成的worker进程数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("worker_processes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("2;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置Nginx服务器运行对错误日志存放的路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("error_log")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("logs/error.log;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置Nginx服务器允许时记录Nginx的master进程的PID文件路径和名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("pid")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("logs/nginx.pid;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置Nginx服务是否以守护进程方法启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#daemon on;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##全局块 end##")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##events块 begin##")]),s._v("\nevents{\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t#设置Nginx网络连接序列化")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\taccept_mutex")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("on;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t#设置Nginx的worker进程是否可以同时接收多个请求")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\tmulti_accept")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("on;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t#设置Nginx的worker进程最大的连接数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\tworker_connections")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1024;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t#设置Nginx使用的事件驱动模型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\tuse")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("epoll;")]),s._v("\n}\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##events块 end##")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##http块 start##")]),s._v("\nhttp{\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t#定义MIME-Type")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\tinclude")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("mime.types;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\tdefault_type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("application/octet-stream;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t#配置允许使用sendfile方式运输")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\tsendfile")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("on;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t#配置连接超时时间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\tkeepalive_timeout")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("65;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t#配置请求处理日志格式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\tlog_format")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("server1 '===>server1 access log';")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\tlog_format")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("server2 '===>server2 access log';")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t##server块 开始##")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\tinclude")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/home/www/conf.d/*.conf;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t##server块 结束##")]),s._v("\n}\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##http块 end##")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br")])]),t("p",[s._v("server1.conf")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[s._v("server{\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t\t#配置监听端口和主机名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\tlisten")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("8081;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\tserver_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("localhost;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t\t#配置请求处理日志存放路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\taccess_log")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/home/www/myweb/server1/logs/access.log server1;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t\t#配置错误页面")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\terror_page")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("404 /404.html;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t\t#配置处理/server1/location1请求的location")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\tlocation")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/server1/location1{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\t\troot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/home/www/myweb;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\t\tindex")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("index_sr1_location1.html;")]),s._v("\n\t\t}\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t\t#配置处理/server1/location2请求的location")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\tlocation")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/server1/location2{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\t\troot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/home/www/myweb;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\t\tindex")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("index_sr1_location2.html;")]),s._v("\n\t\t}\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t\t#配置错误页面转向")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\tlocation")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/404.html {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\t\troot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/home/www/myweb;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\t\tindex")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("404.html;")]),s._v("\n\t\t}\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("server2.conf")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[s._v("server{\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t\t#配置监听端口和主机名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\tlisten")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("8082;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\tserver_name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("localhost;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t\t#配置请求处理日志存放路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\taccess_log")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/home/www/myweb/server2/logs/access.log server2;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t\t#配置错误页面,对404.html做了定向配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\terror_page")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("404 /404.html;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t\t#配置处理/server1/location1请求的location")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\tlocation")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/server2/location1{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\t\troot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/home/www/myweb;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\t\tindex")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("index_sr2_location1.html;")]),s._v("\n\t\t}\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t\t#配置处理/server2/location2请求的location")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\tlocation")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/server2/location2{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\t\troot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/home/www/myweb;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\t\tindex")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("index_sr2_location2.html;")]),s._v("\n\t\t}\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\t\t#配置错误页面转向")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\tlocation")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/404.html {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\t\troot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/home/www/myweb;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("\t\t\tindex")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("404.html;")]),s._v("\n\t\t}\n\t}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("访问测试：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303181857531.png",alt:"1587129766585"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303181857903.png",alt:"1587129777898"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303181857779.png",alt:"1587290246228"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303181858453.png",alt:"1587129805309"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303181858022.png",alt:"1587129817226"}})]),s._v(" "),t("h2",{attrs:{id:"nginx服务操作的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx服务操作的问题"}},[s._v("#")]),s._v(" Nginx服务操作的问题")]),s._v(" "),t("p",[s._v("经过前面的操作，我们会发现，如果想要启动、关闭或重新加载nginx配置文件，都需要先进入到nginx的安装目录的sbin目录，然后使用nginx的二级制可执行文件来操作，相对来说操作比较繁琐，这块该如何优化？另外如果我们想把Nginx设置成随着服务器启动就自动完成启动操作，又该如何来实现?这就需要用到接下来我们要讲解的两个知识点：")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[s._v("Nginx配置成系统服务\nNginx命令配置到系统环境\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"nginx配置成系统服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置成系统服务"}},[s._v("#")]),s._v(" Nginx配置成系统服务 😄")]),s._v(" "),t("p",[s._v("把Nginx应用服务设置成为系统服务，方便对Nginx服务的启动和停止等相关操作，具体实现步骤:")]),s._v(" "),t("ol",[t("li",[s._v("在"),t("code",[s._v("/usr/lib/systemd/system")]),s._v("目录下添加nginx.service,内容如下:")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[s._v("[Unit]\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("nginx web service")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("Documentation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("http://nginx.org/en/docs/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("network.target")]),s._v("\n\n[Service]\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("forking")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("PIDFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/usr/local/nginx/logs/nginx.pid")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("ExecStartPre")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/usr/local/nginx/sbin/nginx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("ExecReload")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/usr/local/nginx/sbin/nginx -s reload")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("ExecStop")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/usr/local/nginx/sbin/nginx -s stop")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("PrivateTmp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true")]),s._v("\n\n[Install]\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("default.target")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("添加完成后如果权限有问题需要进行权限设置")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /usr/lib/systemd/system/nginx.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("使用系统命令来操作Nginx服务")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("启动: systemctl start nginx\n停止: systemctl stop nginx\n重启: systemctl restart nginx\n重新加载配置文件: systemctl reload nginx\n查看nginx状态: systemctl status nginx\n开机启动: systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"nginx命令配置到系统环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx命令配置到系统环境"}},[s._v("#")]),s._v(" Nginx命令配置到系统环境 😄")]),s._v(" "),t("p",[s._v("前面我们介绍过Nginx安装目录下的二级制可执行文件"),t("code",[s._v("nginx")]),s._v("的很多命令，要想使用这些命令前提是需要进入sbin目录下才能使用，很不方便，如何去优化，我们可以将该二进制可执行文件加入到系统的环境变量，这样的话在任何目录都可以使用nginx对应的相关命令。具体实现步骤如下:")]),s._v(" "),t("p",[s._v("演示可删除")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("/usr/local/nginx/sbin/nginx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/sbin  nginx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("\n如何优化？？？\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",[t("li",[s._v("修改"),t("code",[s._v("/etc/profile")]),s._v("文件")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n在最后一行添加\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/usr/local/nginx/sbin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("使之立即生效")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("执行nginx命令")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("nginx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);