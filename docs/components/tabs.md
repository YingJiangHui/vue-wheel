---
title: Tabs - 选择面板
---

# Tabs - 选择面板

## 预览
<br>
<ClientOnly>
<tabs-demos />
</ClientOnly>

## 示例

```html
<e-tabs selected="sports">
    <e-tabs-head>
        <e-tabs-item name="sports">
            <e-icon name="zan"></e-icon>
            体育
        </e-tabs-item>
        <e-tabs-item name="finance" disabled>财经</e-tabs-item>
        <e-tabs-item name="lean">学习</e-tabs-item>
        <e-tabs-item name="military">军事</e-tabs-item>
    </e-tabs-head>
    <e-tabs-body>
        <e-tabs-pane name="sports">体育新闻...</e-tabs-pane>
        <e-tabs-pane name="finance">财经新闻...</e-tabs-pane>
        <e-tabs-pane name="lean">学习</e-tabs-pane>
        <e-tabs-pane name="military">军事新闻...</e-tabs-pane>
    </e-tabs-body>
</e-tabs>
```

## 选项

### 1. name
你需要为每个item与pane提供对用的`name`属性作为标记，并且需要保证提供的值必须是唯一的

参数：`Number | String` 
### 2. 禁用
使用`disable`禁用某一项

参数：`Boolean`