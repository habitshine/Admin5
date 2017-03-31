<template>
    <div class="com-table">
        <v-mask v-show="-1 == status">
            <v-spinner class="spinner"></v-spinner>
        </v-mask>

        <p v-if="0 == status" class="alert alert-warning">
            <strong>系统: </strong>{{message}}
            <a class="btn btn-link btn-xs" @click="$router.go(-1)">返回</a>
        </p>
        <div v-else class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <!-- 表格 -->
                <table class="table table-responsive table-striped table-bordered table-hover">
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
                        <tr v-if="!removeList[row[primaryKey]]"
                            v-for="(row, i) in table"  
                            :key="row[primaryKey]">
                            <td>
                                <v-checkbox style="margin:0" v-model="checkedList[i]">
                                </v-checkbox>
                            </td>
                            <slot name="row" :row="row" :primaryKey="row[primaryKey]" :index="i"></slot>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<script>
import VMask from './Mask'
import VSpinner from './Spinner'
import VCheckbox from './form/Checkbox'

export default {
    name: 'table',
    
    props: {
        table: {
            type: Array
        },

        status: {
            type: Number
        },

        message: {
            type: String
        },

        primaryKey: {
            type: String,
            require: true
        },

        activePrimaryKey: {
            type: [String, Number]
        },

        action: {
            type: String
        },

        value: {
            type: Array
        }
    },

    data() {
        return {
            allSelect: false,
            checkedList: [],
            removeList: {} // 存储删除行的主键{ArrayLike}
        }
    },

    watch: {
        activePrimaryKey(value){
            if('remove' == this.action) {
                this.removeList[value] = true;
            }

        },


        checkedList(value) {
            var array = [];
            this.table.forEach((item, i) => {
                if (value[i]) {
                    array.push(item[this.primaryKey]);
                }
            });
            this.$emit('input', array);
        },

        status(value) {
            if (1 == value) {
                this.table.forEach(row => {
                    // 初始化checkbox状态映射
                    this.checkedList.push(false);
                });
            }
            // 清空总checkbox
            this.allSelect = false;

            // 清空行checkbox
            this.checkedList = this.checkedList.map(bool => false);

            // 清空v-model
            this.$emit('input', []);
        }
    },

    methods: {
        selectAll() {
            var bool = !this.allSelect;

            this.checkedList = this.checkedList.map(() => {
                return !bool;
            });
        }
    },

    components: {
        VMask,
        VSpinner,
        VCheckbox
    }
};
</script>
<style scoped lang="scss">
.blur{-webkit-filter:blur(2px);}
.com-table {
    min-height: 200px;
    overflow: hidden;
    position: relative;
    .spinner{background: rgba(0,0,0,.8);display: table;margin:10% auto;padding: 15px 0;border-radius: 8px;box-shadow: 1px 2px 3px rgba(0,0,0,.2);}


.tr-enter {
    opacity: 0;
    transform: translateX(-.5rem);
}

.tr-enter-active {
    transition: all .5s;
}

.tr-leave-active {
    opacity: 0;
    transition: all .5s;
    transform: translateX(-.5rem);
}


}

</style>
