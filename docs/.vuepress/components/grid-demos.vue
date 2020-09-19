<template>
    <div>
        <e-row>
            <e-col span="2">1</e-col>
            <e-col span="22">2</e-col>
        </e-row>
    </div>
</template>

<script lang='ts'>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
  components:{
    'e-row':Row,
    'e-col':Col
  }
}
</script>

<style lang="scss" scoped>

</style>