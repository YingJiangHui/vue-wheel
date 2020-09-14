<template>
    <svg class="w-icon icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script lang='ts'>
  export default {

    props:{
      name:{
        type:String
      }
    }
  };

</script>

<style lang="scss" scoped>
    .w-icon{
        width: 1em;
        height: 1em;
    }
</style>