<template>
    <div @click="$emit('input',!value)" class="SingleSelect">
        <i v-show="value"></i>
    </div>
</template>

<script>
    export default {
        name: "SingleSelect",
        props: {
            value: Boolean
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.SingleSelect {
        padding: unit(4px / @base-font, rem);
        width: unit(25px / @base-font, rem);
        height: unit(25px / @base-font, rem);
        border-radius: 50%;
        border: 1px solid #ea9a5e;
        > i {
            display: block;
            width: 100%;
            height: 100%;
            background-color: #e78d4a;
            border-radius: 50%;
        }
    }
</style>
