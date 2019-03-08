<template>
    <div class="MyResume">
        <BackTitleHeader>我的简历</BackTitleHeader>
        <Form class="MyResumeForm">
            <h1>基本信息</h1>
            <FormPhone v-model="resume.mobile"/>
            <FormHeightWeight :body="form.body"/>
            <FormSex v-model="form.sex"/>
            <FormBirthday :date="form.date"/>
            <FormCity :icon="false" name="地址" :where="form.where" :whereInitial="form.whereInitial" ref="city"/>
            <h1>标签</h1>
            <FlexRowStartCenter class="MyResumeFormTag">
                <Tag v-for="(tag,index) in tags.choices"
                     :color="!tag.selected?'#7C7C7C':(index%2===0?'#8A79FF':'#FF69AB')"
                     :key="tag.id"
                     @click.native="tag.selected=!tag.selected">
                    {{tag.name}}
                </Tag>
            </FlexRowStartCenter>
            <FormTextArea placeholder="自我简介（50字内）" v-model="resume.description"/>
            <h1>照片</h1>
            <ul>
                <li v-for="(img,index) in resume.imgList" @click="wantDrop(index)">
                    <ImageContain :image="img"/>
                </li>
                <li>
                    <ImageContain image="images/add.png" @click.native="$refs.file.click()"/>
                    <input accept="image/*" type="file" style="display: none" ref="file" @change="upload($event)"/>
                </li>
            </ul>
            <div class="MyResumeFormButton">
                <button @click="save">保存</button>
            </div>
        </Form>
        <Alert title="确认要删除该图片吗？" v-show="show.alert" @confirm="drop()" @close="show.alert = false"/>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import FormHeightWeight from "../Global/Form/FormHeightWeight.vue";
    import FormPhone from "../Global/Form/FormPhone.vue";
    import FormSex from "../Global/Form/FormSex.vue";
    import FormCity from "../Global/Form/FormCity.vue";
    import Form from "../Global/Form/Form.vue";
    import FormBirthday from "../Global/Form/FormBirthday.vue";
    import Tag from "../Global/Tag.vue";
    import {FlexRowStartCenter} from "../Global/Layout/";
    import FormTextArea from "../Global/Form/FormTextArea.vue";
    import {ImageContain} from "../Global/Image";
    import Api from '../../utils/Api';
    import UploadMixin from "../../mixins/Upload"
    import Alert from "../Global/Alert.vue";

    export default {
        name: "MyResume",
        components: {
            ImageContain, ImageContain, FormTextArea, FlexRowStartCenter, Tag, Alert,
            FormBirthday, FormPhone, BackTitleHeader, Form, FormHeightWeight, FormCity, FormSex
        },
        mixins: [UploadMixin],
        data: function () {
            return {
                tags: {
                    choices: Api.Tag.values,
                },
                resume: {
                    id: null,
                    mobile: '',
                    nickName: '',
                    sex: false,
                    headPath: '',
                    height: '',
                    weight: '',
                    birthYear: '',
                    birthMonth: '',
                    tags: '',
                    description: '',
                    province: '',
                    city: '',
                    district: '',
                    viewNum: null,
                    inviteNum: null,
                    status: '',
                    imgList: [],
                },
                form: {
                    where: {
                        province: '',
                        city: '',
                        district: '',
                    },
                    whereInitial: {
                        province: '',
                        city: '',
                        district: '',
                    },
                    body: {
                        height: '',
                        weight: '',
                    },
                    sex: false,
                    date: {
                        year: null,
                        month: null
                    },
                },
                show: {
                    alert: false
                },
                want: {
                    drop: null
                }
            }
        },
        mounted() {
        },
        methods: {
            async setResume(response) {
                if (response) {
                    let data = response.data.data;
                    if (data.sex === '女') {
                        data.sex = false;
                    } else {
                        data.sex = true;
                    }
                    this.resume.mobile = data.mobile;
                    this.tags.choices = Api.Tag.parseString(data.tags);
                    this.form.whereInitial.province = data.province;
                    this.form.whereInitial.city = data.city;
                    this.form.whereInitial.district = data.district;
                    this.resume.imgList = data.imgList;
                    this.resume.description = data.description;
                    this.form.date.year = parseInt(data.birthYear);
                    this.form.date.month = parseInt(data.birthMonth);
                    this.form.body.height = data.height;
                    this.form.body.weight = data.weight;
                }
            },
            async save() {
                let req = {
                    mobile: this.resume.mobile,
                    height: this.form.body.height,
                    weight: this.form.body.weight,
                    birthYear: this.form.date.year,
                    birthMonth: this.form.date.month,
                    description: this.resume.description,
                    province: this.form.where.province.name,
                    city: this.form.where.city.name,
                    district: this.form.where.district.name,
                    imgList: this.resume.imgList,
                };
                if (this.resume.sex) {
                    req.sex = '男';
                } else {
                    req.sex = '女';
                }
                req.tags = Api.Tag.toString(this.tags.choices);
                let response = await Api.My.Resume.save(req).response();
                if (response) {
                    alert('保存成功！');
                }
                console.log(req);
            },
            wantDrop(index) {
                this.want.drop = index;
                this.show.alert = true;
            },
            drop() {
                this.resume.imgList.splice(this.want.drop, 1);
                this.show.alert = false;
            },
            afterUpload(img) {
                this.resume.imgList.push(img);
            },
        },
        async beforeRouteEnter(to, from, next) {
            let response = await Api.My.Resume.query({openId: 1}).response();
            next(vm => {
                vm.setResume(response);
            })
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MyResume {
        .Content();

        div.MyResumeForm {
            padding: unit(25px / @base-font, rem) unit(@layout-padding / @base-font, rem);
            background-color: white;
            > h1 {
                font-size: unit(30px / @base-font, rem);
                margin: unit(30px / @base-font, rem) 0;
            }
            div.FormPhone {
                margin-bottom: unit(30px / @base-font, rem);
            }
            div.FormHeightWeight, div.FormSex {
                margin-bottom: unit(40px / @base-font, rem);
            }
            div.FormBirthday {
                margin-bottom: unit(20px / @base-font, rem);
            }

            span.FormSelectName {
                width: unit(110px / @base-font, rem);
            }

            div.MyResumeFormTag {
                flex-wrap: wrap;
                padding-left: unit(30px / @base-font, rem);
                > span.Tag {
                    margin-bottom: unit(45px / @base-font, rem);
                    margin-right: unit(30px / @base-font, rem);
                }
            }

            > ul {
                display: flex;
                flex-wrap: wrap;
                margin-left: unit(-22.5px / @base-font, rem);
                margin-right: unit(-22.5px / @base-font, rem);
                > li {
                    padding: 0 unit(22.5px / @base-font, rem);
                    width: 33.3%;
                    > div {
                        height: unit(180px / @base-font, rem);
                        margin-bottom: unit(30px / @base-font, rem);
                    }
                    > div.ImageContain {
                        background-color: white;
                    }
                }
            }

            div.MyResumeFormButton {
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
