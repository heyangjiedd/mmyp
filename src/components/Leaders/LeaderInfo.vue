<template>
    <div class="LeaderInfo">
        <FlexRow>
            <Head :image="leader.head" style="flex: none;"/>
            <FlexColumnSpaceBetween style="flex: auto;">
                <FlexRowSpaceBetween>
                    <h1>{{leader.name}}</h1>
                    <h1>{{leader.id}}</h1>
                </FlexRowSpaceBetween>
                <h1>{{leader.phone}}</h1>
                <h1>{{leader.address}}</h1>
            </FlexColumnSpaceBetween>
        </FlexRow>
        <RelativeDescription>
            {{leader.description}}
        </RelativeDescription>
    </div>
</template>

<script>
    import Head from "../Global/Head.vue";
    import RelativeDescription from "../Global/Description/RelativeDescription.vue";
    import {FlexColumnSpaceBetween, FlexRow, FlexRowSpaceBetween} from "../Global/Layout";

    export default {
        name: "LeaderInfo",
        components: {FlexRowSpaceBetween, FlexRow, FlexColumnSpaceBetween, Head, RelativeDescription},
        props: {
            leader: Object
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.LeaderInfo {
        div.FlexRow {
            padding: unit(40px / @base-font, rem) unit(@layout-padding / @base-font, rem) unit(40px / @base-font, rem);
            background-color: white;

            div.Head {
                margin-right: unit(25px  / @base-font, rem);
            }

            div.FlexColumnSpaceBetween {
                h1 {
                    font-size: unit(30px / @base-font, rem);
                }
            }
        }
    }
</style>
