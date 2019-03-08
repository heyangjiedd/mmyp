<template>
    <div id="recharge">
        <div class="recharge-header">
            <a class="back" href="###" onClick="javascript :history.back(-1);"></a>
            <p class="recharge-title">充值</p>
        </div>
        <div class="recharge-body">
            <h2 class="title">
                充值金额
            </h2>
            <div class="clrechargeNum-choice-wrap">
                <p class="rechargeNum-choice" :class="{active:rechargeNum==500}" v-on:click="inputRechargeNum($event)">
                    500</p>
                <p class="rechargeNum-choice" :class="{active:rechargeNum==200}" v-on:click="inputRechargeNum($event)">
                    200</p>
                <p class="rechargeNum-choice" :class="{active:rechargeNum==100}" v-on:click="inputRechargeNum($event)">
                    100</p>
                <p class="rechargeNum-choice" :class="{active:rechargeNum==50}" v-on:click="inputRechargeNum($event)">
                    50</p>
                <p class="rechargeNum-choice" :class="{active:rechargeNum==30}" v-on:click="inputRechargeNum($event)">
                    30</p>
                <p class="rechargeNum-choice" :class="{active:rechargeNum==10}" v-on:click="inputRechargeNum($event)">
                    10</p>

            </div>
            <div class="otherAmount">
                <span>其他金额:</span>
                <input v-model="rechargeNum" type="number" v-bind:placeholder="0" class="rechargeNum"/>
                <span>元</span>
            </div>

            <div class="confirmRecharge">
                <!--<p>余额充值后不可退</p>-->
                <div class="confirmRecharge-btn" v-on:click="recharge">立即充值</div>
            </div>
            <p class="statement" v-on:click="wxpay">点击确认充值代表您已阅读并同意
                <span>《充值协议》</span> 美美优聘不会以任何形式要求您输入银行卡账户和密码
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'recharge',
        data() {
            return {
                rechargeNum: '',
                data: {}
            }
        },
        methods: {
            inputRechargeNum: function (e) {
                this.rechargeNum = e.target.innerHTML
            },
            recharge: function () {
                let that = this;
                if (this.rechargeNum == "") {
                    return false;
                }
                let formData = new FormData();
//				formData.append("recordId", 1);
                formData.append("amount", this.rechargeNum);
//				formData.append("curUrl", window.location.href.split('#')[0]);
                that.axios.post('http://47.104.69.228:8080/mmyp/pay/recharge',
                    formData, {
                        headers: {
                            'openId': sessionStorage.getItem('openId'),
                        }
                    }).then(function (result) {
                    if (result.data.code == '200') {
                        if (typeof WeixinJSBridge == "undefined") {
                            if (document.addEventListener) {
                                document.addEventListener('WeixinJSBridgeReady', that.onBridgeReady(result.data.data), false);
                            } else if (document.attachEvent) {
                                document.attachEvent('WeixinJSBridgeReady', that.onBridgeReady(result.data.data));
                                document.attachEvent('onWeixinJSBridgeReady', that.onBridgeReady(result.data.data));
                            }
                        } else {
                            that.onBridgeReady(result.data.data);
                        }

                    } else {
                        that.$toast.center('获取支付订单失败' + result.message);
                    }

                })
                    .catch(function (error) {
                        that.$toast.center('获取支付订单失败请检查网络！');
                    });
            },
            onBridgeReady: function (data) {
                let that = this;
                WeixinJSBridge.invoke(
                    'getBrandWCPayRequest', {
                        debug: true,
                        "appId": data.jspayMessage.appId, //公众号名称，由商户传入
                        "timeStamp": data.jspayMessage.timeStamp, //时间戳，自1970年以来的秒数
                        "nonceStr": data.jspayMessage.nonceStr, //随机串
                        "package": data.jspayMessage.package,
                        "signType": data.jspayMessage.signType, //微信签名方式：
                        "paySign": data.jspayMessage.paySign, //微信签名
                        jsApiList: [
                            'chooseWXPay'
                        ]
                    },
                    function (res) {
                        // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                        if (res.err_msg == "get_brand_wcpay_request:ok") {
                            that.$toast.center('充值成功');
                            setTimeout(function () {
                                that.$router.go(-1)
                            }, 500)
                        } else {
                            alert(JSON.stringify(res));
                            alert("支付失败请稍后再试！");
                        }
                    }
                );
            },
            wxpay: function () {
                let that = this;
                //				alert(JSON.stringify(that.data.data.data.jspayMessage))

            }
        }
    }
</script>

<style scoped>
    @import url("css/recharge.css");
</style>
