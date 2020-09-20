<template>
    <div>
        <e-button @click="onClick">点我</e-button>
    </div>
</template>

<script lang="ts">
  import Toast from '../../../src/toast';
  import Button from '../../../src/button';
  import plugin from '../../../src/plugin';
  import Vue from 'vue'
  Vue.use(plugin)
  export default {
    components: {
      'e-toast': Toast,
      'e-button': Button,
    },
    methods: {
      onClick() {
        console.log(1)
        this.$toast('message')
      }
    },
    mounted() {

    }
  };

</script>

<style lang="scss" scoped>

</style>