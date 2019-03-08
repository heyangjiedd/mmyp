export default {
    props: {
        value: null,
    },

    data: function () {
        return {
            val: null,
        }
    },
    mounted() {
        this.val = this.value;
    },
    watch: {
        val(newVal) {
            this.$emit('input', newVal);
        },
        value(newVal) {
            this.val = newVal;
        }
    }
}
