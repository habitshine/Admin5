<template>
    <div>
        <h1>{{which}}</h1>
        <v-tree v-model="which" :data="tree"></v-tree>
    </div>
</template>
<script>
import VTree from '../components/form/Tree'
export default {
    name: 'testView',

    data() {
        return {
            which: 0,

            tree: [{
                "value": 1,
                "label": "欧洲",
                "open": true,
                "children": [{
                    "value": 11,
                    "label": "希腊",
                    "open": true,
                    "children": [{
                        "value": 111,
                        "label": "雅典"
                    }]
                }, {
                    "value": 22,
                    "label": "意大利",
                    "open": true,
                    "children": [{
                        "value": 222,
                        "label": "都灵"
                    }]
                }]
            }, {
                "value": 3,
                "label": "亚洲",
                "open": true,
                "children": [{
                    "value": 33,
                    "label": "中国",
                    "open": true,
                    "children": [{
                        "value": 331,
                        "label": "黑龙江",
                        "open": true,
                        "children": [{
                            "value": 3311,
                            "label": "哈尔滨"
                        }, {
                            "value": 3312,
                            "label": "齐齐哈尔"
                        }, {
                            "value": 3313,
                            "label": "牡丹江"
                        }]
                    }, {
                        "value": 122,
                        "label": "西安",
                    }, {
                        "value": 123,
                        "label": "武汉",
                    }]
                }, {
                    "value": 44,
                    "label": "日本",
                    "open": true,
                    "children": [{
                        "value": 99,
                        "label": "东京"
                    }]
                }, {
                    "value": 100,
                    "label": "韩国"
                }]
            }, {
                "value": 8,
                "label": "地中海",
                "disable": true
            }]
        }
    },

    components: {
        VTree
    }
}
</script>
<style lang=scss scope>
</style>
