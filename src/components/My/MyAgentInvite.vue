<template>
    <div class="MyAgentInvite">
        <BackTitleHeader>邀请赚钱</BackTitleHeader>
        <FlexColumnStartCenter>
            <div></div>
            <button>海报邀请</button>
            <button>连接邀请</button>
            <p>可将自己的海报发送到微信群、朋友圈、贴吧、QQ群论坛等等平台获得更多粉丝收益。</p>
        </FlexColumnStartCenter>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import {FlexColumnStartCenter} from "../Global/Layout/";

    export default {
        name: "MyAgentInvite",
        components: {FlexColumnStartCenter, BackTitleHeader}
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MyAgentInvite {
        .Content();
        > div.FlexColumnStartCenter {
            padding: 0 unit(91px / @base-font, rem);
            > div {
                width: unit(376px / @base-font, rem);
                height: unit(376px / @base-font, rem);
                background-color: #C1C1C1;
                margin: unit(62px / @base-font, rem) 0;
            }
            > button {
                padding: unit(20px / @base-font, rem) 0;
                width: 100%;
                background-color: #F19149;
                color: white;
                font-size: unit(28px / @base-font, rem);
                border-radius: unit(10px / @base-font, rem);
                margin-bottom: unit(47px / @base-font, rem);
            }
            > p {
                font-size: unit(30px / @base-font, rem);
                line-height: 1.7;
            }

        }
    }
</style>
