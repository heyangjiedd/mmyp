import axios from 'axios';
import qs from 'query-string';

let host = 'http://wx.mmyoupin.com';

class Response {
    constructor(promise) {
        this.promise = promise;
    }

    async response() {
        let response = await this.promise;
        if (response.data.code == 200) {
            return response;
        } else {
            debugger
            alert(response.data.message);
            return false;
        }
    }
}

export default class Api {

    static async Get(url, params) {
        let request = axios({
            method: 'get',
            url: url,
            params: params,
            headers: {
                'openId': 1,
            },
        });
        try {
            let response = await request;
            return response;
        } catch (e) {
            console.log(response);
        }
    }

    static async Post(url, params) {
        let request = axios({
            method: 'Post',
            url: url,
            data: qs.stringify(params),
            headers: {
                'openId': 1,
            },
        });
        try {
            let response = await request;
            return response;
        } catch (e) {
            console.log(response);
        }
    }

    static async Upload(formData) {
        let request = axios.post(host + '/mmyp/file/uploadImg', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        try {
            let response = await request;
            if (response.data.code === 200) {
                return response;
            } else {
                throw new Error('上传文件失败！');
            }
        } catch (e) {
            alert('上传文件失败！');
            throw new Error(e);
        }
    }

    static Index = {
        banner(params) {
            return new Response(Api.Get(host + '/mmyp/banner/list', params));
        },
        recruit(params) {
            return new Response(Api.Post(host + '/mmyp/job/getList', params));
        },
        Info(params) {
            return new Response(Api.Get(host + '/mmyp/common/getIndexInfo', params));
        }
    };

    static My = {
        Resume: {
            query(params) {
                return new Response(Api.Get(host + '/mmyp/user/getResume', params));

            },
            save(params) {
                return new Response(Api.Post(host + '/mmyp/user/saveResume', params));
            }
        },
        Wallet: {
            query(params) {
                return new Response(Api.Get(host + '/mmyp/userAccount/getAccount', params));

            },
            bill(params) {
                return new Response(Api.Get(host + '/mmyp/userAccount/getAccountDetail', params));
            },
            recharge(params) {
                return new Response(Api.Post(host + '/mmyp/pay/recharge', params));
            }
        }
    };

    static City = {
        query(params) {
            return new Response(Api.Post(host + '/mmyp/region/getByParentCode', params));
        }
    };

    static Tag = {
        values: [
            {id: 1, name: "及时到岗", color: "#8A79FF", selected: false},
            {id: 2, name: "服从安排", color: "#FF69AB", selected: false},
            {id: 3, name: "没经验", color: "#7EDBB9", selected: false},
            {id: 4, name: "夜场强人", color: "#8A79FF", selected: false},
            {id: 5, name: "急用钱", color: "#8A79FF", selected: false},
            {id: 6, name: "要求保障", color: "#FF69AB", selected: false},
            {id: 7, name: "包吃包住", color: "#8A79FF", selected: false},
            {id: 8, name: "包车费", color: "#8A79FF", selected: false},
            {id: 9, name: "不出远门", color: "#8A79FF", selected: false},
            {id: 10, name: "中介勿扰", color: "#FF69AB", selected: false},
            {id: 11, name: "不喝酒", color: "#8A79FF", selected: false},
            {id: 12, name: "可异地", color: "#8A79FF", selected: false}
        ],
        getValues() {
            let t = [];
            Api.Tag.values.forEach(v => t.push(Object.assign({}, v)));
            return t;
        },
        toString(tags) {
            let t = [];
            tags.forEach(tag => {
                t.push(tag.name);
            });
            if (t.length === 0) {
                return '';
            }
            return t.join(',');
        },
        parseString(str) {
            let tags = [];
            let tagStrs = str.split(',');
            Api.Tag.values.forEach(value => {
                let t = {};
                Object.assign(t, value);
                if (tagStrs.find(str => str === value.name)) {
                    t.selected = true;
                }
                tags.push(t);
            });
            return tags;
        },
        colors(index) {
            let colors = ['#8A79FF', '#FF69AB', '#7EDBB9', '#8A79FF'];
            return colors[index % colors.length];
        },
        getColorTag(str) {
            let tags = Api.Tag.parseString(str);
            let t = [];
            let count = 0;
            tags.forEach((tag) => {
                if (tag.selected) {
                    tag.color = Api.Tag.colors(count);
                    t.push(tag);
                    count++;
                }
            });
            return t;
        },
    };

    static Sign = {
        query(params) {
            return new Response(Api.Get(host + '/mmyp/user/getSignInfo', params));
        },
        sign(params) {
            return new Response(Api.Post(host + '/mmyp/user/sign', params));
        }
    };

    static Seller = {
        query(params) {
            return new Response(Api.Post(host + '/mmyp/shop/getList', params));
        },
        join(params) {
            return new Response(Api.Get(host + '/mmyp/shop/getMyShop', params));
        },
        save(params) {
            return new Response(Api.Post(host + '/mmyp/shop/saveShop', params));
        },
        getById(params) {
            return new Response(Api.Post(host + '/mmyp/shop/getDetail', params));
        },
        getJobsById(params) {
            return new Response(Api.Post(host + '/mmyp/shop/getShopJobList', params));
        },
        getSafesById(params) {
            return new Response(Api.Post(host + '/mmyp/shop/getShopSafeList', params));
        },
        publish(params) {
            return new Response(Api.Post(host + '/mmyp/shop/saveJob', params));
        }
    };

    static Publish = {
        query(params) {
            return new Response(Api.Post(host + '/mmyp/shop/getJobList', params));
        },
        delete(params) {
            return new Response(Api.Post(host + '/mmyp/shop/deleteJob', params));
        },
        top(params) {
            return new Response(Api.Post(host + '/mmyp/shop/topJob', params));
        }
    };

    static Leaders = {
        query(params) {
            return new Response(Api.Post(host + '/mmyp/team/getList', params));
        },
        getById(params) {
            return new Response(Api.Post(host + '/mmyp/team/getMemberList', params));
        },
    };

    static Resume = {
        query(params) {
            return new Response(Api.Post(host + '/mmyp/user/getList', params));
        },
        getById(id) {
            return new Response(Api.Post(host + '/mmyp/user/getUserById', {userId: id}));
        },
        submit(params) {
            return new Response(Api.Post(host + '/mmyp/job/delivery', params));
        }
    };

    static Team = {
        my(params) {
            return new Response(Api.Get(host + '/mmyp/team/getMyJoin', params));
        },
        create(params) {
            return new Response(Api.Post(host + '/mmyp/team/createTeam', params));
        },
        edit(params) {
            return new Response(Api.Get(host + '/mmyp/team/getMyCreate', params));
        },
        quit(params) {
            return new Response(Api.Post(host + '/mmyp/team/quitTeam', params));
        },
    };

    static Message = {
        Employee: {
            query(params) {
                return new Response(Api.Post(host + '/mmyp/record/getInvitedList', params));
            },
            safe(params) {
                return new Response(Api.Post(host + '/mmyp/order/getUserList', params));
            }
        },
        Boss: {
            queryResume(params) {
                return new Response(Api.Post(host + '/mmyp/record/getReceivedList', params));
            },
            getResumeById(params) {
                return new Response(Api.Post(host + '/mmyp/record/viewReceived', params));
            },
        },
        Status: {
            'INIT': {description: "新建", color: "#000000"},
            'WAIT_VIEW': {description: "待查看", color: "#000000"},  // 1
            'WAIT_INVITE': {description: "待邀请", color: "#000000"},
            'INVITED': {description: "已邀请", color: "#000000"},
            'NEED_SAFE': {description: "要求保障", color: "#D62222"}, // 1
            'WAIT_VALIDATE': {description: "待验证", color: "#DC4747"},  //
            'SAFEING': {description: "正在保障", color: "#3FB244"},  // 1
            'SUCCESS': {description: "成功", color: "#000000"},
            'FAIL': {description: "失败", color: "#000000"},
            'WAIT_SAFE': {description: "待保障", color: "#000000"},
            'WAIT_PAY': {description: "等待老板支付", color: "#000000"},
        }
    };
}
