<template>
    <div class="readonly-view">
        <transition appear mode="out-in">
            <div>
                <!-- 用户头像 -->
                <v-head-pic :opts="info"></v-head-pic>
                <!--环形进度条-->
                <v-circle-progress
                        :parentValue="circleProgress.value"
                        :radius="circleProgress.radius"
                        :borderWidth="circleProgress.borderWidth"
                        :borderColor="circleProgress.borderColor"></v-circle-progress>
                <!-- 步骤条 -->
                <v-steps>
                    <v-step :key="index" v-for="(item,index) in bar" :inStep=item.instep :index="index" :itemLength="bar.length" :stepTitle=item.title :active="item.active"></v-step>
                </v-steps>
                <v-draggable v-model="draggable.val" :opts="draggable.opts"></v-draggable>
            </div>
        </transition>
    </div>
</template>
<script>
import VSteps from '../components/readonly/Steps'
import VStep from '../components/readonly/Step'
import VHeadPic from '../components/readonly/HeadPic'
import VCircleProgress from '../components/readonly/CircleProgress'
import VDraggable from '../components/readonly/Draggable'

export default {
    name: 'readonlyView',

    components: {
        VStep,
        VSteps,
        VHeadPic,
        VCircleProgress,
        VDraggable
    },

    data() {
        return {
            draggable:{
                opts:{
                    name:"X某某某X",
                    month:12,
                    tags:[
                        '社会媒体类',
                        '备选指标',
                        '订单处理类',
                        '商品指标',
                        '社会媒体类',
                        '备选指标',
                        '订单处理类',
                        '商品指标',
                        '社会媒体类',
                        '备选指标',
                        '订单处理类',
                        '商品指标'
                    ],
                },
                val:[
                    {
                        "name": "前台接待客户满意度",
                        "detail":"(接待不满意客户/接待总客户数)*100%",
                        "order": 1,
                        "fixed": false,
                        "showForm":false
                    },
                    {
                        "name": "前厅管理有效性",
                        "detail":"一定周期内工作出错率低于规定比例",
                        "order": 2,
                        "fixed": false,
                        "showForm":false
                    },
                    {
                        "name": "前厅工作达成率",
                        "detail":"(接待不满意客户/接待总客户数)*100%",
                        "order": 3,
                        "fixed": false,
                        "showForm":false
                    },
                    {
                        "name": "前厅经营成本节省率",
                        "detail":"一定周期内工作出错率低于规定比例",
                        "order": 4,
                        "fixed": false,
                        "showForm":false
                    },
                    {
                        "name": "前台接待客户满意度",
                        "detail":"(接待不满意客户/接待总客户数)*100%",
                        "order": 5,
                        "fixed": false,
                        "showForm":false
                    }
                ]
            },

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
<style scope lang=scss>
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
</style>
