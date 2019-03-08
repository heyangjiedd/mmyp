<template>
    <ul class="MessageGuarantee">
        <li v-for="guarantee in guarantees">
            <FlexRowSpaceBetween>
                <h1>{{guarantee.name}}</h1>
                <span>状态：<b :style="{color:status[guarantee.status].color}">{{status[guarantee.status].description}}</b></span>
            </FlexRowSpaceBetween>
            <h2>ID：{{guarantee.id}}</h2>
            <h3>保障金：<b>￥{{guarantee.deposite}}</b></h3>
            <h3>介绍费：<b>￥{{guarantee.referralDeposit}}</b></h3>
            <h3>保障金领取截止日期：<span>{{guarantee.depositeDeadline}}</span></h3>
            <div class="MessageGuaranteeValidate">
                <input placeholder="请输入验证码"/>
                <FlexRow>
                    <ImageContain image="images/validate.png"/>
                    <span>验证码：</span>
                </FlexRow>
                <button>验证</button>
            </div>
        </li>
    </ul>
</template>

<script>
    import {FlexRowSpaceBetween, FlexRow} from "../Global/Layout";
    import {ImageContain} from "../Global/Image";

    export default {
        name: "MessageGuarantee",
        components: {ImageContain, FlexRowSpaceBetween, FlexRow},
        props: {
            guarantees: Array,
            status: Array
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    ul.MessageGuarantee {
        > li {
            padding: unit(37px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(32px / @base-font, rem);
            background-color: white;
            margin-bottom: unit(10px / @base-font, rem);

            div.FlexRowSpaceBetween {
                > h1 {
                    font-size: unit(36px / @base-font, rem);
                    font-weight: bold;
                }

                > span {
                    font-weight: bold;
                    font-size: unit(30px / @base-font, rem);
                    > b {

                    }
                }
            }
            > h2 {
                font-weight: normal;
                color: #999999;
                font-size: unit(26px / @base-font, rem);
                margin: unit(20px / @base-font, rem) 0 unit(30px / @base-font, rem);
            }
            > h3 {
                font-weight: normal;
                font-size: unit(30px / @base-font, rem);
                color: #999999;
                margin-bottom: unit(22px / @base-font, rem);
                > b {
                    color: #FF0000;
                }
                > span {
                    color: black;
                }
            }
            div.MessageGuaranteeValidate {
                position: relative;
                > input {
                    height: unit(70px / @base-font, rem);
                    border: 1px solid #999999;
                    width: 100%;
                    padding: unit(2.5px / @base-font, rem) unit(120px / @base-font, rem) 0 unit(200px / @base-font, rem);
                    border-radius: unit(40px / @base-font, rem);
                    color: #999999;
                    font-size: unit(26px / @base-font, rem);
                }
                > div.FlexRow {
                    position: absolute;
                    top: unit(15px / @base-font, rem);
                    left: unit(22px / @base-font, rem);
                    > div.ImageContain {
                        width: unit(36px / @base-font, rem);
                        height: unit(36px / @base-font, rem);
                    }
                    > span {
                        margin-left: unit(15px / @base-font, rem);
                    }
                }
                > button {
                    height: unit(70px / @base-font, rem);
                    border-top-right-radius: unit(40px / @base-font, rem);
                    border-bottom-right-radius: unit(40px / @base-font, rem);
                    color: white;
                    background-color: #f19149;
                    padding: unit(3px / @base-font, rem) unit(25px / @base-font, rem) 0;
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-size: unit(30px / @base-font, rem);
                }
            }
        }
    }

</style>
