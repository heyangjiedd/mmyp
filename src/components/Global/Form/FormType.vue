<template>
    <FlexRowStartCenter class="FormType">
        <FormRequired/>
        <FormSelect :options="options" icon="images/formtype.png" name="类型" v-model="val"/>
    </FlexRowStartCenter>
</template>

<script>
    import FlexRowStartCenter from "../Layout/FlexRowStartCenter.vue";
    import FormRequired from "./FormRequired.vue";
    import FormSelect from "./FormSelect.vue";
    import TwoWayBind from "../../../mixins/TwoWayBind";

    export default {
        name: "FormType",
        components: {FlexRowStartCenter, FormRequired, FormSelect},
        mixins: [TwoWayBind],
        data: function () {
            return {
                options: ['个人', '资源公司']
            }
        },
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.FormType {

    }
</style>
