<template>
    <div class="MyContact">
        <BackTitleHeader>联系客服</BackTitleHeader>
        <FlexColumn>
            <div></div>
            <h1>长按扫描二维码，联系美美客服</h1>
            <h2>紧急联系电话：</h2>
            <h2>卢先生：15351225204</h2>
            <h2>周先生：18483679864</h2>
        </FlexColumn>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";
    import {FlexColumn} from "../Global/Layout";

    export default {
        name: "MyContact",
        components: {FlexColumn, BackTitleHeader}
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.MyContact {
        .Content();
        > div.FlexColumn {
            padding: unit(80px / @base-font, rem) unit(150px / @base-font, rem);
            background-color: white;
            > div {
                width: unit(375px / @base-font, rem);
                height: unit(375px / @base-font, rem);
                background-color: #c1c1c1;
                margin-bottom: unit(60px / @base-font, rem);
            }
            > h1 {
                font-size: unit(30px / @base-font, rem);
                color: #010101;
                margin-bottom: unit(32px / @base-font, rem);
            }
            > h2 {
                font-size: unit(30px / @base-font, rem);
                color: #999999;
                line-height: 1.7;
            }
        }

    }
</style>
