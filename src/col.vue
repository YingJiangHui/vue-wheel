<template>
    <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]">
        <slot></slot>
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
    }
  };

</script>

<style lang="scss" scoped>
    .col {
        width: 100%;
        height: 100px;
        border: 1px solid rebeccapurple;

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