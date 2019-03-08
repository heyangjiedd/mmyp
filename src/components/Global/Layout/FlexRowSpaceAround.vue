<template>
    <div class="FlexRowSpaceAround">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "FlexRowSpaceAround"
    }
</script>

<style lang="less">
    div.FlexRowSpaceAround {
        display: flex;
        justify-content: space-around;
    }
</style>
