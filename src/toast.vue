<template>
    <div class="wrapper" :class="totalClass">
        <div class="eagle-toast" ref="toast" >
            <div class="content">
                <div v-if="enableHtml" class="slots" v-html="$slots.default[0]"></div>
                <slot v-else></slot>
            </div>
            <div class="line" ref="line" v-if="closeButton"></div>
            <span class="close" ref="closeButton" @click="closeToast" v-if="closeButton">{{closeButton.text}}</span>
        </div>
    </div>

</template>

<script lang='ts'>
  export default {
    name: 'EagleToast',
    props: {
      position: {
        type: String,
        default: 'top'
      },
      enableHtml: {
        default: false,
        type: Boolean,
      },
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 60
      },
      closeButton: {
        type: Object,
        default() {
          return {
            text: '关闭', callback: undefined
          };
        }
      }
    },
    computed: {
      totalClass() {
        return {[`toast-${this.position}`]: true};
      }
    },
    mounted() {
      this.execAutoClose();
      this.setElementHeight();
    },
    methods: {
      execAutoClose() {
        if (this.autoClose)
          setTimeout(() => {
            this.close();
          }, this.autoCloseDelay * 1000);
      },
      setElementHeight() {
        this.$nextTick(() => {
          const toastHeight = this.$refs.toast.getBoundingClientRect().height + 'px';
          this.$refs.line.style.height = toastHeight;
          this.$refs.closeButton.style.height = toastHeight;
        });
      },
      close() {
        this.$el.remove();
        this.$emit('close');
        this.$destroy();
      },
      closeToast() {
        const {callback} = this.closeButton;
        if (callback && typeof callback === 'function')
          this.closeButton.callback(this);
        this.close();
      }
    }
  };

</script>

<style lang="scss" scoped>
    @keyframes slide-up {
        0%{
            transform: translateY(100%);
        }
        100%{
            transform: translateY(0);
        }
    }
    @keyframes slide-down {
        0% {opacity: 0; transform: translateY(-100%);}
        100% {opacity: 1;transform: translateY(0);}
    }

    $border-radius: 4px;
    $bg-color: rgba(0, 0, 0, 0.75);
    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.toast-top {
            top: 0;
            .eagle-toast{
                animation: slide-down .3s linear;
            }
        }

        &.toast-middle {
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            .eagle-toast {
                animation: slide-up .3s linear;
            }
        }

        &.toast-bottom {
            bottom:0;
            .eagle-toast{
                animation: slide-up .3s linear;
            }
        }

    }

    .eagle-toast {

        display: flex;
        align-items: center;
        border-radius: $border-radius;
        background-color: $bg-color;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        color: white;

        > .content {
            padding: 13px 16px;
        }

        > .line {
            width: 1px;
            background-color: #fff;
        }

        > .close {
            display: flex;
            align-items: center;
            flex-shrink: 0;
            cursor: pointer;
            padding: 0 16px;
        }

    }
</style>