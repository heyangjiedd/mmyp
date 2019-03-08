<template>
    <transition name="show">
        <div v-if="closeOnlyOnSelf" class="Overlay" v-show="value" @click.self="close"
             :style="{'background-color':background}">
            <slot/>
        </div>
        <div v-else="closeOnlyOnSelf" class="Overlay" v-show="value" @click="close"
             :style="{'background-color':background}">
            <slot/>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Overlay",
        props: {
            value: Boolean,
            background: {type: String, default: 'rgba(0, 0, 0, 0.7)'},
            closeOnlyOnSelf: {type: Boolean, default: false}
        },
        methods: {
            close: function () {
                if (this.value) {
                    this.$emit("input", false)
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }

    .show-enter-active {
        transition: opacity .5s;
    }

    .show-enter, .show-leave-to {
        opacity: 0;
    }
</style>
