<template>
    <div class="Index">
        <Header>
            <i class="Location"></i>
            <address>成都</address>
            <HeaderSearch/>
        </Header>
        <indexSwiper/>
        <div class="IndexStatistics">
            <ul>
                <li>保障:{{info.numsMap.safeNum}}</li>
                <li>浏览:{{info.numsMap.viewNum}}</li>
                <li>简历:{{info.numsMap.resumeNum}}</li>
            </ul>
        </div>
        <ul class="IndexEntry">
            <li>
                <router-link to="/Leaders/All">
                    <div style="background-image: url('images/btn_01.png')"></div>
                    <h1>领队</h1>
                </router-link>
            </li>
            <li>
                <router-link to="/ResourceCompany">
                    <div style="background-image: url('images/btn_02.png')"></div>
                    <h1>资源公司</h1>
                </router-link>
            </li>
            <li>
                <router-link to="/Sellers/All">
                    <div style="background-image: url('images/btn_03.png')"></div>
                    <h1>商家</h1>
                </router-link>
            </li>
            <li>
                <router-link to="/Resume/All">
                    <div style="background-image: url('images/btn_04.png')"></div>
                    <h1>简历</h1>
                </router-link>
            </li>
            <li>
                <router-link to="/Sign">
                    <div style="background-image: url('images/btn_05.png')"></div>
                    <h1>签到</h1>
                </router-link>
            </li>
        </ul>
        <IndexLeadersSellers :content="leaders" :join="'/Leaders/Join'" :more="'/Leaders'"/>
        <IndexLeadersSellers :content="sellers" :join="'/Sellers/Join'" :more="'/Sellers'"/>
        <router-link :to="'/News/All'" class="IndexNews">
            <h1>美美<br/>快讯</h1>
            <div>
                <h2>07-23 星光KTV招聘成功</h2>
                <h2>07-22 米乐星KTV招聘成功</h2>
            </div>
        </router-link>
        <IndexAdvertisement/>
        <NavSwitch :list="list" class="IndexRecruit">
            <template :slot="list[0]">
                <Recruit v-for="job in jobs.newest" :job="job" :key="job.jobId"/>
            </template>
            <template :slot="list[1]">
                <Recruit v-for="job in jobs.hottest" :job="job" :key="job.jobId"/>
            </template>
            <template :slot="list[2]">
                <Recruit v-for="job in jobs.redBag" :job="job" :key="job.jobId"/>
            </template>
            <template :slot="list[3]">
                <Recruit v-for="job in jobs.cx" :job="job" :key="job.jobId"/>
            </template>
        </NavSwitch>
        <Taskbar/>
    </div>
</template>

<script>
    import Header from "../Global/Header/Header.vue";
    import Taskbar from "../Global/Taskbar.vue";
    import HeaderSearch from "../Global/Header/HeaderSearch.vue";
    import Recruit from "../Global/Recruit/Recruit.vue";
    import IndexSwiper from "./IndexSwiper.vue"
    import IndexAdvertisement from "./IndexAdvertisement.vue";
    import IndexLeadersSellers from "./IndexLeadersSellers.vue";
    import NavSwitch from "../Global/NavSwitch.vue";
    import Api from "../../utils/Api";
    import wx from 'weixin-js-sdk';


    export default {
        name: "Index",
        components: {
            NavSwitch,
            IndexAdvertisement,
            Recruit, IndexLeadersSellers, HeaderSearch, Taskbar, Header, IndexSwiper
        },
        data: function () {
            return {
                leaders: {
                    title: "优秀领队",
                    list: [
                        {image: "images/img_01@2x.png", link: "", name: "阿正", id: 1},
                        {image: "images/img_03@2x.png", link: "", name: "Hero丶", id: 1}
                    ],
                    join: {description: "成为领队", count: '', link: "", moreLink: ""}
                },
                sellers: {
                    title: "诚信商家",
                    list: [
                        {image: "images/img_04@2x.png", link: "", name: "米乐星", id: 1},
                        {image: "images/img_06@2x.png", link: "", name: "哆来咪", id: 1},
                    ],
                    join: {description: "成为商家", count: ''}
                },
                list: ['最新招聘', '最热招聘', '红包招聘', '诚信招聘'],
                jobs: {
                    newest: [],
                    hottest: [],
                    redBag: [],
                    cx: [],
                },
                info: {
                    numsMap: {
                        viewNum: '',
                        safeNum: '',
                        resumeNum: '',
                    },
                }
            }
        },
        methods: {
            setJobs(response, target) {
                if (response && response.data.data.list) {
                    response.data.data.list.forEach(item => target.push(item));
                }
            },
            async setInfo(response) {
                if (response) {
                    let data = response.data.data;
                    this.info = data;
                    data.shopMap.shopInfo.forEach(v => {
                        let t = {
                            image: v.headPath,
                            name: v.nickName,
                            id: v.shopId,
                        };
                        this.sellers.list.push(t);
                    });
                    this.sellers.join.count = data.shopMap.shopNum;
                    this.sellers.join.has = data.shopMap.hasShop === 'YES';
                    this.sellers.join.description = data.shopMap.hasShop === 'YES' ? "我的商家" : "成为商家";
                    data.teamMap.teamInfo.forEach(v => {
                        let t = {
                            image: v.headPath,
                            name: v.nickName,
                            id: v.teamId,
                        };
                        this.leaders.list.push(t);
                    });
                    this.leaders.join.count = data.teamMap.teamNum;
                    this.leaders.join.has = data.teamMap.hasTeam === 'YES';
                    this.leaders.join.description = data.teamMap.hasTeam === 'YES' ? "我的领队" : "成为领队";

                }
            },
        },
        async beforeRouteEnter(to, from, next) {
            let p0 = Api.Index.recruit({city: "成都", page: 1, limit: 5, type: 'NEWEST'}).response();
            let p1 = Api.Index.recruit({city: "成都", page: 1, limit: 5, type: 'HOTTEST'}).response();
            let p2 = Api.Index.recruit({city: "成都", page: 1, limit: 5, type: 'RED_RESUME'}).response();
            let p3 = Api.Index.recruit({city: "成都", page: 1, limit: 5, type: 'CX'}).response();
            let p4 = Api.Index.Info().response();
            let r = [];
            r[0] = await p0;
            r[1] = await p1;
            r[2] = await p2;
            r[3] = await p3;
            r[4] = await p4;
            next(vm => {
                vm.setJobs(r[0], vm.jobs.newest);
                vm.setJobs(r[1], vm.jobs.hottest);
                vm.setJobs(r[2], vm.jobs.redBag);
                vm.setJobs(r[3], vm.jobs.cx);
                vm.setInfo(r[4]);
            });
        },
    }
</script>

<style lang="less">
    @import "../../variables.less";

    div.Index {
        padding-top: unit(@header-height / @base-font, rem);
        padding-bottom: unit(@taskbar-height / @base-font, rem);
        background-color: #F8F8F8;

        div.Header {
            address {
                flex: none;
                color: #FFF;
                font-size: unit(28px / @base-font, rem);
                margin: 0 unit(15px / @base-font, rem);
            }

            i.Location {
                .background-picture-cover();
                background-image: url("images/04_homepage/icon_location@{scale}.png");
                width: unit(25px / @base-font, rem);
                height: unit(32px / @base-font, rem);
            }
        }

        div.IndexStatistics {
            padding: 0 unit(@layout-padding / @base-font, rem);
            height: unit(60px / @base-font, rem);

            ul {
                position: relative;
                top: unit(-10px / @base-font, rem);
                display: flex;
                justify-content: space-between;
                align-items: center;
                z-index: 3;
                background: white;
                height: 100%;
                padding: 0 unit(20px / @base-font, rem);
                box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.1);

                li {
                    font-size: unit(24px / @base-font, rem);
                    color: #585858;
                }
            }
        }

        ul.IndexEntry {
            padding: 0 unit(@layout-padding / @base-font , rem);
            height: unit(132px / @base-font, rem);
            display: flex;
            justify-content: space-between;
            align-items: center;

            li {
                text-align: center;
                a {
                    display: flex;
                    align-items: center;
                    flex-direction: column;

                    h1 {
                        font-size: unit(24px / @base-font, rem);
                        color: #010101;
                        margin-top: unit(10px / @base-font, rem);
                    }

                    div {
                        background-size: contain;
                        background-position: center center;
                        background-repeat: no-repeat;
                        width: unit(75px / @base-font, rem);
                        height: unit(60px / @base-font, rem);
                    }
                }

            }
        }

        a.IndexNews {
            background-color: white;
            margin: unit(20px / @base-font, rem) unit(36px / @base-font, rem);
            padding: unit(30px / @base-font, rem) unit(10px / @base-font, rem);
            box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.1);
            display: flex;

            h1 {
                font-size: unit(30px / @base-font, rem);
                color: white;
                text-align: center;
                border-radius: 5px;
                background-color: #f19149;
                padding: unit(5px / @base-font, rem) unit(10px / @base-font, rem);
                line-height: 1.2;
                margin-right: unit(32px / @base-font, rem);
            }

            h2 {
                color: #585858;
                font-size: unit(28px / @base-font, rem);
                line-height: 1.5;
            }
        }

        div.IndexRecruit {
            background-color: white;
            padding: unit(25px / @base-font, rem) unit(@layout-padding / @base-font, rem);
            > ul {
                display: flex;
                justify-content: space-between;
                margin-bottom: unit(37px / @base-font, rem);
                padding: 0;
                li {
                    font-size: unit(28px / @base-font, rem);
                    line-height: 2;
                    padding: 0;
                }
                li.IndexRecruitActive {
                    border-bottom: 3px solid red;
                }
            }
        }

    }
</style>
