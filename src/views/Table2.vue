<template>
    <div class="com-table">
        <table class="table table-responsive table-hover table-bordered  table-striped">
            <!-- 头 -->
            <thead>
                <tr>
                    <th v-for="th in columns">{{th.text}}</th>
                    <th>{{actions.text}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, i) in dataSource">
                    <td v-for="th in columns">{{row[th.key]}}</td>
                    <td>
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
export default {
    name: 'table',

    props: {
        // 表格数据
        dataSource: {
            type: Array
        },
        // 标题数据
        columns: {
            type: Array
        },
        // 操作按钮
        actions: {
            type: Object
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
        operateRow(eventName, index) {
            this.$emit(eventName, {index});
            // console.log(eventName, index);
        }
    },

    components: {

    }
};
</script>
<style scoped lang="scss">
.com-table {
    margin: 0;
    min-height: 200px;
    overflow: hidden;
    position: relative;
    .spinner {
        background: rgba(0, 0, 0, .8);
        // display: table;
        width: 150px;
        height: 90px;
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
