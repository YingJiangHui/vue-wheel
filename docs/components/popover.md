---
title: Popover - 弹出层
---

# Popover - 弹出层

## 点击效果
### 预览

<br>

<ClientOnly>
<popover-click-demos />
</ClientOnly>

### 示例




```vue

<template>
    <div>
        <e-popover position="top">
            <template slot="content">top</template>
            <e-button>上方出现</e-button>
        </e-popover>
        <e-popover position="bottom">
            <template slot="content">bottom</template>
            <e-button>下方出现</e-button>
        </e-popover>
        <e-popover position="left">
            <template slot="content">left</template>
            <e-button>左方出现</e-button>
        </e-popover>
        <e-popover position="right">
            <template slot="content">right</template>
            <e-button>右方出现</e-button>
        </e-popover>
    </div>
</template>

<script lang='ts'>
  import Popover from '../../../src/popover';
  import Button from '../../../src/button';

  export default {
    components: {
      'e-popover': Popover,
      'e-button': Button
    }
  };

</script>


```
### 选项

#### 1. 位置

使用`position`设置popover出现的位置。

参数：`top | bottom | left |right`

默认：`top`

默认插槽用于放置按钮。具名插槽`slot="content"`用于放置popover内容

## hover效果

### 预览

<br>

<ClientOnly>
<popover-hover-demos />
</ClientOnly>

### 示例

```vue{3,7,11,15}
<template>
  <div>
        <e-popover trigger="hover" position="top">
            <template slot="content">top</template>
            <e-button>上方出现</e-button>
        </e-popover>
        <e-popover trigger="hover" position="bottom">
            <template slot="content">bottom</template>
            <e-button>下方出现</e-button>
        </e-popover>
        <e-popover trigger="hover" position="left">
            <template slot="content">left</template>
            <e-button>左方出现</e-button>
        </e-popover>
        <e-popover trigger="hover" position="right">
            <template slot="content">right</template>
            <e-button>右方出现</e-button>
        </e-popover>
    </div>
</template>
```

### 属性

#### 事件

使用`trigger`属性设置触发popover的事件机制类型

可选类型：`hover | click`

默认：`click`


## 嵌入关闭按钮

### 预览
<br>

<ClientOnly>
<popover-insetCloseButton-demos />
</ClientOnly>

### 示例

```vue{4,6}
<template>
    <div>
        <e-popover position="top">
            <template slot="content" slot-scope="{close}">
                Popover
                <e-button @click="close">关闭</e-button>
            </template>
            <e-button>点我</e-button>
        </e-popover>
    </div>
</template>
```

插槽会将关闭函数返回，添加一个按钮触发该函数即可关闭Popover