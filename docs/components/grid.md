---
title: Grid - 栅格
---

# Grid 栅格

栅格系统将一行分为24个平均的网格。

## 网格

### 预览
<br>

<ClientOnly>
<grid-demos />
</ClientOnly>

### 示例
通过span设置一列所占的网格数
```html
<e-row>
    <e-col span="24">100%</e-col>
</e-row>
<e-row>
    <e-col span="6">25%</e-col>
    <e-col span="6">25%</e-col>
    <e-col span="6" class="blue">25%</e-col>
    <e-col span="6">25%</e-col>
</e-row>
<e-row>
    <e-col span="8">33.33%</e-col>
    <e-col span="8">33.33%</e-col>
    <e-col span="8">33.33%</e-col>
</e-row>

<e-row>
    <e-col span="12">50%</e-col>
    <e-col span="12">50%</e-col>
</e-row>
<e-row>
    <e-col span="8">33.33%</e-col>
    <e-col span="16">66.66%</e-col>
</e-row>
```



## 偏移量

### 预览

<br>
<ClientOnly>
<grid-offset-demos />
</ClientOnly>

### 示例
通过offset设置网格的偏移量
```html
<e-row>
    <e-col span="20" offset="4" class="blue">80%</e-col>
</e-row>
<e-row>
    <e-col span="6" class="blue">25%</e-col>
    <e-col span="6" offset="6" class="blue">25%</e-col>
    <e-col span="6">25%</e-col>
</e-row>
<e-row>
    <e-col span="8" class="blue">33.33%</e-col>
    <e-col span="8" offset="8" class="blue">33.33%</e-col>
</e-row>
```

## 自适应

### 预览

<br>
<ClientOnly>
<grid-selfAdaption-demos />
</ClientOnly>

### 示例
提供了iPhone、ipad、narrow pc、pc、wide pc 五个尺寸

参数：`{span,offset}`
```html
<e-row gutter="10">
    <e-col 
    :iphone="{span:22}" 
    :ipad="{span:16}" 
    :narrow-pc="{span:12}"
    :pc="{span:8}" 
    :wide-pc="{span:4}"></e-col>
    
    <e-col :iphone="{span:2}" :ipad="{span:8}" :narrow-pc="{span:12}":pc="{span:16}" :wide-pc="{span:20}" class="blue"></e-col>
</e-row>
```

## 间隙
用于`gutter`设置列与列之间的间隙

参数：`String | Number`

```html
<e-row gutter="10"></e-row>
```
