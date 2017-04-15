<template>
    <div class="component-dialog">
        <v-mask v-model="mask.show">
            <v-alert v-model="alert.show" :text="alert.text" @ok="alert.ok" class="center">
            </v-alert>

            <v-confirm v-model="confirm.show" :text="confirm.text" @ok="confirm.ok" @cancel="confirm.cancel" class="center">
            </v-confirm>
        </v-mask>
    </div>
</template>
<script>
import VMask from './Mask'
import VAlert from './Alert'
import VConfirm from './Confirm'


export default {
    name: 'Dialog',

    props: {
        value: {}
    },

    data() {
        return {
            mask: {
                show: false
            },
            alert: {
                show: false,
                text: '初始值 !',
                ok: ()=>{}
            },
            confirm: {
                show: false,
                text: '初始值 !',
                ok: ()=>{},
                cancel: ()=>{}
            },
            prompt: {
                show: false,
                text: '初始值 !',
            }
        };
    },

    watch: {
        ['mask.show'](value){
            console.log(value)
            this.confirm.show = value;
        }
    },

    components: {
        VAlert,
        VConfirm,
        VMask
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
