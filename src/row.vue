<template>
    <div class="eagle-row" :style="getGutter" :class="getAlign">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleRow',
    props:{
      gutter:{
        type:[String,Number]
      },
      align:{
        validator(value){
          return ['right','left','center'].indexOf(value)>=0
        }
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
      },
      getAlign(){
        return [this.align && `align-${this.align}`]
      }
    }
  };

</script>

<style lang="scss" scoped>
.eagle-row{
    display: flex;
    &.align-left{
        justify-content: flex-start;
    }
    &.align-right{
        justify-content: flex-end;
    }
    &.align-center{
        justify-content: center;
    }
}
</style>