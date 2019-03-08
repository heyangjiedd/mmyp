<template>
    <div class="SellerGallery">
        <h1>照片墙</h1>
        <ul>
            <li v-for="item in gallery" :style="{'background-image': `url('${item}')`}"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SellerGallery",
        props: {
            gallery: Array,
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.SellerGallery {
        h1 {
            margin: unit(30px / @base-font, rem) 0;
            font-size: unit(30px / @base-font, rem);
        }
        > ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
                .background-picture-cover();
                display: block;
                width: unit(300px / @base-font, rem);
                height: unit(183px / @base-font, rem);
                margin-bottom: unit(45px / @base-font, rem);
            }

        }
    }
</style>
