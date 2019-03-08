<template>
    <div class="HeaderTitle"><slot/></div>
</template>

<script>
    export default {
        name: "HeaderTitle"
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.HeaderTitle {
        font-size: unit(36px / @base-font, rem);
        color:white;
    }
</style>
