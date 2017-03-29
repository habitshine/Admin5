<template>
    <div class="smart-view">
        <transition appear mode="out-in">
            <component v-if="undefined != template" :url="template.url" :is="template.name"></component>
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
        template() {
            if (undefined == this.$store.state.pathMap.map[this.$route.path]) {
                return undefined;
            } else {
                return {
                    name: this.$store.state.pathMap.map[this.$route.path].template,
                    url: this.$store.state.pathMap.map[this.$route.path].url
                };
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
