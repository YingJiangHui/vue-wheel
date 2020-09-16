<template>
    <div class="row" :style="getGutter">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'WRow',
    props:{
      gutter:{
        type:[String,Number]
      }
    },
    mounted(){
      this.$children.forEach((vm)=>{
        vm.gutter = this.gutter
      })
    },
    computed:{
      getGutter(){
        return {marginLeft: -this.gutter/2+'px', marginRight: -this.gutter/2+'px'}
      }
    }
  };

</script>

<style lang="scss" scoped>
.row{
    display: flex;
}
</style>