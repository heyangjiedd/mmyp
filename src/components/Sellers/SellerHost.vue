<template>
    <div class="SellerHost">
        <HeadAndDescription>
            <Head :image="seller.head"/>
            <Description>
                <FlexRowSpaceBetween>
                    <h1>{{seller.name}}</h1>
                    <h2>{{seller.viewCount}}</h2>
                </FlexRowSpaceBetween>
                <h3>{{seller.id}}</h3>
                <h3>{{seller.phone}}</h3>
                <h4 style="margin-top: 0.3rem;">{{seller.location}}</h4>
                <h4>{{seller.address}}</h4>
            </Description>
        </HeadAndDescription>
        <FlexColumn class="SellerDescription">
            <FlexRowStartCenter class="SellerThumbUp">
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" @click="thumbUp"
                     :class="{'check':check}">
                    <path d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253"></path>
                    <path d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819"></path>
                </svg>
                <span>{{count}}</span>
                <div v-for="item in seller.thumbUps.from" :style="{'background-image':`url('${item.headPath}')`}"></div>
            </FlexRowStartCenter>
            <p v-show="seller.description">{{seller.description}}</p>
        </FlexColumn>
    </div>
</template>

<script>
    import HeadAndDescription from "../Global/Description/HeadAndDescription.vue";
    import Head from "../Global/Head.vue"
    import Description from "../Global/Description/Description.vue";
    import {FlexRowStartCenter, FlexRowSpaceBetween, FlexColumn} from "../Global/Layout";

    export default {
        name: "SellerHost",
        components: {FlexColumn, HeadAndDescription, Head, Description, FlexRowStartCenter, FlexRowSpaceBetween},
        data: function () {
            return {
                check: false,
                count: 0
            }
        },
        props: {
            seller: Object,

        },
        mounted() {
            this.count = seller.thumbUps.from.length;
        },
        methods: {
            thumbUp() {
                if (this.check) return;
                this.check = true;
                this.count++;
            },
        },
        watch: {
            'seller.thumbUps.from.length': function (newVal) {
                this.count = newVal;

            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.SellerHost {
        padding: unit(40px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(90px / @base-font, rem);
        margin-bottom: unit(35px / @base-font, rem);
        background-color: #FFF;
        position: relative;

        div.Head {
            margin-right: unit(18px / @base-font, rem);
        }

        div.Description {
            h1 {
                font-size: unit(30px / @base-font, rem);
            }
            h2, h3 {
                color: #848484;
                font-size: unit(24px / @base-font, rem);
            }
            h3 {
                line-height: 1.7;
            }
            h4 {
                font-size: unit(24px / @base-font, rem);
            }
        }

        div.SellerDescription {
            position: absolute;
            top: unit(240px / @base-font, rem);
            box-shadow: 0px -3px 7px 0px rgba(0, 0, 0, 0.1);
            background-color: white;
            margin-top: unit(20px / @base-font, rem);
            width: unit(650px / @base-font, rem);

            div.SellerThumbUp {
                padding: 0 unit(15px / @base-font, rem);
                height: unit(80px / @base-font, rem);
                div {
                    .background-picture-cover();
                    display: inline-block;
                    width: unit(50px / @base-font, rem);
                    height: unit(50px / @base-font, rem);
                    vertical-align: bottom;
                    margin-left: unit(20px / @base-font, rem);
                    border-radius: 50%;
                }
                svg {
                    display: inline-block;
                    width: unit(40px / @base-font, rem);
                    height: unit(40px / @base-font, rem);
                    fill: #a7a3a1;
                    vertical-align: bottom;
                    margin-right: unit(13px / @base-font, rem);

                }
                svg.check {
                    fill: #e78d4a;
                }
                span {
                    line-height: 1.7;
                    font-size: unit(24px / @base-font, rem);
                }
            }
            > P {
                font-size: unit(24px / @base-font, rem);
                padding: unit(16px / @base-font, rem) unit(90px / @base-font, rem);
                line-height: 1.7;
                box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.1);
            }
        }

    }
</style>
