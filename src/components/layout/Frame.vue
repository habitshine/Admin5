<template>
    <div class="layout-frame" :style="{boxOrient: 'vertical'}">
        <v-nav></v-nav>
        <div class="view">
            <v-side-bar></v-side-bar>
            <v-scroll-view class="flex">
                <transition appear mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-scroll-view>            
        </div>
    </div>
</template>
<script>
import VNav from './Nav'
import VSideBar from './Sidebar'
import VScrollView from './ScrollView'

export default {
    name: 'Frame',

    components: {VSideBar, VNav, VScrollView}
}
</script>
<style scoped lang=scss>
@mixin flexbox(){
    display: -webkit-box;
}
@mixin flex($n){
    -webkit-box-flex:$n;
}

.layout-frame {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    @include flexbox;
    
    >.view{
        position: relative;
        overflow-y: hidden;
        @include flexbox; @include flex(1);
    }

    .flex{@include flex(1);}
}
</style>
