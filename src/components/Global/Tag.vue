<template>
    <span class="Tag" :style="{'background-color':color,'box-shadow':'0 0 0.36rem 0 '+color}">
        <slot/>
    </span>
</template>

<script>
    export default {
        name: "Tag",
        props: {
            color: String,
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    span.Tag {
        color: white;
        font-size: unit(24px / @base-font, rem);
        border-radius: unit(16px / @base-font, rem);
        padding: unit(5px / @base-font, rem) unit(10px / @base-font, rem);
        margin-right: unit(15px / @base-font, rem);
    }
</style>
