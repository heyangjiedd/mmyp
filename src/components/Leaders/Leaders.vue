<template>
    <div class="Leaders">
        <BackTitleHeader>领队</BackTitleHeader>
        <NavSwitch :list="list">
            <template :slot="list[0]">
                <ul class="MemberList">
                    <li v-for="item in leaders.memberest">
                        <router-link :to="'/Leaders/0'">
                            <HeadAndDescription>
                                <Head :image="item.head"/>
                                <Description>
                                    <FlexRowSpaceBetween>
                                        <h1>{{item.name}}
                                            <SingleWordTag :color="'#E61919'" v-if="item.level === 'YX'">
                                                优
                                            </SingleWordTag>
                                        </h1>
                                        <h4>{{item.task}}</h4>
                                    </FlexRowSpaceBetween>
                                    <h2>{{item.belongTo}}</h2>
                                    <h3>{{item.description}}</h3>
                                    <FlexRowSpaceBetween>
                                        <h4>{{item.location}}</h4>
                                        <h4>{{item.viewCount}}</h4>
                                    </FlexRowSpaceBetween>
                                </Description>
                            </HeadAndDescription>
                        </router-link>
                    </li>
                </ul>
            </template>
            <template :slot="list[1]">
                <ul class="MemberList">
                    <li v-for="item in leaders.safest">
                        <router-link :to="'/Leaders/0'">
                            <HeadAndDescription>
                                <Head :image="item.head"/>
                                <Description>
                                    <FlexRowSpaceBetween>
                                        <h1>{{item.name}}
                                            <SingleWordTag :color="'#E61919'" v-if="item.level === 'YX'">
                                                优
                                            </SingleWordTag>
                                        </h1>
                                        <h4>{{item.task}}</h4>
                                    </FlexRowSpaceBetween>
                                    <h2>{{item.belongTo}}</h2>
                                    <h3>{{item.description}}</h3>
                                    <FlexRowSpaceBetween>
                                        <h4>{{item.location}}</h4>
                                        <h4>{{item.viewCount}}</h4>
                                    </FlexRowSpaceBetween>
                                </Description>
                            </HeadAndDescription>
                        </router-link>
                    </li>
                </ul>
            </template>
            <template :slot="list[2]">
                <ul class="MemberList">
                    <li v-for="item in leaders.newest">
                        <router-link :to="'/Leaders/0'">
                            <HeadAndDescription>
                                <Head :image="item.head"/>
                                <Description>
                                    <FlexRowSpaceBetween>
                                        <h1>{{item.name}}
                                            <SingleWordTag :color="'#E61919'" v-if="item.level === 'YX'">
                                                优
                                            </SingleWordTag>
                                        </h1>
                                        <h4>{{item.task}}</h4>
                                    </FlexRowSpaceBetween>
                                    <h2>{{item.belongTo}}</h2>
                                    <h3>{{item.description}}</h3>
                                    <FlexRowSpaceBetween>
                                        <h4>{{item.location}}</h4>
                                        <h4>{{item.viewCount}}</h4>
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
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import SingleWordTag from "../Global/SingleWordTag.vue";
    import Head from "../Global/Head.vue";
    import HeadAndDescription from "../Global/Description/HeadAndDescription.vue";
    import Description from "../Global/Description/Description.vue";
    import FlexRowSpaceBetween from "../Global/Layout/FlexRowSpaceBetween.vue";
    import NavSwitch from "../Global/NavSwitch.vue";
    import Api from "../../utils/Api";

    export default {
        name: "Leaders",
        components: {
            NavSwitch,
            FlexRowSpaceBetween,
            Description,
            HeadAndDescription,
            SingleWordTag,
            BackTitleHeader,
            Head,
        },
        data: function () {
            return {
                leaders: {
                    safest: [
                        {
                            name: "阿正",
                            head: "images/img_01@2x.png",
                            task: "完成:12笔 剩余:15名",
                            belongTo: "成都职业技术院",
                            description: "团队介绍不拉不拉不拉不拉不拉不拉不爱了不爱来不啊不拉不拉不不拉不啦不拉不拉...",
                            location: "四川省-成都市-高新区",
                            viewCount: "浏览量:1233",
                            level: "YX",
                            // {
                            //     "userId": 10000176,
                            //     "nickName": "二牛",
                            //     "headPath": "http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM6pVwruyJ1kTU68CredHDUKtHeK1BtpBibIkEjzvjRXvu012mDqiaUBSeWDaYkVA17rUAE6SlkqhSN6nV9y9EG3zG95CRxCbYYZY/132",
                            //     "id": 1,
                            //     "name": "t3453453454",
                            //     "type": 1,
                            //     "province": "江西",
                            //     "city": "南昌",
                            //     "district": "东湖区",
                            //     "mobile": "13000000000",
                            //     "description": "34t34t567",
                            //     "memberNum": 2,
                            //     "viewNum": 22,
                            //     "safeNum": 2,
                            //     "level": "YX"
                            // },
                        },
                    ],
                    newest: [
                        {
                            name: "阿正",
                            head: "images/img_01@2x.png",
                            task: "完成:12笔 剩余:15名",
                            belongTo: "成都职业技术院",
                            description: "团队介绍不拉不拉不拉不拉不拉不拉不爱了不爱来不啊不拉不拉不不拉不啦不拉不拉...",
                            location: "四川省-成都市-高新区",
                            viewCount: "浏览量:1233",
                            level: "YX",
                        }
                    ],
                    memberest: [
                        {
                            name: "阿正",
                            head: "images/img_01@2x.png",
                            task: "完成:12笔 剩余:15名",
                            belongTo: "成都职业技术院",
                            description: "团队介绍不拉不拉不拉不拉不拉不拉不爱了不爱来不啊不拉不拉不不拉不啦不拉不拉...",
                            location: "四川省-成都市-高新区",
                            viewCount: "浏览量:1233",
                            level: "YX",
                        }
                    ],
                },
                list: ['资源量', '成交量', '最新领队']
            }
        },
        mounted() {
            // this.query('SAFEST', this.leaders.safest);
            // this.query('NEWEST', this.leaders.newest);
            // this.query('MEMBEREST', this.leaders.memberest);
        },
        methods: {
            async setLeaders(response, target) {
                if (response) {
                    console.log(234);
                    response.data.data.list.forEach(v => {
                        let t = {
                            name: v.nickName,
                            head: v.headPath,
                            task: "完成:12笔 剩余:15名",
                            belongTo: v.name,
                            description: v.description,
                            location: `${v.province}-${v.city}-${v.district}`,
                            viewCount: `浏览量:${v.viewNum}`,
                            level: v.level,
                        };
                        target.push(t);
                    })

                }
            },
            async query(type, target) {
                let response = await Api.Leaders.query({page: 1, limit: 5, type: type}).response();
                if (response) {
                    console.log(23454);
                    response.data.data.list.forEach(v => {
                        let t = {
                            name: v.nickName,
                            head: v.headPath,
                            task: "完成:12笔 剩余:15名",
                            belongTo: v.name,
                            description: v.description,
                            location: `${v.province}-${v.city}-${v.district}`,
                            viewCount: `浏览量:${v.viewNum}`,
                            level: v.level,
                        };
                        target.push(t);
                    })

                }
            },
        },
        async beforeRouteEnter(to, from, next) {
            let p0 = Api.Leaders.query({page: 1, limit: 5, type: 'SAFEST', cType: 1}).response();
            let p1 = Api.Leaders.query({page: 1, limit: 5, type: 'NEWEST', cType: 1}).response();
            let p2 = Api.Leaders.query({page: 1, limit: 5, type: 'MEMBEREST', cType: 1}).response();
            let r0 = await p0;
            let r1 = await p1;
            let r2 = await p2;
            next(vm => {
                vm.setLeaders(r0, vm.leaders.safest);
                vm.setLeaders(r1, vm.leaders.newest);
                vm.setLeaders(r2, vm.leaders.memberest);
            });
        },
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Leaders {
        padding-top: unit(@header-height / @base-font, rem);
        background-color: #F8F8F8;
        min-height: 100vh;

        ul.MemberList {
            li {
                > a {
                    padding: unit(35px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(20px / @base-font, rem);
                    margin-bottom: unit(8px / @base-font, rem);
                    display: flex;
                    background-color: white;

                    div.HeadAndDescription {
                        flex: auto;
                    }
                    div.Head {
                        margin-right: unit(18px / @base-font, rem);
                    }
                    div.Description {
                        h1 {
                            font-size: unit(30px / @base-font, rem);
                            display: flex;
                            align-items: center;
                        }
                        h2 {
                            font-size: unit(26px / @base-font, rem);
                            line-height: 2;
                        }
                        h3 {
                            font-size: unit(24px / @base-font, rem);
                            margin-bottom: unit(25px / @base-font, rem);
                            font-weight: normal;
                            height: unit(93 / @base-font, rem);
                            .lines(3);
                        }
                        h4 {
                            font-size: unit(24px / @base-font, rem);
                            color: #999999;
                            font-weight: normal;
                        }
                    }
                }
            }
        }
    }


</style>
