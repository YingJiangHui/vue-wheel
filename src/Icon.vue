<template>
    <svg class="eagle-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script lang='ts'>
  import './svg.js';

  export default {
    name:'eagleIcon',
    props: {
      name: {
        type: String
      }
    }
  };

</script>

<style lang="scss" scoped>
    .eagle-icon {
        width: 1em;
        height: 1em;
    }
</style>