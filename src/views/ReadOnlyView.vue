<template>
    <div class="readonly-view">
        <transition appear mode="out-in">
            <div>
                <div class="wrap-border">
                    <h4>用户画像</h4>
                    <!-- 用户头像 -->
                    <v-head-pic :opts="info"></v-head-pic>
                </div>
                <div class="wrap-border">
                    <h4>环形进度</h4>
                    <!--环形进度条-->
                    <v-circle-progress
                            :parentValue="circleProgress.value"
                            :radius="circleProgress.radius"
                            :borderWidth="circleProgress.borderWidth"
                            :borderColor="circleProgress.borderColor"></v-circle-progress>
                </div>
                <div class="wrap-border">
                    <h4>步骤条</h4>
                    <!-- 步骤条 -->
                    <v-steps>
                        <v-step :key="index" v-for="(item,index) in bar" :inStep=item.instep :index="index" :itemLength="bar.length" :stepTitle=item.title :active="item.active"></v-step>
                    </v-steps>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import VSteps from '../components/readonly/Steps'
import VStep from '../components/readonly/Step'
import VHeadPic from '../components/readonly/HeadPic'
import VCircleProgress from '../components/readonly/CircleProgress'

export default {
    name: 'readonlyView',

    components: {
        VStep,
        VSteps,
        VHeadPic,
        VCircleProgress,
    },

    data() {
        return {
            //用户头像及信息
            info: {
                imgUrl: 'https://cn.vuejs.org/images/logo.png',
                userName: '我是Vue',
                userDpt: '技术部',
                userTel: '13846668888',
                userQq: '1234567890'
            },
            //svg进度条,radius圆半径，value进度(0~1)，borderWidth边框宽度,borderColor边框颜色
            circleProgress:{
                value: 0.6,
                radius: 60,
                borderWidth: 6,
                borderColor: '#77d4ff'
            },
            //步骤条
            bar: [{
                instep: true,
                title: "已受理",
                active: false
            }, {
                instep: true,
                title: "已处理",
                active: false
            }, {
                instep: true,
                title: "已确认",
                active: false
            }, {
                instep: true,
                title: "进行中",
                active: true
            }, {
                instep: false,
                title: "待完成",
                active: false
            }]
        };
    }

}
</script>
<style lang=scss rel="stylesheet/scss">
.v-enter {
    opacity: 0;
    transform: translateY(-.5rem);
}

.v-enter-active {
    transition: all .5s;
}

.v-leave-active {
    opacity: 0;
    transition: all .5s;
    transform: translateY(-.5rem);
}
.wrap-border{
    h4{
        text-align: center;
        font-size: 16px;
        color: #ccc;
        line-height: 40px;
    }
    border: 1px solid #cdcdcd;
    padding: 0 20px 20px 20px;
    border-radius:10px;
    margin-bottom: 20px;
}
</style>
