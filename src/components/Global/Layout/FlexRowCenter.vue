<template>
    <div class="FlexRowCenter">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "FlexRowCenter"
    }
</script>

<style lang="less">
    div.FlexRowCenter {
        display: flex;
        justify-content: center;
    }
</style>
