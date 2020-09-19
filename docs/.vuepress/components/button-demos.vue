<template>
    <div>
        <e-button>默认按钮</e-button>
        <e-button :loading="loading" @click="loading=!loading">{{loading?'加载中':'默认按钮'}}</e-button>
        <e-button icon="setting">添加图标</e-button>
        <e-button icon="setting" iconPosition="right">添加图标</e-button>
        <e-button disabled>禁用按钮</e-button>
    </div>
</template>

<script lang='ts'>
  import Button from '../../../src/button.vue';

  export default {
    data() {
      return {
        loading: true
      };
    },
    components: {
      'e-button': Button
    },
    mounted() {
      console.log(Button);
    },

  };
</script>

<style lang="scss" scoped>

</style>