<template>
    <div class="FlexColumnSpaceBetween">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "FlexColumnSpaceBetween"
    }
</script>

<style lang="less">
    div.FlexColumnSpaceBetween {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
