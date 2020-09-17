<template>
    <div class="eagle-toast" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" @click="closeToast" v-if="closeButton">{{closeButton.text}}</span>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleToast',
    props: {
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
        this.$refs.line.style.height=this.$refs.wrapper.getBoundingClientRect().height+'px'
      })

    },
    methods: {
      close() {
        this.$el.remove();
        this.$destroy();
      },
      closeToast(){
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
            cursor: pointer;
            padding: 0 16px;
        }
    }
</style>