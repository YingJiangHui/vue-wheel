<template>
    <button class="w-button" name="todo">
        <slot/>
    </button>
</template>

<script lang='ts'>
  export default {
    date(){
      return {
        todo:'123'
      }
    }
  };

</script>

<style lang="scss" scoped>
    .w-button {
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