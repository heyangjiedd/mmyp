<template>
    <div class="ImageContain" :style="{'background-image':`url('${image}')`}"></div>
</template>

<script>
    export default {
        name: "ImageContain",
        props: {
            image: String,
        }
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.ImageContain {
        .background-picture-contain();
    }
</style>
