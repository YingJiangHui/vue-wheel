<template>
    <div  class="eagle-footer">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleFooter'
  };

</script>

<style lang="scss" scoped>
    .eagle-footer{
        height: 200px;
    }
</style>