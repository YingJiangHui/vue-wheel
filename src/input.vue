<template>
    <div class="wrapper">
        <input @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               type="text"
               :readonly="readonly"
               :disabled="disabled"
               :value="value"
               :class="{error}">
        <template v-if="error">
            <e-icon name="error" class="icon-error"></e-icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>

<script lang='ts'>
  import Icon from './Icon.vue';
  export default {
    name: 'EagleInput',
    components:{
      'e-icon':Icon
    },
    props: {
      value: {
        type: String
      },
      error: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    }
  };

</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $border-color: #999;
    $border-radius: 4px;
    $border-hover-color: #40a9ff;
    $shadow-color: rgba(#40a9ff, 0.25);
    $error-color: #F1453D;
    $shadow-error-color: rgba(255, 0, 0, .2);
    $disable-color: #bbb;
    .wrapper {
        font-size: $font-size;
        display: inline-block;
        > input {border-radius: $border-radius;height: 32px;font-size: inherit;padding: 0 8px;
            outline: none;border: 1px solid $border-color;transition: box-shadow .25s;

            &:focus {border-color: $border-hover-color;box-shadow: 0 0 0 4px $shadow-color;}


            &[disabled], &[readonly] {color: $disable-color;border-color: $disable-color;cursor: not-allowed;

                &:focus {box-shadow: none;}
            }

            &.error {border-color: $error-color;
                color:$error-color;
                &:focus {box-shadow: 0 0 0 4px $shadow-error-color;}
            }
        }

        > .error-message {color: $error-color;}

        > .icon-error {fill: $error-color;}

    }
</style>