<template>
    <div class="MyWalletSubmit">
        <button>{{name}}</button>
    </div>
</template>

<script>
    export default {
        name: "MyWalletSubmit",
        props: {
            name: String
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MyWalletSubmit {
        padding: 0 unit(@layout-padding / @base-font, rem);
        > button {
            width: 100%;
            margin-top: unit(20px / @base-font, rem);
            border-radius: 5px;
            padding: unit(20px  / @base-font, rem) 0;
            font-size: unit(32px / @base-font, rem);
            color: white;
            background-color: #f19149;
        }
    }
</style>
