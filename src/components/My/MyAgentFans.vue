<template>
    <div class="MyAgentFans">
        <BackTitleHeader>我的粉丝</BackTitleHeader>
        <ul>
            <li v-for="fan in  fans">
                <FlexRowSpaceBetweenCenter>
                    <FlexRowStartCenter>
                        <Head :image="fan.head"/>
                        <h1>米乐星</h1>
                    </FlexRowStartCenter>
                    <h2>为你创造:<span>{{fan.income}}</span>元</h2>
                </FlexRowSpaceBetweenCenter>
            </li>
        </ul>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import {FlexRowSpaceBetweenCenter, FlexRowStartCenter} from "../Global/Layout/";
    import Head from "../Global/Head.vue";

    export default {
        name: "MyAgentFans",
        components: {FlexRowStartCenter, FlexRowSpaceBetweenCenter, BackTitleHeader, Head},
        data: function () {
            return {
                fans: [
                    {name: "阿正", income: "75412.00", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", head: "images/img_01@2x.png"},
                    {name: "阿正", income: "75412.00", head: "images/img_01@2x.png"},
                ]
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MyAgentFans {
        .Content();
        ul > {
            > li {
                margin-bottom: unit(10px / @base-font, rem);
                background-color: white;
                > div.FlexRowSpaceBetweenCenter {
                    padding: unit(35px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(29px / @base-font, rem);
                    h1 {
                        font-size: unit(30px / @base-font, rem);
                        margin-left: unit(30px / @base-font, rem);
                    }
                    h2 {
                        font-size: unit(24px / @base-font, rem);
                        color: #848484;
                        span {
                            color: red;
                        }
                    }
                }
            }
        }
    }
</style>
