<template>
    <HeadAndDescription class="SellerCard">
        <Head :image="seller.head"/>
        <Description>
            <FlexRowSpaceBetween>
                <h1>
                    {{seller.name}}
                    <SingleWordTag :color="'#3EB43B'" v-show="seller.trusted">信</SingleWordTag>
                </h1>
                <RecruitButton v-if="submitResume" :to="submitResume">投递简历</RecruitButton>
            </FlexRowSpaceBetween>
            <h2>{{seller.belongTo}}</h2>
            <h3>{{seller.description}}</h3>
            <FlexRowEnd>
                <h5>{{seller.viewCount}}</h5>
            </FlexRowEnd>
            <FlexRowSpaceBetween>
                <h4 v-html="seller.location"></h4>
                <h4>{{seller.task}}</h4>
            </FlexRowSpaceBetween>
        </Description>
    </HeadAndDescription>
</template>

<script>
    import HeadAndDescription from "../Global/Description/HeadAndDescription.vue";
    import Head from "../Global/Head.vue"
    import Description from "../Global/Description/Description.vue";
    import {FlexRowSpaceBetween, FlexRowEnd} from "../Global/Layout";
    import SingleWordTag from "../Global/SingleWordTag.vue";
    import RecruitButton from "../Global/Recruit/RecruitButton.vue";

    export default {
        name: "SellerCard",
        components: {
            HeadAndDescription,
            Head,
            Description,
            FlexRowSpaceBetween,
            FlexRowEnd,
            SingleWordTag,
            RecruitButton
        },
        props: {
            submitResume: {type: String, default: ""},
            seller: Object,
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.SellerCard {

        div.Head {
            margin-right: unit(18px / @base-font, rem);
        }

        div.Description {
            h1 {
                font-size: unit(30px / @base-font, rem);
                display: flex;
                align-items: center;
                padding-bottom: unit(10px / @base-font, rem);
            }
            h2 {
                font-size: unit(26px / @base-font, rem);
                padding-bottom: unit(10px / @base-font, rem);
            }
            h3 {
                font-size: unit(24px / @base-font, rem);
                margin-bottom: unit(25px / @base-font, rem);
                height: unit(93px / @base-font, rem);
                font-weight: normal;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
            h4 {
                font-size: unit(24px / @base-font, rem);
                color: #999999;
                font-weight: normal;
            }
            h5 {
                font-size: unit(24px / @base-font, rem);
                color: #8F8F8F;
                font-weight: normal;
                margin-bottom: unit(10px / @base-font, rem);
            }
        }
    }
</style>
