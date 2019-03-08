<template>
    <div class="MyAgentRank">
        <BackTitleHeader>排行榜</BackTitleHeader>
        <NavSwitch :list="list">
            <template :slot="list[0]">
                <MyAgentRankList :showRankNum="true" :agents="agents" class="MyAgentRankAll"/>
                <MyAgentRankList :showRankNum="false" :showRankImage="false" :agents="myself" class="MyAgentRankSelf"/>
            </template>
            <template :slot="list[1]">
                1
            </template>
        </NavSwitch>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import NavSwitch from "../Global/NavSwitch.vue";
    import MyAgentRankList from "./MyAgentRankList.vue";

    export default {
        name: "MyAgentRank",
        components: {MyAgentRankList, NavSwitch, BackTitleHeader},
        data: function () {
            return {
                list: ['收益榜', '粉丝榜'],
                agents: [
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png"},
                ],
                myself: [
                    {name: "阿正", income: "75412.00", fans: "254", head: "images/img_01@2x.png", myself: true},
                ]
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MyAgentRank {
        .Content();

        ul.MyAgentRankAll {
            padding-bottom: unit(260px / @base-font, rem);
        }
        ul.MyAgentRankSelf {
            position: fixed;
            z-index: 5;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            background-color: white;
            box-shadow: 0px -2px 6px 0px rgba(0, 0, 0, 0.24);
        }
    }
</style>
