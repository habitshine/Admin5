<template>
    <div class="com-confirm">
        <v-modal :show="true">
            <slot></slot>

            <div slot="footer">
                <a class="btn btn-default">返回</a>
                <a class="btn btn-primary">确定</a>
            </div>
        </v-modal>
    </div>
</template>
<script>
import VModal from './Modal'
export default {
    name: 'confirm',

    props: {
        width: {
            type: String
        },

        show: {
            type: Boolean
        },

        title: {
            type: String
        },

        hasClose: {
            type: Boolean,
            default: false
        },

        afterClose: {
            type: Function,
            default(v){
                if(undefined === v || null === v) {
                    return new Function();
                }
            }
        }
    },

    methods: {
        ok() {},

        close() {}
    },

    components: {
        VModal
    }
}
</script>
<style scoped lang=scss>
</style>
