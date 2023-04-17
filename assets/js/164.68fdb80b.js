(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{512:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"redis的配置文件详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis的配置文件详解"}},[s._v("#")]),s._v(" Redis的配置文件详解")]),s._v(" "),n("blockquote",[n("p",[s._v("进入 "),n("code",[s._v("/usr/local/bin/redis-config")]),s._v(" 打开配置文件 "),n("code",[s._v("redis.conf")])])]),s._v(" "),n("h2",{attrs:{id:"_1-单位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-单位"}},[s._v("#")]),s._v(" 1. 单位")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1k => 1000 bytes")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1kb => 1024 bytes")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1m => 1000000 bytes")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1mb => 1024*1024 bytes")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1g => 1000000000 bytes")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1gb => 1024*1024*1024 bytes")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# units are case insensitive so 1GB 1Gb 1gB are all the same.")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("配置文件 "),n("code",[s._v("unit单位")]),s._v(" redis.conf对内存大小的大小写不敏感")]),s._v(" "),n("h2",{attrs:{id:"_2-包含-includes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-包含-includes"}},[s._v("#")]),s._v(" 2.  包含 "),n("code",[s._v("INCLUDES")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################## INCLUDES ###################################")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Include one or more other config files here.  This is useful if you")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# have a standard template that goes to all Redis servers but also need")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# to customize a few per-server settings.  Include files can include")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# other files, so use this wisely.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Notice option "include" won\'t be rewritten by command "CONFIG REWRITE"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# from admin or Redis Sentinel. Since Redis always uses the last processed")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# line as value of a configuration directive, you'd better put includes")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# at the beginning of this file to avoid overwriting config change at runtime.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If instead you are interested in using includes to override configuration")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# options, it is better to use include as the last line.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# include /path/to/local.conf")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# include /path/to/other.conf")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################## MODULES #####################################")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"_3-网络-network"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-网络-network"}},[s._v("#")]),s._v(" 3. 网络 "),n("code",[s._v("NETWORK")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定的ip地址")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保护模式，默认是开启状态，只允许本地客户端连接， 可以设置密码或添加bind来连接")]),s._v("\nprotected-mode "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口号，默认为6379，如果设为0，redis将不在socket 上监听任何客户端连接")]),s._v("\nport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TCP监听的最大容纳数量，在高并发的环境下，你需要把这个值调高以避免客户端连接缓慢的问题。Linux 内核会把这个值缩小成 /proc/sys/net/core/somaxconn对应的值，要提升并发量需要修改这两个值才能达到目的")]),s._v("\ntcp-backlog "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("511")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定redis监听的unix socket路径，默认不启用，unixsocketper指定文件的权限")]),s._v("\nunixsocket /tmp/redis.sock\nunixsocketperm "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定在一个 client 空闲多少秒之后关闭连接（0表示永不关闭）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单位是秒，表示将周期性的使用SO_KEEPALIVE检测客户端是否还处于健康状态，避免服务器一直阻塞，官方给出的建议值是300s，如果设置为0，则不会周期性的检测")]),s._v("\ntcp-keepalive "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h2",{attrs:{id:"_4-通用配置-general"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-通用配置-general"}},[s._v("#")]),s._v(" 4. 通用配置 "),n("code",[s._v("GENERAL")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认情况下 redis 不是作为守护进程运行(后台的方式运行)的 (默认是 no) ，如果你想让它在后台运行，你就把它改成 yes。当redis作为守护进程运行的时候，它会写一个 pid 到 /var/run/redis.pid 文件里面")]),s._v("\ndaemonize "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以通过upstart和systemd管理Redis守护进程")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选项：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   supervised no - 没有监督互动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   supervised upstart - 通过将Redis置于SIGSTOP模式来启动信号")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   supervised systemd - signal systemd将READY = 1写入$ NOTIFY_SOCKET")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   supervised auto - 检测upstart或systemd方法基于 UPSTART_JOB或NOTIFY_SOCKET环境变量")]),s._v("\nsupervised no \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置PID文件路径，当redis作为守护进程运行的时候(后台的方式运行)，它会把 pid 默认写到 /var/redis/run/redis_6379.pid 文件里面")]),s._v("\npidfile /var/run/redis_6379.pid\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义日志级别。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  可以是下面的这些值：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  debug（记录大量日志信息，适用于开发、测试阶段）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  verbose（较多日志信息）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  notice（适量日志信息，使用于生产环境）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  warning（仅有部分重要、关键信息才会被记录）")]),s._v("\nloglevel notice\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志文件的位置，当指定为空字符串时，为标准输出，如果redis已守护进程模式运行，那么日志将会输出到/dev/null")]),s._v("\nlogfile "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要想把日志记录到系统日志，就把它改成 yes，也可以可选择性的更新其他的syslog 参数以达到你的要求")]),s._v("\nsyslog-enabled no\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置系统日志的ID")]),s._v("\nsyslog-ident redis\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定系统日志设置，必须是 USER 或者是 LOCAL0-LOCAL7 之间的值")]),s._v("\nsyslog-facility local0\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置数据库的数目 (默认有16个数据库)。默认的数据库是DB 0 ，可以在每个连接上使用select  <dbid> 命令选择一个不同的数据库，dbid是一个介于0到databases - 1 之间的数值。")]),s._v("\ndatabases "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否总是显示LOGO")]),s._v("\nalways-show-logo "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("h2",{attrs:{id:"_5-快照-snapshotting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-快照-snapshotting"}},[s._v("#")]),s._v(" 5. 快照 "),n("code",[s._v("SNAPSHOTTING")])]),s._v(" "),n("p",[s._v("持久化， 在规定的时间内，执行了多少次操作，则会持久化到文件 .rdb. aof")]),s._v(" "),n("p",[s._v("redis 是内存数据库，如果没有持久化，那么数据断电及失！")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 存 DB 到磁盘：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    格式：save <间隔时间（秒）> <写入次数>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    根据给定的时间间隔和写入次数将数据保存到磁盘")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    注意：你可以注释掉所有的 save 行来停用保存功能。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#    也可以直接一个空字符串来实现停用：save ""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果900s内，如果至少有一个1 key进行了修改，我们及时进行持久化操作 ")]),s._v("\nsave "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果300s内，如果至少10 key进行了修改，我们及时进行持久化操作 ")]),s._v("\nsave "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果60s内，如果至少10000 key进行了修改，我们及时进行持久化操作 ")]),s._v("\nsave "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 持久化如果出错，是否还需要继续工作！")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  如果用户开启了RDB快照功能，那么在redis持久化数据到磁盘时如果出现失败，默认情况下，redis会停止接受所有的写请求。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  这样做的好处在于可以让用户很明确的知道内存中的数据和磁盘上的数据已经存在不一致了。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  如果redis不顾这种不一致，一意孤行的继续接收写请求，就可能会引起一些灾难性的后果。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  如果下一次RDB持久化成功，redis会自动恢复接受写请求。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  如果不在乎这种数据不一致或者有其他的手段发现和控制这种不一致的话，可以关闭这个功能，以便在快照写入失败时，也能确保redis继续接受新的写请求。")]),s._v("\nstop-writes-on-bgsave-error "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  对于存储到磁盘中的快照，可以设置是否进行压缩存储。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  如果是的话，redis会采用LZF算法进行压缩。如果你不想消耗CPU来进行压缩的话，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  可以设置为关闭此功能，但是存储在磁盘上的快照会比较大。")]),s._v("\nrdbcompression "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在存储快照后，我们还可以让redis使用CRC64算法来进行数据校验，但是这样做会增加大约10%的性能消耗，如果希望获取到最大的性能提升，可以关闭此功能。[保存rdb文件的时候，进行错误的检查校验！]")]),s._v("\nrdbchecksum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置快照的文件名")]),s._v("\ndbfilename dump.rdb\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置快照文件的存放路径，这个配置项一定是个目录，而不能是文件名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" ./ \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("h2",{attrs:{id:"_6-主从复制-replication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-主从复制-replication"}},[s._v("#")]),s._v(" 6. 主从复制 "),n("code",[s._v("REPLICATION")])]),s._v(" "),n("blockquote",[n("p",[s._v("详见主从复制")])]),s._v(" "),n("h2",{attrs:{id:"_7-安全-security"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-安全-security"}},[s._v("#")]),s._v(" 7. 安全 "),n("code",[s._v("SECURITY")])]),s._v(" "),n("h3",{attrs:{id:"设置密码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置密码"}},[s._v("#")]),s._v(" 设置密码")]),s._v(" "),n("ul",[n("li",[s._v("方式一: 配置文件中设置")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# requirepass foobared")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置redis密码")]),s._v("\nrequirepass "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("方式二: 命令行")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" config get requirepass "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取redis密码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"requirepass"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" requirepass "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置redis密码")]),s._v("\nOK\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" config get requirepass "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 没有密码,所有命令没有权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOAUTH Authentication required.\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" NOAUTH Authentication required.\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" auth "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用密码认证登录")]),s._v("\nOK\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" config get requirepass\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"requirepass"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("ul",[n("li",[s._v("密码认证登录")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 方式不安全")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-14-centos bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -p 6379 -a 123456")]),s._v("\nWarning: Using a password with "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-a'")]),s._v(" or "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-u'")]),s._v(" option on the "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line interface may not be safe.\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 安全")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-14-centos bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -p 6379")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" auth "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用密码认证登录")]),s._v("\nOK\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"_8-限制-clients"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-限制-clients"}},[s._v("#")]),s._v(" 8. 限制 "),n("code",[s._v("CLIENTS")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   设置"客户端最大并发连接数"，默认无限制，Redis可以同时打开的客户端连接数为Redis进程可以打开的最大文件. 描述符数-32（redis server自身会使用一些），如果设置 maxclients为0. 表示不作限制。当客户端连接数到达限制时，Redis会关闭新的连接并向客户端返回max number of clients reached错误信息')]),s._v("\nmaxclients "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis 配置最大的内存容量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定Redis最大内存限制，Redis在启动时会把数据加载到内存中，达到最大内存后，Redis会先尝试清除已到期或即将到期的Key. 当此方法处理后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis新的vm机制，会把Key存放内存，Value会存放在swap区，格式：maxmemory <bytes>")]),s._v("\nmaxmemory "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("bytes"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内存到达上限之后的处理策略")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1、volatile-lru：只对设置了过期时间的key进行LRU（默认值） 2、allkeys-lru ： 删除lru算法的key 3、volatile-random：随机删除即将过期key 4、allkeys-random：随机删除 5、volatile-ttl ： 删除即将过期的 6、noeviction ： 永不过期，返回错误")]),s._v("\nmaxmemory-policy noeviction\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  LRU 和 minimal TTL 算法都不是精准的算法，但是相对精确的算法(为了节省内存)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  随意你可以选择样本大小进行检，redis默认选择3个样本进行检测，你可以通过maxmemory-samples进行设置样本数")]),s._v("\nmaxmemory-samples "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"_9-aof模式-append-only-mode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-aof模式-append-only-mode"}},[s._v("#")]),s._v(" 9. aof模式 "),n("code",[s._v("APPEND ONLY MODE")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("appendonly no "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认是不开启aof模式的，默认是使用rdb方式持久化的，在大部分所有的情况下， rdb完全够用！ ")]),s._v("\n\nappendfilename "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appendonly.aof"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 持久化的文件的名字 ")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# appendfsync always # 每次修改都会 sync。消耗性能 ")]),s._v("\nappendfsync everysec "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每秒执行一次 sync，可能会丢失这1s的数据！")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# appendfsync no # 不执行 sync，这个时候操作系统自己同步数据，速度最快！")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);