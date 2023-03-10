(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{403:function(t,a,s){"use strict";s.r(a);var r=s(7),_=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sonarqube代码质量检查平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sonarqube代码质量检查平台"}},[t._v("#")]),t._v(" SonarQube代码质量检查平台")]),t._v(" "),a("h2",{attrs:{id:"前言-code-review"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言-code-review"}},[t._v("#")]),t._v(" 前言：code review：")]),t._v(" "),a("p",[t._v("​    随着业务的发展，系统越来越庞大，原本简单稳定的功能，可能在不断迭代后复杂度上升，潜在的风险也随之暴露，导致最终服务不稳定，造成业务价值的损失。而为了减少这种情况，有一种比较好的方式就是提高代码质量，比如通过 code review，从而降低错误风险。首先，我们先来看看 code reivew 的用处：")]),t._v(" "),a("ul",[a("li",[t._v("（1）code review 可以通过大家的建议改善代码的质量，提高代码的可读性、可维护性，以及确保程序逻辑和对需求、设计的实现的正确性")]),t._v(" "),a("li",[t._v("（2）code review 是一个传递知识的方式，让不熟悉代码的人知道作者的意图和想法，从而可以在以后轻松维护代码")]),t._v(" "),a("li",[t._v("（3）code review 也鼓励程序员们相互学习对方的长处和优点")]),t._v(" "),a("li",[t._v("（4）code review 也可以被用来确认自己的设计和实现是一个清楚和简单的")])]),t._v(" "),a("p",[t._v("但在 code reivew 的诸多用处中，我们并没有提到可以帮助找到程序的bug和保证代码风格和编码规范，这是因为我们认为：")]),t._v(" "),a("ul",[a("li",[t._v("code review 不应该承担发现代码错误的职责。code review 主要是审核代码的质量，如可读性，可维护性，以及程序的逻辑和对需求和设计的实现。代码中的bug和错误应该由单元测试，功能测试，性能测试，回归测试来保证。")]),t._v(" "),a("li",[t._v("code review 不应该成为保证代码风格和编码规范的手段。编码规范和代码风格都属于死的东西，当把自己的代码提交给团队 review 时，代码就应该是符合规范的，这是属于每个人自己的事情，不应该交由团队来完成，否则只会浪费大家本来就不够的时间。")])]),t._v(" "),a("p",[t._v("​    当然，上述言论只是说上面两件事情并不是 code review 的意图，并不是说，你不能在 code review 中报告一个程序的bug或是一个代码规范的问题。如果要把上述两件事归入 code review 的职责，那将会导致 code review 增加大量的人力成本，且工作量随代码量的增加而增加，审查效率低；并且简单的 code review 只能解决代码风格问题，很难发现代码缺陷、漏洞、重复度、复杂度等方面的问题，效果差。")]),t._v(" "),a("p",[t._v("​    所以，对于上面这两件事情，除了需要作者自己保证外，当然还有工具可以帮助我们检查代码规范的，比如下文介绍的 "),a("a",{attrs:{href:"https://so.csdn.net/so/search?q=Sonarqube&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sonarqube"),a("OutboundLink")],1),t._v(" 平台。")]),t._v(" "),a("h2",{attrs:{id:"_1-sonarqube-整体介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-sonarqube-整体介绍"}},[t._v("#")]),t._v(" 1. SonarQube 整体介绍")]),t._v(" "),a("h3",{attrs:{id:"_1-1-sonarqube-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-sonarqube-是什么"}},[t._v("#")]),t._v(" 1.1 SonarQube 是什么?")]),t._v(" "),a("p",[t._v("​    SonarQube 是一个代码"),a("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E8%B4%A8%E9%87%8F%E7%AE%A1%E7%90%86&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("质量管理"),a("OutboundLink")],1),t._v("的开源平台，通过 SonarQube 提供的代码扫描、质量阈值卡点等质量红线，我们可以提升系统的可靠性，提前捕获和提示代码中的错误，从而避免未定义的行为影响到用户，保证业务质量，也能确保管理的代码库干净并且可维护，以便提高开发人员的开发效率。")]),t._v(" "),a("p",[t._v("​    SonarQube 可以从以下七个维度检测代码质量，而作为开发人员至少需要处理前5种代码质量问题。")]),t._v(" "),a("ul",[a("li",[t._v("（1）不遵循代码标准：sonar 可以通过 PMD、CheckStyle、Findbugs 等知名的静态代码规则分析工具规范代码编写。")]),t._v(" "),a("li",[t._v("（2）潜在的缺陷：sonar 可以通过 PMD、CheckStyle、Findbugs 等知名的静态代码规则分析工具检测出潜在的缺陷。")]),t._v(" "),a("li",[t._v("（3）糟糕的复杂度分布：文件、类、方法等，如果复杂度过高将难以改变，这会使得开发人员难以理解它们，且如果没有自动化的单元测试，对于程序中的任何组件的改变都将可能导致需要全面的回归测试。")]),t._v(" "),a("li",[t._v("（4）重复：显然程序中包含大量复制粘贴的代码是质量低下的，sonar 可以展示源码中重复严重的地方。")]),t._v(" "),a("li",[t._v("（5）注释不足或者过多：没有注释将使代码可读性变差，特别是当不可避免地出现人员变动时，程序的可读性将大幅下降，而过多的注释又会使得开发人员将精力过多地花费在阅读注释上，亦违背初衷。")]),t._v(" "),a("li",[t._v("（6）缺乏单元测试：sonar可以很方便地统计并展示单元测试覆盖率。")]),t._v(" "),a("li",[t._v("（7）糟糕的设计：通过sonar可以找出循环，展示包与包、类与类之间的相互依赖关系，可以检测自定义的架构规则，通过sonar可以管理第三方的jar包，可以利用LCOM4检测单个任务规则的应用情况，检测耦合。")])]),t._v(" "),a("p",[t._v("​    另外 SonarQube 也可以生成详细的代码分析质量报告，并通过强大的"),a("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E4%BB%AA%E8%A1%A8%E7%9B%98&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("仪表盘"),a("OutboundLink")],1),t._v("展示出来，使我们能够根据角色的不同，查看不同维度的度量标准。")]),t._v(" "),a("h3",{attrs:{id:"_1-2-sonarqube-的工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-sonarqube-的工作原理"}},[t._v("#")]),t._v(" 1.2 SonarQube 的工作原理")]),t._v(" "),a("p",[t._v("官方给出了典型的开发过程：")]),t._v(" "),a("ul",[a("li",[t._v("（1）开发人员在编写并提交代码（最好在 IDE 中集成 sonarlint 插件，并在本地进行代码分析检测，减少更多的缺陷代码被集成到 SCM 上）")]),t._v(" "),a("li",[t._v("（2）SCM 通过 webhook 调用，触发 CI 持续集成，CI 触发 Sonar Scanner，将本地代码进行扫描分析，输出分析报告，并发送给 SonarQube 服务端")]),t._v(" "),a("li",[t._v("（3）SonarQube 接受分析报告并处理，最终渲染到UI界面")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100800298.png",alt:"img"}})]),t._v(" "),a("p",[t._v("SonarQube工作流程包含3个组件：")]),t._v(" "),a("ul",[a("li",[t._v("（1）Scanner：扫描器，负责将源文件进行代码分析，并将分析后的报告发送给SonarQube服务器")]),t._v(" "),a("li",[t._v("（2）SonarQube Server：SonarQube服务器，负责处理分析报告，后台管理等")]),t._v(" "),a("li",[t._v("（3）Database server：数据库服务器，负责存储数据")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100800296.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"_2-sonarqube-功能与使用说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-sonarqube-功能与使用说明"}},[t._v("#")]),t._v(" 2. SonarQube 功能与使用说明")]),t._v(" "),a("h3",{attrs:{id:"_2-1-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-项目"}},[t._v("#")]),t._v(" 2.1 项目")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100800201.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_1-项目-总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-项目-总览"}},[t._v("#")]),t._v(" 1. 项目-总览")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100800791.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_2-项目-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-项目-问题"}},[t._v("#")]),t._v(" 2. 项目-问题")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100800894.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("问题共分为三种类型：")]),t._v(" "),a("ul",[a("li",[t._v("Bug：潜在的代码缺陷，可能引起系统执行异常（比如空指针、魔法值等）")]),t._v(" "),a("li",[t._v("漏洞：潜在的安全漏洞，比如sql注入、cors、xss攻击等")]),t._v(" "),a("li",[t._v("异味：代码的坏味道。比如不遵循代码标准、糟糕的复杂度分布、注释不足或注释过多、糟糕的设计等")])]),t._v(" "),a("p",[t._v("（1）问题类型（不推荐修改）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100800820.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("（2）问题的重要程度（不推荐修改）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100800801.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("（3）问题状态，分为五个状态：")]),t._v(" "),a("ul",[a("li",[t._v("打开：问题被质量分析后的初始状态（SonarQube）")]),t._v(" "),a("li",[t._v("确认：问题修复后，需要开发人员手动指定，表示该问题已修复（开发人员）")]),t._v(" "),a("li",[t._v("误判：标记问题为误判，表示此问题不应该标记为问题，无需处理（管理员）")]),t._v(" "),a("li",[t._v("标记为不会修复：表示此问题不做处理（管理员）")]),t._v(" "),a("li",[t._v("重新打开：当SonarQube再次分析报告时，若问题再次暴露则显示为重新打开（SonarQube）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801277.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("（4）问题指派：")]),t._v(" "),a("p",[t._v("可以将问题分配给指定用户。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801377.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("当问题分配给其他用户后，若该用户有启动提醒功能，则SonarQube会发送邮件进行告警")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801415.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("当 Sonar 分析报告后，会根据SCM的相关记录找到对应的用户，进行自动指派。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801375.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("（5）其他：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801416.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_3-项目-安全热点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-项目-安全热点"}},[t._v("#")]),t._v(" 3. 项目-安全热点")]),t._v(" "),a("p",[t._v("安全热点是SonarQube检测出来可能存在安全问题，需要项目管理员进行复审，确认是否存在问题。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801718.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h5",{attrs:{id:"_3-1-项目-安全热点-复审"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-项目-安全热点-复审"}},[t._v("#")]),t._v(" 3.1 项目-安全热点-复审：")]),t._v(" "),a("p",[t._v("首先确保当前用户具有管理安全热点的权限")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801422.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("具有安全热点管理权限后，按钮将显示为蓝色")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801670.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("复审状态总共有三个，分别为")]),t._v(" "),a("ul",[a("li",[t._v("（1）需要复审：默认状态")]),t._v(" "),a("li",[t._v("（2）已修复：表示该安全代码已经修复")]),t._v(" "),a("li",[t._v("（3）安全：代码风险，无需修改")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801943.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h5",{attrs:{id:"_3-2-项目-安全热点-sonarqube提醒-建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-项目-安全热点-sonarqube提醒-建议"}},[t._v("#")]),t._v(" 3.2 项目-安全热点-SonarQube提醒/建议")]),t._v(" "),a("p",[t._v("在这个板块，SonarQube会解释为何是安全代码，且告诉你怎么修复。（英语不好的人建议翻译一下）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801608.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("翻译后")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801861.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/c6e087ab59524dc3bdbae499e7517830.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801844.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_4-项目-指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-项目-指标"}},[t._v("#")]),t._v(" 4. 项目-指标")]),t._v(" "),a("p",[t._v("观测当前项目的代码质量")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801482.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_5-项目-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-项目-代码"}},[t._v("#")]),t._v(" 5. 项目-代码")]),t._v(" "),a("p",[t._v("即SCM更新下来的代码，没啥区别，SonarQube自己也会存储一份")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801546.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_6-项目-活动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-项目-活动"}},[t._v("#")]),t._v(" 6. 项目-活动")]),t._v(" "),a("p",[t._v("分析记录的日志")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801109.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_7-项目-项目配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-项目-项目配置"}},[t._v("#")]),t._v(" 7. 项目-项目配置")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801151.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("管理项目的基本配置")]),t._v(" "),a("p",[a("strong",[t._v("1.7.1、设置：")])]),t._v(" "),a("p",[t._v("设置项目的基本配置信息（不推荐）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801871.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("em",[a("strong",[t._v("*1.7.2、新代码周期：*")])])]),t._v(" "),a("p",[t._v("设置新代码周期的定义，默认按通用配置（即按上个版本的分析开始计算）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801529.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("也可以指定其他选项，如“天数”，可以指定距离上次分析多少天的数据作为为新代码")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801188.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("1.7.3、质量配置：")])]),t._v(" "),a("p",[t._v("​    质量配置，表示项目适配的质量配置，质量配置都是基于语言的，一个质量配置下面会存在多个代码规则。下图表示的项目qx_whale的质量配置基于java、xml两种语言，别分启用了452和11条代码规则。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801489.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("1.7.4、质量阈：")])]),t._v(" "),a("p",[t._v("它是项目质量是否合格的标准，通过设置质量阈来判断项目的代码质量是否达标。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100801321.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("默认使用SonarQube内置的质量阈配置（Sonar way）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802396.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("也可以自定义质量阈，如笔者定义的My Sonar Way，只要出现阻断违规问题，就达不到质量阈的要求")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802441.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("1.7.5、自定义指标：")])]),t._v(" "),a("p",[t._v("即项目-指标板块，展示项目的代码质量。 官方表示未来会废弃，所以不推荐大家使用")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802060.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("1.7.6、链接：")])]),t._v(" "),a("p",[t._v("配置一些跳转链接，比如项目的首页地址。建议在SonarScanner运行时指定sonar.links.homepage去配置首页地址")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802950.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("1.7.7、权限：")])]),t._v(" "),a("p",[t._v("当前项目的权限配置，后面用户与权限模块会特别介绍，这里就不赘述了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802578.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("1.7.8、后台任务：")])]),t._v(" "),a("p",[t._v("可以查看项目最近分析的记录")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802832.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("1.7.9、更新标识：")])]),t._v(" "),a("p",[t._v("SonarQube每个项目的标识都是唯一的，请确保使用者的项目标识唯一！！！")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802828.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("1.7.10、网络调用：")])]),t._v(" "),a("p",[t._v("俗称web hook，懂得都懂（可以与jenkins集成，将分析报告的质量阈状态回传，以便jenkins判断是否继续执行pipeline任务）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802986.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("1.7.11、删除：")])]),t._v(" "),a("p",[t._v("谨慎操作，点击删除后有二次确认操作。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802278.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"_2-2-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-问题"}},[t._v("#")]),t._v(" 2.2 问题")]),t._v(" "),a("p",[t._v("​    问题菜单跟“项目-问题”展示的基本一致，不同的是，问题菜单展示的是个人参与项目的所有问题，所以数量上相对较多")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802131.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"_2-3-代码规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-代码规则"}},[t._v("#")]),t._v(" 2.3 代码规则")]),t._v(" "),a("p",[t._v("代码规则，用来分析代码是否有问题")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802651.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802984.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"_2-4-质量配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-质量配置"}},[t._v("#")]),t._v(" 2.4 质量配置")]),t._v(" "),a("p",[t._v("质量配置，用于定义编程语言的代码分析集合。一个质量配置可以配置多个代码规则")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802431.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("举个例子，我们看下质量配置/Java下的代码规则详情，下图表示Java语言的质量配置模板Sonar way，共配置了452个激活的规则，187个未激活的规则，一共配置了639个规则。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802430.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("内置质量模板Sonar way不允许修改，若用户想要自定义质量模板，必须拥有“质量配置管理员”的权限才可以进行操作。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802576.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802955.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("举个例子，新建一个Java语言的质量模板")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802965.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802217.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("在左边的卡片“规则”中，我们点击“更多激活规则”")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802996.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802925.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("回到质量模板MyJavaRule，可以看到我们配置了一条代码规则。那么质量配置就介绍到这里了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802365.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("什么情况下会使用到质量配置呢？一般使用官方内置的Sonar way即可，如果有特殊需求的话，可以自己去定义质量模板。")]),t._v(" "),a("h3",{attrs:{id:"_2-5-质量阈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-质量阈"}},[t._v("#")]),t._v(" 2.5 质量阈")]),t._v(" "),a("p",[t._v("​    质量阈是一系列基于指标的布尔表达式，用户标准化质量，它可以帮助我们实时了解项目是否已经满足生产要求了。在集成进流水线的情况下，质量阈提供了质量卡点的能力，当存在质量项尚未达标的情况下，阻止发布流程进入到下一环节，流水线运行时会根据对应的质量红线对测试任务进行判断，是否能够通过红线，如果未通过红线，对应的任务将失败。但考虑在一些特殊的情况下，未通过质量红线的流程也需要继续往下执行，可以由管理员将红线跳过")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100802236.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("上图表示，所有项目默认的质量阈均为Sonar way，指标解释：新代码分析时，若覆盖率小于80% "),a("strong",[t._v("或者")]),t._v(" 重复行大于3% "),a("strong",[t._v("或者")]),t._v("…安全比率劣于A时，判定为质量阈失败。")]),t._v(" "),a("h4",{attrs:{id:"质量阈-自定义质量阈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#质量阈-自定义质量阈"}},[t._v("#")]),t._v(" 质量阈-自定义质量阈")]),t._v(" "),a("p",[t._v("​    默认情况下，所有项目使用相同的质量阈，每个项目的质量阈状态都会展示在首页。质量阈值也可以进行自定义，设定不同等级的阈值，对于老项目，会使用最低等级的阈值：阻断性的错误数量要求为0，对于一些新的项目，则严格要求质量如严重性的错误要求为0等，只要无法通过质量阈值检查，那么项目是无法上线的。")]),t._v(" "),a("p",[t._v("​    自定义质量阈，首先要有质量阈管理员的权限，可以参考下图设置（建议技术经理或者项目负责人设置此权限）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803720.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803839.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("新建一个自定义质量阈MySonarWay，只添加一个条件，当阻断违规的问题大于0时，判定为质量阈失败。")]),t._v(" "),a("p",[t._v("同时，还可以指定哪些项目使用此质量阈")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803673.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"_2-6-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-配置"}},[t._v("#")]),t._v(" 2.6 配置")]),t._v(" "),a("h4",{attrs:{id:"_1-用户与权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-用户与权限"}},[t._v("#")]),t._v(" 1. 用户与权限")]),t._v(" "),a("h5",{attrs:{id:"_1-1-用户管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-用户管理"}},[t._v("#")]),t._v(" 1.1 用户管理")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803602.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h5",{attrs:{id:"_1-2-群组管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-群组管理"}},[t._v("#")]),t._v(" 1.2 群组管理")]),t._v(" "),a("p",[t._v("可以通过群组，来进行用户的统一授权")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803086.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_2-项目权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-项目权限"}},[t._v("#")]),t._v(" 2. 项目权限")]),t._v(" "),a("p",[t._v("项目权限，用于设置"),a("strong",[t._v("公开")]),t._v("或者"),a("strong",[t._v("私有，****公开项目")]),t._v("所有人都可以访问，"),a("strong",[t._v("私有项目")]),t._v("只有访问权限的人可以访问（推荐）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803676.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("设置项目权限范围，管理员等")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803688.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_3-用户与权限-最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-用户与权限-最佳实践"}},[t._v("#")]),t._v(" 3. 用户与权限-最佳实践")]),t._v(" "),a("p",[t._v("角色大致上可以分为三种：系统管理员、技术经理、开发人员")]),t._v(" "),a("p",[a("strong",[t._v("（1）最佳实践-角色分工-系统管理员：")])]),t._v(" "),a("p",[t._v("系统管理员：只负责sonar平台的管理，不负责项目相关操作")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803469.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("（2）最佳实践-角色分工-技术经理：")])]),t._v(" "),a("p",[t._v("技术经理：负责项目成员定义，项目组定义，权限分配，质量配置、质量阈等配置")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803922.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("（3）最佳实践-角色分工-开发人员：")])]),t._v(" "),a("p",[t._v("开发人员：默认"),a("strong",[t._v("项目创建")]),t._v("与"),a("strong",[t._v("项目执行分析")]),t._v("，当开发人员创建项目时，该人员成为项目的管理者，拥有项目的所有权")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803027.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("（4）最佳实践-权限模板：")])]),t._v(" "),a("p",[t._v("配置默认权限模板（Default template），项目创建人拥有项目的所有权。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803834.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("若技术经理也需要同等权力的话，可以主动申请成为项目的管理员(详见下图)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803855.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h4",{attrs:{id:"_4-提醒-邮件告警"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-提醒-邮件告警"}},[t._v("#")]),t._v(" 4. 提醒（邮件告警）")]),t._v(" "),a("h5",{attrs:{id:"_4-1-系统邮件设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-系统邮件设置"}},[t._v("#")]),t._v(" 4.1 系统邮件设置")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803210.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803898.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803209.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h5",{attrs:{id:"_4-2-项目提醒设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-项目提醒设置"}},[t._v("#")]),t._v(" 4.2 项目提醒设置")]),t._v(" "),a("p",[t._v("只有订阅了项目提醒，用户才会收到项目推送的邮件。在管理员进行问题分配给用户时，特别有用。以下介绍如何进行项目提醒设置：")]),t._v(" "),a("p",[a("strong",[t._v("（1）方式一：")])]),t._v(" "),a("p",[t._v("进入项目")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803199.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("点击项目信息，设置提醒")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803069.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("全部勾选")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303100803243.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("（2）方式二（推荐）：")])]),t._v(" "),a("p",[t._v("一步到位，设置也简单。在个人账号设置自己的")]),t._v(" "),a("blockquote",[a("p",[t._v("1、主要参考文章：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_31257709/article/details/124566064#t9",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/weixin_31257709/article/details/124566064"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("2、推荐阅读：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://coolshell.cn/articles/11432.html/comment-page-4#comments",target:"_blank",rel:"noopener noreferrer"}},[t._v("从Code Review 谈如何做技术"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://coolshell.cn/articles/1302.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code Review中的几个提示"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=_.exports}}]);