<template>
    <div class="eagle-tabs-body">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name:'EagleTabsBody',
    inject:['eventBus']
  };

</script>

<style lang="scss" scoped>

</style>