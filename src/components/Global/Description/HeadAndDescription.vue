<template>
    <FlexRow class="HeadAndDescription">
        <slot/>
    </FlexRow>
</template>

<script>
    import FlexRow from "../Layout/FlexRow.vue";

    export default {
        name: "HeadAndDescription",
        components: {FlexRow}
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.HeadAndDescription {
        div.Head {
            flex: none;
        }

        div.Description {
            flex: auto;
        }
    }
</style>
