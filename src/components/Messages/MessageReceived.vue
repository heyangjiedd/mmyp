<template>
    <ul class="MessageReceived">
        <li v-for="message in messages">
            <template v-if="linkPrefix">
                <router-link :to="`${linkPrefix}/${message.id}`">
                    <p>{{message.date}}</p>
                    <FlexRowSpaceBetween>
                        <h1 :style="{color:message.viewed?'#999999':'black'}">{{message.title}}</h1>
                        <span v-if="status" :style="{color:status[message.status].color}">{{status[message.status].description}}</span>
                        <span v-else
                              :style="{color:message.type?'#1E9B2D':'#D71E1E'}">{{message.type?'':'-'}}{{message.money}}</span>
                    </FlexRowSpaceBetween>
                </router-link>
            </template>
            <template v-else>
                <a>
                    <p>{{message.date}}</p>
                    <FlexRowSpaceBetween>
                        <h1 :style="{color:message.viewed?'#999999':'black'}">{{message.title}}</h1>
                        <span v-if="status" :style="{color:status[message.status].color}">{{status[message.status].description}}</span>
                        <span v-else
                              :style="{color:message.type?'#1E9B2D':'#D71E1E'}">{{message.type?'':'-'}}{{message.money}}</span>
                    </FlexRowSpaceBetween>
                </a>
            </template>
        </li>
    </ul>
</template>

<script>
    import {FlexRowSpaceBetween} from "../Global/Layout";

    export default {
        name: "MessageReceived",
        components: {FlexRowSpaceBetween},
        props: {
            messages: Array,
            status: Array,
            linkPrefix: String
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    ul.MessageReceived {
        > li {
            padding: 0 unit(@layout-padding / @base-font, rem);
            margin-bottom: unit(10px / @base-font, rem);
            background-color: white;
            > a {
                > p {
                    padding: unit(10px / @base-font, rem) 0;
                    font-size: unit(24px / @base-font, rem);
                    color: #999999;
                }
                > div.FlexRowSpaceBetween {
                    padding: unit(10px / @base-font, rem) 0 unit(20px / @base-font, rem);
                    > h1 {
                        font-size: unit(28px / @base-font, rem);
                    }
                }
            }
        }
    }
</style>
