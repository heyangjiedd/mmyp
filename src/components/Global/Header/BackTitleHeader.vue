<template>
    <Header>
        <HeaderBack/>
        <HeaderTitle>
            <slot/>
        </HeaderTitle>
        <div class="HeaderRight">
            <slot name="right"/>
        </div>
    </Header>
</template>

<script>
    import Header from "./Header.vue"
    import HeaderTitle from "./HeaderTitle.vue"
    import HeaderBack from "./HeaderBack.vue";

    export default {
        name: "BackTitleHeader",
        components: {HeaderBack, Header, HeaderTitle}
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.Header {
        div.HeaderBack {
        }
        div.HeaderTitle {
        }
        div.HeaderRight {
            width: unit(55px / @base-font, rem);
            height: unit(55px / @base-font, rem);
            padding: unit(10px / @base-font, rem);
            background-color: #F19149;
        }
    }
</style>
