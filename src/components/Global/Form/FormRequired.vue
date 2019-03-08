<template>
    <span class="FormRequired" style="flex: none;">*</span>
</template>

<script>
    export default {
        name: "FormRequired"
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    span.FormRequired {
        width: unit(30px / @base-font, rem);
    }

</style>
