<template>
    <div class="app">
        <transition name="app" appear mode="out-in">
            <!-- <keep-alive> -->
            <router-view>
            </router-view>
            <!-- </keep-alive> -->
        </transition>
    </div>
</template>
<script>
export default {
    name: 'App'
}
</script>
<style scope lang="scss">
.app {
    height: 100%;
    width: 100%;
    position: relative;
    .app-enter {
        opacity: 0;
        transform: translateY(-.5rem);
    }
    .app-enter-active {
        transition: all .3s;
    }
    .app-leave-active {
        opacity: 0;
        transition: all .3s;
        transform: translateY(-.5rem);
    }
}
</style>
