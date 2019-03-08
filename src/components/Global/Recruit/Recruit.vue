<template>
    <div class="Recruit">
        <FlexRow class="RecruitHeader">
            <div class="RecruitHeaderLeft" :style="{flex: 'none','background-image': `url('${job.headPath}')`}">
            </div>
            <FlexColumnCenter class="RecruitHeaderRight" style="flex: auto;">
                <FlexRowSpaceBetween>
                    <p>
                        {{job.nickName}}
                        <span style="background-image: url('images/04_homepage/icon_credit@3x.png')"></span>
                        <span style="background-image: url('images/04_homepage/icon_redenvelopes@3x.png')"></span>
                    </p>
                    <button class="RecruitButton" @click="submit" :class="{active:submited}">
                        {{submited?'已投递':'投递简历'}}
                    </button>
                </FlexRowSpaceBetween>
                <FlexRow>
                    <Tag :color="'#8A79FF'">环境好</Tag>
                    <Tag :color="'#FF69AB'">底薪保证</Tag>
                    <Tag :color="'#8A79FF'">日结</Tag>
                    <Tag :color="'#FF69AB'">薪资高</Tag>
                </FlexRow>
            </FlexColumnCenter>
        </FlexRow>
        <div class="RecruitTime">发布于 {{timeDescription(new Date(job.createTime))}}</div>
        <div class="RecruitLocation">区域：{{job.province}} {{job.city}} {{job.district}}</div>
        <div class="RecruitDescription">{{job.description}}</div>
        <ul class="RecruitImage">
            <li v-for="img in job.imgList">
                <div :style="{'background-image': `url('${img}')`}"></div>
            </li>
            <li style="clear: left">
                <p>浏览量<br>{{job.viewNum}}</p>
            </li>
            <li>
                <p>保障<br>{{job.safeNum}}</p>
            </li>
            <li>
                <p>投递<br>{{job.deliveryNum}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import Tag from "../Tag.vue";
    import RecruitButton from "./RecruitButton.vue";
    import {FlexRow, FlexColumnCenter, FlexRowSpaceBetween} from "../Layout";
    import TimeMixin from "../../../mixins/Time";
    import Api from "../../../utils/Api";

    export default {
        name: "Recruit",
        components: {FlexRowSpaceBetween, FlexColumnCenter, FlexRow, RecruitButton, Tag},
        mixins: [TimeMixin],
        props: {
            job: Object,
        },
        data: function () {
            return {submited: false}
        },
        methods: {
            async submit() {
                let response = await Api.Resume.submit({jobId: this.job.jobId}).response();
                if (response) {
                    this.submit = true
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.Recruit {
        margin-bottom: unit(25px / @base-font, rem);
        div.RecruitHeader {
            div.RecruitHeaderLeft {
                .background-picture-cover();
                width: unit(120px / @base-font, rem);
                height: unit(120px / @base-font, rem);
                border-radius: 50%;
                margin-right: unit(10px / @base-font, rem);
            }

            div.RecruitHeaderRight {
                color: #585858;
                font-size: unit(30px / @base-font , rem);

                div:first-child {
                    display: flex;
                    justify-content: space-between;

                    p {
                        font-size: unit(30px / @base-font, rem);
                        color: #585858;
                        span {
                            .background-picture-contain();
                            display: inline-block;
                            width: unit(27px / @base-font, rem);
                            height: unit(27px / @base-font, rem);
                            vertical-align: middle;
                        }
                    }

                    button.RecruitButton {
                        background-color: #f19149;
                        font-size: unit(24px / @base-font, rem);
                        color: white;
                        padding: 0 unit(34px / @base-font, rem);
                        border-radius: 5px;
                        width: unit(165px / @base-font, rem);
                    }
                    button.RecruitButton.active {
                        background-color: lighten(#f19149, 20%);
                    }
                }
                div:last-child {
                    margin-top: unit(10px / @base-font, rem);
                }
            }
        }

        div.RecruitTime {
            font-size: unit(24px / @base-font , rem);
            color: #808080;
            margin-top: unit(10px / @base-font , rem);
            line-height: 1.5;
        }

        div.RecruitLocation {
            font-style: unit(30px / @base-font, rem);
            color: #585858;
            margin-top: unit(10px / @base-font , rem);
            font-weight: bold;
            line-height: 1.5;
        }

        div.RecruitDescription {
            font-size: unit(24px / @base-font, rem);
            color: #585858;
            margin-top: unit(10px / @base-font , rem);
            line-height: 1.5;
        }

        ul.RecruitImage {
            .clearfix();
            margin: unit(30px / @base-font , rem) -1.5% 0 -1.5%;
            li {
                float: left;
                width: 33.33%;
                padding: 0 1.5%;
                margin-bottom: 3%;
                div {
                    .background-picture-cover();
                    width: 100%;
                    height: unit(200px / @base-font , rem);
                    border-radius: unit(10px / @base-font , rem);
                }

                p {
                    font-size: unit(24px / @base-font, rem);
                    text-align: center;
                    margin-top: unit(20px / @base-font , rem);
                    line-height: 1.4;
                }
            }
        }
    }
</style>
