<template>
    <div class="com-time">
        <input type="text" class="form-control" placeholder="小时" :value="parseInt(time[0]) + '点'" @change="changeHour" @focus="selectAll">
        <input type="text" class="form-control" placeholder="分钟" :value="parseInt(time[1]) + '分'" @change="changeMinute" @focus="selectAll">
    </div>
</template>
<script>
export default {
    name: 'time',

    props: {
        opts: {

        },

        value: {
            type: String
        }
    },

    data() {
        return {};
    },

    methods: {
        selectAll(e){
            e.target.select();
        },

        changeHour(e) {
            var hour = e.target.value;
            if(1 > hour) {
                hour = 1;
            } else if(24 < hour) {
                hour = 24;
            }
            this.$emit('input', hour + ':' + this.time[1]);
        },

        changeMinute(e) {
            var minute = e.target.value;
            if(1 > minute) {
                minute = 1;
            } else if(60 < minute) {
                minute = 0;
            }
            this.$emit('input', this.time[0] + ':' + minute);
        }
    },

    computed: {
        time(){
            return this.value.split(':');
        }
    }
}
</script>
<style scoped lang="scss">
.com-time {
    overflow: hidden;
    input {
        width: 60px;
        float: left;
    }
    input+input {
        margin-left: 5px;
    }
}
</style>
