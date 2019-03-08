<template>
    <div class="Head" :style="{'background-image':`url('${image}')`}"></div>
</template>

<script>
    export default {
        name: "Head",
        props: {
            image: String
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Head {
        .background-picture-cover();
        width: unit(120px / @base-font, rem);
        height: unit(120px / @base-font, rem);
        border-radius: unit(10px / @base-font, rem);
    }
</style>
