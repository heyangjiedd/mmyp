<template>
    <button class="Button">
        <slot/>
    </button>
</template>

<script>
    export default {
        name: "Button"
    }
</script>

<style lang="less">
    @import "../../variables.less";

    button.Button {
        background-color: #F19149;
        color: white;
        font-size: unit(24px / @base-font, rem);
        text-align: center;
        display: block;
        padding: unit(20px / @base-font, rem);
        border-radius: 3px;
        font-weight: bold;
    }
</style>
