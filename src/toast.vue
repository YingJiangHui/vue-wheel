<template>
    <div class="eagle-toast" ref="wrapper">
        <div class="content">
            <div v-if="enableHtml" class="slots" v-html="$slots.default[0]"></div>
            <slot v-if="!enableHtml"></slot>
        </div>
        <div class="line" ref="line" v-if="closeButton"></div>
        <span class="close" ref="closeButton" @click="closeToast" v-if="closeButton">{{closeButton.text}}</span>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleToast',
    props: {
      enableHtml:{
        default:false,
        type:Boolean,
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
    mounted() {
      if (this.autoClose)
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      this.$nextTick(()=>{
        const wrapperHeight = this.$refs.wrapper.getBoundingClientRect().height+'px'
        this.$refs.line.style.height=wrapperHeight
        this.$refs.closeButton.style.height = wrapperHeight
      })

    },
    methods: {
      close() {
        this.$el.remove();
        this.$destroy();
      },
      closeToast(){
        this.closeButton.callback()
        this.close();
      }
    }
  };

</script>

<style lang="scss" scoped>
    $border-radius: 4px;
    $bg-color: rgba(0, 0, 0, 0.75);
    .eagle-toast {

        display: flex;
        align-items: center;
        border-radius: $border-radius;
        background-color: $bg-color;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        >.content{
            padding: 13px 16px;
        }
        >.line{
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