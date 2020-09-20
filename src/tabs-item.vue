<template>
    <div class="eagle-tabs-item" @click="onSelect" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleTabsItem',
    inject: ['eventBus'],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: [String, Number],
      required: true
    },
    data() {
      return {
        active: false
      };
    },
    computed: {
      classes() {
        return {
          active: this.active,
          disabled: this.disabled
        };
      }
    },
    methods: {
      onSelect() {
        if (this.disabled) return;
        this.eventBus&&
        this.eventBus.$emit('update:selected', this.name, this);
        this.$emit('click', this)
      }
    },
    created() {
      if (this.eventBus)
        this.eventBus.$on('update:selected', (name) => {
          this.active = this.name === name;
        });
    }
  };

</script>

<style lang="scss" scoped>
    $color:dodgerblue;
    .eagle-tabs-item {
        .eagle-icon{
            padding-right: .3em;
        }
        & {
            display: flex;
            align-items: center;
            padding: 0 1em;
            cursor: pointer;
            height: 100%;
        }

        &.active {
            .eagle-icon{
                fill:$color;
            }
            color: $color;
        }

        &.disabled {
            cursor: not-allowed;
            color: #aaa;
        }
    }
</style>