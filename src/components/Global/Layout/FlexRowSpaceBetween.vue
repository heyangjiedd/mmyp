<template>
    <div class="FlexRowSpaceBetween">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "FlexRowSpaceBetween"
    }
</script>

<style lang="less">
    div.FlexRowSpaceBetween {
        display: flex;
        justify-content: space-between;
    }
</style>
