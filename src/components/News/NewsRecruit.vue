<template>
    <div class="NewsRecruit">
        <BackTitleHeader>
            招聘信息
            <template slot="right">
                <ImageContain ref="share" :image="'images/shareHeaderButton.png'"/>
            </template>
            <Overlay v-model="isShareOpen" :background="'rgba(0,0,0,0.5)'">
                <div class="NewsRecruitShareGuide">
                    <ImageContain :image="'images/shareGuide.png'"/>
                    <p>
                        请点击右上角<br/>
                        发送给指定的好友/群聊<br/>
                        或分享到朋友圈<br/>
                    </p>
                </div>
            </Overlay>
        </BackTitleHeader>
        <Recruit :title="'唛叻咪'" :submit-resume="'/Resume'"/>
        <div class="NewsRecruitRedBag">
            <ImageContain :image="'images/redbag.png'" @click.native="share"/>

            <h2>手气红包 剩余3个红包 共10元</h2>
            <ul>
                <li v-for="redBag in redBags">
                    <FlexRowSpaceBetweenCenter>
                        <ImageCover :image="'images/img_19@2x.png'" style="flex:none;"/>
                        <FlexRowSpaceBetween style="flex:auto;">
                            <h3>{{redBag.name}}</h3>
                            <h3>{{redBag.money}}</h3>
                        </FlexRowSpaceBetween>
                    </FlexRowSpaceBetweenCenter>
                </li>
            </ul>
            <FlexRowCenter v-show="this.redBagsAll.length !== 0">
                <ImageContain :image="'images/slideDown.png'" @click.native="showMore"/>
            </FlexRowCenter>
        </div>
        <div class="NewsRecruitRecommend">
            <h1>推荐企业</h1>
            <ul>
                <li v-for="seller in sellers">
                    <router-link to="/Sellers/0">
                        <SellerCard :submit-resume="'/Sellers/0/'" :seller="seller"/>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import Recruit from "../Global/Recruit/Recruit.vue";
    import SellerCard from "../Sellers/SellerCard.vue";
    import {ImageContain, ImageCover} from "../Global/Image";
    import {FlexRowSpaceBetweenCenter, FlexRowSpaceBetween, FlexRowCenter} from "../Global/Layout";
    import Overlay from "../Global/Overlay.vue";

    export default {
        name: "NewsRecruit",
        components: {
            Overlay,
            FlexRowCenter,
            FlexRowSpaceBetween,
            FlexRowSpaceBetweenCenter, ImageContain, SellerCard, Recruit, BackTitleHeader, ImageCover
        },
        data: function () {
            return {
                sellers: [
                    {
                        name: "阿正",
                        head: "images/img_01@2x.png",
                        trusted: true,
                        task: "完成:12笔 剩余:15名",
                        belongTo: "成都职业技术院",
                        description: "团队介绍不拉不拉不拉不拉不拉不拉不爱了不爱来不啊不拉不拉不不拉不啦不拉不拉...",
                        location: "四川省-成都市-高新区",
                        viewCount: "浏览量:1233"
                    },
                    {
                        name: "阿正",
                        head: "images/img_01@2x.png",
                        trusted: true,
                        task: "完成:12笔 剩余:15名",
                        belongTo: "成都职业技术院",
                        description: "团队介绍不拉不拉不拉不拉不拉不拉不爱了不爱来不啊不拉不拉不不拉不啦不拉不拉...",
                        location: "四川省-成都市-高新区",
                        viewCount: "浏览量:1233"
                    },
                    {
                        name: "阿正",
                        head: "images/img_01@2x.png",
                        trusted: true,
                        task: "完成:12笔 剩余:15名",
                        belongTo: "成都职业技术院",
                        description: "团队介绍不拉不拉不拉不拉不拉不拉不爱了不爱来不啊不拉不拉不不拉不啦不拉不拉...",
                        location: "四川省-成都市-高新区",
                        viewCount: "浏览量:1233"
                    },
                    {
                        name: "阿正",
                        head: "images/img_01@2x.png",
                        trusted: true,
                        task: "完成:12笔 剩余:15名",
                        belongTo: "成都职业技术院",
                        description: "团队介绍不拉不拉不拉不拉不拉不拉不爱了不爱来不啊不拉不拉不不拉不啦不拉不拉...",
                        location: "四川省-成都市-高新区",
                        viewCount: "浏览量:1233"
                    },
                ],
                redBags: [],
                redBagsAll: [
                    {name: "红茶", money: "0.78元",},
                    {name: "红茶", money: "0.78元",},
                    {name: "红茶", money: "0.78元",},
                    {name: "红茶", money: "0.78元",},
                    {name: "红茶", money: "0.78元",},
                    {name: "红茶", money: "0.78元",},
                ],
                isShareOpen: false
            }
        },
        methods: {
            showMore() {
                if (this.redBagsAll.length === 0) return;
                for (let i = 0; i < 3; i++) {
                    let t = this.redBagsAll.shift();
                    if (t) {
                        this.redBags.push(t);
                    }
                }
            },
            share() {
                this.isShareOpen = true;
                this.$refs.share.$el.parentNode.style.zIndex = '20';
            }
        },
        mounted: function () {
            this.showMore();
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.NewsRecruit {
        padding-top: unit(@header-height / @base-font, rem);
        background-color: #f8f8f8;

        div.Header {
            div.HeaderRight {
                div.ImageContain {
                    width: 100%;
                    height: 100%;
                }
            }

            div.Overlay {
                div.NewsRecruitShareGuide {
                    position: absolute;
                    top: unit((@header-height+ 20px ) / @base-font, rem);
                    right: unit(@layout-padding / @base-font, rem);

                    div.ImageContain {
                        width: unit(245px / @base-font, rem);
                        height: unit(233px  / @base-font, rem);
                    }

                    p {
                        font-size: unit(28px / @base-font, rem);
                        color: white;
                        position: absolute;
                        top: 100%;
                        left: unit(-100px / @base-font, rem);
                    }
                }

            }
        }

        div.Recruit {
            padding: unit(10px / @base-font, rem) unit(@layout-padding / @base-font, rem);
            margin-bottom: unit(10px / @base-font, rem);
            background: white;
        }

        div.NewsRecruitRedBag {
            padding: unit(10px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(20px / @base-font, rem);
            background-color: white;
            margin-bottom: unit(10px / @base-font, rem);

            div.ImageContain {
                height: unit(147px / @base-font, rem);
                width: 100%;
            }

            h2 {
                font-size: unit(30px / @base-font, rem);
                margin: unit(25px / @base-font, rem) 0;
                text-align: center;
                white-space: pre-wrap;
            }
            ul {
                padding: 0 unit(40px / @base-font, rem);
                li {
                    padding: unit(20px / @base-font, rem) 0;
                    border-bottom: 1px #bbbbbb solid;
                    div.ImageCover {
                        width: unit(70px / @base-font, rem);
                        height: unit(70px / @base-font, rem);
                        border-radius: 50%;
                    }
                    h3 {
                        font-size: unit(26px / @base-font, rem);
                        margin: 0 unit(30px / @base-font, rem);
                        font-weight: normal;
                    }
                }
            }

            div.FlexRowCenter {
                margin-top: unit(30px / @base-font, rem);
                div.ImageContain {
                    width: unit(45px / @base-font, rem);
                    height: unit(45px / @base-font, rem);
                }
            }
        }

        div.NewsRecruitRecommend {
            > h1 {
                padding: unit(40px / @base-font, rem) unit(@layout-padding / @base-font, rem) 0;
                font-size: unit(30px / @base-font, rem);
                background-color: white;
            }
            ul {
                li {
                    padding: unit(38px / @base-font, rem) unit(@layout-padding / @base-font, rem);
                    background-color: white;
                    margin-bottom: unit(10px / @base-font, rem);
                }
            }

        }
    }
</style>
