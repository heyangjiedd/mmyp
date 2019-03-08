<template>
    <FlexRow class="FormTextArea">
        <FormRequired v-if="required"/>
        <textarea :placeholder="placeholder" v-model="val"/>
    </FlexRow>
</template>

<script>
    import {FlexRow} from "../Layout";
    import FormRequired from "./FormRequired.vue";
    import TwoWayBind from "../../../mixins/TwoWayBind";

    export default {
        name: "FormTextArea",
        components: {FormRequired, FlexRow},
        mixins: [TwoWayBind],
        props: {
            placeholder: {type: String, default: ''},
            required: {type: Boolean, default: true}
        }
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.FormTextArea {
        textarea {
            width: 100%;
            height: unit(275px  / @base-font, rem);
            font-size: unit(26px / @base-font, rem);
            padding: unit(20px / @base-font, rem);
            line-height: 1.5;
        }
    }
</style>
