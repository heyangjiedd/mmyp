<template>
    <Overlay v-model="show" :close-only-on-self="true" class="Alert">
        <div>
            <h1>{{title}}</h1>
            <FlexRowSpaceAround>
                <Button style="background-color: #be4d48" @click.native="$emit('confirm')">确认</Button>
                <Button style="background-color: #1b67c0" @click.native="$emit('close')">取消</Button>
            </FlexRowSpaceAround>
        </div>
    </Overlay>
</template>

<script>
    import Overlay from "./Overlay.vue";
    import {FlexRowSpaceAround} from "./Layout";
    import Button from "../Global/Button.vue"

    export default {
        name: "Alert",
        components: {Overlay, FlexRowSpaceAround, Button},
        props: {
            title: {type: String, default: ""},
            show: {type: Boolean, default: false}
        },
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Alert {
        > div {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            padding: unit(50px / @base-font, rem) unit(60px / @base-font, rem);
            background-color: white;
            border-radius: 4px;
            width: 85%;
            max-width: unit(750px / @base-font , rem);

            > h1 {
                font-size: unit(38px / @base-font, rem);
                color: #CF3030;
                padding-bottom: unit(15px / @base-font, rem);
                border-bottom: 1px solid #A3A3A3;
                margin-bottom: unit(30px / @base-font, rem);
                font-weight: normal;
            }

            div.FlexRowSpaceAround {
                button.Button {
                    flex: 0 1 unit(200xp / @base-font, rem);

                }
            }
        }
    }
</style>
