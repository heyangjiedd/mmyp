<template>
    <div class="Form">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "Form"
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.Form {
        font-size: unit(26px / @base-font, rem);

        input {
            padding: unit(20px / @base-font, rem) unit(18px / @base-font, rem) unit(20px / @base-font, rem) unit(55px / @base-font, rem);
            border-bottom: 1px solid #BBBBBB;
            width: 100%;

        }
        select {
            background-color: white;
            appearance: none;
            -webkit-appearance: none;
            outline: 0;
            border: 0;
        }

        i.Dropdown {
            position: absolute;
            border-left: unit(16px / @base-font, rem) solid transparent;
            border-right: unit(16px / @base-font, rem) solid transparent;
            border-top: unit(16px / @base-font, rem) solid #bbbbbb;
        }
    }
</style>
