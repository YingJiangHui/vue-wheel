<template>
    <div class="eagle-content">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleContent'
  };

</script>

<style lang="scss" scoped>
    .eagle-content{
        flex-grow: 1;
    }
</style>