<template>
    <FlexColumn class="FormBirthday">
        <FlexRow>
            <FormRequired/>
            <span class="FormSelectName">出生年月</span>
        </FlexRow>

        <FlexRow class="FormBirthdaySelect">
            <FormSelect :options="year" name="出生年月" v-model="year_index"/>
            <FormSelect :options="month" v-model="month_index"/>
        </FlexRow>
    </FlexColumn>
</template>

<script>
    import FormSelect from "./FormSelect.vue";
    import FormRequired from "./FormRequired.vue";
    import {FlexColumn, FlexRow} from "../Layout"

    export default {
        name: "FormBirthday",
        components: {
            FormSelect, FormRequired, FlexColumn, FlexRow
        },
        props: {
            date: Object
        },
        data: function () {
            return {
                year: [],
                month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                year_index: null,
                month_index: null
            }
        },
        mounted() {
            for (let i = 0; i < 30; i++) {
                this.$set(this.year, i, 2010 - i);
            }
            console.log(234);
        },
        computed: {
            dateChange() {
                return this.date.year;
            }
        },
        watch: {
            year_index(newVal) {
                this.date.year = this.year[newVal];
            },
            month_index(newVal) {
                this.date.month = this.month[newVal];
            },
            dateChange() {
                if (this.date.year) {
                    let index = this.year.findIndex(v => v === this.date.year);
                    if (index > -1) this.year_index = index;
                }
                if (this.date.month) {
                    let index = this.month.findIndex(v => v === this.date.month);
                    if (index > -1) this.month_index = index;
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../../../variables.less";

    div.FormBirthday {
        div.FormSelect:not(:last-child) {
            margin-right: unit(30px / @base-font, rem);
        }
        span.FormSelectName {
            font-size: unit(26px / @base-font, rem);
            margin-right: unit(15px / @base-font, rem);
            color: #CCCCCC;
        }

        div.FormBirthdaySelect {
            margin-top: unit(30px / @base-font, rem);
            margin-left: unit(30px / @base-font, rem);;
        }
        div.FormBirthdaySelect {
            select {
                min-width: unit(160px / @base-font, rem);
            }
        }
    }
</style>
