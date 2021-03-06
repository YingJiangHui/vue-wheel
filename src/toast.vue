<template>
    <div class="wrapper" :class="totalClass">
        <div class="eagle-toast" ref="toast">
            <div class="content">
                <div v-if="enableHtml" class="slots" v-html="$slots.default[0]"></div>
                <slot v-else></slot>
            </div>
            <div class="line" ref="line" v-if="closeButton.text"></div>
            <span class="close" ref="closeButton" @click="closeToast" v-if="closeButton.text">{{closeButton.text}}</span>
        </div>
    </div>

</template>

<script lang='ts'>
  export default {
    name: 'EagleToast',
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0;
        }
      },
      enableHtml: {
        default: false,
        type: Boolean,
      },
      autoCloseDelay: {
        type: [Number,Boolean],
        default: false,
        validator(value){
          return value===false||typeof value ==='number'
        }
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
        if (this.autoCloseDelay)
          setTimeout(() => {
            this.close();
          }, this.autoCloseDelay * 1000);
      },
      setElementHeight() {
        this.$nextTick(() => {
          const{toast,line,closeButton}  = this.$refs
          if(toast&&line&&closeButton){
            const toastHeight = toast.getBoundingClientRect().height + 'px';
            this.$refs.line.style.height = toastHeight;
            this.$refs.closeButton.style.height = toastHeight;
          }

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
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes slide-down {
        0% {opacity: 0; transform: translateY(-100%);}
        100% {opacity: 1;transform: translateY(0);}
    }
    @keyframes fade {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    $border-radius: 4px;
    $bg-color: rgba(0, 0, 0, 0.75);
    .wrapper {
        z-index: 999;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.toast-top {
            top: 0;

            .eagle-toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down .3s linear;
            }
        }

        &.toast-middle {
            top: 50%;
            transform: translateY(-50%) translateX(-50%);

            .eagle-toast {
                animation: fade .3s linear;
            }
        }

        &.toast-bottom {
            bottom: 0;
            .eagle-toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
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
            width: .5px;
            background-color: rgba(255,255,255,.6);
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