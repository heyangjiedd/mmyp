<template>
    <div class="MessageInvitation">
        <BackTitleHeader>面试邀请</BackTitleHeader>
        <ImageCover image="images/seller_1.png"/>
        <SellerHost :seller="seller"/>
        <div class="MessageInvitationContent">
            <h1>招聘内容</h1>
            <div>
                成都商务KTV招聘  

                经属属性及规模：商务KTV（67810分）中高档娱乐型KTV，38个豪华包间二/三楼。
                     _______________
                        实力诚意招聘 
                        主要招聘岗位
                     _______________
                ___________________
                包房少爷/廊道服务员/包房服务员：限男性，18-25岁，200-500/房，日结，看房服务，排班制和优房制。
                ___________________
                包房DJ/包房公主/包房助理：
                500/600/800日结加酒水提成20%

                没有任何押金
                管理费抽50
                承诺没有订房任务
                没有服装费
                不做包间卫生
                上班时间：晚上6:30点到凌晨1点，具体时间视情况自由而定。

                限女性，160以上，欢迎同行跳槽，
                工作内容帮助协助各部门维护客户娱乐气氛，带动消费气氛，带动气氛。
                ___________________
                佳丽/酒水促销/：600/700/800/1000/1200日结，8分场，常规评分8分。
                限女性，158以上
            </div>
        </div>
        <div class="MessageInvitationGuarantee">
            <h1>
                美美提示：
            </h1>
            <h2>
                请先打电话与商家联系，商量好费用后再发起相应保障金
            </h2>
            <div class="MessageInvitationGuaranteeInput">
                <span>输入保障金：</span>
                <input v-model.number="deposit" v-if="leader" placeholder="员工获得"/>
                <input v-model.number="deposit" v-if="employee"/>
                <div @click="deposit = undefined">
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M120.526848 193.794048c-20.936704-20.936704-20.936704-53.63712 0-73.265152 19.63008-20.936704 52.330496-20.936704 73.265152 0l710.42048 709.111808c19.63008 20.938752 19.63008 53.635072 0 74.573824-20.938752 19.63008-53.63712 19.63008-74.573824 0L120.526848 193.794048z"></path>
                        <path d="M829.640704 120.528896c20.936704-20.936704 53.635072-20.936704 74.573824 0 19.63008 19.628032 19.63008 52.330496 0 73.265152L193.792 904.214528c-20.934656 19.63008-53.635072 19.63008-73.265152 0-20.936704-20.938752-20.936704-53.635072 0-74.573824L829.640704 120.528896z"></path>
                    </svg>
                </div>
            </div>
            <div class="MessageInvitationGuaranteeInput" v-if="leader">
                <span>输入介绍费：</span>
                <input v-model.number="referralDeposit" placeholder="领队获得"/>
                <div @click="referralDeposit = undefined">
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M120.526848 193.794048c-20.936704-20.936704-20.936704-53.63712 0-73.265152 19.63008-20.936704 52.330496-20.936704 73.265152 0l710.42048 709.111808c19.63008 20.938752 19.63008 53.635072 0 74.573824-20.938752 19.63008-53.63712 19.63008-74.573824 0L120.526848 193.794048z"></path>
                        <path d="M829.640704 120.528896c20.936704-20.936704 53.635072-20.936704 74.573824 0 19.63008 19.628032 19.63008 52.330496 0 73.265152L193.792 904.214528c-20.934656 19.63008-53.635072 19.63008-73.265152 0-20.936704-20.938752-20.936704-53.635072 0-74.573824L829.640704 120.528896z"></path>
                    </svg>
                </div>
            </div>
            <div class="MessageInvitationGuaranteeInput">
                <span>确认金额：</span>
                <p>
                    {{ (deposit?deposit:0)+ (referralDeposit?referralDeposit:0)}}元
                </p>
            </div>
            <div class="MessageInvitationGuaranteeSubmit">
                <button @click="guarantee = true" :style="{'background-color':guarantee?'#3EB43B':'#f19149'}">发起保障
                </button>
                <p>如果没有要求保障，将极大增加您的求职风险，望慎重</p>
            </div>
        </div>
        <Phone/>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import SellerHost from "../Sellers/SellerHost.vue";
    import {ImageCover} from "../Global/Image";
    import Phone from "../Global/Phone.vue";

    export default {
        name: "MessageInvitation",
        components: {Phone, ImageCover, SellerHost, BackTitleHeader},
        props: {
            employee: {type: Boolean, default: false},
            leader: {type: Boolean, default: false},
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
                deposit: undefined,
                referralDeposit: undefined,
                guarantee: false
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MessageInvitation {
        .Content();
        div.ImageCover {
            height: unit(457px / @base-font, rem);
            width: 100%;
        }

        div.MessageInvitationContent {
            background-color: white;
            padding: unit(30px / @base-font, rem) unit(@layout-padding / @base-font, rem);
            > h1 {
                font-size: unit(30px / @base-font, rem);
            }
            > div {
                white-space: pre-wrap;
            }
        }
        div.MessageInvitationGuarantee {
            padding: unit(20px / @base-font, rem) unit(@layout-padding / @base-font, rem);
            > h1 {
                font-size: unit(28px / @base-font, rem);
                color: black;
            }
            > h2 {
                font-size: unit(24px / @base-font, rem);
                color: #4E4E4E;
                font-weight: normal;
                margin: unit(35px / @base-font, rem) 0 unit(20px / @base-font, rem);
            }
            div.MessageInvitationGuaranteeInput {
                position: relative;
                > span {
                    position: absolute;
                    top: unit(18px / @base-font, rem);
                    left: unit(20px / @base-font, rem);
                    font-size: unit(24px / @base-font, rem);
                }
                > input, > p {
                    padding: unit(20px / @base-font, rem) unit(27px / @base-font, rem) unit(20px / @base-font, rem) unit(220px / @base-font, rem);
                    font-size: unit(24px / @base-font, rem);
                    width: 100%;
                    background-color: white;
                }
                > p {
                    font-size: unit(29px / @base-font, rem);
                    color: #FF0000;
                }
                > div {
                    width: unit(40px / @base-font, rem);
                    height: unit(40px / @base-font, rem);
                    padding: unit(10px / @base-font, rem);
                    position: absolute;
                    top: unit(13px / @base-font, rem);
                    right: unit(25px / @base-font, rem);
                    background-color: #8a8a8a;
                    border-radius: 50%;
                    > svg {
                        display: block;
                        width: unit(20px / @base-font, rem);
                        height: unit(20px / @base-font, rem);
                        fill: white;
                    }
                }
            }

            div.MessageInvitationGuaranteeSubmit {
                padding: 0 unit(28px / @base-font, rem);
                > button {
                    border-radius: unit(5px / @base-font, rem);
                    line-height: unit(85px / @base-font, rem);
                    font-size: unit(28px / @base-font, rem);
                    width: 100%;
                    color: white;
                    background-color: #f19149;
                    margin: unit(50px / @base-font, rem) 0;
                }
                > p {
                    font-size: unit(24px / @base-font, rem);
                    color: #FF3333;
                }
            }
        }
    }

</style>
