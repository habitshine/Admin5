<template>
    <div class="readonly-view">
        <transition appear mode="out-in">
            <div>
            <!-- 用户头像 -->
            <v-head-pic :opts="info"></v-head-pic>
            <!-- 步骤条 -->
            <v-steps>
                <v-step :key="index" v-for="(item,index) in bar" :inStep=item.instep :index="index" :itemLength="bar.length" :stepTitle=item.title :active="item.active"></v-step>
            </v-steps>
            </div>
        </transition>
    </div>
</template>
<script>
import VSteps from '../components/readonly/Steps'
import VStep from '../components/readonly/Step'
import VHeadPic from '../components/readonly/HeadPic'

export default {
    name: 'readonlyView',

    components: {
        VStep,
        VSteps,
        VHeadPic
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
