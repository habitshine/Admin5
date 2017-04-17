<template>
    <div class="readonly-view">
        <transition appear mode="out-in">
            <div>
                <v-draggable :opts="item" v-for="(item,key) in dragOpts.data" :key="1"></v-draggable>
            </div>
        </transition>
    </div>
</template>
<script>
    import VDraggable from '../components/readonly/DraggableList'
    export default {
        name: 'DraggableView',
        components: {
            VDraggable
        },
        methods:{
            httpGetBaseView(cb) {
                var url = [API_ROOT, this.$route.path.replace('/home/', '')].join('/');
                axios.get(url,{parmas:{...this.$route.path.query}})
                    .then((response) => {
                    cb(response);
                    console.log(response)
            })
            .catch((error) => {
                    syslog(error);
            });
            }
        },
        created(){
            this.httpGetBaseView(response => {
                this.dragOpts = response.data;
            });
        },
        data() {
            return {
                dragOpts:{},
            };
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
