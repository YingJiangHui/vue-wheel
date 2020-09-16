<template>
    <svg class="w-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script lang='ts'>
  import './svg.js';

  export default {
    name:'WIcon',
    props: {
      name: {
        type: String
      }
    }
  };

</script>

<style lang="scss" scoped>
    .w-icon {
        width: 1em;
        height: 1em;
    }
</style>