<template>
    <div>
        <e-popover position="top">
            <template slot="content" slot-scope="{close}">
                Popover
                <e-button @click="close">关闭</e-button>
            </template>
            <e-button>点我</e-button>
        </e-popover>
    </div>
</template>

<script lang='ts'>
  import Popover from '../../../src/popover';
  import Button from '../../../src/button';

  export default {
    components: {
      'e-popover': Popover,
      'e-button': Button
    }
  };

</script>

<style lang="scss" scoped>

</style>