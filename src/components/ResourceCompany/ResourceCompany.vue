<template>
    <div class="ResourceCompany">
        <BackTitleHeader>资源公司</BackTitleHeader>
        <NavSwitch :list="list">
            <template :slot="list[0]">
                <ul class="ResourceCompanyList">
                    <li v-for="item in leaders.memberest">
                        <HeadAndDescription>
                            <Head :image="item.head"/>
                            <Description>
                                <FlexRowSpaceBetween>
                                    <h1>{{item.name}}
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
                    </li>
                </ul>
            </template>
            <template :slot="list[1]">
                <ul class="ResourceCompanyList">
                    <li v-for="item in leaders.safest">
                        <HeadAndDescription>
                            <Head :image="item.head"/>
                            <Description>
                                <FlexRowSpaceBetween>
                                    <h1>{{item.name}}
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
                    </li>
                </ul>
            </template>
        </NavSwitch>

    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import Head from "../Global/Head.vue"
    import HeadAndDescription from "../Global/Description/HeadAndDescription.vue";
    import Description from "../Global/Description/Description.vue";
    import FlexRowSpaceBetween from "../Global/Layout/FlexRowSpaceBetween.vue";
    import NavSwitch from "../Global/NavSwitch.vue";
    import Api from "../../utils/Api";

    export default {
        name: "ResourceCompany",
        components: {NavSwitch, FlexRowSpaceBetween, Description, HeadAndDescription, BackTitleHeader, Head},
        data: function () {
            return {
                leaders: {
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
                        },
                    ],
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
                        }
                    ],
                },
                list: ['资源量', '成交量']
            }
        },
        methods: {
            async setLeaders(response, target) {
                if (response) {
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
            let p0 = Api.Leaders.query({page: 1, limit: 5, type: 'SAFEST', cType: 2}).response();
            let p2 = Api.Leaders.query({page: 1, limit: 5, type: 'MEMBEREST', cType: 2}).response();
            let r0 = await p0;
            let r2 = await p2;
            next(vm => {
                vm.setLeaders(r0, vm.leaders.safest);
                vm.setLeaders(r2, vm.leaders.memberest);
            });
        },
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.ResourceCompany {
        padding-top: unit(@header-height / @base-font, rem);
        background-color: #F8F8F8;
        min-height: 100vh;

        ul.ResourceCompanyList {
            li {
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
                    }
                    h2 {
                        font-size: unit(26px / @base-font, rem);
                        line-height: 2;
                    }
                    h3 {
                        font-size: unit(24px / @base-font, rem);
                        margin-bottom: unit(25px / @base-font, rem);
                        font-weight: normal;
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
</style>
