const l=JSON.parse('{"key":"v-6e2dbe84","path":"/java/java-advence/design-patterns/4.Java%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html","title":"Java\u8BBE\u8BA1\u6A21\u5F0F-\u5355\u4F8B\u6A21\u5F0F","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"1. \u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\u4ECB\u7ECD","slug":"_1-\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\u4ECB\u7ECD","link":"#_1-\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\u4ECB\u7ECD","children":[]},{"level":2,"title":"2. \u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\u516B\u79CD\u65B9\u5F0F","slug":"_2-\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\u516B\u79CD\u65B9\u5F0F","link":"#_2-\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F\u516B\u79CD\u65B9\u5F0F","children":[{"level":3,"title":"1. \u5355\u4F8B\u6A21\u5F0F\u6709\u516B\u79CD\u65B9\u5F0F\uFF1A","slug":"_1-\u5355\u4F8B\u6A21\u5F0F\u6709\u516B\u79CD\u65B9\u5F0F","link":"#_1-\u5355\u4F8B\u6A21\u5F0F\u6709\u516B\u79CD\u65B9\u5F0F","children":[]},{"level":3,"title":"2. \u63A8\u8350\u7684\u6A21\u5F0F","slug":"_2-\u63A8\u8350\u7684\u6A21\u5F0F","link":"#_2-\u63A8\u8350\u7684\u6A21\u5F0F","children":[]}]},{"level":2,"title":"3. \u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F-\u793A\u4F8B","slug":"_3-\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F-\u793A\u4F8B","link":"#_3-\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F-\u793A\u4F8B","children":[{"level":3,"title":"1. \u997F\u6C49\u5F0F(\u9759\u6001\u5E38\u91CF)","slug":"_1-\u997F\u6C49\u5F0F-\u9759\u6001\u5E38\u91CF","link":"#_1-\u997F\u6C49\u5F0F-\u9759\u6001\u5E38\u91CF","children":[]},{"level":3,"title":"2. \u997F\u6C49\u5F0F(\u9759\u6001\u4EE3\u7801\u5757)","slug":"_2-\u997F\u6C49\u5F0F-\u9759\u6001\u4EE3\u7801\u5757","link":"#_2-\u997F\u6C49\u5F0F-\u9759\u6001\u4EE3\u7801\u5757","children":[]},{"level":3,"title":"3. \u61D2\u6C49\u5F0F(\u7EBF\u7A0B\u4E0D\u5B89\u5168)","slug":"_3-\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u4E0D\u5B89\u5168","link":"#_3-\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u4E0D\u5B89\u5168","children":[]},{"level":3,"title":"4. \u61D2\u6C49\u5F0F(\u7EBF\u7A0B\u5B89\u5168\uFF1A\u540C\u6B65\u65B9\u6CD5)","slug":"_4-\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u5B89\u5168-\u540C\u6B65\u65B9\u6CD5","link":"#_4-\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u5B89\u5168-\u540C\u6B65\u65B9\u6CD5","children":[]},{"level":3,"title":"5. \u61D2\u6C49\u5F0F(\u540C\u6B65\u4EE3\u7801\u5757)","slug":"_5-\u61D2\u6C49\u5F0F-\u540C\u6B65\u4EE3\u7801\u5757","link":"#_5-\u61D2\u6C49\u5F0F-\u540C\u6B65\u4EE3\u7801\u5757","children":[]},{"level":3,"title":"6. \u53CC\u91CD\u68C0\u67E5(DoubleCheck) \u{1F604}","slug":"_6-\u53CC\u91CD\u68C0\u67E5-doublecheck","link":"#_6-\u53CC\u91CD\u68C0\u67E5-doublecheck","children":[]},{"level":3,"title":"7. \u9759\u6001\u5185\u90E8\u7C7B \u{1F604}","slug":"_7-\u9759\u6001\u5185\u90E8\u7C7B","link":"#_7-\u9759\u6001\u5185\u90E8\u7C7B","children":[]},{"level":3,"title":"8. \u679A\u4E3E\u65B9\u5F0F \u{1F604}","slug":"_8-\u679A\u4E3E\u65B9\u5F0F","link":"#_8-\u679A\u4E3E\u65B9\u5F0F","children":[]}]},{"level":2,"title":"4. \u5355\u4F8B\u6A21\u5F0F\u5728JDK\u5E94\u7528\u7684\u6E90\u7801\u5206\u6790","slug":"_4-\u5355\u4F8B\u6A21\u5F0F\u5728jdk\u5E94\u7528\u7684\u6E90\u7801\u5206\u6790","link":"#_4-\u5355\u4F8B\u6A21\u5F0F\u5728jdk\u5E94\u7528\u7684\u6E90\u7801\u5206\u6790","children":[]},{"level":2,"title":"5. \u5355\u4F8B\u6A21\u5F0F\u6CE8\u610F\u4E8B\u9879\u548C\u7EC6\u8282\u8BF4\u660E","slug":"_5-\u5355\u4F8B\u6A21\u5F0F\u6CE8\u610F\u4E8B\u9879\u548C\u7EC6\u8282\u8BF4\u660E","link":"#_5-\u5355\u4F8B\u6A21\u5F0F\u6CE8\u610F\u4E8B\u9879\u548C\u7EC6\u8282\u8BF4\u660E","children":[]}],"git":{},"filePathRelative":"java/java-advence/design-patterns/4.Java\u8BBE\u8BA1\u6A21\u5F0F-\u5355\u4F8B\u6A21\u5F0F.md"}');export{l as data};
