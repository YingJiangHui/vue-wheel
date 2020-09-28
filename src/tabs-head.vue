<template>
    <div class="eagle-tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'EagleTabsHead',
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (item, vm) => {
        const { width} = vm.$el.getBoundingClientRect();
        this.$refs.line.style.left = vm.$el.offsetLeft  + 'px';
        this.$refs.line.style.width = width + 'px';
      });

    }
  };

</script>

<style lang="scss" scoped>
    .eagle-tabs-head {

        border-bottom: 1px solid #ddd;
        height: 48px;
        display: flex;
        align-items: center;
        position: relative;

        > .actions-wrapper {
            margin-left: auto;
        }

        > .line {
            transition: all .2s;
            left: 0;
            bottom: -1px;
            position: absolute;
            height: 2px;
            background: dodgerblue;
        }
    }

</style>