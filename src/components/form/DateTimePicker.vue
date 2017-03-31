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
        this.fp = new Flatpickr(document.querySelector('.flatpickr'), {
            locale: zh,
            ...this.opts.plusOptions,
            onChange: (selectedDates, dateStr)=> {
                this.fp.close();
                this.$emit('input', dateStr);
            }
        });
    },
    destroyed() {
        this.fp.destroy()
        this.fp = null
    }
}
</script>
<style scoped lang="scss">

</style>
