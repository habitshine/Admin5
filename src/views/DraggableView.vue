<template>
    <div class="readonly-view">
        <transition appear mode="out-in">
            <div>
                <v-draggable v-model="draggable.val" :opts="draggable.opts"></v-draggable>
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

                        tagsNew:[
                            {
                                tag:'社会媒体类',
                                val:[
                                    {
                                        "name": "前台接待客户满意度11111",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 1,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前厅管理有效性11111",
                                        "detail":"一定周期内工作出错率低于规定比例",
                                        "order": 2,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前厅工作达成率1111",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 3,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前厅经营成本节省率11111",
                                        "detail":"一定周期内工作出错率低于规定比例",
                                        "order": 4,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前台接待客户满意度1111",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 5,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前台接待客户满意度1111",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 6,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前台接待客户满意度1111",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 7,
                                        "fixed": false,
                                        "showForm":false
                                    }
                                ]
                            },
                            {
                                tag:'备选指标类',
                                val:[
                                    {
                                        "name": "前台接待客户满意度22222",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 1,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前厅管理有效性22222",
                                        "detail":"一定周期内工作出错率低于规定比例",
                                        "order": 2,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前厅工作达成率22222",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 3,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前厅经营成本节省率22222",
                                        "detail":"一定周期内工作出错率低于规定比例",
                                        "order": 4,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前台接待客户满意度22222",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 5,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前台接待客户满意度22222",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 6,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前台接待客户满意度22222",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 7,
                                        "fixed": false,
                                        "showForm":false
                                    }
                                ]
                            },
                            {
                                tag:'订单处理类',
                                val:[
                                    {
                                        "name": "前台接待客户满意度33333",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 1,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前厅管理有效性33333",
                                        "detail":"一定周期内工作出错率低于规定比例",
                                        "order": 2,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前厅工作达成率33333",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 3,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前厅经营成本节省率33333",
                                        "detail":"一定周期内工作出错率低于规定比例",
                                        "order": 4,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前台接待客户满意度33333",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 5,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前台接待客户满意度33333",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 6,
                                        "fixed": false,
                                        "showForm":false
                                    },
                                    {
                                        "name": "前台接待客户满意度33333",
                                        "detail":"(接待不满意客户/接待总客户数)*100%",
                                        "order": 7,
                                        "fixed": false,
                                        "showForm":false
                                    }
                                ]
                            }
                        ],

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
                    }
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
