<template>
    <div class="IndexAdvertisement">
        <p>
            <span>美美优聘投简历</span>
            <span style="text-align: right"><em>先</em>付工资<em>后</em>上班</span>
        </p>
        <div style="background-image: url('images/index_1.png')"></div>
    </div>
</template>

<script>
    export default {
        name: "IndexAdvertisement"
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.IndexAdvertisement {
        padding: unit(36px/ @base-font, rem) unit(@layout-padding / @base-font, rem) unit(10px/ @base-font, rem) unit(@layout-padding / @base-font, rem);
        display: flex;
        justify-content: space-between;
        background-color: #f0f0f0;

        p {
            flex: auto;
            margin-right: unit(22px/ @base-font, rem);
            font-size: unit(36px/ @base-font, rem);
            color: #747474;
            font-weight: bold;

            span {
                display: block;
                margin-top: unit(40px/ @base-font, rem);

                em {
                    font-size: unit(60px/ @base-font, rem);
                    color: red;
                    font-style: normal;
                }
            }
        }

        div {
            .background-picture-cover();
            display: inline-block;
            width: unit(284px/ @base-font, rem);
            height: unit(281px/ @base-font, rem);
        }
    }
</style>
