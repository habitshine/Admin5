<template>
    <div class="component-dialog">
        <v-mask>
            <v-alert v-model="alert.value" class="center"></v-alert>
        </v-mask>
    </div>
</template>
<script>
import VMask from './Mask'
import VAlert from './Alert'

export default {
    name: 'Dialog',

    props: {
        value: {}
    },

    data() {
        return {
            alert: {
                value: false,
                text: '初始值 !'
            },
            confirm: {

            },
            prompt: {

            }
        };
    },

    computed: {

    },

    components: {
        VAlert,
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
