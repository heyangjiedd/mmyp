<template>
    <li class="Message" style="display: flex;">
        <template v-if="message.link">
            <router-link :to="message.link" style="display: flex;flex: auto;">
                <div class="MessageHead" :style="{'background-image':`url('${message.head}')`}" style="flex: none;">
                    <RedPoint :size="0.82" v-if="message.new"/>
                </div>
                <FlexColumnSpaceBetween class="MessageBody" style="flex: auto;">
                    <FlexRowSpaceBetween class="MessageBodyTop">
                        <h1>{{message.title}}
                            <SingleWordTag v-if="message.excellent" color="#e61919">优</SingleWordTag>
                            <SingleWordTag v-if="message.trusted" color="#3eb43b">信</SingleWordTag>
                        </h1>
                        <span class="MessageBodyTopDate" v-if="message.date">{{message.date}}</span>
                    </FlexRowSpaceBetween>
                    <FlexRow class="MessageBodyBottom" style="flex-wrap: nowrap;">
                        <p>{{message.content}}</p>
                        <svg v-if="message.more" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M553.1392 778.88512l451.61472-451.61472c22.64576-22.64576 22.64576-59.4176 0-82.14016-22.64576-22.64576-59.4176-22.64576-82.14016 0l-410.5472 410.61888-410.61888-410.624c-22.64576-22.64576-59.4176-22.64576-82.14016 0-22.64576 22.64576-22.64576 59.4176 0 82.14016l451.69152 451.69152a58.08128 58.08128 0 0 0 82.14016-0.07168z"/>
                        </svg>
                    </FlexRow>
                </FlexColumnSpaceBetween>
            </router-link>
        </template>
        <template v-else>
            <div class="MessageHead" :style="{'background-image':`url('${message.head}')`}" style="flex: none;">
                <RedPoint :size="0.82" v-if="message.new"/>
            </div>
            <FlexColumnSpaceBetween class="MessageBody" style="flex: auto;">
                <FlexRowSpaceBetween class="MessageBodyTop">
                    <h1>{{message.title}}
                        <SingleWordTag v-if="message.excellent" color="#e61919">优</SingleWordTag>
                        <SingleWordTag v-if="message.trusted" color="#3eb43b">信</SingleWordTag>
                    </h1>
                    <span class="MessageBodyTopDate" v-if="message.date">{{message.date}}</span>
                </FlexRowSpaceBetween>
                <FlexRow class="MessageBodyBottom" style="flex-wrap: nowrap;">
                    <p>{{message.content}}</p>
                    <svg v-if="message.more" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M553.1392 778.88512l451.61472-451.61472c22.64576-22.64576 22.64576-59.4176 0-82.14016-22.64576-22.64576-59.4176-22.64576-82.14016 0l-410.5472 410.61888-410.61888-410.624c-22.64576-22.64576-59.4176-22.64576-82.14016 0-22.64576 22.64576-22.64576 59.4176 0 82.14016l451.69152 451.69152a58.08128 58.08128 0 0 0 82.14016-0.07168z"/>
                    </svg>
                </FlexRow>
            </FlexColumnSpaceBetween>
        </template>
    </li>
</template>

<script>
    import RedPoint from "../Global/RedPoint.vue";
    import SingleWordTag from "../Global/SingleWordTag.vue";
    import {FlexColumnSpaceBetween, FlexRowSpaceBetween, FlexRow} from "../Global/Layout";

    export default {
        name: "Message",
        components: {FlexRow, FlexRowSpaceBetween, FlexColumnSpaceBetween, SingleWordTag, RedPoint},
        props: {
            message: Object,
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    li.Message {
        padding: unit(25px / @base-font, rem) unit(@layout-padding / @base-font, rem);
        background-color: white;
        border-bottom: 1px solid #f8f8f8;

        div.MessageHead {
            .background-picture-contain();
            position: relative;
            width: unit(85px / @base-font, rem);
            height: unit(85px / @base-font, rem);
            border-radius: 50%;
            margin-right: unit(20px / @base-font, rem);
        }

        div.MessageBody {
            div.MessageBodyTop {
                h1 {
                    font-size: unit(28px / @base-font, rem);
                }
                span.MessageBodyTopDate {
                    font-size: unit(24px / @base-font, rem);
                    color: #9B9B9B
                }
            }

            div.MessageBodyBottom {
                p {
                    font-size: unit(24px / @base-font, rem);
                    color: #5F5F5F;
                    flex: auto;
                    margin-right: unit(60px / @base-font, rem);
                }
                svg {
                    margin-top: unit(20px / @base-font, rem);
                    width: unit(30px / @base-font, rem);
                    height: unit(30px / @base-font, rem);
                    fill: #b5b6b6;
                    flex: none;
                }
            }
        }
    }
</style>
