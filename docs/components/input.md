---
title：Input - 输入框
---

# Input - 输入框

## 预览
<br>
<ClientOnly>
<input-demos />
</ClientOnly>

## 示例
```html
<e-input value="默认"></e-input>
<e-input error="错误" value="报错输入框"></e-input>
<e-input disabled value="disable"></e-input>
<e-input readonly value="readonly"></e-input>
```

## 选项

### 1. 错误提示

使用`error`属性将输入框作为报错输入框接收报错信息作为参数

参数：`String`

### 2. 禁用

使用`disabled`属性设置输入框是否被禁用

参数：`Boolean`

### 3. 只读

使用readonly属性设置输入框是否只读

参数：`Boolean`