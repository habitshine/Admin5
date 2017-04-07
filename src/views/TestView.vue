<template>
    <div class="view-test">
        <div class="box-test">
            <div id="list-complete-demo" class="demo">
                <button v-on:click="shuffle">Shuffle</button>
                <button v-on:click="add">Add</button>
                <button v-on:click="remove">Remove</button>
                <transition-group name="list-complete" tag="ul">
                    <li v-for="item in items" v-bind:key="item" class="list-complete-item">{{ item }}</li>
                </transition-group>
            </div>
        </div>
    </div>
</template>
<script>
import _ from 'lodash'
export default {
    name: 'testView',


    data() {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10
        }
    },
    methods: {
        randomIndex: function() {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function() {
            this.items.splice(this.randomIndex(), 1)
        },
        shuffle: function() {
            this.items = _.shuffle(this.items)
        }
    }
}
</script>
<style lang=scss scope>
.box-test{padding: 15px;width: 960px;margin: 20% auto; border: 2px solid #444;}

.list-complete-item {
    background: #444;
    color: #fff;
    font-size: 32px;text-align: center;line-height: 100px;
    transition: all 1s;
    display: inline-block;
    margin: 10px;
    position: relative;
    width: 100px;height: 100px;
}

.list-complete-enter,
.list-complete-leave-active {
    opacity: 0;
    transform: translateY(30px);
}

.list-complete-leave-active {
    position: absolute;
}
</style>
