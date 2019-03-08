<template>
    <div class="BossGuarantee">
        <BackTitleHeader>保障金</BackTitleHeader>
        <div class="BossGuaranteeBill">
            <FlexRow>
                <h1>{{bill.name}}</h1>
                <h3 style="align-self: flex-end;margin-left: 0.428rem;">{{bill.id}}</h3>
            </FlexRow>
            <FlexRowSpaceBetween>
                <h2>保障金</h2>
                <h3>￥{{bill.deposite}}</h3>
            </FlexRowSpaceBetween>
            <FlexRowSpaceBetween>
                <h2>介绍费</h2>
                <h3>￥{{bill.referralDeposit}}</h3>
            </FlexRowSpaceBetween>
            <FlexRowSpaceBetween>
                <h2>管理费</h2>
                <h3 style="font-weight: bold">（保障金及管理费*5%）</h3>
                <h3 v-show="bill.exchange" style="text-decoration:line-through;">￥{{bill.managementFee}}</h3>
                <h3 v-show="!bill.exchange">￥{{bill.managementFee}}</h3>
            </FlexRowSpaceBetween>
            <FlexRowSpaceBetween style="padding:1.25rem 0;">
                <h1>共计</h1>
                <h1 v-show="!bill.exchange" style="color: #FF0000">
                    ￥{{bill.deposite+bill.referralDeposit+bill.managementFee}}</h1>
                <h1 v-show="bill.exchange" style="color: #FF0000">￥{{bill.deposite+bill.referralDeposit}}</h1>
            </FlexRowSpaceBetween>
        </div>
        <FlexRowSpaceBetween class="BossGuaranteeExchange">
            <h1>使用350积分免管理费</h1>
            <SingleSelect v-model="bill.exchange"/>
        </FlexRowSpaceBetween>
        <div class="BossGuaranteePay">
            <h1>支付方式</h1>
            <FlexRowCenter>
                <FlexRowStartCenter :class="{active:!payByWeChat}" @click.native="payByWeChat = false">
                    <img src="images/pay1.png"/>
                    余额支付
                </FlexRowStartCenter>
                <FlexRowStartCenter :class="{active:payByWeChat}" @click.native="payByWeChat = true">
                    <img src="images/pay2.png"/>
                    微信支付
                </FlexRowStartCenter>
            </FlexRowCenter>
            <div class="BossGuaranteePaySubmit">
                <button>确认</button>
                <button>交给老板支付</button>
                <p>
                    <b style="color:#000000;">注：</b><br/>
                    1.支付底薪保障后，系统将生成保障订单并附带验证码。<br/>
                    2.5个自然日内应聘者没有输入验证码，即视为本次招聘失败，保障金、介绍费及管理费将自动返回您的账户总额。<br/>
                    3.应聘者输入验证码后，即代表应聘成功，保障金将在2个自然日后自动划入对方账户。<br/>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import {FlexRow, FlexRowSpaceBetween, FlexRowCenter, FlexRowStartCenter} from "../Global/Layout";
    import SingleSelect from "../Global/SingleSelect.vue";

    export default {
        name: "BossGuarantee",
        components: {SingleSelect, FlexRowStartCenter, FlexRowCenter, FlexRowSpaceBetween, FlexRow, BackTitleHeader},
        data: function () {
            return {
                bill: {
                    name: "豆豆",
                    id: "ID：25478693",
                    deposite: 5000.00,
                    referralDeposit: 2000.00,
                    managementFee: 350,
                    exchange: false
                },
                payByWeChat: true,
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.BossGuarantee {
        .Content();

        div.BossGuaranteeBill {
            background-color: white;
            padding: unit(15px / @base-font, rem) unit(@layout-padding / @base-font, rem);
            margin-bottom: unit(10px / @base-font, rem);
            > div {
                padding: unit(15px / @base-font, rem) 0;
                border-bottom: 1px solid #d7d7d7;
            }
            h1 {
                font-size: unit(28px / @base-font, rem);
            }
            h2, h3 {
                font-size: unit(24px / @base-font, rem);
                font-weight: normal;
            }
            h3 {
                color: #999999;
            }
        }

        div.BossGuaranteeExchange {
            padding: unit(30px / @base-font, rem) unit(@layout-padding / @base-font, rem);
            margin-bottom: unit(10px / @base-font, rem);
            background-color: white;
            h1 {
                font-size: unit(24px / @base-font, rem);
                font-weight: normal;
                color: #606060;
            }
        }

        div.BossGuaranteePay {
            padding: unit(25px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(80px / @base-font, rem);
            background-color: white;
            > h1 {
                font-size: unit(24px / @base-font, rem);
            }
            > div.FlexRowCenter {
                padding: unit(20px / @base-font, rem) 0;

                div {
                    border: 1px solid #e0e0e0;
                    border-radius: 3px;
                    color: #999999;
                    font-size: unit(22px / @base-font, rem);
                    width: unit(220px / @base-font, rem);
                    height: unit(80px / @base-font, rem);
                    margin-right: unit(15px / @base-font, rem);
                    padding-left: unit(10px / @base-font, rem);
                    img {
                        max-width: unit(65px / @base-font, rem);
                        max-height: unit(50px / @base-font, rem);
                        margin-right: unit(15px / @base-font, rem);
                    }
                }
                div.active {
                    border: 1px solid #ff8b26;
                    color: #ff8b26;
                }
            }

            div.BossGuaranteePaySubmit {
                padding: 0 unit(22px / @base-font, rem);
                > button {
                    width: 100%;
                    padding: unit(20px / @base-font, rem) 0;
                    font-size: unit(32px / @base-font, rem);
                    color: white;
                    background-color: #ff8b26;
                    margin-bottom: unit(25px / @base-font, rem);
                }
                > p {
                    font-size: unit(24px / @base-font, rem);
                    color: #999999;
                    line-height: 1.6;
                }
            }
        }

    }
</style>
