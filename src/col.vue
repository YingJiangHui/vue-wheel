<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
         :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
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