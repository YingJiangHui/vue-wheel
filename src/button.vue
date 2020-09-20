<template>
    <button @click="onClick" class="eagle-button" name="todo" :disabled="disabled"
            :class="{[`icon-${iconPosition}`]: true}">
        <template>
            <e-icon class="icon" :name="icon" v-if="icon && !loading"/>
        </template>
        <template>
            <e-icon class="icon loading" name="loading" v-if="loading"/>
        </template>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script lang='ts'>
  import Icon from './Icon.vue';

  export default {
    name: "EagleButton",
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right';
        }
      },
      loading: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      onClick() {
        if (!this.disabled)
          this.$emit('click');
      }
    },
    components: {
      'e-icon': Icon
    }
  };

</script>

<style lang="scss" scoped>
    $border-radius: 4px;
    $border-color: #999;
    $button-active-bg: #eee;
    $button-hover-color: #666;
    $font-size: 14px;
    $button-height: 32px;
    $color: #333;
    $button-bg: #fff;
    @keyframes spin {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .eagle-button {
        & {
            vertical-align: middle;
            cursor: pointer;
            display: inline-flex;
            justify-content: center;
            align-items: center;
        }

        font: inherit;
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;

        &:not([disabled]) {
            &:hover {
                color: $button-hover-color;
            }

            &:active {
                background: $button-active-bg;
            }

            &:focus {
                outline: none;
            }
        }
        &[disabled]{
            cursor: not-allowed;
        }

        & > .loading {
            animation: spin 1.2s infinite linear;
        }

        &.icon-left {
            .icon {
                order: 1;
                margin-right: .3em;
            }

            .content {
                order: 2;
            }
        }

        &.icon-right {
            .icon {
                order: 2;
                margin-left: .3em;
            }

            .content {
                order: 1;
            }
        }
    }


</style>