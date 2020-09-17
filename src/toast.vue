<template>
    <div class="eagle-toast">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleToast'
  };

</script>

<style lang="scss" scoped>
    $border-radius:4px;
    $bg-color:rgba(0,0,0,0.75);
    .eagle-toast {
        border-radius: $border-radius;
        background-color: $bg-color;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
        padding: 13px 16px;
        position:fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        color: white;
    }
</style>