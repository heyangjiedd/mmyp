<template>
    <div class="RelativeDescription">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "RelativeDescription"
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.RelativeDescription {
        margin: 0 unit(@layout-padding / @base-font , rem);
        padding: unit(16px / @base-font, rem);
        font-size: unit(24px / @base-font , rem);
        box-shadow: 0px -3px 7px 0px rgba(0, 0, 0, 0.1);
        position: relative;
        top: unit(-20px / @base-font , rem);
        line-height: 1.5;
        background-color: white;
    }
</style>
