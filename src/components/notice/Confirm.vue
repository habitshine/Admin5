<template>
    <div class="com-confirm">
        <v-modal v-model="isShow">
            {{title}}
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

    computed: {

        isShow: {
            get() {
                return this.value;
            },

            set(isShow) {
                this.$emit('input', isShow);
            }
        }
    },

    props: {
        value: {
            type: Boolean
        },

        width: {
            type: String
        },

        title: {
            type: String
        },

        afterClose: {
            type: Function,
            default (v) {
                if (undefined === v || null === v) {
                    return new Function();
                }
            }
        }
    },

    methods: {
        change() {},

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
