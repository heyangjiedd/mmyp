<template>
    <FlexColumn class="FormCity">
        <FlexRow class="FormCityName">
            <FormRequired/>
            <span class="FormSelectName">地址</span>
        </FlexRow>

        <FlexRow class="FormCitySelect">
            <FormSelect :options="options.province" icon="images/SellerJoin3.png" v-if="icon" :name="name"
                        showKey="name"
                        v-model="province_index"/>
            <FormSelect :options="options.province" v-else :name="name" showKey="name" valueKey="code"
                        v-model="province_index"/>
            <FormSelect :options="options.city" showKey="name" valueKey="code" v-model="city_index"/>
            <FormSelect :options="options.district" showKey="name" valueKey="code" v-model="district_index"/>
        </FlexRow>
    </FlexColumn>
</template>

<script>
    import {FlexColumn, FlexRow} from "../Layout";
    import FormSelect from "./FormSelect.vue";
    import FormRequired from "./FormRequired.vue";
    import Api from "../../../utils/Api";

    export default {
        name: "FormCity",
        components: {FlexRow, FormRequired, FormSelect, FlexColumn},
        props: {
            icon: {type: Boolean, default: false},
            name: {type: String, default: ""},
            where: Object,
            whereInitial: Object
        },
        data: function () {
            return {
                options: {
                    province: [],
                    city: [],
                    district: [],
                },
                province: null,
                province_index: null,
                city: null,
                city_index: null,
                district: null,
                district_index: null,
                completeInit: false,
            }
        },
        async mounted() {
            let res = await this.query({code: "cn"});
            this.options.province = res;
            this.init();
        },
        methods: {
            async query(params) {
                let response = await Api.City.query(params).response();
                if (response) {
                    return response.data.data;
                }
            },
            async init() {
                if (this.whereInitial.province) {
                    let province_index = this.options.province.findIndex(v => v.name === this.whereInitial.province);
                    if (province_index > -1) {
                        this.province_index = province_index;
                    }
                }
            },
            async initCity() {
                let city_index = this.options.city.findIndex(v => v.name === this.whereInitial.city);
                if (city_index > -1) {
                    this.city_index = city_index;
                }
            },
            async initDistrict() {
                let district_index = this.options.district.findIndex(v => v.name === this.whereInitial.district);
                if (district_index > -1) {
                    this.district_index = district_index;
                }
                this.completeInit = true;
            },
        },
        computed: {
            whereInitialChange() {
                return this.whereInitial.province;
            }
        },
        watch: {
            async province_index(newVal) {
                this.province = this.options.province[newVal];
                this.where.province = this.options.province[newVal];
                let response = await Api.City.query({code: this.province.code}).response();
                if (response) {
                    this.options.city = response.data.data;
                    if (!this.completeInit) {
                        this.initCity();
                    } else {
                        this.city_index = -1;
                        this.options.district = [];
                    }
                }
            },
            async city_index(newVal) {
                this.city = this.options.city[newVal];
                this.where.city = this.options.city[newVal];
                let response = await Api.City.query({code: this.city.code}).response();
                if (response) {
                    this.options.district = response.data.data;
                    if (!this.completeInit) {
                        this.initDistrict();
                    } else {
                        this.district_index = -1;
                    }
                }
            },
            district_index(newVal) {
                this.district = this.options.district[newVal];
                this.where.district = this.options.district[newVal];
            },
            whereInitialChange(newVal) {
                console.log(newVal);
                if (newVal) {
                    // this.init();
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.FormCity {
        margin-right: unit(30px / @base-font, rem);

        div.FormSelect:not(:last-child) {
            margin-right: unit(30px / @base-font, rem);
        }
        span.FormSelectName {
            font-size: unit(26px / @base-font, rem);
            margin-right: unit(15px / @base-font, rem);
            color: #CCCCCC;
        }
        div.FormCitySelect {
            margin-top: unit(30px / @base-font, rem);
            margin-left: unit(30px / @base-font, rem);
            select {
                min-width: unit(160px / @base-font, rem);
            }
        }
    }
</style>
