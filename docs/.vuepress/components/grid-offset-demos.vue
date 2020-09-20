<template>
    <div>
        <e-row>
            <e-col span="20" offset="4" class="blue">80%</e-col>
        </e-row>
        <e-row>
            <e-col span="6" class="blue">25%</e-col>
            <e-col span="6" offset="6" class="blue">25%</e-col>
            <e-col span="6">25%</e-col>
        </e-row>
        <e-row>
            <e-col span="8" class="blue">33.33%</e-col>
            <e-col span="8" offset="8" class="blue">33.33%</e-col>
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

    .eagle-col{
        height: 50px;
        display: flex;
        justify-content: center;align-items: center;
        &.blue{
            background: #40adff;
            color: #fff;
        }

    }
    .eagle-row{
        margin-bottom: 10px;
    }
</style>