<template>
    <button class="w-button" name="todo">
      <template >
        <g-icon :name="icon"/>
      </template>
        <div class="content">
          <slot></slot>
        </div>
    </button>
</template>

<script lang='ts'>
  import Icon from './Icon.vue';

  export default {
    mounted(){
      console.log(this.icon)
    },
    props:{
      icon:{
        type:String
      }
    },
    components: {
      'g-icon':Icon
    }
  };

</script>

<style lang="scss" scoped>
    .w-button {
        & {
          display: inline-flex;justify-content: center;align-items: center;
        }
        &>.content{
          margin-left: 0.3em;
        }
        font: inherit;
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);

        &:hover {
            color: var(--button-hover-color);
        }

        &:active {
            background: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
    }


</style>