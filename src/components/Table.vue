<template>
    <div class="com-table">
        <p v-if="0 == status" class="alert alert-warning">
            <strong>系统: </strong>{{message}}
            <a class="btn btn-link btn-xs" @click="$router.go(-1)">返回</a>
        </p>
        <div v-else class="row">
            <div class="col-lg-12">
                <!-- 表格 -->
                <table class="table table-striped table-bordered table-hover">
                    <!-- 头 -->
                    <thead>
                        <tr>
                            <th @click="selectAll">
                                <v-checkbox v-model="allSelect"></v-checkbox>
                            </th>
                            <slot name="header"></slot>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(row, i) in table">
                            <transition>
                            <tr v-if="1 == row.status">
                                <td>
                                    <v-checkbox style="margin:0" v-model="booleanList[i]">
                                    </v-checkbox>
                                </td>
                                <slot name="row" :row="row" :index="i"></slot>
                            </tr>
                            </transition>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-show="-1 == status" class="spinner">
            <spinner></spinner>
        </div>
    </div>
</template>
<script>
import Spinner from './Spinner'
import VCheckbox from './form/Checkbox'

export default {
    name: 'Table',

    props: {
        table: {

        },

        status: {
            type: Number
        },

        message: {
            type: String
        },
        // 删除tr的索引
        removeIndex: {

        },

        value: {

        }
    },

    mounted() {
        // 给checkbox映射一个Boolean数组
        if (1 == this.status) {
            this.table.forEach(() => {
                // 初始化checkbox状态映射
                this.booleanList.push(false);
            });
        }

    },

    data: function() {
        return {
            allSelect: false,
            booleanList: []
        }
    },

    watch: {
        booleanList() {
            var array = [];
            this.table.forEach((item, i) => {
                if (this.booleanList[i]) {
                    array.push(item.id);
                }
            });
            this.$emit('input', array);
        },

        status() {
            // 重置总checkbox
            this.allSelect = false;

            // 重置行checkbox
            this.booleanList = this.booleanList.map((bool) => {
                return false;
            });

            // 同步到v-model
            this.$emit('input', []);
        }
    },

    methods: {
        selectAll() {
            var bool = !this.allSelect;

            this.booleanList = this.booleanList.map(() => {
                return !bool;
            });
        }
    },

    components: {
        Spinner,
        VCheckbox
    }
};
</script>
<style scoped lang=scss>
.com-table {
    position: relative;
    >.spinner {}

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
}
</style>
