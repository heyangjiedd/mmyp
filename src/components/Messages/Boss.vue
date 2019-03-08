<template>
    <div class="Boss">
        <BackTitleHeader>我是老板</BackTitleHeader>
        <NavSwitch :list="list">
            <template :slot="list[0]">
                <MessageReceived :messages="resumes" :status="status" linkPrefix="/Messages/Boss/ViewResume"/>
            </template>
            <template :slot="list[1]">
                <ul class="BossOrders">
                    <li v-for="order in orders">
                        <FlexRowSpaceBetween>
                            <h1>{{order.title}}</h1>
                            <h1>
                                状态：
                                <span :style="{color:status[order.status].color}">{{status[order.status].description}}</span>
                            </h1>
                        </FlexRowSpaceBetween>
                        <h1>{{order.deposit}}</h1>
                        <h1>{{order.referralDeposit}}</h1>
                        <h1>{{order.cost}}</h1>
                        <h1>{{order.cost}}</h1>
                        <h2>{{order.orderId}}</h2>
                        <h2>{{order.date}}</h2>
                        <hr>
                        <h2>验证码：<span style="color: red;margin-left: 0.5rem;">{{order.verifyCode}}</span></h2>
                    </li>
                </ul>
            </template>
        </NavSwitch>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import NavSwitch from "../Global/NavSwitch.vue";
    import {FlexRowSpaceBetween} from "../Global/Layout/";
    import MessageReceived from "./MessageReceived.vue";
    import Api from "../../utils/Api";
    import fecha from 'fecha';

    export default {
        name: "Boss",
        components: {FlexRowSpaceBetween, NavSwitch, BackTitleHeader, MessageReceived},
        data: function () {
            return {
                list: ["简历", "订单"],
                resumes: [
                    //         "list": [
                    //     {
                    //         "recordId": 4,
                    //         "msg": "胡经理的简历(ID: 10000177)",
                    //         "createTime": 1545709536000,
                    //         "status": "SUCCESS"
                    //     },
                    //     {
                    //         "recordId": 1,
                    //         "msg": "胡经理的简历(ID: 10000177)",
                    //         "createTime": 1545708901000,
                    //         "status": "WAIT_INVITE"
                    //     }
                    // ],
                ],
                status: Api.Message.Status,
                orders: [
                    {
                        orderId: "订单号：9801654432147146",
                        date: "日期：18/6/25 14:15:05",
                        title: "豆豆的简历（ID：264558862）",
                        status: 'SUCCESS',
                        deposit: "保障金：2000元",
                        referralDeposit: "介绍费：1000元",
                        cost: "管理费：150元",
                        verifyCode: "684975789",
                    },
                    {
                        orderId: "订单号：9801654432147146",
                        date: "日期：18/6/25 14:15:05",
                        title: "豆豆的简历（ID：264558862）",
                        status: 'SUCCESS',
                        deposit: "保障金：2000元",
                        referralDeposit: "介绍费：1000元",
                        cost: "管理费：150元",
                        verifyCode: "684975789",
                    },
                    {
                        orderId: "订单号：9801654432147146",
                        date: "日期：18/6/25 14:15:05",
                        title: "豆豆的简历（ID：264558862）",
                        status: 'SUCCESS',
                        deposit: "保障金：2000元",
                        referralDeposit: "介绍费：1000元",
                        cost: "管理费：150元",
                        verifyCode: "684975789",
                    },
                ]
            }
        },
        methods: {
            setResume(response) {
                if (response) {
                    let list = response.data.data.list;
                    list.forEach(v => {
                        let t = {
                            id: v.recordId,
                            date: fecha.format(new Date(v.createTime), 'YY/M/DD'),
                            title: v.msg,
                            status: v.status,
                        };
                        this.resumes.push(t);
                    });
                }
            }
        },
        async beforeRouteEnter(to, from, next) {
            let response = await Api.Message.Boss.queryResume().response();
            next(vm => {
                vm.setResume(response);
            });
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Boss {
        .Content();
        ul.BossOrders {
            > li {
                padding: 0 unit(@layout-padding / @base-font, rem);
                margin-bottom: unit(10px / @base-font, rem);
                background-color: white;
                h1, h2 {
                    font-size: unit(28px / @base-font, rem);
                    padding: unit(15px / @base-font, rem) 0;
                }
                h2 {
                    color: #999999;
                }
                hr {
                    height: 1px;
                    background-color: #bbbbbb;
                    margin: unit(10px / @base-font, rem) 0;
                }
            }
        }
    }
</style>
