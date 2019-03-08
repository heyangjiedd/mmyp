<template>
    <a class="RecruitButton">
        <slot/>
    </a>
</template>

<script>
    export default {
        name: "RecruitButton",
        props: {}
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    a.RecruitButton {
        background-color: #f19149;
        font-size: unit(24px / @base-font, rem);
        color: white;
        padding: unit(7px / @base-font, rem) unit(34px / @base-font, rem);
        border-radius: 5px;
    }
</style>
