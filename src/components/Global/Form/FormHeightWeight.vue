<template>
    <FlexRow class="FormHeightWeight">
        <FormInput placeholder="身高" style="flex:auto" unit="CM" v-model="body.weight"/>
        <FormInput placeholder="体重" :required="false" style="flex:auto" unit="KG" v-model="body.height"/>
    </FlexRow>
</template>

<script>
    import {FlexRow} from "../Layout/";
    import FormInput from "./FormInput.vue";

    export default {
        name: "FormHeightWeight",
        components: {FormInput, FlexRow},
        props: {
            body: Object
        }
    }
</script>

<style lang="less">

</style>
