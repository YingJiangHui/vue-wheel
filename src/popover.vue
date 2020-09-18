<template>
    <div class="eagle-popover" ref="popover">
        <div class="content-wrapper" :class="classes" v-if="visible" ref="contentWrapper">
            <slot name="content"></slot>
        </div>
        <span class="trigger-wrapper" @click="onClick">
            <slot></slot>
        </span>
    </div>
</template>

<script lang='ts'>

  export default {
    name: 'EaglePopover',
    props: {
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
    computed: {
      classes() {
        return {[`eagle-${this.position}`]: true};
      }
    },
    methods: {
      positionContent() {
        const {popover,contentWrapper} = this.$refs
        document.body.appendChild(contentWrapper);
        const {left, top, width, height} = popover.getBoundingClientRect();
        const {height:height2} = contentWrapper.getBoundingClientRect()
        const positions = {
          'top': {
            left: left + window.screenX,
            top: top + window.screenY
          },
          'bottom': {
            left: left + window.screenX,
            top: top + window.screenY
          },
          'left': {
            left: left + window.screenX,
            top: top + window.screenY-(height2-height)/2
          },
          'right': {
            left: left + window.screenX+width,
            top: top + window.screenY-(height2-height)/2
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
    .eagle-popover {
        display: inline-block;
        position: relative;

        > .trigger-wrapper {
            > button {
                outline: none;
                background: #fff;
                padding: .3em 1em;
                border-radius: $border-radius;
            }

        }
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid #000;
        border-radius: $border-radius;
        padding: .5em 1em;
        filter: drop-shadow(0 1px 1px #000);
        background: #fff;

        &::before, &::after {
            width: 0;
            height: 0;
            content: '';
            border:10px solid transparent;
            position: absolute;
        }

    }

    .eagle-top {
        transform: translateY(-100%);
        margin-top: -10px;
        &::before, &::after {
            left: 10px;
        }
            &::before{
            top: 100%;
            border-top-color: #000;
        }
        &::after {
            top: calc(100% - 1px);
            border-top-color: #fff;
        }
    }

    .eagle-bottom {
        transform: translateY(100%);
        margin-bottom: -10px;
        &::before, &::after {
            left: 10px;
        }
            &::before{
            bottom: 100%;
            border-bottom-color: #000;
        }
        &::after {
            bottom: calc(100% - 1px);
            border-bottom-color: #fff;
        }
    }
    .eagle-left {
        transform: translateX(-100%);
        margin-left: -10px;
        &::before, &::after {
            top: 50%;
            transform: translateY(-50%);
        }
        &::before{
            left: 100%;
            border-left-color: #000;
        }
        &::after {
            left: calc(100% - 1px);
            border-left-color: #fff;
        }
    }
    .eagle-right {
        margin-left: 10px;
        &::before, &::after {
            top: 50%;
            transform: translateY(-50%);
        }
        &::before{
            right: 100%;
            border-right-color: #000;
        }
        &::after {
            right: calc(100% - 1px);
            border-right-color: #fff;
        }
    }
</style>