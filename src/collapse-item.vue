<template>
    <div class="collapse-item">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="visible">
            <slot></slot>
        </div>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleCollapseItem',
    props: {
      name: {
        type: [String, Number]
      },
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        visible: false
      };
    },
    inject: ['eventBus'],
    methods: {
      toggle() {
        if (this.visible) {
          this.eventBus.$emit('update:removeSelected', this.name);
        } else {
          this.eventBus.$emit('update:addSelected', this.name);
        }
      }
    },
    mounted() {
      this.eventBus.$on('update:selected', (selected) => {
        if (selected.indexOf(this.name) >= 0) {
          this.visible = true;
        } else {
          this.visible = false;
        }
      });
    }
  };
</script>

<style lang="scss" scoped>
    $border-color: #dbdbdb;
    $bg-color: #fafafa;
    $border-radius:4px;
    .collapse-item {
        > .title {
            border: 1px solid $border-color;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }

        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }

        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }

        > .content {
            padding: 8px;
        }
    }
</style>