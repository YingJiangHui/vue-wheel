<template>
    <div class="eagle-tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script lang='ts'>
export default {
  name:'EagleTabsHead',
  inject:['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected',(item,vm)=>{
      // if(vm.disabled)return;
        const {height,width,left,top} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.left=left+'px'
        this.$refs.line.style.width=width+'px'
    })

  }
}

</script>

<style lang="scss" scoped>
    .eagle-tabs-head{
        border: 1px solid #ddd;
        height: 48px;
        display: flex;
        align-items: center;
        position: relative;
        >.actions-wrapper{
            margin-left: auto;
        }
        >.line{
            transition:all .2s;
            left: 0;
            bottom: 0;
            position: absolute;
            height: 2px;
            background: dodgerblue;
        }
    }

</style>