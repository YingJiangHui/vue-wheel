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
  import Toast from '../../../src/toast';
  import Button from '../../../src/button';
  import plugin from '../../../src/plugin';
  import Vue from 'vue';

  Vue.use(plugin);
  export default {
    components: {
      'e-toast': Toast,
      'e-button': Button,
    },
    data(){
      return {
        loading:false
      }
    },
    methods: {
      onClick1() {
        this.$toast('message');
      },

      onClick2() {
        this.$toast('message', {
          position: 'middle'
        });
      },
      onClick3() {
        this.$toast('message', {
          position: 'bottom'
        });
      },
      onClick4() {
        this.$toast('message', {
          autoCloseDelay: 3,
          closeButton: {text: ''}
        });
      },
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
      onClick6(){
        this.$toast('<strong><a href="https://www.baidu.com/">点击跳转百度</a></strong>', {
          enableHtml:true
        });
      },
    },

  };

</script>

<style lang="scss" scoped>

</style>