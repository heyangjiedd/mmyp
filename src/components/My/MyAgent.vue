<template>
    <div class="MyAgent">
        <BackTitleHeader>成为代理</BackTitleHeader>
        <IndexAdvertisement/>
        <div class="MyAgentNews">
            <h1>盈利快讯</h1>
            <p><b>小王子</b>昨天收入<span>3.00</span> 累计收入<span>2354.00</span>元</p>
        </div>

        <div class="MyAgentDescription">
            <p>成为代理人享受被邀请用户为平台创造的盈利。 包括（置顶、发布、管理费、红包）</p>
            <h1>合伙人等级</h1>
            <p class="indent">一级合伙人：累计邀请3名用户使用美美优聘。 获得盈利的1% </p>
            <p class="indent">二级合伙人：累计邀请10名用户使用美美优聘。 获得盈利的5% </p>
            <p class="indent">三级合伙人：累计邀请25名用户使用美美优聘。 获得盈利的20% </p>
            <p class="indent">四级合伙人：累计邀请50名用户使用美美优聘。 获得盈利的40% </p>
            <p class="indent">金牌合伙人：累计邀请100名用户使用美美优聘。 获得盈利的80% </p>
        </div>

        <FlexRowSpaceBetweenCenter class="MyAgentRankTitle">
            <h1>收入排行</h1>
            <router-link to="/My/Agent/Rank/">更多</router-link>
        </FlexRowSpaceBetweenCenter>

        <MyAgentRank :agents="agents"/>

        <div class="MyAgentBoss">
            <h1>我的上级</h1>
            <FlexRow>
                <Head image="images/img_01@2x.png"/>
                <FlexColumn>
                    <h1>阿正</h1>
                </FlexColumn>
            </FlexRow>
            <FlexRowSpaceBetweenCenter>
                <h1>已邀请粉丝：125</h1>
                <router-link to="/My/Agent/Fans/">查看</router-link>
            </FlexRowSpaceBetweenCenter>
            <h1>累计获得收益；<span>25697.00</span>元</h1>
        </div>

        <div class="MyAgentSubmit">
            <router-link to="/My/Agent/Invite/">成为代理</router-link>
            <router-link to="/My/Agent/Invite/">邀请赚钱</router-link>
        </div>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import IndexAdvertisement from "../Index/IndexAdvertisement.vue";
    import {FlexRowSpaceBetweenCenter, FlexRow, FlexColumn} from "../Global/Layout/";
    import MyAgentRank from "./MyAgentRankList.vue";
    import Head from "../Global/Head.vue"

    export default {
        name: "MyAgent",
        components: {
            FlexRow,
            MyAgentRank,
            FlexRowSpaceBetweenCenter,
            IndexAdvertisement,
            BackTitleHeader,
            FlexColumn,
            Head
        },
        data: function () {
            return {
                agents: [
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png"},
                ]
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MyAgent {
        .Content();

        div.MyAgentNews {
            padding: unit(28px / @base-font , rem) unit(@layout-padding / @base-font, rem) unit(58px / @base-font, rem);
            background-color: white;
            margin-bottom: unit(10px / @base-font, rem);
            > h1 {
                font-size: unit(30px / @base-font, rem);
                margin-bottom: unit(34px / @base-font, rem);
            }
            > p {
                text-align: center;
                font-size: unit(26px / @base-font, rem);
                color: #999999;
                > b {
                    font-size: unit(28px / @base-font, rem);
                    color: black;
                }
                > span {
                    color: red;
                }
            }
        }

        div.MyAgentDescription {
            padding: unit(37px / @base-font, rem) unit(@layout-padding / @base-font, rem);
            background-color: white;
            margin-bottom: unit(10px / @base-font, rem);

            > p {
                margin-bottom: unit(15px / @base-font, rem);
            }
            > p.indent {
                text-indent: unit(-160px / @base-font, rem);
                padding-left: unit(160px / @base-font, rem);
            }
            h1 {
                font-size: unit(30px / @base-font, rem);
                margin: unit(20px / @base-font, rem) 0;
            }
        }

        div.MyAgentRankTitle {
            margin-bottom: unit(10px / @base-font, rem);
            height: unit(117px / @base-font, rem);
            padding: 0 unit(@layout-padding / @base-font, rem);
            background-color: white;
            > h1 {
                font-size: unit(30px / @base-font, rem);
            }
            > a {
                font-size: unit(30px / @base-font, rem);
                color: #999999;
            }
        }

        div.MyAgentBoss {
            padding: unit(28px / @base-font , rem) unit(@layout-padding / @base-font, rem);
            background-color: white;
            margin: unit(10px / @base-font, rem) 0;
            h1, h2, a {
                font-size: unit(30px / @base-font, rem);
            }
            > h1 {
                margin-bottom: unit(36px / @base-font, rem);
                > span {
                    color: red;
                }

            }
            div.FlexRow {
                margin-bottom: unit(36px / @base-font, rem);
                div.Head {
                    margin-right: unit(25px / @base-font, rem);
                }
            }
            div.FlexRowSpaceBetweenCenter {
                margin-bottom: unit(36px / @base-font, rem);
                a {
                    color: #999999;
                }
            }

        }

        div.MyAgentSubmit {
            padding: unit(36px / @base-font, rem) unit(90px / @base-font, rem);
            > a {
                font-size: unit(28px / @base-font, rem);
                color: white;
                border-radius: unit(10px / @base-font, rem);
                display: block;
                width: 100%;
                padding: unit(20px / @base-font, rem) 0;
                text-align: center;
                margin-bottom: unit(35px / @base-font, rem);
            }
            > a:first-child {
                background-color: #F19149;
            }
            > a:last-child {
                background-color: #3EB43B;
            }
        }
    }
</style>
