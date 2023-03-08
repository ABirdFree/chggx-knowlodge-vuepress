(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{362:function(s,a,e){"use strict";e.r(a);var t=e(7),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"基础的select语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础的select语句"}},[s._v("#")]),s._v(" 基础的SELECT语句")]),s._v(" "),a("h2",{attrs:{id:"_1-select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-select"}},[s._v("#")]),s._v(" 1. SELECT...")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT 1; #没有任何子句\nSELECT 9/2; #没有任何子句\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-select-from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-select-from"}},[s._v("#")]),s._v(" 2. SELECT ... FROM")]),s._v(" "),a("h3",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("p",[a("code",[s._v("SELECT")]),s._v(" 标识选择哪些列")]),s._v(" "),a("p",[a("code",[s._v("FROM")]),s._v(" 标识从哪个表中选择")]),s._v(" "),a("h3",{attrs:{id:"选择全部列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择全部列"}},[s._v("#")]),s._v(" 选择全部列")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT * FROM departments;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303082025668.png",alt:"image-20230308202551603"}}),s._v(" "),a("blockquote",[a("p",[s._v("一般情况下，除非需要使用表中所有的字段数据，最好不要使用通配符‘*’。使用通配符虽然可以节省输入查询语句的时间，但是获取不需要的列数据通常会降低查询和所使用的应用程序的效率。通配符的优势是，当不知道所需要的列的名称时，可以通过它获取它们。")]),s._v(" "),a("p",[s._v("在生产环境下，不推荐你直接使用 "),a("code",[s._v("SELECT *")]),s._v("进行查询。")])]),s._v(" "),a("h3",{attrs:{id:"选择特定的列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择特定的列"}},[s._v("#")]),s._v(" 选择特定的列")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT department_id, location_id FROM departments;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303082028888.png",alt:"image-20230308202813847"}}),s._v(" "),a("blockquote",[a("p",[s._v("MySQL中的SQL语句是不区分大小写的，因此SELECT和select的作用是相同的，但是，许多开发人员习惯将关键字大写、数据列和表名小写，读者也应该养成一个良好的编程习惯，这样写出来的代码更容易阅读和维护。")])]),s._v(" "),a("h2",{attrs:{id:"_3-列的别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-列的别名"}},[s._v("#")]),s._v(" 3. 列的别名")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("重命名一个列")])]),s._v(" "),a("li",[a("p",[s._v("便于计算")])]),s._v(" "),a("li",[a("p",[s._v("紧跟列名，也可以"),a("strong",[s._v("在列名和别名之间加入关键字AS，别名使用双引号")]),s._v("，以便在别名中包含空格或特殊的字符并区分大小写。")])]),s._v(" "),a("li",[a("p",[s._v("AS 可以省略")])]),s._v(" "),a("li",[a("p",[s._v("建议别名简短，见名知意")])])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT last_name AS name, commission_pct comm FROM employees;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303082030954.png",alt:"image-20230308203038915"}}),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('SELECT last_name "Name", salary*12 "Annual Salary" FROM employees;\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303082031626.png",alt:"image-20230308203156588"}}),s._v(" "),a("h2",{attrs:{id:"_4-去除重复行-distinct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-去除重复行-distinct"}},[s._v("#")]),s._v(" 4. 去除重复行(DISTINCT)")]),s._v(" "),a("p",[s._v("默认情况下，查询会返回全部行，包括重复行。")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT department_id FROM employees;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303082033921.png",alt:"image-20230308203311892"}})]),s._v(" "),a("p",[a("strong",[s._v("在SELECT语句中使用关键字DISTINCT去除重复行")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT DISTINCT department_id FROM employees;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303082034271.png",alt:"image-20230308203442232"}})]),s._v(" "),a("p",[s._v("针对于：")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT DISTINCT department_id,salary FROM employees;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这里有两点需要注意：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("DISTINCT 需要放到所有列名的前面，如果写成 SELECT salary, DISTINCT department_id FROM employees 会报错。")])]),s._v(" "),a("li",[a("p",[s._v("DISTINCT 其实是对后面所有列名的组合进行去重，你能看到最后的结果是 74 条，因为这 74 个部门id不同，都有 salary 这个属性值。如果你想要看都有哪些不同的部门（department_id），只需要写 DISTINCT department_id 即可，后面不需要再加其他的列名了。")])])]),s._v(" "),a("h2",{attrs:{id:"_5-空值参与运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-空值参与运算"}},[s._v("#")]),s._v(" 5. 空值参与运算🚗")]),s._v(" "),a("p",[s._v("所有运算符或列值遇到null值，运算的结果都为null")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('SELECT employee_id,salary,commission_pct,\n12 * salary * (1 + commission_pct) "annual_sal"\nFROM employees;\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这里你一定要注意，在 MySQL 里面， 空值不等于空字符串。一个空字符串的长度是 0，而一个空值的长度是空。而且，在 MySQL 里面，空值是占用空间的。")]),s._v(" "),a("h2",{attrs:{id:"_6-着重号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-着重号"}},[s._v("#")]),s._v(" 6. 着重号🚗")]),s._v(" "),a("ul",[a("li",[s._v("错误的")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT * FROM ORDER;\nERROR 1064 (42000): You have an error in your SQL syntax; check the manual that\ncorresponds to your MySQL server version for the right syntax to use near 'ORDER' at\nline 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("正确的")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT * FROM `ORDER`;\n+----------+------------+\n| order_id | order_name |\n+----------+------------+\n| 1 | shkstart |\n| 2 | tomcat |\n| 3 | dubbo |\n+----------+------------+\n3 rows in set (0.00 sec)\nmysql> SELECT * FROM `order`;\n+----------+------------+\n| order_id | order_name |\n+----------+------------+\n| 1 | shkstart |\n| 2 | tomcat |\n| 3 | dubbo |\n+----------+------------+\n3 rows in set (0.00 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("ul",[a("li",[s._v("结论")])]),s._v(" "),a("p",[s._v("我们需要保证表中的字段、表名等没有和保留字、数据库系统或常用方法冲突。如果真的相同，请在SQL语句中使用一对``（着重号）引起来")]),s._v(" "),a("h2",{attrs:{id:"_7-查询常数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-查询常数"}},[s._v("#")]),s._v(" 7. 查询常数🚗")]),s._v(" "),a("p",[s._v("SELECT 查询还可以对常数进行查询。对的，就是在 SELECT 查询结果中增加一列固定的常数列。这列的取值是我们指定的，而不是从数据表中动态取出的。")]),s._v(" "),a("p",[s._v("你可能会问为什么我们还要对常数进行查询呢？")]),s._v(" "),a("p",[s._v("SQL 中的 SELECT 语法的确提供了这个功能，一般来说我们只从一个表中查询数据，通常不需要增加一个固定的常数列，但如果我们想整合不同的数据源，用常数列作为这个表的标记，就需要查询常数。")]),s._v(" "),a("p",[s._v("比如说，我们想对 employees 数据表中的员工姓名进行查询，同时增加一列字段 corporation ，这个字段固定值为“晨光向”，可以这样写：")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT '晨光向' as corporation, last_name FROM employees;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_8-过滤数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-过滤数据"}},[s._v("#")]),s._v(" 8. 过滤数据")]),s._v(" "),a("ul",[a("li",[s._v("语法")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT 字段1,字段2\nFROM 表名\nWHERE 过滤条件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("使用WHERE 子句，将不满足条件的行过滤掉")]),s._v(" "),a("li",[a("code",[s._v("WHERE")]),s._v("子句紧随"),a("code",[s._v("FROM")]),s._v("子句")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT employee_id, last_name, job_id, department_id\nFROM employees\nWHERE department_id = 90 ;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://chggx-typora.oss-cn-beijing.aliyuncs.com/typora/202303082045344.png",alt:"image-20230308204515312"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);