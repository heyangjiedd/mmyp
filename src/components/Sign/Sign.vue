<template>
    <div class="Sign">
        <BackTitleHeader>签到</BackTitleHeader>
        <FlexRow class="SignInfo">
            <div class="SignInfoLeft">
                <FlexRow>
                    <Head :image="'images/img_19@2x.png'"/>
                    <FlexColumnSpaceBetween style="flex:auto">
                        <h1 style="font-size: 1.2857rem">红茶</h1>
                        <p style="color: #828282;font-size: 0.857rem">ID:25648856</p>
                    </FlexColumnSpaceBetween>
                </FlexRow>
                <div style="margin-top: 1.25rem">
                    <FlexRowSpaceBetween style="font-size: 0.857rem">
                        <span>今日签到人数：<b>{{info.todaySignNum}}</b></span><span>当前积分：<b>{{info.currentPoints}}</b></span>
                    </FlexRowSpaceBetween>
                    <SignBar :days="info.continueDays"/>
                </div>
            </div>
            <div class="SignInfoRight" style="flex:none;">
                <div @click="sign">
                    <div>
                        <div>签到</div>
                    </div>
                </div>
                <p>连续签到：<b>{{info.continueDays}}天</b></p>
            </div>
        </FlexRow>
        <ul class="SignCorporateService">
            <li>
                <h1>积分福利</h1>
                <p>
                    <span style="line-height: 2;">置顶一次（28积分/次） </span><br>
                    <span style="line-height: 2;">发布招聘一次（21积分/次） </span><br>
                    <span style="line-height: 2;">面试邀请一次（5积分/次） </span><br>
                    <span style="line-height: 2;">免管理费一次（350积分/次）</span><br>
                    <span style="line-height: 2;font-size: 0.857rem;color: #484848">（更多积分使用福利，正在准备中...）</span><br>
                </p>
            </li>
            <li>
                <h1>合作服务</h1>
                <p>
                    <router-link :to="'/Sign/Service/0'"><img src="images/sign_1.png"/></router-link>
                </p>
                <p align="right" style="line-height: 2;font-size: 0.857rem;margin:0.75rem 0">西禅整形美容医院</p>
                <p>
                    <router-link :to="'/Sign/Service/0'"><img src="images/sign_1.png"/></router-link>
                </p>
                <p align="right" style="line-height: 2;font-size: 0.857rem;margin:0.75rem 0">西禅整形美容医院</p>
            </li>
        </ul>
        <Overlay v-model="show">
            <div class="SignSuccessful" @click="close">
                <div style="background-image: url('images/sign_successful.png')"></div>
                <div>
                    <p style="line-height: 2.5" v-html="message"></p>
                </div>
            </div>
        </Overlay>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import {FlexRowSpaceBetween, FlexColumnSpaceBetween, FlexRow} from "../Global/Layout";
    import Head from "../Global/Head.vue";
    import SignBar from "../Sign/SignBar.vue";
    import Overlay from "../Global/Overlay.vue";
    import Api from "../../utils/Api";


    export default {
        name: "Sign",
        components: {Overlay, BackTitleHeader, FlexRowSpaceBetween, FlexColumnSpaceBetween, FlexRow, Head, SignBar},
        watch: {},
        data: function () {
            return {
                signed: false,
                show: false,
                info: {
                    todaySignNum: null,
                    isSign: null,
                    currentPoints: null,
                    continueDays: null,
                },
                message: ""
            }
        },
        mounted() {
        },
        methods: {
            setSign(response) {
                if (response) {
                    Object.assign(this.info, response.data.data);
                }
            },
            async sign() {
                if (this.info.isSign === 'NO') {
                    let response = await Api.Sign.sign().promise;
                    if (response.data.code === 200) {
                        this.message = "恭喜您今日签到成功！<br>获得2分积分";
                        this.setSign(await Api.Sign.query().response());
                    }
                } else {
                    this.message = "已经签到过了！";
                }
                this.info.isSign = 'YES';
                this.show = true;
            },
            close() {
                this.show = false;
            }
        },
        async beforeRouteEnter(to, from, next) {
            let r1 = await Api.Sign.query().response();
            next(vm => {
                vm.setSign(r1);
            })
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Sign {
        padding-top: unit(@header-height / @base-font, rem);
        background-color: #F8F8F8;
        min-height: 100vh;

        div.SignInfo {
            padding: unit(35px / @base-font, rem) unit(@layout-padding / @base-font , rem);
            margin-bottom: unit(22px / @base-font, rem);
            display: flex;
            background-color: white;
            box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.1);

            div.SignInfoLeft {
                flex: auto;
                margin-right: unit(65px / @base-font, rem);

                div.Head {
                    width: unit(100px / @base-font , rem);
                    height: unit(100px / @base-font , rem);
                    margin-right: unit(30px / @base-font, rem);
                    border-radius: 50%;
                    flex: none;
                }

            }

            div.SignInfoRight {
                > div {
                    width: unit(130px / @base-font, rem);
                    height: unit(130px / @base-font, rem);
                    padding: unit(8px / @base-font, rem);
                    border-radius: 50%;
                    background-color: #f7f7f5;

                    > div {
                        width: 100%;
                        height: 100%;
                        padding: unit(13px / @base-font, rem);
                        border-radius: 50%;
                        background-color: #f19149;
                        display: table;
                        > div {
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            background-color: white;
                            font-size: unit(24px / @base-font, rem);
                            display: table-cell;
                            vertical-align: middle;
                            text-align: center;
                            color: #F19149;
                        }
                    }
                }
                > p {
                    margin-top: unit(23px / @base-font, rem);
                    font-size: unit(24px / @base-font, rem);
                    color: #484848;
                    text-align: center;
                }
            }
        }

        ul.SignCorporateService {
            li {
                padding: unit(10px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(30px / @base-font, rem);
                margin-bottom: unit(10px / @base-font, rem);
                background-color: white;

                h1 {
                    font-size: unit(30px / @base-font, rem);
                    margin-bottom: unit(20px / @base-font, rem);
                }
                p {
                    font-size: unit(26px / @base-font, rem);
                    img {
                        width: 100%;
                    }
                }
            }
        }

        div.SignSuccessful {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            width: unit(600px / @base-font, rem);

            div:first-child {
                .background-picture-contain();
                width: unit(600px / @base-font, rem);
                height: unit(240px / @base-font, rem);
                position: relative;
                top: unit(20px / @base-font, rem);
            }
            div:last-child {
                margin: 0 auto;
                width: unit(420px / @base-font, rem);
                height: unit(235px / @base-font, rem);
                background-color: white;
                border-bottom-left-radius: unit(30px / @base-font, rem);
                border-bottom-right-radius: unit(30px / @base-font, rem);
                font-size: unit(29px / @base-font, rem);
                padding: unit(50px / @base-font, rem) unit(20px / @base-font, rem) unit(20px / @base-font, rem);
                color: #685FA1;
                text-align: center;
            }
        }
    }
</style>
