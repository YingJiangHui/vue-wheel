<template>
    <div>
        <e-button-group>
            <e-button icon="left">上一页</e-button>
            <e-button>提交</e-button>
            <e-button icon="right" iconPosition="right">下一页</e-button>
        </e-button-group>
    </div>
</template>

<script lang='ts'>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'
export default {
  components:{
    'e-button':Button,
    'e-button-group':ButtonGroup
  }
}
</script>

<style lang="scss" scoped>

</style>