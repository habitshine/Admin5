<template>
  <h5 class="filter-title">{{data.title}}</h5>
  <div class="input-daterange input-group form-group">
    <input readonly v-begin-time-range v-model="data.children.begin.value"  type="text" class="form-control" :placeholder="data.children.begin.placeholder" />
    <span class="input-group-addon">至</span>
    <input readonly v-end-time-range="data.children.begin.value" begin="data" v-model="data.children.end.value" type="text" class="form-control":placeholder="data.children.end.placeholder" />
  </div>
</template>

<script>
import Config from '../filters.js';
export default {
    directives: {
        beginTimeRange: {
            twoWay: true,
            bind: function() {
                $(this.el).datetimepicker({
                    format: this.vm.data.format,
                    locale: 'zh-CN',
                    // sideBySide: true,
                    collapse: true,
                    showClose: true,
                    showClear: true,
                    showTodayButton: true,
                    ignoreReadonly: true,
                    tooltips: Config.tooltips,
                    icons: Config.icons
                });
            }
        },
        endTimeRange: {
            twoWay: true,
            bind: function() {
                $(this.el).datetimepicker({
                    // sideBySide: true,
                    format: this.vm.data.format,
                    locale: 'zh-CN',
                    collapse: true,
                    showClose: true,
                    showClear: true,
                    showTodayButton: true,
                    ignoreReadonly: true,
                    tooltips: Config.tooltips,
                    icons: Config.icons
                });
            },
            update: function(val){
                if('' !== val) {
                    $(this.el).data("DateTimePicker").minDate(val);
                    this.vm.data.children.end.value = val;
                }
            }
        }
    },
    props: {
        data: {
            twoWay: true
        }
    }
}
</script>

<style scoped lang=scss>
input{font-size: 14px;}
</style>
