<template>
    <div class="IndexSwiper swiper-container">
        <ul class="swiper-wrapper">
            <li v-for="item in banners" :style="{'background-image':`url('${item.imgPath}')`}"
                class="swiper-slide"></li>
        </ul>
        <div class="swiper-pagination">
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    import "./swiper.min.css";
    import Api from "../../utils/Api";

    export default {
        name: "IndexSwiper",
        data: function () {
            return {
                banners: [],
            }
        },
        async mounted() {
            await this.query();
            new Swiper('.IndexSwiper', {
                autoplay: true,//可选选项，自动滑动
                // 分页器
                pagination: {
                    el: '.swiper-pagination',
                },
            });

        },
        methods: {
            async query() {
                let response = await Api.Index.banner({type: "top"}).response();
                if (response) {
                    console.log(response);
                    this.banners = response.data.data;
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.IndexSwiper {
        height: unit(330px / @base-font, rem);
        position: relative;

        ul {
            height: 100%;

            li {
                .background-picture-cover();
                height: 100%;
            }
        }

        div {
            position: absolute;
            bottom: unit(20px / @base-font, rem) !important;
            display: flex;
            justify-content: center;
            z-index: 5;

            span.swiper-pagination-bullet {
                margin-right: unit(20px / @base-font, rem);
                display: block;
                width: unit(15px / @base-font, rem);
                height: unit(15px / @base-font, rem);
                border-radius: 50%;
                background-color: white;
                opacity: 1;
            }

            span.swiper-pagination-bullet-active {
                width: unit(40px / @base-font, rem);
                border-radius: unit(15px / @base-font, rem);
            }
        }
    }
</style>
