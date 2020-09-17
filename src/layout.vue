<template>
    <div class="eagle-layout">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleLayout',
    mounted(){
      console.log(this.$el.children)
    }
  };

</script>

<style lang="scss" scoped>
    .layout{
        flex-grow: 1;
        display: flex;
    }
</style>