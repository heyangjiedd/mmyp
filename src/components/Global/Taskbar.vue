<template>
    <div class="Taskbar">
        <ul>
            <li>
                <router-link to="/">
                    <img src="images/taskbar_01_uncheck.png" class="Taskbar-Index uncheck">
                    <img src="images/taskbar_01_check.png" class="Taskbar-Index check">
                    <h1>首页</h1>
                </router-link>
            </li>
            <li>
                <router-link to="/Messages">
                    <img src="images/taskbar_02_uncheck.png" class="Taskbar-Messages uncheck">
                    <img src="images/taskbar_02_check.png" class="Taskbar-Messages check">
                    <h1>消息</h1>
                    <RedPoint :size="0.57"/>
                </router-link>
            </li>
            <li>
                <router-link to="/Publish">
                    <img src="images/taskbar_03_uncheck.png" class="Taskbar-Publish uncheck">
                    <img src="images/taskbar_03_check.png" class="Taskbar-Publish check">
                    <h1>发布</h1>
                </router-link>
            </li>
            <li>
                <router-link to="/Team">
                    <img src="images/taskbar_04_uncheck.png" class="Taskbar-Team uncheck">
                    <img src="images/taskbar_04_check.png" class="Taskbar-Team check">
                    <h1>团队</h1>
                </router-link>
            </li>
            <li>
                <router-link to="/My">
                    <img src="images/taskbar_05_uncheck.png" class="Taskbar-My uncheck">
                    <img src="images/taskbar_05_check.png" class="Taskbar-My check">
                    <h1>我的</h1>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import RedPoint from "./RedPoint.vue";

    export default {
        name: "Taskbar",
        components: {RedPoint}
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Taskbar {
        padding: 0 unit(@layout-padding / @base-font, rem);
        box-shadow: 0px -2px 6px 0px rgba(0, 0, 0, 0.24);
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 5;
        height: unit(98px / @base-font, rem);
        width: 100%;
        display: flex;
        background-color: white;

        ul {
            display: flex;
            justify-content: space-between;
            flex: auto;
            align-items: center;

            li {
                position: relative;

                a {

                    h1 {
                        color: #000;
                        margin-top: unit(10px / @base-font, rem);
                        font-size: unit(24px / @base-font, rem);
                    }

                    img.Taskbar-Index {
                        width: unit(image-width("../../../static/images/taskbar_01_uncheck.png") / @base-font, rem);
                        height: unit(image-height("../../../static/images/taskbar_01_uncheck.png") / @base-font, rem);
                        &.check {
                            display: none;
                        }
                        &.uncheck {
                            display: block;
                        }
                    }
                    img.Taskbar-Messages {
                        width: unit(image-width("../../../static/images/taskbar_02_uncheck.png") / @base-font, rem);
                        height: unit(image-height("../../../static/images/taskbar_02_uncheck.png") / @base-font, rem);
                        &.check {
                            display: none;
                        }
                        &.uncheck {
                            display: block;
                        }
                    }
                    img.Taskbar-Publish {
                        width: unit(image-width("../../../static/images/taskbar_03_uncheck.png") / @base-font, rem);
                        height: unit(image-height("../../../static/images/taskbar_03_uncheck.png") / @base-font, rem);
                        &.check {
                            display: none;
                        }
                        &.uncheck {
                            display: block;
                        }
                    }
                    img.Taskbar-Team {
                        width: unit(image-width("../../../static/images/taskbar_04_uncheck.png") / @base-font, rem);
                        height: unit(image-height("../../../static/images/taskbar_04_uncheck.png") / @base-font, rem);
                        &.check {
                            display: none;
                        }
                        &.uncheck {
                            display: block;
                        }
                    }
                    img.Taskbar-My {
                        width: unit(image-width("../../../static/images/taskbar_05_uncheck.png") / @base-font, rem);
                        height: unit(image-height("../../../static/images/taskbar_05_uncheck.png") / @base-font, rem);
                        &.check {
                            display: none;
                        }
                        &.uncheck {
                            display: block;
                        }
                    }

                }

                a.router-link-exact-active {
                    img.Taskbar-Index {
                        width: unit(image-width("../../../static/images/taskbar_01_check.png") / @base-font, rem);
                        height: unit(image-height("../../../static/images/taskbar_01_check.png") / @base-font, rem);
                        &.check {
                            display: block;
                        }
                        &.uncheck {
                            display: none;
                        }
                    }
                    img.Taskbar-Messages {
                        width: unit(image-width("../../../static/images/taskbar_02_check.png") / @base-font, rem);
                        height: unit(image-height("../../../static/images/taskbar_02_check.png") / @base-font, rem);
                        &.check {
                            display: block;
                        }
                        &.uncheck {
                            display: none;
                        }
                    }
                    img.Taskbar-Publish {
                        width: unit(image-width("../../../static/images/taskbar_03_check.png") / @base-font, rem);
                        height: unit(image-height("../../../static/images/taskbar_03_check.png") / @base-font, rem);
                        &.check {
                            display: block;
                        }
                        &.uncheck {
                            display: none;
                        }
                    }
                    img.Taskbar-Team {
                        width: unit(image-width("../../../static/images/taskbar_04_check.png") / @base-font, rem);
                        height: unit(image-height("../../../static/images/taskbar_04_check.png") / @base-font, rem);
                        &.check {
                            display: block;
                        }
                        &.uncheck {
                            display: none;
                        }
                    }
                    img.Taskbar-My {
                        width: unit(image-width("../../../static/images/taskbar_05_check.png") / @base-font, rem);
                        height: unit(image-height("../../../static/images/taskbar_05_check.png") / @base-font, rem);
                        &.check {
                            display: block;
                        }
                        &.uncheck {
                            display: none;
                        }
                    }
                }

            }
        }

    }
</style>
