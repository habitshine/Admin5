<template>
    <div class="readonly-view">
        <transition appear mode="out-in">
            <div>
                <v-draggable :opts="item" v-for="(item,key) in dragOpts.data" :key="1"></v-draggable>
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
                dragOpts:{
                    "status":1,
                    "message":"success",
                    "data":[
                        {
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
                                '备选指标'
                            ],
                            list:[
                                {
                                    "name": "前台接待客户满意度type0",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 0,
                                    "fixed": false,
                                    "type":0
                                },
                                {
                                    "name": "前厅管理有效性type0",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 1,
                                    "fixed": false,
                                    "type":0
                                },
                                {
                                    "name": "前台接待客户满意度type000000",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 2,
                                    "fixed": false,
                                    "type":0
                                },
                                {
                                    "name": "前厅管理有效性type0000777799",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 3,
                                    "fixed": false,
                                    "type":0
                                },
                                {
                                    "name": "前台接待客户满意度type1",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 4,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前台接待客户满意度type1",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 4,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前台接待客户满意度type1",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 4,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前台接待客户满意度type1",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 4,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前台接待客户满意度type1",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 4,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前厅管理有效性type1",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 5,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前台接待客户满意度type2",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 6,
                                    "fixed": false,
                                    "type":2
                                },
                                {
                                    "name": "前厅管理有效性type2",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 7,
                                    "fixed": false,
                                    "type":2
                                },
                                {
                                    "name": "前台接待客户满意度type22",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 8,
                                    "fixed": false,
                                    "type":2
                                },
                                {
                                    "name": "前厅管理有效性type22",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 9,
                                    "fixed": false,
                                    "type":2
                                },
                                {
                                    "name": "前台接待客户满意度type3",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 10,
                                    "fixed": false,
                                    "type":3
                                },
                                {
                                    "name": "前台接待客户满意度type33",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 11,
                                    "fixed": false,
                                    "type":3
                                },
                                {
                                    "name": "前厅管理有效性type3",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 12,
                                    "fixed": false,
                                    "type":3
                                },
                                {
                                    "name": "前台接待客户满意度type4",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 13,
                                    "fixed": false,
                                    "type":4
                                },
                                {
                                    "name": "前厅管理有效性type4",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 14,
                                    "fixed": false,
                                    "type":4
                                },
                                {
                                    "name": "前厅管理有效性type5",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 15,
                                    "fixed": false,
                                    "type":5
                                },
                                {
                                    "name": "前厅管理有效性type6",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 16,
                                    "fixed": false,
                                    "type":6
                                },
                                {
                                    "name": "前厅管理有效性type7",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 17,
                                    "fixed": false,
                                    "type":7
                                },
                                {
                                    "name": "前厅管理有效性type8",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 18,
                                    "fixed": false,
                                    "type":8
                                },
                                {
                                    "name": "前厅管理有效性type9",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 19,
                                    "fixed": false,
                                    "type":9
                                },

                            ],
                            list2:[
                                {
                                    "name": "前厅管理有效性type9",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 20,
                                    "fixed": false,
                                    "type":9
                                }
                            ],
                        },
                        {
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
                                '备选指标'
                            ],
                            list:[
                                {
                                    "name": "前台接待客户满意度type0",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 0,
                                    "fixed": false,
                                    "type":0
                                },
                                {
                                    "name": "前厅管理有效性type0",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 1,
                                    "fixed": false,
                                    "type":0
                                },
                                {
                                    "name": "前台接待客户满意度type000000",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 2,
                                    "fixed": false,
                                    "type":0
                                },
                                {
                                    "name": "前厅管理有效性type0000777799",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 3,
                                    "fixed": false,
                                    "type":0
                                },
                                {
                                    "name": "前台接待客户满意度type1",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 4,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前台接待客户满意度type1",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 4,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前台接待客户满意度type1",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 4,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前台接待客户满意度type1",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 4,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前台接待客户满意度type1",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 4,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前厅管理有效性type1",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 5,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前台接待客户满意度type2",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 6,
                                    "fixed": false,
                                    "type":2
                                },
                                {
                                    "name": "前厅管理有效性type2",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 7,
                                    "fixed": false,
                                    "type":2
                                },
                                {
                                    "name": "前台接待客户满意度type22",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 8,
                                    "fixed": false,
                                    "type":2
                                },
                                {
                                    "name": "前厅管理有效性type22",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 9,
                                    "fixed": false,
                                    "type":2
                                },
                                {
                                    "name": "前台接待客户满意度type3",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 10,
                                    "fixed": false,
                                    "type":3
                                },
                                {
                                    "name": "前台接待客户满意度type33",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 11,
                                    "fixed": false,
                                    "type":3
                                },
                                {
                                    "name": "前厅管理有效性type3",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 12,
                                    "fixed": false,
                                    "type":3
                                },
                                {
                                    "name": "前台接待客户满意度type4",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 13,
                                    "fixed": false,
                                    "type":4
                                },
                                {
                                    "name": "前厅管理有效性type4",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 14,
                                    "fixed": false,
                                    "type":4
                                },
                                {
                                    "name": "前厅管理有效性type5",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 15,
                                    "fixed": false,
                                    "type":5
                                },
                                {
                                    "name": "前厅管理有效性type6",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 16,
                                    "fixed": false,
                                    "type":6
                                },
                                {
                                    "name": "前厅管理有效性type7",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 17,
                                    "fixed": false,
                                    "type":7
                                },
                                {
                                    "name": "前厅管理有效性type8",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 18,
                                    "fixed": false,
                                    "type":8
                                },
                                {
                                    "name": "前厅管理有效性type9",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 19,
                                    "fixed": false,
                                    "type":9
                                },

                            ],
                            list2:[
                                {
                                    "name": "前厅管理有效性type9",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 20,
                                    "fixed": false,
                                    "type":9
                                }
                            ],
                        }
                    ]
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
