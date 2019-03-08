<template>
    <div class="IndexLeadersSellers">
        <div>
            <h1>{{content.title}}</h1>
            <RecruitButton :to="join">{{content.join.description}}</RecruitButton>
        </div>
        <ul>
            <li v-for="item in content.list">
                <router-link :to="more+`/${item.id}`">
                    <Head :image="item.image"/>
                    <h2>{{item.name}}</h2>
                </router-link>
            </li>
            <li>
                <router-link :to="more+'/All'">更多<br>（{{content.join.count}}）</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import Head from "../Global/Head.vue";
    import RecruitButton from "../Global/Recruit/RecruitButton.vue";

    export default {
        name: "IndexLeadersSellers",
        components: {RecruitButton, Head},
        props: {
            content: Object,
            join: String,
            more: String,
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.IndexLeadersSellers {
        background-color: white;
        margin-top: unit(12px / @base-font, rem);
        padding: unit(23px/ @base-font, rem) unit(@layout-padding / @base-font, rem);

        div {
            display: flex;
            justify-content: space-between;

            h1 {
                font-size: unit(30px / @base-font, rem);
            }
        }

        ul {
            display: flex;
            justify-content: space-between;
            margin-top: unit(50px / @base-font, rem);

            li {
                h2 {
                    margin-top: unit(18px / @base-font, rem);
                    text-align: center;
                    font-size: unit(24px / @base-font, rem);
                    color: black;
                }
            }

            li:last-child {
                text-align: center;
                display: table;
                width: unit(120px / @base-font, rem);
                height: unit(120px / @base-font, rem);
                border-radius: unit(10px / @base-font, rem);
                background-color: #FFAB93;
                font-size: unit(24px / @base-font, rem);

                a {
                    color: white;
                    display: table-cell;
                    vertical-align: middle;
                    line-height: 1.5;
                    font-weight: bold;
                }
            }
        }
    }

</style>
