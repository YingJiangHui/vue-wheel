<template>
    <div class="eagle-popover" ref="popover">
        <div class="content-wrapper" :class="classes" v-if="visible" ref="contentWrapper">
            <slot name="content" :close="close"></slot>
        </div>
        <span class="trigger-wrapper" ref="trigger">
            <slot></slot>
        </span>
    </div>
</template>

<script lang='ts'>

  export default {
    name: 'EaglePopover',
    props: {
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) >= 0;
        }
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'left', 'right', 'bottom'].indexOf(value) >= 0;
        }
      }
    },
    data() {
      return {
        visible: false
      };
    },
    mounted() {
      this.mountEventListener();
    },
    beforeDestroy(){
      this.visible = false;
      if(this.$refs.contentWrapper){
        this.$refs.contentWrapper.remove()
      }
    },
    destroyed() {
      //使用vue的事件系统时vue会帮助我们做这一步，
      // 使用原生的事件系统需要手动去除监听
      this.destroyEventListener();
    },
    computed: {
      classes() {
        return {[`eagle-${this.position}`]: true};
      }
    },
    methods: {

      mountEventListener() {
        const {trigger} = this.$refs;
        if (this.trigger === 'click') {
          trigger.addEventListener('click', this.onClick);
        } else if (this.trigger === 'hover') {
          trigger.addEventListener('mouseenter', this.open);
          trigger.addEventListener('mouseleave', this.close);
        }
      },
      destroyEventListener() {
        const {trigger} = this.$refs;
        if (trigger)
          if (this.trigger === 'click') {
            trigger.removeEventListener('click', this.onClick);
          } else if (this.trigger === 'hover') {
            trigger.removeEventListener('mouseenter', this.open);
            trigger.removeEventListener('mouseleave', this.close);
          }
      },
      positionContent() {
        const {popover, contentWrapper} = this.$refs;
        document.body.appendChild(contentWrapper);
        const {left, top, width, height} = popover.getBoundingClientRect();
        const {height: height2} = contentWrapper.getBoundingClientRect();

        const positions = {
          'top': {
            left: left + window.scrollX,
            top: top + window.scrollY
          },
          'bottom': {
            left: left + window.scrollX,
            top: top + window.scrollY
          },
          'left': {
            left: left + window.scrollX,
            top: top + window.scrollY + (height - height2) / 2
          },
          'right': {
            left: left + window.scrollX + width,
            top: top + window.scrollY + (height - height2) / 2
          },
        };
        contentWrapper.style.left = positions[this.position]['left'] + 'px';
        contentWrapper.style.top = positions[this.position]['top'] + 'px';
      },
      close() {
        this.visible = false;
        document.removeEventListener('click', this.onDocumentClick);
      },

      onDocumentClick(e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target)
            || this.$refs.contentWrapper === e.target)
        ) { return; }
        this.close();
      },

      open() {
        this.visible = true;
        this.$nextTick(() => {
          this.positionContent();
          document.addEventListener('click', this.onDocumentClick);
        });

      },
      onClick() {
        if (this.visible) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
    $border-radius: 4px;
    $border-color: rgba(0, 0, 0, 0.5);
    $shadow: #000;
    .eagle-popover {
        display: inline-block;
        position: relative;


    }

    .content-wrapper {
        max-width: 400px;
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        background: #fff;
        word-break: break-all;
        padding: .5em 1em;

        &::before, &::after {
            width: 0;
            height: 0;
            content: '';
            border: 10px solid transparent;
            position: absolute;
        }


    }

    .eagle-top {
        transform: translateY(-100%);
        margin-top: -10px;

        filter: drop-shadow(0 1px 1px $shadow);

        &::before, &::after {
            left: 10px;
            border-bottom: none;
        }

        &::before {
            top: 100%;
            border-top-color: $border-color;
        }

        &::after {
            top: calc(100% - 1px);
            border-top-color: #fff;
        }
    }

    .eagle-bottom {
        filter: drop-shadow(0 -0.5px 1px $shadow);

        transform: translateY(100%);

        &::before, &::after {
            left: 10px;
            border-top: none;
        }

        &::before {
            bottom: 100%;
            border-bottom-color: $border-color;
        }

        &::after {
            bottom: calc(100% - 1px);
            border-bottom-color: #fff;
        }
    }

    .eagle-left {
        filter: drop-shadow(1px 0 1px $shadow);
        transform: translateX(-100%);
        margin-left: -10px;

        &::before, &::after {
            border-right: none;

            top: 50%;
            transform: translateY(-50%);
        }

        &::before {
            left: 100%;
            border-left-color: $border-color;
        }

        &::after {
            left: calc(100% - 1px);
            border-left-color: #fff;
        }
    }

    .eagle-right {
        margin-left: 10px;
        filter: drop-shadow(-1px 0 1px $shadow);

        &::before, &::after {
            border-left: none;

            top: 50%;
            transform: translateY(-50%);
        }

        &::before {
            right: 100%;
            border-right-color: $border-color;
        }

        &::after {
            right: calc(100% - 1px);
            border-right-color: #fff;
        }
    }
</style>