<template>
    <div class="com-alert">
        <v-modal v-model="isShow" @after-close="afterClose">
            {{title}}
        </v-modal>
    </div>
</template>
<script>
import VModal from './Modal'
export default {

    name: 'alert',

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
