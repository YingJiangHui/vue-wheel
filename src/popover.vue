<template>
    <div class="eagle-popover" ref="popover">
        <div class="content-wrapper" v-if="visible" ref="contentWrapper">
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
    data() {
      return {
        visible: false
      };
    },
    mounted() {
    },
    methods: {
      positionContent() {
        const contentWrapperElement = this.$refs.contentWrapper;
        document.body.appendChild(contentWrapperElement);
        const {left, top, width, height} = this.$refs.popover.getBoundingClientRect();
        contentWrapperElement.style.left = left + window.screenX + 'px';
        contentWrapperElement.style.top = top + window.screenY + 'px';
      },
      close() {
        this.visible = false;
        document.removeEventListener('click',this.onDocumentClick)
      },

      onDocumentClick(e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target)
            ||this.$refs.contentWrapper === e.target)
        ) { return }
        this.close()
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
    .eagle-popover {
        display: inline-block;
        position: relative;
        margin: 50px;

        > .trigger-wrapper {

        }
    }

    .content-wrapper {
        transform: translateY(-100%);
        position: absolute;
    }


</style>