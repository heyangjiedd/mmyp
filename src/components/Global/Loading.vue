<template>
    <div class="Loading" v-show="$store.state.show.loading">
        <img src="images/Loading.svg"/>
    </div>
</template>

<script>
    export default {
        name: "Loading",
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Loading {
        position: fixed;
        width: unit(100px / @base-font, rem);
        height: unit(100px / @base-font, rem);
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
    }

</style>
