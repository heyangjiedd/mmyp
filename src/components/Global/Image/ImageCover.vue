<template>
    <div class="ImageCover" :style="{'background-image':`url('${image}')`}"></div>
</template>

<script>
    export default {
        name: "ImageCover",
        props: {
            image: String,
        }
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.ImageCover {
        .background-picture-cover();
    }
</style>
