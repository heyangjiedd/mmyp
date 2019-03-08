<template>
    <li class="Entrance">
        <router-link :to="to">
            <div :style="{'background-image':'url(\''+head+'\')'}"></div>
            <h1>
                <slot/>
            </h1>
        </router-link>
    </li>
</template>

<script>
    export default {
        name: "Entrance",
        props: {
            head: String,
            to: {type: String, default: "#"}
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    li.Entrance {
        a {
            display: flex;
            align-items: center;
            padding: unit(25px / @base-font, rem) unit(@layout-padding / @base-font, rem);
            background-color: white;
            margin-bottom: unit(10px / @base-font, rem);

            div {
                .background-picture-contain();
                width: unit(85px / @base-font, rem);
                height: unit(85px / @base-font, rem);
                border-radius: 50%;
                margin-right: unit(20px / @base-font, rem);
                flex: none;
            }

            h1 {
                font-size: unit(30px / @base-font, rem);
                font-weight: normal;
            }
        }

    }
</style>
