---
title: Layout - 布局
---

# Layout - 布局

## 预览
<ClientOnly>
<layout-demos />
</ClientOnly>

## 示例

### 上中下
```html
<e-layout>
    <e-header>Header</e-header>
    <e-content>Content</e-content>
    <e-footer>Footer</e-footer>
</e-layout>
```
### 内部添加Sider
```html
<e-layout>
    <e-header>Header</e-header>
    <e-layout>
        <e-sider>Sider</e-sider>
        <e-content>Content</e-content>
    </e-layout>
    <e-footer>Footer</e-footer>
</e-layout>
```

### 内部添加Sider
```html
<e-layout>
    <e-sider>Sider</e-sider>
    <e-layout>
        <e-header>Header</e-header>
        <e-content>Content</e-content>
        <e-footer>Footer</e-footer>
    </e-layout>
</e-layout>
```


::: tip
为了降低侵入性，请自行给组件添加class样式调整header、footer、sider的宽高。content是自适应的会占满剩余高度。

:::


