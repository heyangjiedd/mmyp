<template>
    <div class="FlexRowStartCenter">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "FlexRowStartCenter"
    }
</script>

<style lang="less">
    div.FlexRowStartCenter {
        display: flex;
        align-items: center;
    }
</style>
