<template>
    <FlexRowStartCenter class="MyWalletInput">
        <h1 style="flex: none">{{title}}</h1>
        <FlexRowStartCenter class="MyWalletInputContainer" style="flex: auto">
            <div style="flex: auto" class="confirm" v-if="confirm">{{confirm}}元</div>
            <input style="flex: auto" v-else :disabled="disabled" v-model="val"/>
            <h1 style="flex:none" v-if="withDrawAll" @click="$emit('withDraw')">全部金额</h1>
            <i class="close" style="flex: none" v-if="close" @click="$emit('input',undefined)">
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M602.5 512L941 173.4c25-25 25-65.5 0-90.5s-65.5-25-90.5 0L512 421.5 173.4 83c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L421.5 512 83 850.6c-25 25-25 65.5 0 90.5 12.5 12.5 28.9 18.7 45.2 18.7s32.7-6.2 45.2-18.7L512 602.5 850.6 941c25 25 65.5 25 90.5 0 12.5-12.5 18.7-28.9 18.7-45.2s-6.2-32.7-18.7-45.2L602.5 512z"></path>
                </svg>
            </i>
        </FlexRowStartCenter>
    </FlexRowStartCenter>
</template>

<script>
    import {FlexRowStartCenter} from "../Global/Layout";

    export default {
        name: "MyWalletInput",
        components: {FlexRowStartCenter},
        props: {
            title: String,
            close: {type: Boolean, default: false},
            confirm: {type: Number, default: 0},
            disabled: {type: Boolean, default: false},
            withDrawAll: {type: Boolean, default: false},
            value: Number
        },
        data: function () {
            return {
                val: 0
            }
        },
        mounted: function () {
            this.val = this.value;
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
    @import "../../variables.less";

    div.MyWalletInput {
        padding: 0 unit(@layout-padding / @base-font, rem);
        background-color: white;
        height: unit(90px / @base-font, rem);
        width: 100%;
        > h1 {
            font-size: unit(28px / @base-font, rem);
            font-weight: normal;
            width: unit(265px / @base-font, rem);
        }

        div.MyWalletInputContainer {
            > input {
                font-size: unit(28px / @base-font, rem);
                line-height: 1.3;
                background-color: white;
                width: unit(200px / @base-font, rem);
            }
            > h1 {
                font-size: unit(24px / @base-font, rem);
                color: #999999;
                font-weight: normal;
                margin-right: unit(25px / @base-font, rem);
            }
            div.confirm {
                color: #FF0000;
                line-height: 1.3;
                font-size: unit(34px / @base-font, rem);
            }
            i.close {
                display: inline-block;
                width: unit(40px / @base-font, rem);
                height: unit(40px / @base-font, rem);
                background-color: #8a8a8a;
                border-radius: 50%;
                > svg {
                    width: 60%;
                    height: 60%;
                    fill: white;
                    margin: 20%;
                }
            }
        }
    }


</style>
