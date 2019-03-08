<template>
    <div class="Messages">
        <TitleHeader>消息</TitleHeader>
        <ul class="MessagesOfIntroduction">
            <Message v-for="message in messagesOfIntroduction" :message="message" :key="message.id"/>
        </ul>
        <ul class="MessagesFromSystem">
            <Message v-for="message in messagesFromSystem" :message="message" :key="message.id"/>
        </ul>
        <Taskbar/>
    </div>
</template>

<script>
    import Taskbar from "../Global/Taskbar.vue";
    import Message from './Message.vue';
    import TitleHeader from "../Global/Header/TitleHeader.vue";

    export default {
        name: "Messages",
        components: {TitleHeader, Taskbar, Message},
        data: function () {
            return {
                messagesOfIntroduction: [
                    {
                        id: 1,
                        title: '我是老板',
                        content: '完成一次招聘可成为诚信商家',
                        head: 'images/05_Message/icon_boss@3x.png',
                        new: true,
                        excellent: true,
                        link: "/Messages/Boss",
                    },
                    {
                        id: 2,
                        title: '我是员工',
                        content: '',
                        head: 'images/05_Message/icon_staff@3x.png',
                        new: false,
                        link: "/Messages/Employee",
                    },
                    {
                        id: 3,
                        title: '我是领队',
                        content: '完成一次介绍可成为优秀领队',
                        head: 'images/05_Message/icon_leader@3x.png',
                        new: true,
                        trusted: true,
                        link: "/Messages/Leader",
                    },
                ],
                messagesFromSystem: [
                    {
                        id: 1,
                        title: '系统消息',
                        content: '恭喜你制作简历成功，快去投简历吧！',
                        head: 'images/message_system.png',
                        new: true,
                        date: "07-23"
                    },
                    {
                        id: 2,
                        title: '系统消息',
                        content: '恭喜您成功招聘一名一名美女、帅哥，赶快邀请他加入您的团队吧！可...',
                        head: 'images/message_system.png',
                        new: true,
                        date: "07-23",
                        more: true
                    },
                    {
                        id: 3,
                        title: '系统消息',
                        content: '恭喜你制作简历成功，快去投简历吧！',
                        head: 'images/message_system.png',
                        new: true,
                        date: "07-23"
                    },
                ]
            }
        },
        // async beforeRouteEnter(to, from, next) {
        //     next(vm => {
        //         vm.$store.state.show.loading = false;
        //     });
        // },
        // beforeRouteLeave(to, from, next) {
        //     this.$store.state.show.loading = true;
        //     next();
        // }
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Messages {
        .Content();

        div.Header {
            justify-content: center;
        }

        ul.MessagesFromSystem {
            margin-top: unit(30px / @base-font , rem);
        }
    }

</style>
