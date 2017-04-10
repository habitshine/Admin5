<template>
    <div class="com-tree-view">
        <div class="btn-group">
            <a @click="showModal" class="btn btn-default">
                {{opts.placeholder}}
                <i class="caret" :class="{rotate: isShowModal}"></i>
            </a>
            <a class="btn btn-default">
                <i class="fa fa-remove"></i>
            </a>
        </div>
        <v-modal v-model="isShowModal">
            <!-- <v-tree v-model="" :data="opts.data"></v-tree> -->
        </v-modal>
    </div>
</template>
<script>
import VTree from './Tree'
import VModal from '../notice/Modal'
export default {
    name: 'treeView',

    props: {
        opts: {

        },

        value: {

        }
    },

    data() {
        return {
            isShowModal: this.value
        };
    },

    methods: {
        showModal() {
            this.isShowModal = true;
        },

        _find(){

        }
    },

    components: {
        VTree,
        VModal
    }
}
</script>
<style scoped lang=scss>
.com-tree-view {}
</style>
