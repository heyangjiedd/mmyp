<template>
    <div class="Resumes">
        <BackTitleHeader>简历</BackTitleHeader>
        <NavSwitch :list="list">
            <template :slot="list[0]">
                <ul class="MemberList">
                    <li v-for="member in members.newest">
                        <router-link :to="`/Resume/${member.id}`">
                            <HeadAndDescription>
                                <Head :image="member.head"/>
                                <Description>
                                    <FlexRowSpaceBetween style="margin-bottom: 0.1rem">
                                        <h1>{{member.name}}</h1>
                                        <h4>{{member.viewCount}}</h4>
                                    </FlexRowSpaceBetween>
                                    <FlexRowSpaceBetween style="margin-bottom: 0.71rem">
                                        <h2>{{member.height}}</h2>
                                        <h2>{{member.weight}}</h2>
                                        <h2>{{member.age}}</h2>
                                    </FlexRowSpaceBetween>
                                    <FlexRow class="DescriptionTag">
                                        <Tag :color="tag.color" v-for="tag in member.tags" :key="tag.id">
                                            {{tag.name}}
                                        </Tag>
                                    </FlexRow>
                                    <p>{{member.description}}</p>
                                    <h3 style="margin-bottom: 1rem">{{member.location}}</h3>
                                    <FlexRowSpaceBetween>
                                        <h4>{{member.inviteNum}}</h4>
                                        <h4>状态：
                                            <!--<span v-if="member.status == 0" style="color: #58ae32">已收到保障</span>-->
                                            <span v-if="member.status == 1" style="color: red">寻找岗位</span>
                                        </h4>
                                    </FlexRowSpaceBetween>
                                </Description>
                            </HeadAndDescription>
                        </router-link>
                    </li>
                </ul>
            </template>
            <template :slot="list[1]">
                <ul class="MemberList">
                    <li v-for="member in members.new_update">
                        <router-link :to="'/Resume/0'">
                            <HeadAndDescription>
                                <Head :image="member.head"/>
                                <Description>
                                    <FlexRowSpaceBetween style="margin-bottom: 0.1rem">
                                        <h1>{{member.name}}</h1>
                                        <h4>{{member.viewCount}}</h4>
                                    </FlexRowSpaceBetween>
                                    <FlexRowSpaceBetween style="margin-bottom: 0.71rem">
                                        <h2>{{member.height}}</h2>
                                        <h2>{{member.weight}}</h2>
                                        <h2>{{member.age}}</h2>
                                    </FlexRowSpaceBetween>
                                    <FlexRow class="DescriptionTag">
                                        <Tag :color="tag.color" v-for="tag in member.tags" :key="tag.id">
                                            {{tag.name}}
                                        </Tag>
                                    </FlexRow>
                                    <p>{{member.description}}</p>
                                    <h3 style="margin-bottom: 1rem">{{member.location}}</h3>
                                    <FlexRowSpaceBetween>
                                        <h4>{{member.inviteNum}}</h4>
                                        <h4>状态：
                                            <!--<span v-if="member.status == 0" style="color: #58ae32">已收到保障</span>-->
                                            <span v-if="member.status == 1" style="color: red">寻找岗位</span>
                                        </h4>
                                    </FlexRowSpaceBetween>
                                </Description>
                            </HeadAndDescription>
                        </router-link>
                    </li>
                </ul>
            </template>
        </NavSwitch>
    </div>
</template>

<script>
    import HeadAndDescription from "../Global/Description/HeadAndDescription.vue";
    import Description from "../Global/Description/Description.vue";
    import FlexRowSpaceBetween from "../Global/Layout/FlexRowSpaceBetween.vue";
    import Head from '../Global/Head.vue';
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import Tag from "../Global/Tag.vue";
    import NavSwitch from "../Global/NavSwitch.vue";
    import Api from "../../utils/Api";
    import FlexRow from "../Global/Layout/FlexRow.vue";

    export default {
        name: "Resumes",
        components: {
            FlexRow,
            NavSwitch,
            Tag,
            BackTitleHeader,
            HeadAndDescription,
            Description,
            FlexRowSpaceBetween,
            Head
        },
        data: function () {
            return {
                members: {
                    newest: [
                        {
                            id: 1,
                            head: "images/img_11@2x.png",
                            name: "欢欢",
                            height: "身高:162cm",
                            weight: "体重:50kg",
                            age: "年龄:21",
                            location: "四川省-成都市-高新区",
                            viewCount: "浏览量：5493",
                            status: 1,
                            description: "23523",
                            inviteNum: "收到邀请：21",
                            tags: [{id: 1, name: "及时到岗", color: "#8A79FF", selected: false},
                                {id: 2, name: "服从安排", color: "#FF69AB", selected: false},]
                            // "id": 1,
                            // "nickName": "二牛",
                            // "sex": "女",
                            // "headPath": "http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM6pVwruyJ1kTU68CredHDUKtHeK1BtpBibIkEjzvjRXvu012mDqiaUBSeWDaYkVA17rUAE6SlkqhSN6nV9y9EG3zG95CRxCbYYZY/132",
                            // "height": "180",
                            // "weight": "80",
                            // "birthYear": "2000",
                            // "birthMonth": "8",
                            // "tags": "?",
                            // "description": "测试",
                            // "province": "四川省",
                            // "city": "成都市",
                            // "district": "武侯区",
                            // "viewNum": 9,
                            // "inviteNum": 1,
                            // "status": "NORMAL"
                        },
                    ],
                    new_update: [
                        {
                            head: "images/img_11@2x.png",
                            name: "欢欢",
                            description: "23523",
                            inviteNum: "收到邀请：21",
                            height: "身高:162cm",
                            weight: "体重:50kg",
                            age: "年龄:21",
                            location: "四川省-成都市-高新区",
                            viewCount: "浏览量：5493",
                            status: 1,
                            tags: [{id: 1, name: "及时到岗", color: "#8A79FF", selected: false},
                                {id: 2, name: "服从安排", color: "#FF69AB", selected: false},]
                        },
                    ]
                },
                list: ['新简历', '最新更新']
            }
        },
        methods: {
            setMembers(response, target) {
                console.log(234);
                if (response) {
                    response.data.data.list.forEach(v => {
                        let t = {
                            id: v.id,
                            name: v.nickName,
                            head: v.headPath,
                            height: `身高:${v.height}cm`,
                            weight: `体重:${v.weight}cm`,
                            age: `年龄:${new Date().getFullYear() - parseInt(v.birthYear)}`,
                            location: `${v.province}-${v.city}-${v.district}`,
                            viewCount: `浏览量：${v.viewNum}`,
                            status: 1,
                            // status: v.status === "NORMAL" ? 1 : 0,
                            description: v.description,
                            tags: Api.Tag.getColorTag(v.tags),
                            inviteNum: `收到邀请：${v.inviteNum}`,
                        };
                        target.push(t);
                    });
                }
            }
        },
        async beforeRouteEnter(to, from, next) {
            let p0 = Api.Resume.query({city: "成都", type: "NEWEST"}).response();
            let p1 = Api.Resume.query({city: "成都", type: "NEW_UPDATE"}).response();
            let r = [];
            r[0] = await p0;
            r[1] = await p1;
            next(vm => {
                vm.setMembers(r[0], vm.members.newest);
                vm.setMembers(r[1], vm.members.new_update);
            });
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Resumes {
        padding-top: unit(@header-height / @base-font, rem);
        background-color: #F8F8F8;
        min-height: 100vh;
        ul.MemberList {
            li {
                a {
                    padding: unit(20px / @base-font, rem) unit(@layout-padding / @base-font, rem);
                    display: block;
                    background-color: white;
                    margin-bottom: unit(10px / @base-font, rem);

                    div.Head {
                        margin-right: unit(25px  / @base-font, rem);
                    }

                    div.Description {
                        h1 {
                            font-size: unit(28px / @base-font , rem);
                            margin-bottom: unit(5px / @base-font, rem);
                            color: black;
                        }
                        h2 {
                            font-size: unit(26px / @base-font, rem);
                            color: #606060;
                            line-height: normal;
                        }
                        h3 {
                            font-size: unit(24px / @base-font, rem);
                            color: #686868;
                        }
                        h4 {
                            font-size: unit(24px / @base-font, rem);
                            font-weight: bold;
                            color: #6E6E6E;
                        }
                        p {
                            font-size: unit(24px / @base-font, rem);
                            color: black;
                            margin-bottom: unit(20px / @base-font, rem);
                        }
                        div.DescriptionTag {
                            font-size: unit(24px / @base-font, rem);
                            color: black;
                            flex-wrap: wrap;
                            > span.Tag {
                                margin-bottom: unit(20px / @base-font, rem);
                            }
                        }
                    }
                }

            }
        }
    }
</style>
