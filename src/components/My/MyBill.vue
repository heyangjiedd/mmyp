<template>
    <div class="MyBill">
        <BackTitleHeader>我的账单</BackTitleHeader>
        <MessageReceived :messages="bill"/>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import MessageReceived from "../Messages/MessageReceived.vue";
    import fecha from 'fecha';
    import Api from "../../utils/Api";

    export default {
        name: "MyBill",
        components: {MessageReceived, BackTitleHeader},
        data: function () {
            return {
                bill: [
                    // {date: "18/6/12", title: "为豆豆（ID：25648666）提供保障", type: false, money: "2000.00"},
                    // {date: "18/6/12", title: "充值余额成功", type: true, money: "2000.00"},
                ],
            }
        },
        mounted() {
            this.query();
        },
        methods: {
            async query() {
                let response = await Api.My.Wallet.bill().response();
                if (response) {
                    this.bill = this.bill.concat(this.convert(response.data.data.list));
                    console.log(23423);
                }
            },
            convert(array) {
                let t = [];
                array.forEach((item, index) => {
                    t[index] = {};
                    t[index].date = fecha.format(new Date(item.createTime), 'YY/M/D');
                    t[index].title = item.remark;
                    t[index].type = item.changeType === 'ADD';
                    t[index].money = item.changeAmount.toFixed(2);
                });
                return t;
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MyBill {
        .Content();
    }
</style>
