<template>
    <FlexColumn class="Description">
        <slot/>
    </FlexColumn>
</template>

<script>
    import FlexColumn from "../Layout/FlexColumn.vue";

    export default {
        name: "Description",
        components: {FlexColumn}
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.Description {

    }

</style>
