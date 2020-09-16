<template>
    <div class="col" :class="getSpan"
         :style="getGutter">
        <div style="border: 1px solid green; height: 100px;">
            <slot></slot>
        </div>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'WCol',
    props: {
      span: {
        type: [String, Number]
      },
      offset: {
        type: [String, Number]
      }
    },
    data(){
      return {
        gutter:0
      }
    },

    computed:{
      getSpan(){
        return [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`]
      },
      getGutter(){
        return {paddingLeft: this.gutter/2+'px', paddingRight: this.gutter/2+'px'}
      }
    }
  };

</script>

<style lang="scss" scoped>
    .col {
        width: 100%;
        height: 100px;

        $class-prefix: 'col-';
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }

    }

    $class-prefix: 'offset-';
    @for $n from 1 through 24{
        .#{$class-prefix}#{$n}{
            margin-left: ($n/24)*100%;
        }
    }

</style>