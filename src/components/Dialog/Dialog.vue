<template>
    <div class="component-dialog">
        <v-modal v-model="modal.show">
            <v-alert v-model="alert.show" :text="alert.text" @ok="alert.ok" class="center">
            </v-alert>
            <v-confirm v-model="confirm.show" :text="confirm.text" @ok="confirm.ok" @cancel="confirm.cancel" class="center">
            </v-confirm>
        </v-modal>
    </div>
</template>
<script>
import VModal from './Modal'
import VAlert from './Alert'
import VConfirm from './Confirm'

export default {
    name: 'Dialog',

    props: {
        value: {}
    },

    data() {
        return {
            modal: {
                show: false
            },
            alert: {
                show: false,
                text: 'alert初始值 !',
                ok: () => {}
            },
            confirm: {
                show: false,
                text: 'confirm初始值 !',
                ok: () => {},
                cancel: () => {}
            },
            prompt: {
                show: false,
                text: '初始值 !',
            }
        };
    },

    watch: {
        ['modal.show'](value) {
            if(!value) {
                this.alert.show = false;
                this.confirm.show = false;                
            }
        }
    },

    components: {
        VAlert,
        VConfirm,
        VModal
    }
}
</script>
<style scoped lang=scss>
.center {
    position: absolute;
    z-index: 1986;
    top: 15%;
    left: 0;
    right: 0;
    margin: auto;
}

.v-alert {}
</style>
