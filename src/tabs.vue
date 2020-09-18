<template>
    <div class="eagle-tabs">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  import Vue from 'vue';

  export default {
    name: 'EagleTabs',
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0;
        }
      },
      selected: {
        type: String,
        required: true,
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      };
    },
    data() {
      return {
        eventBus: new Vue()
      };
    },
    mounted() {
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
      }
      this.$children.forEach((vm)=>{
        if(vm.$options.name==='EagleTabsHead'){
          vm.$children.forEach((childVm)=>{
            if(childVm.$options.name==='EagleTabsItem'&&childVm.name===this.selected){
              this.eventBus.$emit('update:selected', this.selected,childVm);
            }
          })
        }
      })
    }
  };
</script>

<style lang="scss" scoped>
</style>