<template>
    <div class="eagle-tabs-pane" :class="{active}" v-if="active">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'EagleTabsPane',
    inject: ['eventBus'],
    props: {
      name: [String, Number],
      required: true
    },
    data(){
      return{
        active:false
      }
    },

    created(){
      this.eventBus.$on('update:selected',(name)=>{
        this.active = name===this.name
      })
    }
  };

</script>

<style lang="scss" scoped>
    .eagle-tabs-pane{
        padding: 1em;
    }
    .active {
    }
</style>