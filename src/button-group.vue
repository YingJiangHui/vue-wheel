<template>
   <div class="button-group">
       <slot></slot>
   </div>
</template>

<script lang='ts'>
  export default {
  };

</script>

<style lang="scss" scoped>
    .button-group{
        vertical-align: middle;
        display: inline-flex;
        > .w-button {
            border-radius: 0;
            &:active,&:focus,&:hover{
                position: relative;
                z-index: 1;
            }
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child{
                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
            }
            &:last-child{
                border-bottom-right-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);
            }
        }



    }
</style>