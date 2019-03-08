<template>
    <div class="Resume">
        <BackTitleHeader>查看简历</BackTitleHeader>
        <FlexColumn class="ResumePrimary">
            <FlexRow>
                <Head :image="resume.headPath" style="flex: none;"/>
                <FlexColumn class="ResumePrimaryRight" style="flex: auto;">
                    <FlexRowStartCenter>
                        <h1>欢欢</h1>
                        <ImageContain
                                :image="resume.sex==='男'?'images/icon_sex_male.png':'images/icon_sex_female.png'"/>
                    </FlexRowStartCenter>
                    <h2>ID：{{resume.id}}</h2>
                    <FlexRow class="ResumeTag">
                        <Tag v-for="tag in resume.tags" :key="tag.id" :color="tag.color">{{tag.name}}</Tag>
                    </FlexRow>
                </FlexColumn>
            </FlexRow>
            <FlexRowSpaceBetween class="ResumePoint">
                <FlexRowStartCenter>
                    <i style="background-image: url('images/icon_location@3x.png')"></i>
                    <h3>{{resume.city}}</h3>
                </FlexRowStartCenter>
                <FlexRowStartCenter>
                    <i style="background-image: url('images/icon_age@3x.png')"></i>
                    <h3>{{resume.age}}岁</h3>
                </FlexRowStartCenter>
                <FlexRowStartCenter>
                    <i style="background-image: url('images/icon_height@3x.png')"></i>
                    <h3>{{resume.height}}cm</h3>
                </FlexRowStartCenter>
                <FlexRowStartCenter>
                    <i style="background-image: url('images/icon_weight@3x.png')"></i>
                    <h3>{{resume.weight}}kg</h3>
                </FlexRowStartCenter>
            </FlexRowSpaceBetween>
        </FlexColumn>
        <RelativeDescription>{{resume.description?resume.description:'暂时没有简介哦！'}}</RelativeDescription>
        <div class="ResumeImage">
            <ul>
                <li v-for="image in resume.imgList">
                    <div :style="{'background-image':`url('${image}')`}"></div>
                </li>
            </ul>
        </div>

        <div class="ResumeOperation">
            <button @click="invite" :class="{'invited':invited}">{{this.invited?"发送成功":"面试邀请"}}</button>
            <router-link v-if="guarantee" :to="guarantee">给Ta保障</router-link>
        </div>
        <PopupMessage v-model="popupMessage" v-show="popupMessage">
            {{popupMessage}}
        </PopupMessage>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import Head from "../Global/Head.vue";
    import Tag from "../Global/Tag.vue";
    import RelativeDescription from "../Global/Description/RelativeDescription.vue";
    import PopupMessage from "../Global/PopupMessage.vue";
    import {FlexRowSpaceBetween, FlexRow, FlexColumn, FlexRowStartCenter} from "../Global/Layout";
    import {ImageContain} from "../Global/Image";
    import Api from "../../utils/Api";

    export default {
        name: "Resume",
        components: {
            ImageContain,
            FlexRowStartCenter,
            FlexRow,
            FlexColumn,
            FlexRowSpaceBetween,
            PopupMessage,
            RelativeDescription,
            Tag,
            Head,
            BackTitleHeader
        },
        props: {
            guarantee: String
        },
        data: function () {
            return {
                popupMessage: '',
                invited: false,
                resume: {
                    imgList: ['images/img_11@2x.png'],
                    tags: []
                }
            }
        },
        methods: {
            showPopupMessage(message) {
                this.popupMessage = message;
            },
            closePopupMessage() {
                this.popupMessage = '';
            },
            invite() {
                if (this.invited) return;
                this.showPopupMessage('面试邀请发送成功！' + '您已使用5积分对该简历发送面试邀请');
                this.invited = true;
            },
            setResume(response) {
                if (response) {
                    let data = response.data.data;
                    this.resume.imgList = this.resume.imgList.concat(data.imgList);
                    delete data.imgList;
                    data.age = new Date().getFullYear() - parseInt(data.birthYear);
                    data.tags = Api.Tag.getColorTag(data.tags);
                    Object.assign(this.resume, data);
                }
            }
        },
        async beforeRouteEnter(to, from, next) {
            let id = to.params.id;
            let response = await Api.Resume.getById(id).response();
            next(vm => vm.setResume(response));
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Resume {
        .Content();

        div.ResumePrimary {
            padding: unit(40px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(75px / @base-font, rem);
            color: white;

            div.Head {
                margin-right: unit(20px / @base-font, rem);
            }
            div.ResumePrimaryRight {
                > div {
                    div.ImageContain {
                        width: unit(25px / @base-font, rem);
                        height: unit(25px / @base-font, rem);
                        margin-left: unit(15px / @base-font, rem);
                    }
                }
                h1 {
                    font-size: unit(30px / @base-font, rem);
                    margin-bottom: unit(10px / @base-font, rem);
                    color: black;
                }
                h2 {
                    font-size: unit(26px / @base-font, rem);
                    margin-bottom: unit(14px / @base-font, rem);
                    color: #868686;
                }
                div.ResumeTag {
                    flex-wrap: wrap;
                    span.Tag {
                        margin-bottom: unit(20px / @base-font, rem);
                    }
                }
            }

            div.ResumePoint {
                margin-top: unit(5px / @base-font, rem);

                i {
                    .background-picture-contain();
                    margin-right: unit(10px / @base-font, rem);
                    display: inline-block;
                    width: unit(25px / @base-font, rem);
                    height: unit(25px / @base-font, rem);
                    vertical-align: bottom;
                }
                h3 {
                    font-size: unit(24px  / @base-font, rem);
                    color: black;

                }
            }
        }

        div.RelativeDescription {
            font-size: unit(28px / @base-font, rem);
            padding: unit(37px / @base-font, rem);
            text-align: center;
            top: unit(-30px / @base-font, rem)
        }

        div.ResumeImage {
            padding: unit(30px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(60px / @base-font, rem);
            background-color: white;

            ul {
                margin: 0 -2%;
                .clearfix();
                li {
                    float: left;
                    display: block;
                    width: 33.33%;
                    padding: 0 2%;
                    height: unit(200px / @base-font, rem);
                    margin-bottom: unit(17px / @base-font, rem);
                    > div {
                        .background-picture-cover();
                        height: 100%;
                        border-radius: unit(15px / @base-font, rem);
                    }
                }
            }
        }

        div.ResumeOperation {
            text-align: center;
            button, a {
                display: inline-block;
                padding: unit(20px / @base-font, rem) unit(70px  / @base-font, rem);
                font-size: unit(30px / @base-font, rem);
                background-color: #f19149;
                color: white;
                font-weight: bold;
                border-radius: unit(10px / @base-font, rem);
                position: relative;
                top: unit(-40px  / @base-font, rem);
                margin-right: unit(30px / @base-font, rem);
            }
            a {
                background-color: #de2626;
            }
            button.invited {
                background-color: #3EB43B;
            }
        }
    }

</style>
