<template>
    <FlexRowStartCenter class="FormPhone">
        <FormRequired/>
        <div style="flex:none;position: relative;">
            <select>
                <option value="+86">+86</option>
            </select>
            <ImageContain :image="'images/SellerJoin1.png'"/>
            <i class="Dropdown"></i>
        </div>
        <FormInput :required="false" :placeholder="'手机号'" style="flex:auto;margin-left: 0.357rem;" v-model="val"/>
    </FlexRowStartCenter>
</template>

<script>
    import {FlexRowStartCenter} from "../Layout";
    import FormRequired from "./FormRequired.vue";
    import FormInput from "./FormInput.vue";
    import {ImageContain} from "../Image/";
    import TwoWayBind from "../../../mixins/TwoWayBind";


    export default {
        name: "FormPhone",
        components: {ImageContain, FormInput, FormRequired, FlexRowStartCenter},
        mixins:[TwoWayBind],

    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.FormPhone {
        select {
            padding: unit(20px / @base-font, rem) unit(60px / @base-font, rem) unit(20px / @base-font, rem) unit(55px / @base-font, rem);
            border-bottom: 1px solid #BBBBBB;
            font-size: unit(26px  / @base-font, rem);
        }
        div.ImageContain, i.Dropdown {
            width: unit(30px / @base-font, rem);
            height: unit(30px / @base-font, rem);
        }
        div.ImageContain {
            position: absolute;
            top: unit(20px / @base-font, rem);
            left: unit(10px / @base-font, rem);
        }
        i.Dropdown {
            right: unit(20px / @base-font, rem);
            top: unit(28px / @base-font, rem);
        }
    }
</style>
