<template>
    <div class="PublishSubmit">
        <BackTitleHeader>招聘信息</BackTitleHeader>
        <div class="PublishSubmitInfo">
            <h1>企业：键盘酒吧</h1>
            <h1>招聘信息</h1>
            <FormTextArea :required='false' placeholder="禁止涉黄、卖淫、吸毒、传销等任何违法信息需经过审核完成后，发布到首页。"
                          v-model="description"/>
            <h1>标签</h1>
            <FlexRowStartCenter>
                <Tag v-for="tag in tags.choices" color="#7C7C7C" @click.native="selectTag(tag)" :key="tag.id">
                    {{tag.name}}
                </Tag>
            </FlexRowStartCenter>
            <h1>已选</h1>
            <FlexRowStartCenter>
                <Tag v-for="(tag,index) in tags.selected" :color="getTagColorByIndex(index)"
                     @click.native="deleteTag(index)"
                     :key="tag.id">
                    {{tag.name}}
                </Tag>
            </FlexRowStartCenter>
            <FlexRowCenter>
                <input v-model="tags.tobeAdd"/>
                <button @click="addTag">添加</button>
            </FlexRowCenter>
        </div>
        <NavSwitch :list="list" ref="nav">
            <template :slot="list[0]">
                <div class="PublishSubmitRedbag">
                    <FlexRowSpaceBetweenCenter class="PublishSubmitRedbagSum">
                        <FlexRowStartCenter>
                            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M983.696 422.704A480 480 0 1 0 40.72 602.72a469.456 469.456 0 0 0 69.44 172.688 36.4 36.4 0 1 0 60.672-40.24 408.16 408.16 0 0 1 3.664-452.224 400.832 400.832 0 0 1 260.24-171.2 407.136 407.136 0 1 1-112.576 760.288 36.8 36.8 0 0 0-34.352 65.12 477.024 477.024 0 0 0 223.68 54.88 467.984 467.984 0 0 0 89.92-8.784A481.424 481.424 0 0 0 983.712 422.72z"></path>
                                <path d="M471.712 579.84h-130.768a36.944 36.944 0 0 0 0 73.888h130.768v116.8a36.944 36.944 0 1 0 73.888 0v-116.8h130.768a36.944 36.944 0 1 0 0-73.888H545.6v-71.664a22.784 22.784 0 0 0-0.736-7.392h131.504a36.944 36.944 0 1 0 0-73.888H341.68a36.944 36.944 0 1 0 0 73.888h131.504a25.152 25.152 0 0 0-0.736 7.392v71.664z"></path>
                                <path d="M405.968 383.312a37.104 37.104 0 0 0 52.464-52.464l-79.792-79.792a37.104 37.104 0 1 0-52.464 52.464z"></path>
                                <path d="M602.48 383.312l79.792-79.792a37.088 37.088 0 1 0-52.448-52.464l-79.792 79.792a36.576 36.576 0 0 0 0 52.464 37.936 37.936 0 0 0 52.448 0z"></path>
                            </svg>
                            <h1>总金额</h1>
                            <h2>（单个红包不低5角）</h2>
                        </FlexRowStartCenter>
                        <FlexRowStartCenter class="PublishSubmitRedbagInput">
                            <input v-model="redbag.redAmount"/>元
                        </FlexRowStartCenter>
                    </FlexRowSpaceBetweenCenter>

                    <p>发红包收取红包金额30%作为维护费</p>

                    <FlexRowSpaceBetweenCenter class="PublishSubmitRedbagNum">
                        <h1>红包个数</h1>
                        <FlexRowStartCenter class="PublishSubmitRedbagInput">
                            <input v-model="redbag.redNum"/>个
                        </FlexRowStartCenter>
                    </FlexRowSpaceBetweenCenter>

                    <div class="PublishSubmitRedbagMode">
                        <FlexRowSpaceBetween>
                            <FlexRowStartCenter @click.native="(redbag.mode.luck = true)&& (redbag.mode.split = false)"
                                                :class="{active:redbag.mode.luck}">
                                拼手气
                                <SingleSelect :value="redbag.mode.luck"/>
                            </FlexRowStartCenter>
                            <FlexRowStartCenter @click.native="(redbag.mode.luck = false)|| (redbag.mode.split = true)"
                                                :class="{active:redbag.mode.split}">
                                平分
                                <SingleSelect :value="redbag.mode.split"/>
                            </FlexRowStartCenter>
                        </FlexRowSpaceBetween>
                        <p>使用红包让朋友分享到各自朋友圈快速传播</p>
                    </div>

                    <div class="PublishSubmitNormal">
                        <FlexRowSpaceBetweenCenter>
                            <p>使用28积分免费发布（不含红包）</p>
                            <SingleSelect v-model="submit.normal"/>
                        </FlexRowSpaceBetweenCenter>
                        <div class="PublishSubmitButton">
                            <button @click="save">发布（3元/条）</button>
                        </div>
                    </div>
                </div>
            </template>
            <template :slot="list[1]">
                <div class="PublishSubmitNormal">
                    <FlexRowSpaceBetweenCenter>
                        <p>使用28积分免费发布（不含红包）</p>
                        <SingleSelect v-model="submit.normal"/>
                    </FlexRowSpaceBetweenCenter>
                    <div class="PublishSubmitButton">
                        <button @click="save">发布（3元/条）</button>
                    </div>
                </div>
            </template>
        </NavSwitch>
        <PopupMessage v-model="this.message">
            {{this.message}}
        </PopupMessage>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import NavSwitch from "../Global/NavSwitch.vue";
    import FormTextArea from "../Global/Form/FormTextArea.vue";
    import {FlexRowStartCenter, FlexRowCenter, FlexRowSpaceBetweenCenter, FlexRowSpaceBetween} from "../Global/Layout";
    import Tag from "../Global/Tag.vue"
    import SingleSelect from "../Global/SingleSelect.vue";
    import PopupMessage from "../Global/PopupMessage.vue";
    import Api from "../../utils/Api";

    export default {
        name: "PublishSubmit",
        components: {
            PopupMessage,
            FlexRowSpaceBetween,
            SingleSelect,
            FlexRowSpaceBetweenCenter,
            FlexRowCenter, FlexRowStartCenter, FormTextArea, NavSwitch, BackTitleHeader, Tag
        },
        methods: {
            tagExist(name) {
                for (let i = 0; i < this.tags.selected.length; i++) {
                    if (name === this.tags.selected[i].name) return true;
                }
                for (let i = 0; i < this.tags.choices.length; i++) {
                    if (name === this.tags.choices[i].name) return true;
                }
                return false;
            },
            selectTag(tag) {
                this.tags.selected.push(tag);
            },
            deleteTag(index) {
                this.tags.selected.splice(index, 1);
            },
            addTag() {
                if (this.tags.tobeAdd !== '' && !this.tagExist(this.tags.tobeAdd)) {
                    this.tags.selected.push({id: this.tags.maxId++, name: this.tags.tobeAdd});
                }
            },
            showMessage(message) {
                this.message = message;
            },
            async save() {
                let req = {
                    description: this.description,
                    tags: Api.Tag.toString(this.tags.selected),
                    isPoints: this.submit.normal ? 'YES' : 'NO',
                    type: this.$refs.nav.show === 0 ? 'RED_RESUME' : 'NORMAL_RESUME',
                    redType: this.redbag.mode.luck ? 'RED_RANDOM' : 'RED_AVERAGE',
                    redNum: this.redbag.redNum,
                    redAmount: this.redbag.redAmount,
                    payType: 'BALANCE',
                };
                let response = await Api.Seller.publish(req).response();
                if (response) {
                    alert('保存成功！');
                }
            },
            getTagColorByIndex: Api.Tag.colors
        },
        data: function () {
            return {
                list: ['红包发布', '普通发布'],
                tags: {
                    choices: Api.Tag.getValues(),
                    selected: [],
                    tobeAdd: '',
                    maxId: 13
                },
                submit: {
                    normal: false
                },
                redbag: {
                    mode: {split: false, luck: true},
                    redNum: 10,
                    redAmount: 30,
                },
                description: '',
                message: '',
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.PublishSubmit {
        .Content();
        div.PublishSubmitInfo {
            padding: unit(70px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(60px / @base-font, rem);
            margin-bottom: unit(10px / @base-font, rem);
            background-color: white;
            > h1 {
                font-size: unit(30px / @base-font, rem);
                margin-bottom: unit(30px / @base-font, rem);
            }
            div.FormTextArea {
                margin-bottom: unit(30px / @base-font, rem);
            }
            > div.FlexRowStartCenter {
                flex-wrap: wrap;
                > span.Tag {
                    margin-bottom: unit(45px / @base-font, rem);
                    margin-right: unit(45px / @base-font, rem);
                }
            }
            div.FlexRowCenter {
                > input {
                    border-radius: unit(15px / @base-font, rem);
                    border: 1px solid #999999;
                    color: #999999;
                    padding: unit(8px / @base-font, rem) unit(30px / @base-font, rem);
                    margin-right: unit(30px / @base-font, rem);
                    width: unit(200px / @base-font, rem);
                    font-size: unit(24px / @base-font, rem);

                }
                > button {
                    border-radius: unit(15px / @base-font, rem);
                    background-color: #F19149;
                    color: white;
                    padding: unit(8x / @base-font, rem) unit(25px / @base-font, rem);
                    font-size: unit(24px / @base-font, rem);

                }
            }
        }

        div.NavSwitch {
            div.PublishSubmitRedbag {
                > div.FlexRowSpaceBetweenCenter {
                    height: unit(95px / @base-font, rem);
                    padding: 0 unit(50px / @base-font, rem);
                    background-color: white;
                }

                div.PublishSubmitRedbagSum, div.PublishSubmitRedbagNum {
                    svg {
                        width: unit(30px / @base-font, rem);
                        height: unit(30px / @base-font, rem);
                        fill: #F2D857;
                    }
                    h1 {
                        font-size: unit(30px / @base-font, rem);
                        margin: 0 unit(9px / @base-font, rem) 0 unit(13px / @base-font, rem);
                    }
                    h2 {
                        font-size: unit(24px / @base-font, rem);
                        color: #999999;
                    }

                    div.PublishSubmitRedbagInput {
                        > input {
                            color: #E02121;
                            width: unit(100px / @base-font, rem);
                            font-weight: bold;
                            margin-right: unit(12px / @base-font, rem);
                            font-size: unit(30px / @base-font, rem);
                        }
                        font-size: unit(30px / @base-font, rem);

                    }
                }

                > p {
                    font-size: unit(24px / @base-font, rem);
                    color: #9D9D9D;
                    margin: unit(11px / @base-font, rem) 0 unit(28px / @base-font, rem) unit(50x / @base-font, rem);
                }

                div.PublishSubmitRedbagMode {
                    padding: unit(20px /  @base-font, rem) unit(135px / @base-font, rem);

                    div.SingleSelect {
                        margin-left: unit(12px / @base-font, rem);
                    }

                    div.active {
                        color: #e78d4a
                    }
                    > p {
                        margin-top: unit(37px / @base-font, rem);
                        font-size: unit(24px / @base-font, rem);
                        color: #999999;
                    }

                }
            }

            div.PublishSubmitNormal {
                > div.FlexRowSpaceBetweenCenter {
                    height: unit(90px / @base-font, rem);
                    padding: 0 unit(70px / @base-font, rem);
                    background-color: white;
                    > p {
                        font-size: unit(24px / @base-font, rem);
                        color: #999999;
                    }
                }

            }

            div.PublishSubmitButton {
                padding: unit(70px / @base-font, rem);

                > button {
                    border-radius: 5px;
                    padding: unit(20px / @base-font, rem) 0;
                    width: 100%;
                    font-size: unit(24px / @base-font, rem);
                    background-color: #F19149;
                    color: white;
                }
            }
        }
    }
</style>
