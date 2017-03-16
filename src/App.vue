<template>
    <div class="app">
        <transition appear mode="out-in">
            <!-- <keep-alive> -->
            <router-view>
                
            </router-view>
            <!-- </keep-alive> -->
        </transition>            
    </div>
</template>

<script>
export default{
    name: 'App'
}
</script>

<style lang=scss>
.app{height: 100%;width: 100%;position: relative;}
.v-enter{
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
