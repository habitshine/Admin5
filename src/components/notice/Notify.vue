<template>
    <transition-group class="com-notify" tag="ul" @after-enter="afterEnter">
        <li v-for="(notify, i) in value" :key="i":class="[notify.type]" >
            <p>{{notify.text}}</p>
        </li>
    </transition-group>
</template>
<script>
export default {
    name: 'notify',

    props: {
        value: {
            type: Array
        }
    },

    data(){
        return {activeIndex: this.value.length};
    },

    methods: {
        afterEnter(){
            this.activeIndex++;
            syslog(this.activeIndex);
            setTimeout(()=>{
                this.$emit('input', this.value.splice(this.activeIndex, 1));
            }, 1000 * this.activeIndex);
            // alert(this.activeIndex)
        }
    }
}
</script>
<style scoped lang=scss>
$default: #fff;
$primary: #337ab7;
$success: #5cb85c;
$waring: #f0ad4e;
$danger: #d9534f;
$info: #5bc0de;
ul.com-notify{position: fixed;top:10%;right: 15px;z-index: 2017;
    li{padding: 15px;box-sizing: border-box;width: 320px; line-height: 30px; box-shadow: 1px 2px 3px rgba(0,0,0,.3), -1px -2px 3px rgba(0,0,0,.1);margin-bottom: 5px;border-radius: 4px;}
    li.default{background: $default;color: darken($default, 60%);}
    li.primary{background: $primary;color: darken($primary, 20%);}
    li.success{background: $success;color: darken($success, 20%);}
    li.warning{background: $waring;color: darken($waring, 20%);}
    li.danger{background: $danger;color: darken($danger, 20%);}
    li.info{background: $info;color: darken($info, 20%);}
    
    .v-enter {
        opacity: 0;
        transform: translateY(-.5rem);
    }

    .v-enter-active {
        transition: all .3s;
    }

    .v-leave-active {
        opacity: 0;
        transition: all .3s;
        transform: translateY(-.5rem);
    }
}


</style>
