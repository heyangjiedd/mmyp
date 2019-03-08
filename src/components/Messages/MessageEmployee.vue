<template>
    <div class="MessageEmployee">
        <BackTitleHeader>我是员工</BackTitleHeader>
        <NavSwitch :list="list">
            <template :slot="list[0]">
                <MessageReceived :messages="messages" :status="status" linkPrefix="/Messages/Employee/Invitation"/>
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
    import Api from "../../utils/Api";
    import fecha from 'fecha';

    export default {
        name: "MessageEmployee",
        components: {MessageGuarantee, MessageReceived, NavSwitch, BackTitleHeader},
        data: function () {
            return {
                list: ["面试邀请", "收到保障"],
                messages: [
                    {date: "18/6/12", title: "键盘酒吧向你发来了面试邀请", status: 'WAIT_VIEW', id: 5},
                    {date: "18/6/12", title: "键盘酒吧向你发来了面试邀请）", status: 'SAFEING', id: 5},
                    // "recordId": 5,
                    // "msg": "搜索KTV向你发来了面试邀请",
                    // "createTime": 1546857234000,
                    // "status": "SUCCESS"

                ],
                status: Api.Message.Status,
                status2: [
                    {description: "待查看", color: "#000000"}, //1
                    {description: "要求保障", color: "#D62222"}, // 1
                    {description: "已保障", color: "#2CAC32"},
                    {description: "已查看", color: "#999999"},
                    {description: "已退款", color: "#E06E6E"},
                    {description: "正在保障", color: "#3FB244"}, // 1
                    {description: "待验证", color: "#DC4747"},  // 1

                ],
                guarantees: [
                    {
                        name: "欢欢",
                        id: "欢欢",
                        status: 'WAIT_VALIDATE',
                        deposite: "5000.00",
                        referralDeposit: "2000.00",
                        depositeDeadline: "18/08/24 12:26"
                    },
                    {
                        name: "欢欢",
                        id: "欢欢",
                        status: 'WAIT_VALIDATE',
                        deposite: "5000.00",
                        referralDeposit: "2000.00",
                        depositeDeadline: "18/08/24 12:26"
                    },
                    {
                        name: "欢欢",
                        id: "欢欢",
                        status: 'WAIT_VALIDATE',
                        deposite: "5000.00",
                        referralDeposit: "2000.00",
                        depositeDeadline: "18/08/24 12:26"
                    }
                    // "orderId": 6,
                    // "name": "搜索KTV",
                    // "nameId": "10000173",
                    // "status": "SUCCESS",
                    // "safeAmount": 2000,
                    // "introduceAmount": 100,
                    // "manageAmount": 105,
                    // "safeEndTime": 1547290334000,
                    // "enterEndTime": 1547031604000,
                    // "hasLeader": "YES"
                ]
            }
        },
        methods: {
            setMessage(response) {
                if (response) {
                    let data = response.data.data;
                    let messages = [];
                    data.list.forEach(v => {
                        let t = {
                            id: v.recordId,
                            date: fecha.format(new Date(v.createTime), 'YY/M/D'),
                            status: v.status,
                            title: v.msg,
                        };
                        messages.push(t);
                    });
                    this.messages = this.messages.concat(messages);
                }
            },
            setSafe(response) {
                if (response) {
                    let data = response.data.data;
                    let guarantees = [];
                    data.list.forEach(v => {
                        let t = {
                            name: v.name,
                            id: v.nameId,
                            status: v.status,
                            deposite: v.safeAmount.toFixed(2),
                            referralDeposit: v.introduceAmount.toFixed(2),
                            depositeDeadline: fecha.format(new Date(v.safeEndTime), 'YY/MM/D hh:mm'),
                        };
                        guarantees.push(t);
                    });
                    this.guarantees = this.guarantees.concat(guarantees);
                }
            }
        },
        async beforeRouteEnter(to, from, next) {
            let p0 = Api.Message.Employee.query().response();
            let p1 = Api.Message.Employee.safe().response();
            let r0 = await p0;
            let r1 = await p1;
            next(vm => {
                vm.setMessage(r0);
                vm.setSafe(r1);
            });
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MessageEmployee {
        .Content();

    }
</style>
