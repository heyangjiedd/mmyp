<template>
    <div class="MyWalletWithdraw">
        <BackTitleHeader>提现</BackTitleHeader>
        <MyWalletInput title="输入提现金额：" :close="true" v-model="withDraw" :withDrawAll="true"/>
        <MyWalletInput title="确认金额：" :confirm="withDraw"/>
        <p>
            【美美提示】：由于用户充值到美美优聘的资金，微信会抽取部分手续费。为了弥补损失，美美优聘会抽取用户提现金额的2%作为弥补对您造成的不便，请谅解
        </p>
        <MyWalletSubmit name="立即提现"/>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import MyWalletInput from "./MyWalletInput.vue";
    import MyWalletSubmit from "./MyWalletSubmit.vue";

    export default {
        name: "MyWalletWithdraw",
        components: {MyWalletSubmit, MyWalletInput, BackTitleHeader},
        data: function () {
            return {
                withDraw: 2000
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MyWalletWithdraw {
        .Content();
        > p {
            margin: unit(46px / @base-font, rem) unit(69px / @base-font, rem);
            font-size: unit(24px / @base-font, rem);
            color: #999999;
            line-height: 1.7;
        }
    }
</style>
