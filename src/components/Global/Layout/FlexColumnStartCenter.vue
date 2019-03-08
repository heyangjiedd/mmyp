<template>
    <div class="FlexColumnStartCenter">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "FlexColumnStartCenter"
    }
</script>

<style lang="less">
    div.FlexColumnStartCenter {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
