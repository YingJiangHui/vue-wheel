<template>
    <div>

        <div class="box">
            <e-input value="默认"></e-input>
        </div>

        <div class="box">
            <e-input error="错误" value="报错输入框"></e-input>
        </div>
        <div class="box">

            <e-input disabled value="disable"></e-input>
        </div >
        <div class="box">
            <e-input readonly value="readonly"></e-input>
        </div>

    </div>
</template>

<script lang='ts'>
  import Input from '../../../src/input';

  export default {
    components: {
      'e-input': Input
    }
  };
</script>

<style lang="scss" scoped>
    .box{
        margin-top: 10px;
    }
</style>