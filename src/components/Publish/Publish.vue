<template>
    <div class="Publish">
        <TitleHeader>发布</TitleHeader>
        <ul>
            <Entrance :head="'images/06_Release/icon_shop@3x.png'"to="/Sellers/Join">我的店铺</Entrance>
            <Entrance :head="'images/06_Release/icon_Release@3x.png'" to="/Publish/Submit">发布招聘</Entrance>
            <Entrance :head="'images/06_Release/icon_released@3x.png'" to="/Publish/View">已发布</Entrance>
        </ul>
        <Taskbar/>
    </div>
</template>

<script>
    import Taskbar from "../Global/Taskbar.vue";
    import Entrance from "../Global/Entrance.vue";
    import TitleHeader from "../Global/Header/TitleHeader.vue";

    export default {
        name: "Publish",
        components: {TitleHeader, Entrance, Taskbar}
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Publish {
        .padding-header-taskbar();
        min-height: 100vh;
        background-color: #f8f8f8;
    }
</style>
