<template>
    <div class="FlexRowSpaceBetweenCenter">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "FlexRowSpaceBetweenCenter"
    }
</script>

<style lang="less">
    div.FlexRowSpaceBetweenCenter {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
