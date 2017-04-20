<template>
    <div class="com-table">
        <v-modal :value="1 != status" class="v-modal">
            <v-spinner class="v-spinner"></v-spinner>
        </v-modal>
        <p v-if="0 >= dataSource.length || 0 == status" class="alert alert-warning">{{message}}</p>
        <table v-else v-show="1 == status || -1 == status" class="table table-responsive table-hover table-bordered  table-striped">
            <!-- 头 -->
            <thead>
                <tr>
                    <th v-for="th in columns">{{th.text}}</th>
                    <th>{{actions.text}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, i) in dataSource" :key="row[primaryKey]">
                    <td v-for="th in columns">{{row[th.key]}}</td>
                    <td class="actions">
                        <a v-for="btn in actions.data" class="btn btn-xs btn-primary" @click="operateRow(btn.event, i)">
                            {{undefined != btn.textIndex && btn.text[row[btn.textIndex]] || btn.text}}
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import VModal from '../components/Dialog/Modal';
import VSpinner from '../components/Spinner'
export default {
    name: 'table',

    props: {
        // 表格数据
        dataSource: {
            type: Array,
            required: true
        },
        // 标题数据
        columns: {
            type: Array,
            required: true
        },
        // 操作按钮
        actions: {
            type: Object
        },

        status: {
            type: Number,
            required: true
        },

        message: {
            type: String,
            default: '无数据'
        },

        primaryKey: {
            type: String,
            required: true
        },

        value: {
            type: Array
        }
    },

    data() {
        return {
          
        }
    },

    watch: {

    },

    methods: {
        operateRow(eventName, _index) {
            this.$emit(eventName, {...this.dataSource[_index], _index});
            // console.log(eventName, index);
        }
    },

    components: {
        VSpinner, VModal
    }
};
</script>
<style scoped lang="scss">
.com-table {
    margin: 0;
    min-height: 200px;
    overflow: hidden;
    position: relative;
    table{margin:0;}
    .v-modal{
        position: absolute;
        background: rgba(#fff, .8);
        .v-spinner{
            background: rgba(0, 0, 0, .7);
            display: table;
            width: 150px;
            margin: auto;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 1986;
            padding: 15px 0;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .25);
        }
    }

    td.actions{
        .btn{margin-left:2px;}
    }
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
