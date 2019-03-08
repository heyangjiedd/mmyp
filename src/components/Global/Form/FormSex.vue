<template>
    <FlexRowStartCenter class="FormSex">
        <FormRequired/>
        <span class="FormSexName">性别</span>
        <FlexRowStartCenter @click.native="(male = true) &&  (female = false)">
            男
            <SingleSelect :value="male"/>
        </FlexRowStartCenter>
        <FlexRowStartCenter @click.native="(male = false) || (female = true)">
            女
            <SingleSelect :value="female"/>
        </FlexRowStartCenter>
    </FlexRowStartCenter>
</template>

<script>
    import {FlexRowStartCenter} from "../Layout/";
    import FormRequired from "./FormRequired.vue";
    import SingleSelect from "../SingleSelect.vue";

    export default {
        name: "FormSex",
        components: {SingleSelect, FormRequired, FlexRowStartCenter},
        props: {
            value: Boolean,
        },
        data: function () {
            return {
                male: true,
                female: false,
            }
        },
        mounted() {
            this.male = this.value === true;
            this.female = this.value === false;
        },
        watch: {
            male(newVal) {
                if (newVal) {
                    this.$emit('input', true);
                }
            },
            female(newVal) {
                if (newVal) {
                    this.$emit('input', false);
                }
            },
            value(newVal) {
                if (newVal) {
                    this.male = true;
                    this.female = false;
                } else {
                    this.male = false;
                    this.female = true;
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.FormSex {
        span.FormSexName {
            font-size: unit(26px / @base-font, rem);
            margin-right: unit(15px / @base-font, rem);
            color: #CCCCCC;
            width: unit(110px / @base-font, rem);

        }
        div.FlexRowStartCenter {
            margin-right: unit(40px / @base-font, rem);
            div.SingleSelect {
                margin-left: unit(15px / @base-font, rem);
            }
        }
    }
</style>
