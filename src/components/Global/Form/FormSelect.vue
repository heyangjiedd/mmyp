<template>
    <FlexRowStartCenter class="FormSelect">
        <ImageContain v-if="icon" :image="icon"/>
        <!--<span class="FormSelectName" v-if="name">{{name}}</span>-->
        <select v-model="val" :defaultSelected="val === -1 ">
            <option v-for="(option,index) in options" @click="alert(option)"
                    :value="index">{{showKey?option[showKey]:option}}
            </option>
        </select>
        <i class="Dropdown"></i>
    </FlexRowStartCenter>
</template>

<script>
    import {ImageContain} from "../Image";
    import {FlexRowStartCenter} from "../Layout";

    export default {
        name: "FormSelect",
        components: {FlexRowStartCenter, ImageContain},
        props: {
            options: Array,
            name: String,
            icon: String,
            showKey: String,
            valueKey: String,
            value: null,
        },
        data: function () {
            return {
                val: null
            }
        },
        mounted() {
            if (this.value) {
                this.val = this.value;
            }
        },
        watch: {
            val(newVal) {
                this.$emit('input', newVal);
            },
            value(newVal) {
                this.val = newVal;
            }
        }
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.FormSelect {
        position: relative;

        div.ImageContain {
            width: unit(30px / @base-font, rem);
            height: unit(30px / @base-font, rem);
            margin: 0 unit(18px / @base-font, rem) 0 unit(10px / @base-font, rem);
        }
        span.FormSelectName {
            font-size: unit(26px / @base-font, rem);
            margin-right: unit(15px / @base-font, rem);
            color: #CCCCCC;
        }
        select {
            padding: unit(5px / @base-font, rem) unit(60px / @base-font, rem) unit(5px / @base-font, rem) unit(20px / @base-font, rem);
            border: 1px solid #BEBEBE;
            border-radius: unit(10px / @base-font, rem);
            font-size: unit(26px  / @base-font, rem);
            min-height: unit(50px / @base-font, rem);
        }
        i.Dropdown {
            top: unit(19px / @base-font, rem);
            right: unit(8px / @base-font, rem);
        }
    }
</style>
