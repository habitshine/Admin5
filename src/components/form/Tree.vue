<template>
    <ul class="com-tree">
        <li v-for="(item, i) in data">
            <!-- 有子节点 -->
            <template v-if="undefined != item.children">
                <div class="node" :style="{paddingLeft: level * paddingIndex + 'px'}" @click="toggle(item)">
                    <a>{{item.label}}-{{item.value}} </a>
                    <i class="fa fa-caret-right" :class="item.open && 'rotate'"></i>
                </div>
                <v-tree :level="level + 1" v-show="item.open" :data="item.children" @input="bubble">
                </v-tree>
            </template>
            <!-- 无子节点 -->
            <template v-else>
                <div @click="select(item)" class="node" :style="{paddingLeft: level * paddingIndex + 'px'}">
                    <a>{{item.label}}-{{item.value}} </a>
                </div>
            </template>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'tree',

    beforeCreate: function() {
        this.$options.components.VTree = require('./Tree');
    },

    props: {
        data: {
            type: Array
        },

        value: {

        },

        level: {
            type: Number,
            default () {
                return 0;
            }
        }
    },

    data() {
        return {
            paddingIndex: 30
        };
    },

    methods: {
        toggle(item) {
            item.open = !item.open;
        },

        select(item) {
            this.$emit('input', item.value);
        },
        /**
         * 冒泡value到父组件
         * @param  {Any} value 
         */
        bubble(value) {
            this.$emit('input', value);
        }
    }
}
</script>
<style scoped lang=scss>
ul.com-tree {
    >li {
        overflow: hidden;
        .node {
            padding: 5px 15px;
            overflow: hidden;
            &:hover {
                cursor: pointer;
                background: #ccc;
            }
            >a {
                font-size: 14px;
                margin: 0;
                text-decoration: none;
                display: block;
                height: 20px;
                float: left;
                color: #444;
            }
            >i {
                margin-left: 5px;
                transition: all .3s;
                &.rotate {
                    transform: rotate(90deg);
                }
            }
        }
    }
}
</style>
