<template>
    <div class="PublishView">
        <BackTitleHeader>已发布</BackTitleHeader>
        <ul>
            <li v-for="(publish,index) in publishs">
                <div class="PublishViewInfo">
                    <FlexRowSpaceBetween>
                        <FlexRowStartEnd class="PublishViewInfoHead">
                            <Head :image="publish.headPath"/>
                            <div class="PublishViewInfoHeadMore">
                                <h1>{{publish.nickName}}</h1>
                                <h2>通过</h2>
                            </div>
                        </FlexRowStartEnd>
                        <FlexColumnCenter v-if="publish.type === 'RED_RESUME'">
                            <FlexRowStartCenter class="PublishViewInfoRedbag">
                                <ImageContain image="images/redbag2.png"/>
                                <h1>红包<br>{{publish.redRemainNum}}</h1>
                            </FlexRowStartCenter>
                        </FlexColumnCenter>
                    </FlexRowSpaceBetween>
                    <h1>发布于 {{publish.time}}</h1>
                    <h2>区域：{{publish.province}}-{{publish.city}}-{{publish.district}}</h2>
                    <h3>{{publish.description}}</h3>
                    <FlexRowSpaceAround>
                        <h1>浏览量 <br>{{publish.viewNum}}</h1>
                        <h1>保障 <br>{{publish.safeNum}}</h1>
                        <h1>投递<br>{{publish.deliveryNum}}</h1>
                    </FlexRowSpaceAround>
                </div>
                <div class="PublishViewTop">
                    <FlexRowSpaceBetweenCenter>
                        <h1>使用28积分免费置顶</h1>
                        <SingleSelect v-model="publish.isPoints"/>
                    </FlexRowSpaceBetweenCenter>
                    <FlexRowSpaceBetweenCenter>
                        <h1>5元置顶/次</h1>
                        <button @click="top(index)">顶一次</button>
                    </FlexRowSpaceBetweenCenter>
                </div>
                <div class="PublishViewDelete">
                    <button @click="wantDrop(index)">删除</button>
                </div>
            </li>
        </ul>
        <Alert :show="showDeleteAlert" title="确认删除该发布信息？" @close="showDeleteAlert = false" @confirm="drop"/>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import {
        FlexRowSpaceBetween,
        FlexRowStartEnd,
        FlexColumnCenter,
        FlexRowStartCenter,
        FlexRowSpaceAround,
        FlexRowSpaceBetweenCenter
    } from "../Global/Layout/";
    import Head from "../Global/Head.vue"
    import {ImageContain} from "../Global/Image";
    import SingleSelect from "../Global/SingleSelect.vue";
    import Alert from "../Global/Alert.vue";
    import Api from "../../utils/Api";
    import TimeMixin from "../../mixins/Time";

    export default {
        name: "PublishView",
        components: {
            SingleSelect,
            FlexRowSpaceAround, FlexRowSpaceBetweenCenter, Alert,
            ImageContain,
            FlexColumnCenter, FlexRowStartEnd, FlexRowSpaceBetween, BackTitleHeader, Head, FlexRowStartCenter
        },
        mixins: [TimeMixin],
        data: function () {
            return {
                publishs: [
                    // "jobId": 212,
                    // "nickName": "二牛",
                    // "headPath": "http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM6pVwruyJ1kTU68CredHDUKtHeK1BtpBibIkEjzvjRXvu012mDqiaUBSeWDaYkVA17rUAE6SlkqhSN6nV9y9EG3zG95CRxCbYYZY/132",
                    // "status": "NORMAL",
                    // "type": "RED_RESUME",
                    // "createTime": 1548598365000,
                    // "province": "四川",
                    // "city": "成都",
                    // "district": "武侯区",
                    // "viewNum": 0,
                    // "safeNum": 0,
                    // "deliveryNum": 0,
                    // "description": "678",
                    // "redRemainNum": 10
                ],
                exchangeTop: false,
                showDeleteAlert: false,
                toBeDrop: null
            }
        },
        methods: {
            setPublish(response) {
                if (response) {
                    let list = response.data.data.list;
                    list.forEach(v => {
                        v.time = this.timeDescription(new Date(v.createTime));
                        v.isPoints = false;
                    });
                    this.publishs = this.publishs.concat(list);
                }
            },
            wantDrop(index) {
                this.toBeDrop = index;
                this.showDeleteAlert = true
            },
            drop() {
                Api.Publish.delete({id: this.publishs[this.toBeDrop].jobId});
                this.publishs.splice(this.toBeDrop, 1);
                this.showDeleteAlert = false;

            },
            async top(index) {
                let p = this.publishs[index];
                let response = Api.Publish.top({
                    id: p.jobId,
                    isPoints: p.isPoints ? 'YES' : 'NO',
                    payType: 'WECHAT'
                }).response();
                if (response) {
                    alert('顶置成功');
                }
            }
        },
        async beforeRouteEnter(to, from, next) {
            let response = await Api.Publish.query().response();
            next(vm => {
                vm.setPublish(response);
            })
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.PublishView {
        .Content();
        > ul {
            > li {
                div.PublishViewInfo {
                    background-color: white;
                    padding: unit(40px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(50px / @base-font, rem);

                    div.PublishViewInfoHeadMore {
                        margin-left: unit(10px / @base-font, rem);
                        > h1 {
                            font-size: unit(30px / @base-font, rem);
                            color: #585858;
                            margin-bottom: unit(15px / @base-font, rem);
                        }
                        > h2 {
                            background-color: #3EB43B;
                            border-radius: 3px;
                            font-size: unit(24px / @base-font, rem);
                            padding: unit(8px / @base-font, rem) unit(20px / @base-font, rem);
                            color: white;
                            text-align: center;
                        }
                    }
                    div.PublishViewInfoRedbag {
                        > div.ImageContain {
                            width: unit(45px / @base-font, rem);
                            height: unit(45px / @base-font, rem);
                        }
                        > h1 {
                            font-size: unit(30px / @base-font, rem);
                            color: #585858;
                            line-height: 1.5;
                            margin-left: unit(16px / @base-font, rem);
                            text-align: center;
                        }
                    }
                    > h1 {
                        color: #808080;
                        font-size: unit(24px / @base-font, rem);
                        margin: unit(20px / @base-font, rem) 0;
                        font-weight: normal;
                    }
                    > h2 {
                        color: #585858;
                        font-size: unit(30px / @base-font, rem);
                        margin: unit(20px / @base-font, rem) 0;
                    }
                    > h3 {
                        color: #585858;
                        font-size: unit(24px / @base-font, rem);
                        margin: unit(20px / @base-font, rem) 0;
                        font-weight: normal;
                    }
                    > div.FlexRowSpaceAround {
                        padding: unit(40px / @base-font, rem);
                        > h1 {
                            font-size: unit(24px / @base-font, rem);
                            color: #585858;
                            text-align: center;
                            line-height: 1.5;
                            font-weight: normal;
                        }

                    }
                }

                div.PublishViewTop {
                    > div.FlexRowSpaceBetweenCenter {
                        padding: 0 unit(@layout-padding / @base-font, rem);
                        height: unit(90px / @base-font, rem);
                        margin-top: unit(10px / @base-font, rem);
                        background-color: white;
                        > h1 {
                            color: #999999;
                            font-size: unit(24px / @base-font, rem);
                        }
                        > button {
                            padding: unit(8px / @base-font, rem) unit(45px / @base-font, rem);
                            font-size: unit(24px / @base-font, rem);
                            color: white;
                            background-color: #F19149;
                            border-radius: 5px;
                        }
                    }
                }

                div.PublishViewDelete {
                    padding: unit(35px / @base-font, rem) unit(@layout-padding / @base-font, rem);
                    > button {
                        background-color: #E61919;
                        color: white;
                        font-size: unit(26px / @base-font, rem);
                        border-radius: 5px;
                        width: 100%;
                        padding: unit(20px / @base-font, rem);
                    }

                }
            }
        }
    }
</style>
