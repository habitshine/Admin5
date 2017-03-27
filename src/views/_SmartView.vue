<template>
    <div class="smart-view">
        <transition appear mode="out-in">
        <component v-if="undefined != templateName" :is="templateName"></component>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'smartView',

    components: {
        list: resolve => {
            require.ensure(['./ListView'], () => {
                resolve(require('./ListView'));
            })
        },

        add: resolve => {
            require.ensure(['./AddView'], () => {
                resolve(require('./AddView'));
            })
        },

        edit: resolve => {
            require.ensure(['./EditView'], () => {
                resolve(require('./EditView'));
            })
        }
    },

    computed: {
        templateName(){
            if(undefined == this.$store.state.map[this.$route.path]) {
                return undefined;
            } else {
                return this.$store.state.map[this.$route.path].template;
            }
        }
    }


}
</script>
<style scope lang=scss>
.v-enter {
    opacity: 0;
    transform: translateY(-.5rem);
}

.v-enter-active {
    transition: all .5s;
}

.v-leave-active {
    opacity: 0;
    transition: all .5s;
    transform: translateY(-.5rem);
}
</style>
