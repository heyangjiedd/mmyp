<template>
    <div class="Team">
        <TitleHeader>团队</TitleHeader>
        <ul>
            <Entrance :head="'images/09_Team/icon_leader@3x.png'" :to="'/Team/My'">加入的团队</Entrance>
            <Entrance :head="'images/09_Team/icon_Formation@3x.png'" :to="'/Team/Edit'">编辑团队信息</Entrance>
        </ul>
        <div class="TeamOfMe">
            <div>
                <div class="TeamLeaderHead" style="background-image: url('images/img_03@2x.png')"></div>
                <div class="TeamLeaderName">
                    <h1>我的团队</h1>
                    <p>id:352154</p>
                </div>
                <div class="TeamLeaderEdit"></div>
            </div>
            <TeamMember :members="teamMember">
                <li>
                    <a>
                        <ImageCover :image="'images/09_Team/button_add@3x.png'"/>
                    </a>
                </li>
            </TeamMember>
        </div>
        <Taskbar/>
    </div>
</template>

<script>
    import Taskbar from "../Global/Taskbar.vue";
    import TitleHeader from "../Global/Header/TitleHeader.vue";
    import Entrance from "../Global/Entrance.vue";
    import TeamMember from "./TeamMember.vue";
    import {ImageCover} from "../Global/Image";
    import Api from "../../utils/Api";

    export default {
        name: "Team",
        components: {ImageCover, TeamMember, Entrance, TitleHeader, Taskbar},
        data: function () {
            return {
                teamMember: []
            }
        },
        methods: {
            setTeam(response) {
                if (response) {
                    let data = response.data.data;
                    data.memberList.forEach(v => this.teamMember.push({
                        head: v.headPath,
                        name: v.nickName,
                        id: v.id
                    }));
                }
            }
        },
        async beforeRouteEnter(to, from, next) {
            let response = await Api.Team.edit().response();
            next(vm => vm.setTeam(response));
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Team {
        .padding-header-taskbar();
        min-height: 100vh;
        background-color: #f8f8f8;

        div.TeamOfMe {
            margin-top: unit(20px / @base-font , rem);
            padding: unit(25px / @base-font , rem) unit(@layout-padding / @base-font , rem);
            background-color: white;

            > div {
                display: flex;
                flex-wrap: nowrap;

                div.TeamLeaderHead {
                    .background-picture-cover();
                    border-radius: 50%;
                    width: unit(86px / @base-font , rem);
                    height: unit(86px / @base-font , rem);
                    margin-right: unit(20px / @base-font , rem);
                    flex: none;
                }
                div.TeamLeaderName {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    flex: auto;

                    h1 {
                        font-weight: normal;
                        font-size: unit(30px / @base-font, rem);
                    }
                    p {
                        font-size: unit(24px / @base-font, rem);
                        color: #606060;
                    }
                }
                div.TeamLeaderEdit {
                    .background-picture-contain();
                    flex: none;
                    width: unit(40px / @base-font , rem);
                    background-image: url("images/09_Team/button_edit@3x.png");
                }
            }

        }
    }

</style>
