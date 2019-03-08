<template>
    <div class="FlexRow">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "FlexRow"
    }
</script>

<style lang="less">
    div.FlexRow {
        display: flex;
    }
</style>
