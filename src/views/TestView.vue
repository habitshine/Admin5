<template>
    <div>
        <v-table :dataSource="dataSource" :columns="columns" :actions="actions">
            启用
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
            actions: {
                text: '操作',
                data: [{
                    event: 'remove',
                    text: '删除',
                    params: ['id', 'name']
                }, {
                    event: 'toggle',
                    text: ['启用', '禁用'],
                    textIndex: 'toggleIndex',
                    params: ['id', 'name']
                }, {
                    event: 'toggle',
                    text: ['启用', '禁用'],
                    textIndex: 'toggleIndex',
                    params: ['id', 'name']
                } ]
            },

            dataSource: [{
                id: 1,
                name: '郭德纲',
                toggleIndex: 1
            }, {
                id: 2,
                name: '于谦',
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

    },

    components: {
        VNotification,
        VTable
    }
}
</script>
<style lang="scss" scope>
</style>
