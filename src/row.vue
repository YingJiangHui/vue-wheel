<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'WRow'
  };

</script>

<style lang="scss" scoped>
.row{
    width: 100%;
    display: flex;
}
</style>