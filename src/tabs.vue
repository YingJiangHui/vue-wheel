<template>
    <div class="eagle-tabs">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
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
  },
  provide(){
    return{
      eventBus: this.eventBus
    }
  },
  data(){
    return {
      eventBus: new Vue()
    }
  },
  created(){
    this.eventBus.$on('update:selected',(data)=>{
      this.$emit('update:selected',data)
    })
  }
}

</script>

<style lang="scss" scoped>
</style>