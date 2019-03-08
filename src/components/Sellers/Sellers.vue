<template>
    <div class="Sellers">
        <BackTitleHeader>商家</BackTitleHeader>
        <NavSwitch :list="list">
            <template :slot="list[0]">
                <ul class="SellersList">
                    <li v-for="seller in sellers.safest">
                        <router-link :to="`/Sellers/${seller.id}`">
                            <SellerCard :seller="seller"/>
                        </router-link>
                    </li>
                </ul>
            </template>
            <template :slot="list[1]">
                <ul class="SellersList">
                    <li v-for="seller in sellers.newest">
                        <router-link :to="`/Sellers/${seller.id}`">
                            <SellerCard :seller="seller"/>
                        </router-link>
                    </li>
                </ul>
            </template>
        </NavSwitch>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import {FlexRowSpaceBetween, FlexRowEnd} from "../Global/Layout";
    import SellerCard from "./SellerCard.vue";
    import NavSwitch from "../Global/NavSwitch.vue";
    import Api from "../../utils/Api";

    export default {
        name: "Sellers",
        components: {NavSwitch, SellerCard, FlexRowEnd, BackTitleHeader, FlexRowSpaceBetween},
        data: function () {
            return {
                sellers: {
                    safest: [
                        // "id": 10000172,
                        // "name": "温莎KTV",
                        // "headPath": "http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM6pVwruyJ1kTU68CredHDUKtHeK1BtpBibIkEjzvjRXvu012mDqiaUBSeWDaYkVA17rUAE6SlkqhSN6nV9y9EG3zG95CRxCbYYZY/132",
                        // "province": "四川省",
                        // "city": "成都市",
                        // "district": "武侯区",
                        // "address": "顺城大街北段316号融城云熙",
                        // "mobile": "12345678911",
                        // "description": "温莎KTV，自1996年破茧而出，历经20年成为国内的“量贩式KTV”，现在已经拥有十余家各具特色、设施先进的连锁品牌店。温莎人一直致力于用“平价超市”的消费概念，酒店式的服务理念，打造具有时尚、健康、欢乐、自在的文化气质，满足从普通大众到小众新贵等不同消费层次需要 的娱乐文化场所，倡导一种积极向上的休闲聚会方式。同时坚持“以人为本、健康娱乐”的服务宗旨，努力打造精品式的量贩式KTV。 　　随着人民生活的富足和社会精神需要的多样化，娱乐时代不可避免的到来了。温莎精品式的量贩式KTV，以健康积极的群众娱乐方式为每一位消费者提供一个健康、文明、欢乐的自由释放空间，在忙碌过后，捕捉真挚的热情、原始的感动。 　　温莎长期坚持与国际的设计师合作，携手共同打造专业级、智能化、人性化的全数码完美视、听、唱效果，拥有全亚洲领先的KTV综合娱乐点唱系统，以满 足消费者近乎专业的欢唱需要。每一个分店，都拥有上百间包房，全方面的产品陈列设计，满足不同消费层次的娱乐文化需要。 　　温莎品牌不仅仅仅是一个物质娱乐消费场所的象征，是优质的欢唱效果，潮流的音乐MV，前端的时尚风潮！更是一种文化、一种精神、一种健康的娱乐生活方式。永不满足的温莎人将不懈努力，百尺竿头，一路高歌，唱响中国！",
                        // "viewNum": 24,
                        // "safeNum": 1,
                        // "status": "NORMAL",
                        // "userId": 10000176,
                        // "nickName": "二牛"
                        //
                        // {
                        //     name: "阿正",
                        //     head: "images/img_01@2x.png",
                        //     trusted: true,
                        //     task: "完成:12笔 剩余:15名",
                        //     belongTo: "成都职业技术院",
                        //     description: "团队介绍不拉不拉不拉不拉不拉不拉不爱了不爱来不啊不拉不拉不不拉不啦不拉不拉...",
                        //     location: "四川省-成都市-高新区",
                        //     viewCount: "浏览量:1233"
                        // }
                        // ,],
                    ],
                    newest: [
                        // {
                        //     name: "阿正",
                        //     head: "images/img_01@2x.png",
                        //     trusted: true,
                        //     task: "完成:12笔 剩余:15名",
                        //     belongTo: "成都职业技术院",
                        //     description: "团队介绍不拉不拉不拉不拉不拉不拉不爱了不爱来不啊不拉不拉不不拉不啦不拉不拉...",
                        //     location: "四川省-成都市-高新区",
                        //     viewCount: "浏览量:1233"
                        // }
                    ],
                },
                list: ['最新商家', '保障量']
            }
        },
        mounted() {
        },
        methods: {
            setSellers(response, target) {
                if (response) {
                    response.data.data.list.forEach(v => {
                        let t = {
                            name: v.name,
                            head: v.headPath,
                            location: `${v.province}-${v.city}-${v.district}`,
                            description: v.description,
                            viewCount: `浏览量:${v.viewNum}`,
                            task: "完成:12笔 剩余:15名",
                            trusted: v.status === 'CX',
                            id: v.id,
                        };

                        target.push(t);
                    })

                }
            }
        },
        async beforeRouteEnter(to, from, next) {
            let p0 = Api.Seller.query({page: 1, limit: 5, type: 'SAFEST'}).response();
            let p1 = Api.Seller.query({page: 1, limit: 5, type: 'NEWEST'}).response();
            let r = [];
            r[0] = await p0;
            r[1] = await p1;
            next(vm => {
                vm.setSellers(r[0], vm.sellers.safest);
                vm.setSellers(r[1], vm.sellers.newest);
            });
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Sellers {
        padding-top: unit(@header-height / @base-font, rem);
        background-color: #F8F8F8;
        min-height: 100vh;
        ul.SellersList {
            li {
                padding: unit(35px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(20px / @base-font, rem);
                margin-bottom: unit(8px / @base-font, rem);
                display: flex;
                background-color: white;
            }

        }
    }
</style>
