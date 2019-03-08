<template>
    <div class="SellerJoin">
        <BackTitleHeader>店铺资料</BackTitleHeader>
        <Form>
            <h1>填写信息</h1>
            <FormPhone v-model="seller.mobile"/>
            <FormInput placeholder="店铺名称" icon="'images/SellerJoin1.png'" v-model="seller.name"/>
            <FormCity :where="form.where" :whereInitial="form.whereInitial"/>
            <FormInput placeholder="详细地址" icon="'images/SellerJoin3.png'" v-model="seller.address"/>
            <h1>场所介绍</h1>
            <FormTextArea required="false" placeholder="请从名称、地址、文化等编辑店铺介绍，如含有不良信息店铺将无法通过审核。"
                          v-model="seller.description"/>
            <h1>营业执照（选填）</h1>
            <ul class="SellerJoinCertificate">
                <li @click="$refs.file2.click()" v-if="seller.cardPath"
                    :style="{'background-image':`url('${seller.cardPath}')`}"></li>
                <li class="AddImage" @click="$refs.file2.click()" v-else></li>
                <input accept="image/*" type="file" style="display: none" ref="file2"
                       @change="upload($event,afterUpload2)"/>
            </ul>
            <h1>环境展示</h1>
            <ul class="SellerJoinShow">
                <li v-for="image in seller.imgList" @click="wantDrop(index)">
                    <div :style="{'background-image':`url('${image}')`}"></div>
                </li>
                <li>
                    <div @click="$refs.file.click()" style="background-size: contain;"></div>
                    <input accept="image/*" type="file" style="display: none" ref="file" @change="upload($event)"/>
                </li>
            </ul>
            <div class="FormSubmitButton">
                <button @click="save">保存</button>
            </div>
        </Form>
        <Alert title="确认要删除该图片吗？" v-show="show.alert" @confirm="drop()" @close="show.alert = false"/>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import {FlexRowStartCenter} from "../Global/Layout";
    import {FormInput, Form, FormPhone, FormTextArea, FormCity} from "../Global/Form";
    import Alert from "../Global/Alert.vue";
    import Api from "../../utils/Api";
    import UploadMixin from "../../mixins/Upload";

    export default {
        name: "SellerJoin",
        components: {FormCity, FormTextArea, FormPhone, FormInput, FlexRowStartCenter, BackTitleHeader, Form, Alert},
        mixins: [UploadMixin],
        data: function () {
            return {
                seller: {
                    imgList: [],
                    address: '',
                    description: '',
                    cardPath: '',
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
                },
                show: {
                    alert: false
                },
                want: {
                    drop: null
                }
                // {
                //     "code": 200,
                //     "message": "查询成功",
                //     "data": {
                //     "id": 10000172,
                //         "name": "温莎KTV",
                //         "headPath": "https://mmyp-img.oss-cn-beijing.aliyuncs.com/shop/bb1f083e-f39d-4863-ae53-4f9a000d7a72.jpg",
                //         "cardPath": "https://mmyp-img.oss-cn-beijing.aliyuncs.com/shop/a9fd95d4-1c1a-4ef0-9069-47aba0ed8416.jpg",
                //         "province": "四川省",
                //         "city": "成都市",
                //         "district": "武侯区",
                //         "address": "顺城大街北段316号融城云熙",
                //         "mobile": "12345678911",
                //         "description": "温莎KTV，自1996年破茧而出，历经20年成为国内的“量贩式KTV”，现在已经拥有十余家各具特色、设施先进的连锁品牌店。温莎人一直致力于用“平价超市”的消费概念，酒店式的服务理念，打造具有时尚、健康、欢乐、自在的文化气质，满足从普通大众到小众新贵等不同消费层次需要 的娱乐文化场所，倡导一种积极向上的休闲聚会方式。同时坚持“以人为本、健康娱乐”的服务宗旨，努力打造精品式的量贩式KTV。 　　随着人民生活的富足和社会精神需要的多样化，娱乐时代不可避免的到来了。温莎精品式的量贩式KTV，以健康积极的群众娱乐方式为每一位消费者提供一个健康、文明、欢乐的自由释放空间，在忙碌过后，捕捉真挚的热情、原始的感动。 　　温莎长期坚持与国际的设计师合作，携手共同打造专业级、智能化、人性化的全数码完美视、听、唱效果，拥有全亚洲领先的KTV综合娱乐点唱系统，以满 足消费者近乎专业的欢唱需要。每一个分店，都拥有上百间包房，全方面的产品陈列设计，满足不同消费层次的娱乐文化需要。 　　温莎品牌不仅仅仅是一个物质娱乐消费场所的象征，是优质的欢唱效果，潮流的音乐MV，前端的时尚风潮！更是一种文化、一种精神、一种健康的娱乐生活方式。永不满足的温莎人将不懈努力，百尺竿头，一路高歌，唱响中国！",
                //         "viewNum": 30,
                //         "safeNum": 1,
                //         "status": "NORMAL",
                //         "imgList": [
                //         "https://mmyp-img.oss-cn-beijing.aliyuncs.com/shop/a9fd95d4-1c1a-4ef0-9069-47aba0ed8416.jpg",
                //         "https://mmyp-img.oss-cn-beijing.aliyuncs.com/shop/4106e31b-2bad-4532-ad69-3141919a4ded.jpg",
                //         "https://mmyp-img.oss-cn-beijing.aliyuncs.com/shop/ced16e37-5816-4017-9dd5-2e0d6a4ae5c0.jpg"
                //     ]
                // }
                // }
            }

        },
        methods: {
            afterUpload(img) {
                this.seller.imgList.push(img);
            },
            afterUpload2(img) {
                console.log(img);
                this.seller.cardPath = img;
            },
            setSeller(response) {
                if (response) {
                    let data = response.data.data;
                    this.seller.imgList = this.seller.imgList.concat(data.imgList);
                    delete  data.imgList;
                    this.form.whereInitial.province = data.province;
                    this.form.whereInitial.city = data.city;
                    this.form.whereInitial.district = data.district;
                    Object.assign(this.seller, data);
                }
            },
            async save() {
                let req = {
                    mobile: this.seller.mobile,
                    cardPath: this.seller.cardPath,
                    name: this.seller.name,
                    province: this.form.where.province.name,
                    city: this.form.where.city.name,
                    district: this.form.where.district.name,
                    address: this.seller.address,
                    description: this.seller.description,
                    imgList: this.seller.imgList,
                };
                let response = await Api.Seller.save(req).response();
                if (response) {
                    alert('保存成功！');
                }
            },
            wantDrop(index) {
                this.want.drop = index;
                this.show.alert = true;
            },
            drop() {
                this.seller.imgList.splice(this.want.drop, 1);
                this.show.alert = false;
            },
        },
        async beforeRouteEnter(to, from, next) {
            let response = await Api.Seller.join().response();
            next(vm => vm.setSeller(response));
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.SellerJoin {
        padding-top: unit(@header-height / @base-font, rem);
        background-color: #F8F8F8;
        min-height: 100vh;

        div.Form {
            padding: 0 unit(@layout-padding / @base-font, rem);
            background-color: white;

            > h1 {
                color: #333333;
                font-size: unit(30px / @base-font, rem);
                padding: unit(37px / @base-font, rem) 0;
                text-align: center;
                background-color: white;
            }
            > div.FormPhone, > div.FormInput, > div.FormTextArea, > div.FormCity {
                margin-bottom: unit(50px / @base-font, rem);
                background-color: white;

            }
            ul.SellerJoinCertificate {
                display: flex;
                justify-content: center;
                background-color: white;
                padding-left: unit(30px / @base-font, rem);
                li {
                    width: unit(250px / @base-font, rem);
                    height: unit(355px / @base-font, rem);
                    margin-bottom: unit(30px / @base-font, rem);
                    .background-picture-contain();
                }
                li.AddImage {
                    background-image: url("images/add2.png");
                }
            }

            ul.SellerJoinShow {
                background-color: white;
                margin: 0 -2%;
                .clearfix();
                li {
                    width: 25%;
                    padding: 0 2%;
                    float: left;
                    height: unit(140px / @base-font, rem);
                    margin-bottom: unit(30px / @base-font, rem);
                    > div {
                        .background-picture-cover();
                        height: 100%;
                        border-radius: unit(15px / @base-font, rem);
                        background-image: url("images/add.png");
                    }
                }

            }

            div.FormSubmitButton {
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
