<template>
    <div class="com-confirm">
        <v-modal             
            :width="width" 
            :hasClose="hasClose" 
            :holdTime="holdTime" 
            :lock="lock" 
            :title="title"
            v-model="isShow" 
            @after-close="afterClose">
            {{text}}
            <div slot="footer">
                <a class="btn btn-default" @click="close">返回</a>
                <a class="btn btn-primary" @click="ok">确定</a>
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

        text: {
            type: String
        },

        holdTime: {
            type: Number
        },

        lock: {
            type: Boolean
        },

        hasClose: {
            type: Boolean
        }
    },
    methods: {
        ok(){
            this.$emit('input', false);
            this.$emit('ok');
        },

        afterClose() {
            this.$emit('after-close');
        },

        close() {
            this.$emit('input', false);
        }
    },

    components: {
        VModal
    }
}
</script>
<style scoped lang=scss>
</style>
