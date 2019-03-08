<template>
    <div class="PopupMessage" v-show="value">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "PopupMessage",
        props: {
            value: {type: String, default: false}
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.PopupMessage {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 57%;
        padding: unit(15px / @base-font, rem) unit(45px  / @base-font, rem);
        background-color: #202020;
        opacity: 0.85;
        text-align: center;
        color: white;
        font-size: unit(24px / @base-font, rem);
        z-index: 5;
        transform: translate3d(-50%, -50%, 0);
    }
</style>
