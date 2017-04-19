<template>
    <div>
        <v-table :dataSource="dataSource" :columns="columns" :actions="actions" :status="status" :primaryKey="primaryKey" @remove="remove">
        </v-table>
    </div>
</template>
<script>
import VNotification from '../components/Dialog/Notification'
import VTable from './Table2'

export default {
    name: 'testView',

    mounted() {},

    data() {
        return {
            status:1,
            actions: {
                text: '操作',
                data: [{
                    event: 'remove',
                    text: '删除'
                }, {
                    event: 'toggle',
                    text: ['启用', '禁用'],
                    textIndex: 'toggleIndex'
                }, {
                    event: 'onduty',
                    text: ['离职', '在职', '兼职'],
                    textIndex: 'toggleIndex'
                } ]
            },
            primaryKey: 'id',

            dataSource: [{
                id: 1,
                name: '郭德纲',
                toggleIndex: 1
            }, {
                id: 2,
                name: '于谦',
                toggleIndex: 0
            },{
                id:31,
                name: '岳云鹏',
                toggleIndex: 1
            }, {
                id:42,
                name: '抽烟的',
                toggleIndex: 0
            },{
                id:51,
                name: '三蹦子',
                toggleIndex: 1
            }, {
                id:62,
                name: '烫头的',
                toggleIndex: 0
            }],

            columns: [{
                text: '编号',
                key: 'id'
            }, {
                text: '姓名',
                key: 'name'
            }]
        }
    },

    methods: {
        remove(row){
            this.dataSource.splice(row._index, 1);
            console.log(row);
        }
    },

    components: {
        VNotification,
        VTable
    }
}
</script>
<style lang="scss" scope>
</style>
