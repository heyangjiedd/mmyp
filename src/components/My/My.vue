<template>
    <div class="My">
        <TitleHeader>我的</TitleHeader>
        <FlexRow class="MyInfo">
            <div class="MyInfoLeft">
                <FlexRow>
                    <Head :image="'images/img_19@2x.png'"/>
                    <FlexColumnSpaceBetween style="flex:auto">
                        <h1 style="font-size: 1.2857rem">红茶</h1>
                        <p style="color: #828282;font-size: 0.857rem">ID:25648856</p>
                    </FlexColumnSpaceBetween>
                </FlexRow>
                <div style="margin-top: 1.25rem">
                    <FlexRowSpaceBetween style="font-size: 0.857rem">
                        <span>连续签到:2次</span><span>当前积分:27</span>
                    </FlexRowSpaceBetween>
                    <SignBar/>
                </div>
            </div>
            <ul class="MyInfoRight">
                <li><b>浏览量：</b>2366</li>
                <li><b>发布数：</b>23</li>
                <li><b>盈利额：</b>26542</li>
                <li><b>保障量：</b>2</li>
            </ul>
        </FlexRow>
        <ul>
            <Entrance :head="'images/07_My/icon_agent@3x.png'" to="/My/Agent">成为代理</Entrance>
            <Entrance :head="'images/07_My/icon_resume@3x.png'" to="/My/Resume">我的简历</Entrance>
            <Entrance :head="'images/07_My/icon_wallet@3x.png'" to="/My/Wallet">我的钱包</Entrance>
            <Entrance :head="'images/07_My/icon_service@3x.png'" to="/My/Contact">联系客服</Entrance>
        </ul>
        <taskbar/>
    </div>
</template>

<script>
    import Taskbar from "../Global/Taskbar.vue";
    import TitleHeader from "../Global/Header/TitleHeader.vue";
    import Entrance from "../Global/Entrance.vue";
    import SignBar from "../Sign/SignBar.vue";
    import {FlexRowSpaceBetween, FlexColumnSpaceBetween, FlexRow} from "../Global/Layout";
    import Head from "../Global/Head.vue";

    export default {
        name: "My",
        components: {
            FlexRow,
            FlexColumnSpaceBetween,
            FlexRowSpaceBetween,
            SignBar,
            Entrance,
            TitleHeader,
            Taskbar,
            Head
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.My {
        .padding-header-taskbar();
        min-height: 100vh;
        background-color: #f8f8f8;

        div.MyInfo {
            padding: unit(35px / @base-font, rem) unit(@layout-padding / @base-font , rem);
            margin-bottom: unit(22px / @base-font, rem);
            display: flex;
            background-color: white;

            div.MyInfoLeft {
                flex: auto;
                margin-right: unit(65px / @base-font, rem);

                div.Head {
                    width: unit(100px / @base-font , rem);
                    height: unit(100px / @base-font , rem);
                    margin-right: unit(30px / @base-font, rem);
                    flex: none;
                }
            }

            ul.MyInfoRight {
                text-align: left;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                li {
                    font-size: unit(24 / @base-font , rem);
                    color: #7e7e7e;
                    b {
                        color: #000000;
                    }
                }
            }
        }
    }
</style>
