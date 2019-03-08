<template>
    <div class="App">
        <router-view></router-view>
        <Loading/>
    </div>
</template>

<script>
    import Api from "../utils/Api"
    import wx from 'weixin-js-sdk';
    import qs from 'query-string';

    import Loading from "./Global/Loading.vue";

    export default {
        name: "App",
        components: {Loading},
        async mounted() {
            // let timestamp = Math.floor(new Date().getTime() / 1000);
            // let response = await Api.Wx.Signature({timestamp: timestamp, url: location.href.split('#')[0]}).promise;
            // wx.config({
            //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            //     appId: 'wx6672b5098bcaadca', // 必填，公众号的唯一标识
            //     timestamp: timestamp, // 必填，生成签名的时间戳
            //     nonceStr: 'qdpGSSuP9OIhw55y', // 必填，生成签名的随机串
            //     signature: response.data.data,// 必填，签名
            //     jsApiList: ['updateAppMessageShareData', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
            // });
            // wx.ready(async () => {
            //     // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，
            //     // 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            //     console.log('config success!');
            //     // wx.updateAppMessageShareData({
            //     //     title: '分享标题123', // 分享标题
            //     //     desc: '分享描述123', // 分享描述
            //     //     link: 'http://a.lake2.cn:8220/1', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            //     //     imgUrl: '', // 分享图标
            //     //     success: function () {
            //     //         alert('设置成功');
            //     //     }
            //     // });
            //     wx.onMenuShareAppMessage({
            //         title: '找工作担心被骗?我推荐你用美美优聘', // 分享标题
            //         desc: '平台保障，老板先付工资，你再去上班', // 分享描述
            //         link: 'http://t.mmyoupin.com/1', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            //         imgUrl: '', // 分享图标
            //     }, function (res) {
            //         // console.log("test==========",res)
            //         //这里是回调函数
            //     }, function (err) {
            //         // console.log('err:', err)
            //     });
            //     wx.chooseWXPay({
            //         agent: "i",
            //         appId: "wx6672b5098bcaadca",
            //         timestamp: "1548590502", // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            //         nonceStr: 'l62TEkAruflKC85E', // 支付签名随机串，不长于 32 位
            //         package: '"prepay_id=null', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
            //         signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            //         paySign: '25470DB9F4DB68D5D292AA742BCA87F8', // 支付签名
            //         success: function (res) {
            //             console.log('支付成功！');
            //             // 支付成功后的回调函数
            //         }
            //     });
            // });
            // wx.error(function (res) {
            //     // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            //     console.log('err:', res)
            // });
        },
        methods: {
            async getUserInfo() {
                let query = qs.parse(location.search);
                if (!query.code) {
                    location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc75fb63fd980bcc0&redirect_uri=${encodeURIComponent(Api.domain)}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
                } else {
                    let response = await Api.Wx.UserInfo({code: query.code}).promise;
                    this.$store.state.user.data.wx = response.data;
                    console.log(response.data);
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../variables.less";

    div.App {
        width: 100%;

        @media screen and (min-width: @tablet-width) {
            width: 750px;
            margin: 0 auto;
        }

        div.Header, div.Taskbar, ul.MyAgentRankSelf {
            @media screen and (min-width: @tablet-width) {
                width: 750px;
                margin: 0 auto;
            }
        }
    }
</style>
