<template>
    <div class="readonly-view">
        <transition appear mode="out-in">
            <div>
                <v-draggable :opts="draggable.opts"></v-draggable>
            </div>
        </transition>
    </div>
</template>
<script>
    import VDraggable from '../components/readonly/DraggableList'
    export default {
        name: 'DraggableView',
        components: {
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
                        val:[
                            [
                                {
                                    "name": "前台接待客户满意度11111111111",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "order": 1,
                                    "fixed": false,
                                    "showForm":false
                                },
                                {
                                    "name": "前厅管理有效性1111111111111",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "order": 2,
                                    "fixed": false,
                                    "showForm":false
                                }
                            ],
                            [
                                {
                                    "name": "前台接待客户满意度222222222",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "order": 1,
                                    "fixed": false,
                                    "showForm":false
                                },
                                {
                                    "name": "前厅管理有效性2222222222",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "order": 2,
                                    "fixed": false,
                                    "showForm":false
                                }
                            ],
                            [
                                {
                                    "name": "前台接待客户满意度333333333",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "order": 1,
                                    "fixed": false,
                                    "showForm":false
                                },
                                {
                                    "name": "前厅管理有效性111111111",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "order": 2,
                                    "fixed": false,
                                    "showForm":false
                                }
                            ]
                        ],
                    },


                },


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
