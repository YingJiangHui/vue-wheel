<template>
   <div class="button-group">
       <slot></slot>
   </div>
</template>

<script lang='ts'>
  export default {
    name:"WButtonGroup",
    mounted(){
      for(let node of this.$el.children){
        const name  = node.nodeName.toLowerCase()
        if(name!=='button'){
          console.warn(`g-button-group 的子元素应该全是 g-button，但是你写的是 ${name}`)
        }
      }
    }
  };

</script>

<style lang="scss" scoped>
    $border-radius:4px;
    .button-group{
        vertical-align: middle;
        display: inline-flex;
        > .eagle-button {
            border-radius: 0;
            &:active,&:focus,&:hover{
                position: relative;
                z-index: 1;
            }
            &:not(:first-child) {
                margin-left: -1px;
            }

            &:first-child{
                border-bottom-left-radius: $border-radius;
                border-top-left-radius: $border-radius;
            }
            &:last-child{
                border-bottom-right-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
    }
</style>