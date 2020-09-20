---
title: Toast - 提示框
---

# Toast - 提示框

## 预览

<br>

<ClientOnly>
<toast-demos />
</ClientOnly>

## 示例

使用 toast 非常方便，只需要将插件挂载到 Vue 上，就可以使用 `this.$toast()` 方法呼出 toast 弹窗

``` vue{18,31,35-37,41-43,47-50,55-59,65-67}

<template>
    <div>
        <e-button @click="onClick1">上方弹出</e-button>
        <e-button @click="onClick2">中间弹出</e-button>
        <e-button @click="onClick3">下方弹出</e-button>
        <e-button @click="onClick4">自动关闭</e-button>
        <e-button @click="onClick5" :loading="loading">触发回调</e-button>
        <e-button @click="onClick6">支持HTML语法</e-button>
    </div>
</template>

<script lang="ts">
  import Button from '../../../src/button';
  import plugin from '../../../src/plugin';
  import Vue from 'vue';
  //使用插件
  Vue.use(plugin);
  export default {
    components: {
      'e-button': Button,
    },
    data(){
      return {
        loading:false
      }
    },
    methods: {
      //默认top
      onClick1() {
        this.$toast('message');
      },
      //middle
      onClick2() {
        this.$toast('message', {
          position: 'middle'
        });
      },
      //bottom
      onClick3() {
        this.$toast('message', {
          position: 'bottom'
        });
      },
      //不需要关闭按钮文字，且自动关闭
      onClick4() {
        this.$toast('message', {
          autoCloseDelay: 3,
          closeButton: {text: ''}
        });
      },
      //回调函数
      onClick5() {
        this.loading=false
        this.$toast('关闭后触发loading', {
          closeButton: {
            text: '知道了', callback: () => {
              this.loading=true
            }
          }
        });
      },
      //使用html
      onClick6(){
        this.$toast('<strong><a href="https://www.baidu.com/">点击跳转百度</a></strong>', {
          enableHtml:true
        });
      },
    },

  };

</script>
```


## 选项

### 1. 弹窗位置

使用 `position` 设置弹窗的位置

参数：`top | middle | bottom`

默认：`top`
### 2. 自动关闭

使用 `autoCloseDelay` 设置N秒后自动关闭

参数：`Number | String | false` 

默认：`false` (不自动关闭)

### 3. 控制按钮

使用 `closeButton` 设置关闭按钮的文字，及回调函数

参数：`{text: String,callback: (vm)=>{}}`

默认：`{text: '关闭',callback: undefined}`

将 `text` 设置为空时不出现关闭按钮。


### 4. 解析HTML代码
使用 `enableHtml` 设置是否解析HTML代码

参数：`Boolean`

默认：`false`