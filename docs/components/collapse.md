---
title: Collapse - 折叠框
---

# Collapse - 折叠框

## 默认折叠框
### 预览

<br>

<ClientOnly>
<collapse-demos />
</ClientOnly>

### 示例

```vue{20}
<template>
    <e-collapse :selected.sync="selectedArray">
        <e-collapse-item title="标题1" name="1">一段内容1。。。</e-collapse-item>
        <e-collapse-item title="标题2" name="2">一段内容2。。。</e-collapse-item>
        <e-collapse-item title="标题3" name="3">一段内容3。。。</e-collapse-item>
    </e-collapse>
</template>

<script lang='ts'>
  import Collapse from '../../../src/collapse';
  import CollapseItem from '../../../src/collapse-item';

  export default {
    components: {
      'e-collapse': Collapse,
      'e-collapse-item': CollapseItem
    },
    data() {
      return {
        selectedArray: ['1']//默认展示name为1的item
      };
    }
  };
</script>
```

### 属性

#### 1. 选项列表(必填)

`collapse`组件的`selected`属性接收一个数组作为参数。用于存放当前展开的内容。


#### 2. name(必填)
`collapse-item`组件接收`name`属性,来区分每个组件。`name`属性的值必须是唯一的。

可将默认展示的`name`值填充到`selected`数组中作为默认值

参数：`String | Number`


#### 3. 标题

`collapse-item`组件接收`title`属性，作为折叠框每项的标题。

参数：`String | Number`

#### 4. 手风琴
`collapse`组件中使用`single`属性设置同一时刻仅展示一项。

参数：`Boolean`

##### 预览
<br>

<ClientOnly>
<collapse-single-demos />
</ClientOnly>

##### 示例

```vue{1}
<e-collapse :selected.sync="selectedArray" single>
    <e-collapse-item title="标题1" name="1">一段内容1。。。</e-collapse-item>
    <e-collapse-item title="标题2" name="2">一段内容2。。。</e-collapse-item>
    <e-collapse-item title="标题3" name="3">一段内容3。。。</e-collapse-item>
</e-collapse>
```

