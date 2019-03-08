<template>
    <div class="NavSwitch">
        <ul>
            <li v-for="(item,index) in list" @click="show = index" :class="{NavSwitchActive:show === index}">{{item}}
            </li>
        </ul>
        <div v-for="(item,index) in list" v-show="show === index">
            <slot :name="item"/>
        </div>
    </div>

</template>

<script>
    export default {
        name: "NavSwitch",
        props: {
            list: Array,
        },
        data: function () {
            return {
                show: 0
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.NavSwitch {
        > ul {
            padding: 0 unit(@layout-padding / @base-font , rem);
            margin-bottom: unit(13px / @base-font, rem);
            display: flex;
            justify-content: space-around;
            background-color: white;

            li {
                font-size: unit(32px / @base-font, rem);
                padding: unit(45px / @base-font, rem) unit(15px / @base-font, rem);
            }
            li.NavSwitchActive {
                border-bottom: 2px solid red;
            }
        }
    }

</style>
