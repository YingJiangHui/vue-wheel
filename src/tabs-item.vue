<template>
    <div class="eagle-tabs-item" @click="onClick" :class="{active}">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleTabsItem',
    inject: ['eventBus'],
    props: {
      name: [String, Number],
      required: true
    },
    data() {
      return {
        active: false
      };
    },
    methods: {
      onClick() {
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
</style>