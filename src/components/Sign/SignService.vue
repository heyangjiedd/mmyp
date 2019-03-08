<template>
    <div class="SignService">
        <BackTitleHeader>详情</BackTitleHeader>
        <ImageCover :image="'images/sign_1.png'"/>
        <SellerHost :seller="seller"/>
        <div class="SignServiceDescription">
            <div class="SignServiceContent">
                <h1>服务介绍</h1>
                <div><p>服务介绍</p></div>
                <div><p>服务介绍</p></div>
                <div><p>服务介绍</p></div>
                <div><p>服务介绍</p></div>
                <div><p>服务介绍</p></div>
            </div>
            <SellerGallery :gallery="gallery"/>
        </div>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import {ImageCover} from "../Global/Image";
    import SellerHost from "../Sellers/SellerHost.vue";
    import SellerGallery from "../Sellers/SellerGallery.vue";

    export default {
        name: "SignService",
        components: {SellerGallery, SellerHost, ImageCover, BackTitleHeader},
        data: function () {
            return {
                seller: {
                    name: "阿正",
                    head: "images/img_01@2x.png",
                    trusted: true,
                    task: "完成:12笔 剩余:15名",
                    belongTo: "成都职业技术院",
                    description: "聚集万千美美！需要的找我，需要工作的美美也找我！",
                    location: "四川省-成都市-高新区",
                    address: "益州大道南段盛兴路156号",
                    viewCount: "浏览量:1233",
                    phone: "电话：18443847851",
                    id: "ID：3255565",
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
                gallery: ['images/signService_2.png', 'images/signService_2.png', 'images/signService_2.png', 'images/signService_2.png']

            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.SignService {
        padding-top: unit(@header-height / @base-font, rem);
        background-color: #F8F8F8;
        min-height: 100vh;

        > div.ImageCover {
            height: unit(300px / @base-font, rem);
            width: 100%;
        }

        div.SignServiceDescription {
            padding: unit(120px  / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(40px  / @base-font, rem);
            background-color: white;

            div.SignServiceContent {
                margin-bottom: unit(20px / @base-font, rem);
                > h1 {
                    font-size: unit(30px / @base-font, rem);
                    margin-bottom: unit(30px / @base-font, rem);
                }
            }
        }
    }
</style>
