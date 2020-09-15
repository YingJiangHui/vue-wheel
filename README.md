## vue造轮子


[![Build Status](https://travis-ci.org/YingJiangHui/vue-wheel.svg?branch=master)](https://travis-ci.org/YingJiangHui/vue-wheel)


## 介绍

这是一个我在学习vue的过程中，简易开发的UI框架。希望能够适合你。
## 开始使用
1. 安装
```
yarn add ying-wheel-1 --save
or
npm i ying-wheel-1 --save
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

如果你需要修改按钮的默认样式
```
:root {
    --button-height: 32px;
    --font-size: 14px;
    --color: #333;
    --button-bg: #fff;
    --border-radius: 4px;
    --border-color: #999;
    --button-active-bg: #eee;
    --button-hover-color: #666;
}
```
支持IE15以上
## 文档

## 提问

## 变更记录

## 练习方式

## 贡献代码