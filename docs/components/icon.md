---
title: Icon - 图标
---
# Icon - 图标

## 预览

<br>

<ClientOnly>
<icon-demos />
</ClientOnly>

## 示例

```html
<template>
<div>
    <Icon name="setting" />
    <Icon name="info" />
    <Icon name="error" />
    <Icon name="download" />
    <Icon name="zan" />
    <Icon name="left" />
    <Icon name="right" />
    <Icon name="loading" />
</div>
</template>
```

## 使用更多图标

推荐自行导入图标。进入[iconfont](https://www.iconfont.cn/)网站

1. 需要将项目用到的svg前缀名改为 `i-` 。如：你需要一个名为star的图标，则它的全名称应该为：`i-star`

2. 使用Symbol模式生成图标链接，将链接引入`public/index.html`。

3. 使用时只需要输入后缀即可，如 `<Icon name="star" />`
