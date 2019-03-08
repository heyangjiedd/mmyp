import "core-js/modules/es6.promise";           //  polyfill safari
import "core-js/modules/es6.array.find";        //  polyfill safari
import "core-js/modules/es6.array.find-index";  //  polyfill safari
import "./index.less";

import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        show: {
            loading: false
        },
        user: {
            data: {
                wx: {}
            }
        }
    },
});

import App from "./components/App.vue";
import Index from "./components/Index/Index.vue";
import Publish from "./components/Publish/Publish.vue";
import PublishView from "./components/Publish/PublishView.vue";
import PublishSubmit from "./components/Publish/PublishSubmit.vue";
import Messages from "./components/Messages/Messages.vue";
import Boss from "./components/Messages/Boss.vue";
import BossViewResume from "./components/Messages/BossViewResume.vue";
import BossGuarantee from "./components/Messages/BossGuarantee.vue";
import MessageEmployee from "./components/Messages/MessageEmployee.vue";
import MessageEmployeeInvitation from "./components/Messages/MessageEmployeeInvitation.vue";
import MessageLeader from "./components/Messages/MessageLeader.vue";
import MessageLeaderInvitation from "./components/Messages/MessageLeaderInvitation.vue";
import Team from "./components/Team/Team.vue";
import TeamMy from "./components/Team/TeamMy.vue";
import TeamEdit from "./components/Team/TeamEdit.vue";
import My from "./components/My/My.vue";
import MyAgent from "./components/My/MyAgent.vue";
import MyAgentRank from "./components/My/MyAgentRank.vue";
import MyAgentFans from "./components/My/MyAgentFans.vue";
import MyAgentInvite from "./components/My/MyAgentInvite.vue";
import MyResume from "./components/My/MyResume.vue";
import MyBill from "./components/My/MyBill.vue";
import MyWallet from "./components/My/MyWallet.vue";
import MyWalletRecharge from "./components/My/MyWalletRecharge.vue";
import MyWalletWithdraw from "./components/My/MyWalletWithdraw.vue";
import MyContact from "./components/My/MyContact.vue";
import Leaders from "./components/Leaders/Leaders.vue";
import Leader from "./components/Leaders/Leader.vue";
import News from "./components/News/News.vue";
import NewsRecruit from "./components/News/NewsRecruit.vue";
import ResourceCompany from "./components/ResourceCompany/ResourceCompany.vue";
import Resume from "./components/Resume/Resume.vue";
import Resumes from "./components/Resume/Resumes.vue";
import Sellers from "./components/Sellers/Sellers.vue";
import Seller from "./components/Sellers/Seller.vue";
import SellerJoin from "./components/Sellers/SellerJoin.vue";
import Sign from "./components/Sign/Sign.vue";
import SignService from "./components/Sign/SignService.vue";

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {path: "/", component: Index},
        {path: "/Messages", component: Messages},
        {path: "/Messages/Boss", component: Boss},
        {path: "/Messages/Boss/ViewResume/:id", component: BossViewResume},
        {path: "/Messages/Boss/Guarantee/:id", component: BossGuarantee},
        {path: "/Messages/Employee", component: MessageEmployee},
        {path: "/Messages/Leader", component: MessageLeader},
        {path: "/Messages/Employee/Invitation/:id", component: MessageEmployeeInvitation},
        {path: "/Messages/Leader/Invitation/:id", component: MessageLeaderInvitation},
        {path: "/Publish", component: Publish},
        {path: "/Publish/View", component: PublishView},
        {path: "/Publish/Submit", component: PublishSubmit},
        {path: "/Team", component: Team},
        {path: "/Team/My", component: TeamMy},
        {path: "/Team/Edit", component: TeamEdit},
        {path: "/My", component: My},
        {path: "/My/Agent", component: MyAgent},
        {path: "/My/Agent/Rank", component: MyAgentRank},
        {path: "/My/Agent/Fans", component: MyAgentFans},
        {path: "/My/Agent/Invite", component: MyAgentInvite},
        {path: "/My/Resume", component: MyResume},
        {path: "/My/Bill", component: MyBill},
        {path: "/My/Wallet", component: MyWallet},
        {path: "/My/Wallet/Recharge", component: MyWalletRecharge},
        {path: "/My/Wallet/Withdraw", component: MyWalletWithdraw},
        {path: "/My/Contact", component: MyContact},
        {path: "/Leaders/All", component: Leaders},
        {path: "/Leaders/:id", component: Leader},
        {path: "/News/All", component: News},
        {path: "/News/:id", component: NewsRecruit},
        {path: "/ResourceCompany", component: ResourceCompany},
        {path: "/Resume/All", component: Resumes},
        {path: "/Resume/:id", component: Resume},
        {path: "/Sellers/All", component: Sellers},
        {path: "/Sellers/Join", component: SellerJoin},
        {path: "/Sellers/:id", component: Seller},
        {path: "/Sign", component: Sign},
        {path: "/Sign/Service/:id", component: SignService},
    ],
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
});
router.beforeEach((to, from, next) => {
    store.state.show.loading = true;
    next();
});

router.afterEach((to, from, next) => {
    store.state.show.loading = false;
});


new Vue({
    el: "#Root",
    template: "<App/>",
    components: {App},
    router: router,
    store: store,
});
