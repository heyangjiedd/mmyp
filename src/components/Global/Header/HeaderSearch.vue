<template>
    <div class="HeaderSearch">
        <i class="Search"></i>
        <input/>
    </div>
</template>

<script>
    export default {
        name: "HeaderSearch"
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.HeaderSearch {
        position: relative;
        flex: auto;

        input {
            display: block;
            width: 100%;
            height: unit(60px / @base-font, rem);
            line-height: unit(60px / @base-font, rem);
            background: rgba(240, 240, 240);
            border-radius: unit(10px / @base-font, rem);
            padding: 0 unit(65px / @base-font, rem);
            font-size: unit(26px / @base-font, rem);
        }

        i.Search {
            .background-picture-cover();
            background-image: url("images/04_homepage/icon_search@{scale}.png");
            position: absolute;
            left: unit(25px / @base-font, rem);
            top: unit(15px / @base-font, rem);
            height: unit(30px / @base-font, rem);
            width: unit(30px / @base-font, rem);
        }
    }
</style>
