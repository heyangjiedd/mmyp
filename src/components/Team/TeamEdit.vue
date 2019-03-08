<template>
    <div class="TeamEdit">
        <BackTitleHeader>团队资料</BackTitleHeader>
        <Form>
            <h1>填写信息</h1>
            <FormPhone v-model="mobile"/>
            <FormInput placeholder="团队名称" icon="images/SellerJoin1.png" v-model="name"/>
            <FormType v-model="type"/>
            <FormCity :where="form.where" :whereInitial="form.whereInitial"/>
            <FormInput placeholder="详细地址" icon="images/SellerJoin3.png" v-model="address"/>
            <FormTextArea placeholder="团队简介" v-model="description"/>
            <div class="TeamEditFormButton">
                <button @click="save">保存</button>
            </div>
        </Form>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import {FormInput, Form, FormPhone, FormTextArea, FormCity, FormType} from "../Global/Form";
    import Api from "../../utils/Api";

    export default {
        name: "TeamEdit",
        components: {FormType, BackTitleHeader, FormInput, Form, FormPhone, FormTextArea, FormCity},
        data: function () {
            return {
                name: '',
                type: 0,
                mobile: '',
                description: '',
                address: '',
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
                }
            }
        },
        methods: {
            async save() {
                let req = {
                    name: this.name,
                    mobile: this.mobile,
                    type: this.type + 1,
                    province: this.form.where.province.name,
                    city: this.form.where.city.name,
                    district: this.form.where.district.name,
                    description: this.description,
                    address: this.address,
                };
                let response = await Api.Team.create(req).response();
                if (response) {
                    alert('保存成功！');
                }
            },
            setTeam(response) {
                if (response) {
                    let data = response.data.data;
                    this.name = data.name;
                    this.mobile = data.mobile;
                    this.type = data.type - 1;
                    this.address = data.address;
                    this.description = data.description;
                    this.form.whereInitial.province = data.province;
                    this.form.whereInitial.city = data.city;
                    this.form.whereInitial.district = data.district;
                }
            }
        },
        async beforeRouteEnter(to, from, next) {
            let response = await Api.Team.edit().response();
            next(vm => vm.setTeam(response));
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.TeamEdit {
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
            > div.FormPhone, > div.FormInput, > div.FormTextArea, > div.FormCity, > div.FormType {
                margin-bottom: unit(50px / @base-font, rem);
                background-color: white;
            }

            div.TeamEditFormButton {
                padding: unit(20px / @base-font, rem) unit(70px / @base-font, rem);

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
