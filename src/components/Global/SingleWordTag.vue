<template>
    <span class="SingleWordTag" :style="{'background-color':color}"><slot/></span>
</template>

<script>
    export default {
        name: "SingleWordTag",
        props: {
            color: String
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    span.SingleWordTag {
        display: inline-block;
        width: unit(35px / @base-font, rem);
        height: unit(35px / @base-font, rem);
        border-radius: 50%;
        color: white;
        font-weight: normal;
        text-align: center;
        font-size: unit(18px / @base-font, rem);
        vertical-align: bottom;
        line-height: unit(35px / @base-font, rem);
        margin-left: unit(17px /  @base-font, rem);
    }

</style>
