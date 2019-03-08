<template>
    <ul class="SignBar">
        <li v-for="item in days" :style="{width:width()}"></li>
    </ul>
</template>

<script>
    export default {
        name: "SignBar",
        props: {
            days: Number
        },
        methods: {
            width() {
                let d = new Date();
                let t = new Date(d.getFullYear(), d.getMonth(), 0);
                let w = t.getDate();
                return (this.days / w) * 100 + "%";
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    ul.SignBar {
        margin-top: unit(13px / @base-font, rem);
        width: 100%;
        background-color: #fbf1d9;
        height: unit(7px / @base-font, rem);
        display: flex;
        align-items: center;

        li {
            display: inline-block;
            background-color: #e6a100;
            margin-right: 2px;
            height: 100%;
        }
    }
</style>
