<template>
    <FlexRowStartCenter class="FormInput">
        <FormRequired v-if="required"/>
        <FlexRowStartCenter style="flex:auto;position: relative;">
            <input type="text" :placeholder="placeholder" v-model="val"/>
            <div class="FormInputUnit" v-if="unit">{{unit}}</div>
            <ImageContain :style="{'background-image': `url('${icon}')`}" v-if="icon !== ''"/>
        </FlexRowStartCenter>
    </FlexRowStartCenter>
</template>

<script>
    import {FlexRowStartCenter} from "../Layout";
    import {ImageContain} from "../Image";
    import FormRequired from "./FormRequired.vue";
    import TwoWayBind from "../../../mixins/TwoWayBind";

    export default {
        name: "FormInput",
        components: {FormRequired, ImageContain, FlexRowStartCenter},
        mixins:[TwoWayBind],
        props: {
            icon: {type: String, default: ''},
            placeholder: {type: String, default: ''},
            required: {type: Boolean, default: true},
            unit: String,
        },
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.FormInput {
        div.ImageContain {
            width: unit(30px / @base-font, rem);
            height: unit(30px / @base-font, rem);
            position: absolute;
            left: unit(10px / @base-font, rem);
            top: unit(20px / @base-font, rem);
        }
        > div {
            > input {
                font-size: unit(26px  / @base-font, rem);
            }
            div.FormInputUnit {
                font-size: unit(26px  / @base-font, rem);
                color: #CCCCCC;
            }
        }
    }
</style>
