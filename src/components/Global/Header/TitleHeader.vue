<template>
    <Header>
        <div></div>
        <HeaderTitle>
            <slot/>
        </HeaderTitle>
        <div></div>
    </Header>
</template>

<script>
    import Header from "./Header.vue"
    import HeaderTitle from "./HeaderTitle.vue"

    export default {
        name: "TitleHeader",
        components: {
            Header, HeaderTitle
        }
    }
</script>

<style lang="less">
</style>
