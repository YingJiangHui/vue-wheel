<template>
    <div>
        <e-row gutter="10">
            <e-col :iphone="{span:22}" :ipad="{span:16}" :narrow-pc="{span:12}"
                   :pc="{span:8}" :wide-pc="{span:4}" class="blue"></e-col>
            <e-col :iphone="{span:2}" :ipad="{span:8}" :narrow-pc="{span:12}"
                   :pc="{span:16}" :wide-pc="{span:20}" class="blue"></e-col>
        </e-row>
    </div>
</template>

<script lang='ts'>
  import Row from '../../../src/row';
  import Col from '../../../src/col';

  export default {
    components: {
      'e-row': Row,
      'e-col': Col
    }
  };
</script>

<style lang="scss" scoped>

    .col {
        transition: .2s;
        height: 50px;
        display: flex;
        justify-content: center;align-items: center;

        &.blue {
            background: #40adff;
            color: #fff;
        }

    }

    .row {
        margin-bottom: 10px;
    }
</style>