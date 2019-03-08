<template>
    <div class="MyWalletRecharge">
        <BackTitleHeader>充值</BackTitleHeader>
        <MyWalletInput title="请输入充值金额：" :close="true" v-model="amount"/>
        <MyWalletInput title="确认金额：" :confirm="amount" :disabled="true"/>
        <p>支付方式：</p>
        <FlexRowSpaceBetweenCenter class="MyWalletRechargeWay">
            <h1>微信支付</h1>
            <i class="check">
                <svg viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M345.781 890.168 0 544.571l77.181-77.187 268.601 268.234 601.781-601.786 77.186 77.366L345.781 890.168z"></path>
                </svg>
            </i>
        </FlexRowSpaceBetweenCenter>
        <p>点击确认充值即代表您已阅读并同意<a>《充值协议》</a>美美优聘不会以任何形式索要您的微信支付密码</p>
        <MyWalletSubmit name="立即支付" @click.native="recharge"/>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import MyWalletInput from "./MyWalletInput.vue"
    import {FlexRowSpaceBetweenCenter} from "../Global/Layout/";
    import MyWalletSubmit from "./MyWalletSubmit.vue";
    import Api from "../../utils/Api";

    export default {
        name: "MyWalletRecharge",
        components: {MyWalletSubmit, FlexRowSpaceBetweenCenter, BackTitleHeader, MyWalletInput},
        data: function () {
            return {
                amount: 0.01
            }
        },
        methods: {
            async recharge() {
                let response = await Api.My.Wallet.recharge({amount: this.amount}).response();
                if (response) {
                    let jspayMessage = response.data.data.jspayMessage;
                    this.invokeWeixinPay(jspayMessage);
                }
            },
            invokeWeixinPay(jspayMessage) {
                if (typeof WeixinJSBridge !== undefined) {
                    WeixinJSBridge.invoke("getBrandWCPayRequest", {
                            debug: true,
                            "appId": jspayMessage.appId, //公众号名称，由商户传⼊入
                            "timeStamp": jspayMessage.timeStamp, //时间戳 这⾥里随意使⽤用了⼀一个值
                            "nonceStr": jspayMessage.nonceStr, //随机串
                            "package": jspayMessage.package,
                            "signType": jspayMessage.signType, //微信签名⽅方式:sha1
                            "paySign": jspayMessage.paySign, //微信签名
                            jsApiList: [
                                'chooseWXPay'
                            ]
                        },
                        function (res) {
                            // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                            if (res.err_msg == "get_brand_wcpay_request:ok") {
                                alert("充值成功");
                            } else {
                                alert(JSON.stringify(res));
                                alert("支付失败请稍后再试！");
                            }
                        });
                } else {
                    alert("请在微信浏览器中打开完成支付！");
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MyWalletRecharge {
        .Content();
        > p {
            font-size: unit(26px / @base-font, rem);
            color: #717171;
            margin: unit(21px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(21px / @base-font, rem);
            a {
                color: #f19149;
                line-height: 1.7;
            }
        }
        div.MyWalletRechargeWay {
            height: unit(90px / @base-font, rem);
            padding: 0 unit(@layout-padding / @base-font, rem);
            background-color: white;
            > h1 {
                font-size: unit(28px / @base-font, rem);
                font-weight: normal;
            }
            i.check {
                display: inline-block;
                width: unit(40px / @base-font, rem);
                height: unit(40px / @base-font, rem);
                background-color: #f19149;
                border-radius: 50%;
                > svg {
                    width: 60%;
                    height: 60%;
                    fill: white;
                    margin: 20%;
                }
            }
        }

    }
</style>
