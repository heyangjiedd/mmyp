<template>
    <div class="FlexRowStartEnd">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "FlexRowStartEnd"
    }
</script>

<style lang="less">
    div.FlexRowStartEnd {
        display: flex;
        align-items: flex-end;
    }
</style>
