<template>
    <div class="Seller">
        <BackTitleHeader>商家详情</BackTitleHeader>
        <ImageCover :image="'images/seller_1.png'"/>
        <div class="SellerImages swiper-container">
            <ul class="swiper-wrapper">
                <li v-for="image in gallery" :style="{'background-image':`url('${image}')` }" class="swiper-slide"></li>
            </ul>
        </div>
        <SellerHost :seller="seller"/>
        <NavSwitch :list="list">
            <template :slot="list[0]">
                <div class="SellerDetail">
                    <p>{{seller.description2}}</p>
                    <SellerGallery :gallery="gallery"/>
                </div>
            </template>
            <template :slot="list[1]">
                <div class="SellerRecruit">
                    <Recruit :title="'唛叻咪'"/>
                    <Recruit :title="'唛叻咪'"/>
                </div>
            </template>
            <template :slot="list[2]">
                <ul class="SellerMembers">
                    <li v-for="member in members">
                        <router-link :to="`/Resume/${member.id}`">
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
                                        <Tag :color="tag.color" v-for="tag in member.tags" :key="tag.id">{{tag.name}}
                                        </Tag>
                                    </p>
                                    <h3>{{member.location}}</h3>
                                </Description>
                            </HeadAndDescription>
                        </router-link>
                    </li>
                </ul>
            </template>
        </NavSwitch>
        <Phone/>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import HeadAndDescription from "../Global/Description/HeadAndDescription.vue";
    import Head from "../Global/Head.vue"
    import Description from "../Global/Description/Description.vue";
    import {FlexRowSpaceBetween, FlexRowStartCenter, FlexRowEnd} from "../Global/Layout";
    import Recruit from "../Global/Recruit/Recruit.vue";
    import Tag from "../Global/Tag.vue";
    import Phone from "../Global/Phone.vue";
    import SellerHost from "./SellerHost.vue";
    import SellerGallery from "./SellerGallery.vue";
    import ImageCover from "../Global/Image/ImageCover.vue";
    import NavSwitch from "../Global/NavSwitch.vue";
    import Api from '../../utils/Api';
    import Swiper from "swiper";


    export default {
        name: "Seller",
        components: {
            NavSwitch,
            ImageCover,
            SellerGallery,
            SellerHost,
            Phone,
            Recruit,
            Tag,
            FlexRowStartCenter,
            FlexRowEnd,
            HeadAndDescription,
            BackTitleHeader,
            Head,
            Description,
            FlexRowSpaceBetween
        },
        data: function () {
            return {
                seller: {
                    name: "阿正",
                    head: "images/img_01@2x.png",
                    trusted: true,
                    task: "完成:12笔 剩余:15名",
                    belongTo: "成都职业技术院",
                    location: "四川省-成都市-高新区",
                    address: "益州大道南段盛兴路156号",
                    viewCount: "浏览量:1233",
                    phone: "电话：18443847851",
                    id: "ID：3255565",
                    description2: "聚集万千美美！需要的找我，需要工作的美美也找我！",
                    thumbUps: {
                        from: [
                            {head: "images/img_11@2x.png", name: "欢欢"},
                            {head: "images/img_12@2x.png", name: "萱萱"},
                            {head: "images/img_13@2x.png", name: "李某某"},
                            {head: "images/img_14@2x.png", name: "恐龙蛋"},
                            {head: "images/img_15@2x.png", name: "小女孩"},
                            {head: "images/img_16@2x.png", name: "社会人"},
                        ]
                    },
                },
                members: [],
                gallery: ['images/seller_1.png', 'images/seller_1.png', 'images/seller_1.png', 'images/seller_1.png'],
                list: ['详情', '动态', '已保障']
            }
        },
        mounted() {
        },
        methods: {
            setSeller(response) {
                if (response) {
                    let data = response.data.data;
                    this.seller.name = data.name;
                    this.seller.id = `ID：${data.id}`;
                    this.seller.head = data.headPath;
                    this.seller.viewCount = `浏览量：${data.viewNum}`;
                    this.seller.location = `${data.province}-${data.city}-${data.district}`;
                    this.seller.address = data.name;
                    this.seller.address = data.address;
                    this.seller.phone = `电话：${data.mobile}`;
                    this.seller.description2 = data.description;
                    this.seller.thumbUps.from = data.likeInfo.likeList;
                    if (data.imgList.length) {
                        this.gallery = data.imgList;
                    }
                }
            },
            setJobs(response) {
                if (response) {

                }
            },
            setSafes(response) {
                if (response) {
                    let list = response.data.data.list;
                    let members = [];
                    list.forEach(v => {
                        let t = {
                            head: v.headPath,
                            name: v.nickName,
                            id: v.id,
                            height: `身高:${v.height}cm`,
                            weight: `体重:${v.weight}kg`,
                            age: `年龄:${v.age}`,
                            location: `${v.province}-${v.city}-${v.district}`,
                            tags: Api.Tag.getColorTag(v.tags),
                        };
                        members.push(t);
                    });
                    this.members = this.members.concat(members);
                }
            },
            setSwiper() {
                new Swiper('.SellerImages', {
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                });
            }
        },
        async beforeRouteEnter(to, from, next) {
            let p0 = Api.Seller.getById({shopId: to.params.id}).response();
            let p1 = Api.Seller.getJobsById({shopId: to.params.id}).response();
            let p2 = Api.Seller.getSafesById({shopId: to.params.id}).response();
            let r0 = await p0;
            let r1 = await p1;
            let r2 = await p2;
            next(vm => {
                vm.setSeller(r0);
                vm.setJobs(r1);
                vm.setSafes(r2);
                vm.setSwiper();
            });
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Seller {
        padding-top: unit(@header-height / @base-font, rem);
        background-color: #F8F8F8;
        min-height: 100vh;

        div.SellerImages {
            height: unit(457px / @base-font, rem);
            > ul {
                width: 100%;
                height: 100%;
                > li {
                    .background-picture-cover();
                    width: 100%;
                    height: 100%;
                }
            }
        }

        div.SellerDetail {
            padding: unit(20px / @base-font, rem) unit(@layout-padding / @base-font, rem);
            background-color: white;

            > p {
                padding: unit(35px / @base-font, rem) unit(45px / @base-font, rem) unit(25px / @base-font, rem);
                text-align: left;
                font-size: unit(24px / @base-font, rem);
                line-height: 1.5;
                box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.1);
                white-space: pre-wrap;
            }
        }

        div.Recruit {
            padding: unit(20px / @base-font, rem) unit(@layout-padding / @base-font, rem);
            background-color: white;

            margin-bottom: unit(10px / @base-font, rem);
        }

        ul.SellerMembers {
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
