<template>
    <div class="eagle-tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script lang='ts'>
export default {
  name:'EagleTabsHead',
  inject:['eventBus'],

}

</script>

<style lang="scss" scoped>

</style>