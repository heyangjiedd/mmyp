<template>
    <ul class="TeamMember">
        <li v-for="member in members">
            <a href="#">
                <ImageCover :image="member.head"/>
                <h1>{{member.name}}</h1>
            </a>
        </li>
        <slot/>
    </ul>
</template>

<script>
    import ImageCover from "../Global/Image/ImageCover.vue";

    export default {
        name: "TeamMember",
        components: {ImageCover},
        props: {
            members: Array
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    ul.TeamMember {
        margin-top: unit(25px / @base-font , rem);
        .clearfix();
        margin: 0 -2%;
        li {
            width: 25%;
            padding: 0 2%;
            margin-top: unit(25px / @base-font , rem);
            float: left;
            a {
                div.ImageCover {
                    width: unit(140px / @base-font , rem);
                    height: unit(140px / @base-font , rem);
                    border-radius: unit(10px / @base-font, rem);
                }
                h1 {
                    font-weight: normal;
                    font-size: unit(24px / @base-font , rem);
                    color: #606060;
                    text-align: center;
                    padding: unit(5px / @base-font, rem) 0;
                }
            }
        }
    }
</style>
