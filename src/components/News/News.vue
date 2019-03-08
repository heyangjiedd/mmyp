<template>
    <div class="News">
        <BackTitleHeader>美美快讯</BackTitleHeader>
        <ul>
            <li v-for="item in news">
                <router-link to="/News/0">
                    <h1>{{item.title}}</h1>
                    <h2>{{item.date}}</h2>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import BackTitleHeader from "../Global/Header/BackTitleHeader.vue";

    export default {
        name: "News",
        components: {BackTitleHeader},
        data: function () {
            return {
                news: [
                    {title: "星光KTV招聘成功", date: "07-23 "},
                    {title: "米乐星KTV招聘成功", date: "07-23 "},
                    {title: "H加入M团队成功", date: "07-23 "},
                    {title: "H创建店铺成功", date: "07-23 "},
                    {title: "星光KTV招聘成功", date: "07-23 "},
                    {title: "米乐星KTV招聘成功", date: "07-23 "},
                    {title: "H加入M团队成功", date: "07-23 "},
                    {title: "H创建店铺成功", date: "07-23 "},
                ]
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.News {
        padding-top: unit(@header-height / @base-font, rem);
        background-color: white;

        ul {
            padding: unit(25px / @base-font, rem) unit(@layout-padding / @base-font , rem);

            li {
                a {
                    padding: unit(20px / @base-font, rem) 0;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #BBBBBB;

                    h1 {
                        font-size: unit(28px / @base-font, rem);
                    }
                    h2 {
                        font-size: unit(24px / @base-font, rem);
                        color: #585858;
                    }
                }
            }
        }
    }

</style>
