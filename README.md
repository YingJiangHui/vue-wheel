## vue造轮子

[![Build Status](https://travis-ci.org/YingJiangHui/vue-wheel.svg?branch=master)](https://travis-ci.org/YingJiangHui/vue-wheel)

## 介绍

这是一个我在学习vue的过程中，简易开发的UI框架。希望能够适合你。
## 开始使用
1. 安装
```
yarn add eagle-ui-lib --save
or
npm i eagle-ui-lib --save
```
2. 框架默认css样式
```
*,*::after,*::before{
    box-sizing:border-box;
}
```
3. 引入

```
import { Button , Icon , ButtonGroup} from 'ying-wheel-1'
import 'ying-wheel-1/dist/index.css'

export default {
  name: 'App',
  components: {
    'w-button':Button,
    'w-button-group':ButtonGroup,
    'w-icon':Icon
  }
}
```
支持IE8以上

## 文档
git: [eagle ui docs](https://yingjianghui.github.io/eagle-ui-docs/)

gitee: [eagle ui docs](https://yingjianghui.gitee.io/eagle-ui-docs)

 
## 提问

## 变更记录

## 贡献代码