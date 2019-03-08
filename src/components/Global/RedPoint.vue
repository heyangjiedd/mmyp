<template>
    <div class="RedPoint" :style="{width:size+'rem',height:size+'rem'}">
    </div>
</template>

<script>
    export default {
        name: "RedPoint",
        props: {
            size: {type: Number}
        }
    }
</script>

<style lang="less">
    div.RedPoint {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 3;
        background-color: #FF0000;
        border-radius: 50%;
    }
</style>
