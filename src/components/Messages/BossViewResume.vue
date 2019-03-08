<template>
    <Resume guarantee="/Messages/Boss/Guarantee/0" ref="resume"/>
</template>

<script>

    import Resume from "../Resume/Resume.vue";

    export default {
        name: "BossViewResume",
        components: {Resume},
        async beforeRouteEnter(to, from, next) {
            let id = to.params.id;
            let response = await Api.Boss.getResumeById(id).response();
            debugger
            next(vm => {
                debugger
                vm.$refs.resume.setResume(response);
            });
        }
    }
</script>

<style lang="less">

</style>
