<template>
    <div class="eagle-tabs">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
export default {
  name:'EagleTabs',
  props:{
    direction:{
      type:String,
      default:'horizontal',
      validator(value){
        return ['horizontal','vertical'].indexOf(value)>=0
      }
    },
    selected:{
      type:String,
      required:true,
    }
  }
}

</script>

<style lang="scss" scoped>

</style>