<template>
    <div class="FlexColumn">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "FlexColumn"
    }
</script>

<style lang="less">
    div.FlexColumn {
        display: flex;
        flex-direction: column;
    }
</style>
