<template>
    <div class="TeamMy">
        <BackTitleHeader>
            {{leader.name}}
        </BackTitleHeader>
        <LeaderInfo :leader="leader"/>
        <div class="TeamMyOther">
            <h1>其他队友</h1>
            <TeamMember :members="teamMember"/>
            <Button style="width:21.4rem;margin: 0 auto;" @click.native=" this.showExit = true">退出</Button>
        </div>
        <Alert :show="showExit" @close="showExit = false" title="确认退出该团队？" @confirm="quit"></Alert>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import LeaderInfo from "../Leaders/LeaderInfo.vue";
    import TeamMember from "./TeamMember.vue";
    import Button from "../Global/Button.vue"
    import Overlay from "../Global/Overlay.vue";
    import Alert from "../Global/Alert.vue";
    import {FlexRowSpaceAround} from "../Global/Layout";
    import Api from "../../utils/Api";

    export default {
        name: "TeamMy",
        components: {FlexRowSpaceAround, Overlay, TeamMember, LeaderInfo, BackTitleHeader, Button, Alert},
        data: function () {
            return {
                // {
                //     "code": 200,
                //     "message": "查询成功",
                //     "data": {
                //     "id": 2,
                //         "name": "测试团队2",
                //         "type": 2,
                //         "province": "四川省",
                //         "city": "成都市",
                //         "district": "锦江区",
                //         "mobile": "13311111111",
                //         "description": "测试团队简介2",
                //         "memberNum": 1,
                //         "viewNum": 2,
                //         "safeNum": 4,
                //         "level": "NORMAL",
                //         "memberList": [
                //         {
                //             "id": 10000176,
                //             "nickName": "二牛",
                //             "headPath": "http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM6pVwruyJ1kTU68CredHDUKtHeK1BtpBibIkEjzvjRXvu012mDqiaUBSeWDaYkVA17rUAE6SlkqhSN6nV9y9EG3zG95CRxCbYYZY/132"
                //         }
                //     ]
                // }
                // }
                leader: {
                    head: "images/img_01@2x.png",
                    belong: "成都职业技术院",
                    name: "领队：阿正",
                    id: "ID：3255565",
                    phone: "电话：1845652323",
                    address: "地址：四川省-成都市-高新区",
                    description: "聚集万千美美！需要的找我，需要工作的美美也找我！聚集万千美美！需要的找我，需要工作的美美也找我！聚集万千美美！需要的找我，需要"
                },
                teamMember: [],
                showExit: false
            }
        },
        methods: {
            setTeam(response) {
                let data = response.data.data;
                if (response) {
                    this.leader.description = data.description;
                    this.leader.address = `地址：${data.province}-${data.city}-${data.district}`;
                    this.leader.name = `${data.name}`;
                    let teamMember = [];
                    data.memberList.forEach(v => {
                        let t = {
                            head: v.headPath,
                            id: v.id,
                            name: v.nickName
                        };
                        teamMember.push(t);
                    });
                    this.teamMember = this.teamMember.concat(teamMember);
                }
            },
            async quit() {
                let response = await Api.Team.quit().response();
                if (response) {
                    alert('退出成功！');
                }
            }
        },
        async beforeRouteEnter(to, from, next) {
            let response = await Api.Team.my().response();
            next(vm => {
                vm.setTeam(response);
            })
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.TeamMy {
        padding-top: unit(@header-height / @base-font, rem);
        background-color: #F8F8F8;
        min-height: 100vh;

        div.TeamMyOther {
            padding: unit(20px / @base-font, rem) unit(@layout-padding / @base-font, rem);
            background-color: white;
            > h1 {
                font-size: unit(30px / @base-font, rem);
            }

            ul.TeamMember {
                margin-bottom: unit(50px / @base-font, rem);
            }
        }
    }
</style>
