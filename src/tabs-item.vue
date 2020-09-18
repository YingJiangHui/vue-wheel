<template>
    <div class="eagle-tabs-item" @click="onSelect" :class="classes">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleTabsItem',
    inject: ['eventBus'],
    props: {
      disabled:{
        type:Boolean,
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
      classes () {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    methods: {
      onSelect() {
        if(this.disabled) return;
        this.eventBus.$emit('update:selected', this.name,this);
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = this.name === name;
      });
    }
  };

</script>

<style lang="scss" scoped>
    .eagle-tabs-item{
        &{
            display: flex;
            align-items: center;
            padding: 0 1em;
            cursor: pointer;
            height: 100%;
        }
        &.active {
            color: dodgerblue;
        }
        &.disabled{
            color: #aaa;
        }
    }
</style>