<template>
    <div class="MessageLeader">
        <BackTitleHeader>我是领队</BackTitleHeader>
        <NavSwitch :list="list">
            <template :slot="list[0]">
                <MessageReceived :messages="messages" :status="status" linkPrefix="/Messages/Leader/Invitation"/>
            </template>

            <template :slot="list[1]">
                <MessageGuarantee :guarantees="guarantees" :status="status"/>
            </template>
        </NavSwitch>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import NavSwitch from "../Global/NavSwitch.vue";
    import MessageReceived from "./MessageReceived.vue";
    import MessageGuarantee from "./MessageGuarantee.vue";

    export default {
        name: "MessageLeader",
        components: {MessageGuarantee, MessageReceived, NavSwitch, BackTitleHeader},
        data: function () {
            return {
                list: ["信息", "收到保障"],
                messages: [
                    {date: "18/6/12", title: "键盘酒吧向你发来了面试邀请", status: 0},
                    {date: "18/6/12", title: "键盘酒吧向你发来了面试邀请）", status: 2},

                ],
                status: [
                    {description: "待查看", color: "#000000"},
                    {description: "要求保障", color: "#D62222"},
                    {description: "已保障", color: "#2CAC32"},
                    {description: "已查看", color: "#999999"},
                    {description: "已退款", color: "#E06E6E"},
                    {description: "正在保障", color: "#3FB244"},
                    {description: "待验证", color: "#DC4747"},

                ],
                guarantees: [
                    {
                        name: "欢欢",
                        id: "欢欢",
                        status: 6,
                        deposite: "5000.00",
                        referralDeposit: "2000.00",
                        depositeDeadline: "18/08/24 12:26"
                    },
                    {
                        name: "欢欢",
                        id: "欢欢",
                        status: 6,
                        deposite: "5000.00",
                        referralDeposit: "2000.00",
                        depositeDeadline: "18/08/24 12:26"
                    },
                    {
                        name: "欢欢",
                        id: "欢欢",
                        status: 6,
                        deposite: "5000.00",
                        referralDeposit: "2000.00",
                        depositeDeadline: "18/08/24 12:26"
                    }
                ]
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MessageLeader {
        .Content();
    }
</style>
