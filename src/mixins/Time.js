import fecha from 'fecha';

export default {
    methods: {
        timeDescription(date) {
            let now = new Date();
            let seconds = (now - date) / 1000;
            if (seconds < 60) {
                return Math.floor((now - date) / 1000) + '秒前';
            } else if (seconds < 60 * 60) {
                return Math.floor((now - date) / 1000 / 60) + '分钟前';
            } else if (seconds >= 60 * 60 && seconds <= 3600 * 12) {
                return Math.floor((now - date) / 1000 / 60 / 60) + '小时前';
            } else {
                return fecha.format(date, 'YYYY年M月D日 HH:mm');
            }
        },
    }
}
