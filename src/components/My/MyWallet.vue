<template>
    <div class="MyWallet">
        <BackTitleHeader>我的钱包
            <template slot="right">
                <router-link to="/My/Bill">账单</router-link>
            </template>
        </BackTitleHeader>
        <div class="MyWalletInfo">
            <FlexRow>
                <Head image="images/img_01@2x.png"></Head>
                <div class="MyWalletInfoName">
                    <h1>阿正</h1>
                    <h2>ID：258315</h2>
                </div>
            </FlexRow>
        </div>
        <div class="MyWalletMore">
            <FlexColumnStartCenter class="MyWalletBalance">
                <h1>{{wallet.currentAmount.toFixed(2)}}</h1>
                <h2>账户余额（元）</h2>
                <router-link to="/My/Wallet/Recharge" class="MyWalletBalanceRecharge">充值</router-link>
                <router-link to="/My/Wallet/Withdraw" class="MyWalletBalanceWithdraw">提现</router-link>
            </FlexColumnStartCenter>
            <ul class="MyWalletCategory">
                <li>
                    <FlexRowSpaceBetween>
                        <h1>代理盈利</h1>
                        <h1>￥{{wallet.agentAmount.toFixed(2)}}</h1>
                    </FlexRowSpaceBetween>
                </li>
                <li>
                    <FlexRowSpaceBetween>
                        <h1>介绍费</h1>
                        <h1>￥{{wallet.introduceAmount.toFixed(2)}}</h1>
                    </FlexRowSpaceBetween>
                </li>
                <li>
                    <FlexRowSpaceBetween>
                        <h1>保障金</h1>
                        <h1>￥{{wallet.safeAmount.toFixed(2)}}</h1>
                    </FlexRowSpaceBetween>
                </li>
                <li>
                    <FlexRowSpaceBetween>
                        <h1>红包收入</h1>
                        <h1>￥{{wallet.redAmount.toFixed(2)}}</h1>
                    </FlexRowSpaceBetween>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import {FlexRow, FlexColumnStartCenter, FlexRowSpaceBetween} from "../Global/Layout/";
    import Head from "../Global/Head.vue";
    import Api from "../../utils/Api";

    export default {
        name: "MyWallet",
        components: {FlexRowSpaceBetween, FlexColumnStartCenter, FlexRow, BackTitleHeader, Head},
        data: function () {
            return {
                category: [
                    {name: "代理盈利", money: "￥235.23"},
                    {name: "介绍费", money: "￥235.23"},
                    {name: "保障金", money: "￥235.23"},
                    {name: "红包收入", money: "￥235.23"},
                ],
                wallet: {}
            }
        },
        mounted() {
            this.query();
        },
        methods: {
            async query() {
                let response = await Api.My.Wallet.query().response();
                if (response) {
                    this.wallet = response.data.data;
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MyWallet {
        .Content();
        div.Header {
            div.HeaderRight {
                width: auto;
                height: auto;
                font-size: unit(36px / @base-font, rem);
                padding: 0;
                > a {
                    color: white;

                }
            }
        }

        div.MyWalletInfo {
            height: unit(280px / @base-font, rem);
            padding: unit(55px / @base-font, rem) unit(@layout-padding / @base-font, rem) 0;
            background-color: #F19149;
            div.Head {
                border-radius: 50%;
            }
            div.MyWalletInfoName {
                margin-left: unit(28px / @base-font, rem);
                > h1 {
                    font-size: unit(30px / @base-font, rem);
                    color: white;
                    margin-bottom: unit(13px / @base-font, rem);
                }
                > h2 {
                    font-size: unit(24px / @base-font, rem);
                    color: white;
                    font-weight: normal;
                }
            }
        }

        div.MyWalletMore {
            margin: 0 unit(@layout-padding / @base-font, rem);
            top: unit(-80px / @base-font, rem);
            position: relative;

            div.FlexColumnStartCenter {
                padding: unit(72px / @base-font, rem) unit(105px / @base-font, rem) unit(30px / @base-font, rem);
                background-color: white;
                border-radius: 6px;
                > h1 {
                    font-size: unit(65px / @base-font, rem);
                    color: #3F3F3F;
                    font-weight: normal;
                }
                > h2 {
                    margin: unit(26px / @base-font, rem) 0 unit(42px / @base-font, rem);
                    font-size: unit(26px / @base-font, rem);
                    color: #828282;
                }
                > a {
                    padding: unit(15px / @base-font, rem);
                    width: unit(450px / @base-font, rem);
                    border-radius: unit(35px / @base-font, rem);
                    font-size: unit(33px / @base-font, rem);
                    text-align: center;
                    margin-bottom: unit(24px / @base-font, rem);
                    color: white;
                }
                a.MyWalletBalanceWithdraw {
                    background-color: #F19149;
                }
                a.MyWalletBalanceRecharge {
                    background-color: #3EB43B;
                }
            }

            ul.MyWalletCategory {
                margin-top: unit(25px / @base-font, rem);
                background-color: white;
                padding: unit(15px / @base-font, rem) unit(10px / @base-font, rem);
                > li {
                    border-bottom: 1px solid #f1f1f1;
                    div.FlexRowSpaceBetween {
                        padding: unit(25px / @base-font, rem);
                        > h1 {
                            font-size: unit(24px / @base-font, rem);
                            font-weight: normal;
                        }
                    }
                }
            }
        }

    }
</style>
