<template>
    <div>
        <e-popover position="top">
            <template slot="content">top</template>
            <e-button>上方出现</e-button>
        </e-popover>
        <e-popover position="bottom">
            <template slot="content">bottom</template>
            <e-button>下方出现</e-button>
        </e-popover>
        <e-popover position="left">
            <template slot="content">left</template>
            <e-button>左方出现</e-button>
        </e-popover>
        <e-popover position="right">
            <template slot="content">right</template>
            <e-button>右方出现</e-button>
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