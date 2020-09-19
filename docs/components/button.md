---
title: Button - 按钮
---
# Button - 按钮
## 单个按钮
### 预览

<br>

<ClientOnly>
<button-demos />
</ClientOnly>

### 示例
```html
<e-button>默认按钮</e-button>
<e-button :loading="loading" @click="loading=!loading">{{loading?'加载中':'默认按钮'}}</e-button>
<e-button icon="setting">添加图标</e-button>
<e-button icon="setting" iconPosition="right">添加图标</e-button>
<e-button disabled>禁用按钮</e-button>

```

### 选项

#### 1. 图标

##### 1.1 设置svg图标
使用 `icon` 属性在Button中嵌入svg图标。

参数：`setting、info、error、download、zan、left、right、loading`
##### 1.2 设置图标位置

使用 `iconPosition` 修改图标的位置，默认为 `left`

参数：`left、right`

#### 2. 加载动画

使用 `loading` 设置是否出现加载动画。

参数：`Boolean`


#### 3. 禁用

使用 `disabled` 属性设置按钮是否被禁用

参数：`Boolean`


## 按钮组

### 预览
<br>
<ClientOnly>
<button-group-demos />
</ClientOnly>

### 示例

```html
<e-button-group>
    <e-button icon="left">上一页</e-button>
    <e-button>提交</e-button>
    <e-button icon="right" iconPosition="right">下一页</e-button>
</e-button-group>
```