<template>
    <div class="Header">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.Header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        left: 0;
        top: 0;
        right:0;
        z-index: 5;
        width: 100%;
        height: unit(@header-height / @base-font, rem);
        background-color: #F19149;
        padding: 0 unit(@layout-padding / @base-font, rem);
    }
</style>
