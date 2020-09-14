<template>
    <button class="w-button">button</button>
</template>

<script lang='ts'>
  export default {
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
    }

    .w-button:hover {
        color: var(--button-hover-color);
    }

    .w-button:active {
        background: var(--button-active-bg);
    }

    .w-button:focus {
        outline: none;
    }
</style>