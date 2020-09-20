<template>
    <e-collapse :selected.sync="selectedArray">
        <e-collapse-item title="标题1" name="1">一段内容1。。。</e-collapse-item>
        <e-collapse-item title="标题2" name="2">一段内容2。。。</e-collapse-item>
        <e-collapse-item title="标题3" name="3">一段内容3。。。</e-collapse-item>
    </e-collapse>
</template>

<script lang='ts'>
  import Collapse from '../../../src/collapse';
  import CollapseItem from '../../../src/collapse-item';

  export default {
    components: {
      'e-collapse': Collapse,
      'e-collapse-item': CollapseItem
    },
    data() {
      return {
        selectedArray: ['1']
      };
    }
  };
</script>

<style lang="scss" scoped>


</style>