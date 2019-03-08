<template>
    <ul class="MyAgentRankList">
        <li v-for="(agent,index) in agents">
            <FlexRowSpaceBetweenCenter>
                <FlexRowStartCenter class="MyAgentRankListHead">
                    <Head :image="agent.head"/>
                    <FlexColumn>
                        <h1>{{agent.name}}</h1>
                        <h2>累计收益：<span>{{agent.income}}元</span></h2>
                        <h3 v-if="agent.myself">再邀请56名粉丝可上粉丝榜</h3>
                        <h3 v-else>粉丝：{{agent.fans}}</h3>
                    </FlexColumn>
                </FlexRowStartCenter>
                <h4 v-if="showRankNum && index >= 3">{{index + 1}}</h4>
            </FlexRowSpaceBetweenCenter>
            <ImageContain :image="`images/01_icon/icon_no${index + 1}_default@3x.png`"
                          v-if="index < 3 && showRankImage"/>
        </li>
    </ul>
</template>

<script>
    import {FlexRowStartCenter, FlexRowSpaceBetweenCenter, FlexRow, FlexColumn} from "../Global/Layout/";
    import Head from "../Global/Head.vue"
    import {ImageContain} from "../Global/Image";

    export default {
        name: "MyAgentRankList",
        components: {ImageContain, FlexRowSpaceBetweenCenter, FlexRow, FlexRowStartCenter, Head, FlexColumn},
        props: {
            agents: Array,
            showRankNum: {type: Boolean, default: false},
            showRankImage: {type: Boolean, default: true}
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    ul.MyAgentRankList {
        > li {
            margin: unit(10px / @base-font, rem);
            background-color: white;
            padding: 0 unit(@layout-padding / @base-font, rem);
            position: relative;
            div.FlexRowSpaceBetweenCenter {
                height: unit(185px / @base-font, rem);

                div.MyAgentRankListHead {
                    height: unit(120px / @base-font, rem);
                    div.Head {
                        margin-right: unit(25px / @base-font, rem);
                    }
                }

                h1 {
                    font-size: unit(30px / @base-font, rem);
                }
                h2 {
                    font-size: unit(30px / @base-font, rem);
                    font-weight: normal;
                    span {
                        color: red;
                    }
                }
                h3 {
                    font-size: unit(24px / @base-font, rem);
                    font-weight: normal;
                }
                h4 {
                    font-size: unit(36px / @base-font, rem);
                    color: #9A9A9A;
                    margin-right: unit(30px / @base-font, rem);
                }

            }

            div.ImageContain {
                position: absolute;
                top: 0;
                right: unit(@layout-padding / @base-font, rem);
                width: unit(90px / @base-font, rem);
                height: unit(110px / @base-font, rem);
            }

        }
    }
</style>
