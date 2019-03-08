<template>
    <div class="Leader">
        <BackTitleHeader>{{leader.belong}}</BackTitleHeader>
        <LeaderInfo :leader="leader"/>
        <ul class="MemberList">
            <li v-for="member in members">
                <router-link :to="'/Resume/0'">
                    <HeadAndDescription>
                        <Head :image="member.head"/>
                        <Description>
                            <h1>{{member.name}}</h1>
                            <FlexRowSpaceBetween>
                                <h2>{{member.height}}</h2>
                                <h2>{{member.weight}}</h2>
                                <h2>{{member.age}}</h2>
                            </FlexRowSpaceBetween>
                            <p>
                                <Tag :color="'#8A79FF'">及时到岗</Tag>
                                <Tag :color="'#FF69AB'">服从安排</Tag>
                            </p>
                            <p>团队介绍不拉不拉不拉不拉不拉不拉不爱了不爱来不啊不拉不拉不不拉不啦不拉不拉...</p>
                            <h3>{{member.location}}</h3>
                        </Description>
                    </HeadAndDescription>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import Head from "../Global/Head.vue";
    import Tag from "../Global/Tag.vue";
    import HeadAndDescription from "../Global/Description/HeadAndDescription.vue";
    import Description from "../Global/Description/Description.vue";
    import FlexRowSpaceBetween from "../Global/Layout/FlexRowSpaceBetween.vue";
    import LeaderInfo from "./LeaderInfo.vue";
    import Api from "../../utils/Api";

    export default {
        name: "Leader",
        components: {
            FlexRowSpaceBetween,
            Description,
            LeaderInfo,
            HeadAndDescription,
            BackTitleHeader,
            Head,
            Tag
        },
        data: function () {
            return {
                leader: {
                    head: "images/img_01@2x.png",
                    belong: "成都职业技术院",
                    name: "领队：阿正",
                    id: "ID：3255565",
                    phone: "电话：1845652323",
                    address: "地址：四川省-成都市-高新区",
                    description: "聚集万千美美！需要的找我，需要工作的美美也找我！聚集万千美美！需要的找我，需要工作的美美也找我！聚集万千美美！需要的找我，需要"
                },
                members: [
                    {
                        head: "images/img_11@2x.png",
                        name: "欢欢",
                        height: "身高:162cm",
                        weight: "体重:50kg",
                        age: "年龄:21",
                        location: "四川省-成都市-高新区"
                    },
                    {
                        head: "images/img_11@2x.png",
                        name: "欢欢",
                        height: "身高:162cm",
                        weight: "体重:50kg",
                        age: "年龄:21",
                        location: "四川省-成都市-高新区"
                    },
                    {
                        head: "images/img_11@2x.png",
                        name: "欢欢",
                        height: "身高:162cm",
                        weight: "体重:50kg",
                        age: "年龄:21",
                        location: "四川省-成都市-高新区"
                    }
                ]
            }
        },
        beforeRouteEnter(to, from, next) {
            next();
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Leader {
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
                        p {
                            font-size: unit(24px / @base-font, rem);
                            margin-bottom: unit(30px / @base-font, rem);
                            color: black;
                        }
                        > div {
                            margin-bottom: unit(20px / @base-font, rem);
                        }
                    }
                }

            }
        }
    }

</style>
