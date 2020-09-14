<template>
    <button class="w-button" name="todo" :class="{[`icon-${iconPosition}`]: true}">
      <template v-if="icon">
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
    props:{
      icon:{
        type:String
      },
      iconPosition:{
        type:String,
        default:'left',
        validator(value){
          return value==='left'||value==='right'
        }
      }
    },
    components: {
      'g-icon':Icon
    }
  };

</script>

<style lang="scss" scoped>
    .w-button {
        vertical-align: middle;
        & {
          display: inline-flex;justify-content: center;align-items: center;
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
        &.icon-left{
            .icon{
                order: 1;
                margin-right: .3em;
            }
            .content{
                order: 2;
            }
        }
        &.icon-right{
            .icon{
                order: 2;
                margin-left: .3em;
            }
            .content{
                order: 1;
            }
        }
    }


</style>