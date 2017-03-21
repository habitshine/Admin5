<template>
    <div class="com-circle">
        <svg :width="300" :height="300" :viewbox="'0 0 300 300'">
            <circle :cx="100" :cy="100" :r="50" stroke-width="10" stroke="#D1D3D7" fill="none"></circle>
            <circle :cx="100" :cy="100" :r="50" stroke-width="10" stroke="#00A5E0" fill="none" :transform="'matrix(0,-1,1,0,0,200)'" :stroke-dasharray="'210 1069'"></circle>
        </svg>
    </div>
</template>
<script>
export default {
    name: 'circle',

    data(){
        return {
            r: 100
        };
    },

    computed: {


        x(){
            return (r + 100) / 2;
        },

        y(){
            return (r + 100) / 2;
        }
    }
}
</script>

<style scoped lang=scss>
.com-circle {

}
</style>
