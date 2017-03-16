<template>
    <div class="com-date-time-picker">
        <input class="form-control flatpickr" :placeholder="opts.placeholder" :value="value" />
    </div>
</template>
<script>
import Flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
import {zh} from 'flatpickr/dist/l10n/zh.js';
export default {
    name: 'DateTimePicker',

    props: {
        value: {
            type: String
        },
        opts: {
            type: Object
        }
    },

    data() {
        return {
            fp: null
        };
    },

    mounted() {
        var _this = this;
        this.fp = new Flatpickr(document.querySelector('.flatpickr'), {
            locale: zh,
            dateFormat: 'Y-m-d H:i:S',
            enableTime: true,
            // inline: true,
            time_24hr: true,
            onChange(selectedDates, dateStr) {
                _this.fp.close();
                _this.$emit('input', dateStr);
            }
        });
    },
    destroyed() {
        this.fp.destroy()
        this.fp = null
    },

    methods: {

    }
}
</script>
<style scoped lang=scss>
.com-date-time-picker {}
</style>
