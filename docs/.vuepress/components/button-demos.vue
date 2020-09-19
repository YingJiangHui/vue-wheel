<template>
    <div>
        <e-button>默认按钮</e-button>
    </div>
</template>

<script lang='ts'>
  import Button from '../../../src/button.vue'
  export default {
    components:{
      'e-button':Button
    },
    mounted(){
      console.log(Button)
    }
  }
</script>

<style lang="scss" scoped>

</style>