<template>
    <div class="FlexColumnCenter">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "FlexColumnCenter"
    }
</script>

<style lang="less">
    div.FlexColumnCenter {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
