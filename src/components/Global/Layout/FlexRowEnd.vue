<template>
    <div class="FlexRowEnd">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "FlexRowEnd"
    }
</script>

<style lang="less">
    div.FlexRowEnd {
        display: flex;
        justify-content: flex-end;
    }
</style>
