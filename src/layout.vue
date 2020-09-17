<template>
    <div class="eagle-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleLayout',
    data(){
      return {
        layoutClass:{
          hasSider:false
        }
      }
    },
    mounted(){
      const children = this.$children
      children.forEach(vm=>{
        if(vm.$options.name==='EagleSider'){
          this.layoutClass.hasSider = true
        }
      })
    }
  };

</script>

<style lang="scss" scoped>
    .eagle-layout{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        &>*{
            border: 1px solid red;
        }
        &.hasSider{
            flex-direction: row;
        }
    }
</style>