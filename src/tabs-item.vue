<template>
    <div class="eagle-tabs-item" @click="onSelect" :class="{active,disabled}">
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
    methods: {
      onSelect() {
        this.eventBus.$emit('update:selected', this.name);
      }
    },
    computed: {
      classes() {
        return this.active;
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
    .active {
        border: 1px solid red;
    }
    .disable{

    }
</style>