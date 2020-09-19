<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  import Vue from 'vue';

  export default {
    name: 'EagleCollapse',
    props: {
      selected: {
        type: Array
      },
      single: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.eventBus.$emit('update:selected', this.selected);

      this.eventBus.$on('update:removeSelected', (name) => {
        this.updateSelected((selectedCopy) => selectedCopy.filter((item) => item !== name));
      });
      this.eventBus.$on('update:addSelected', (name) => {
        this.updateSelected((selectedCopy) => this.single ? [name] : selectedCopy.concat([name]));
      });

    },
    methods: {
      updateSelected(fn) {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected));
        selectedCopy = fn(selectedCopy);
        this.$emit('update:selected', selectedCopy);
        this.eventBus.$emit('update:selected', selectedCopy);
      }
    },
    data() {
      return {
        eventBus: new Vue()
      };
    },
    provide() {
      return {
        eventBus: this.eventBus
      };
    }
  };

</script>

<style lang="scss" scoped>
    $border-color: #dbdbdb;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $border-color;
        border-radius: $border-radius;
    }
</style>