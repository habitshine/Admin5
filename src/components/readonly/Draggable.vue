<template>
    <div class="fluid container">

        <div class="col-md-3">
            <div class="drag-title">待办({{this.list.length}})</div>
            <draggable class="list-group" element="ul" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                <transition-group type="transition" :name="'flip-list'">
                    <li class="list-group-item" v-for="element in list" :key="element.order">
                        <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                        {{element.name}}
                        <span class="badge">{{element.order}}</span>
                    </li>
                </transition-group>
            </draggable>
        </div>

        <div class="col-md-3">
            <div class="drag-title">已完成({{this.list2.length}})</div>
            <draggable element="span" v-model="list2" :options="dragOptions" :move="onMove">
                <transition-group name="no" class="list-group" tag="ul">
                    <li class="list-group-item" v-for="element in list2" :key="element.order">
                        <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                        {{element.name}}
                        <span class="badge">{{element.order}}</span>
                    </li>
                </transition-group>
            </draggable>
        </div>


        <div  class="list-group col-md-3">
            <pre>{{listString}}</pre>
        </div>
        <div  class="list-group col-md-3">
            <pre>{{list2String}}</pre>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    const message = [ 'vue.draggable', 'draggable', 'component', 'for', 'vue.js 2.0', 'based' , 'on', 'Sortablejs' ]

    export default {
        name: 'hello',
        components: {
            draggable,
        },
        data () {
            return {
                list:this.value,
                list2:[],
                isDragging: false,
                delayedDragging:false
            }
        },
        props:{
          value:{
              type:Array
          }
        },
        methods:{
            onMove ({relatedContext, draggedContext}) {
                const relatedElement = relatedContext.element;
                const draggedElement = draggedContext.element;
                this.$emit('input',this.list2)
                return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
            }
        },
        computed: {
            dragOptions () {
                return  {
                    animation: 0,
                    group: 'description',
//                    disabled: !this.editable,
                    ghostClass: 'ghost'
                };
            },
            listString(){
                return JSON.stringify(this.list, null, 2);
            },
            list2String(){
                return JSON.stringify(this.list2, null, 2);
            }
        },
        watch: {
            isDragging (newValue) {
                if (newValue){
                    this.delayedDragging= true
                    return
                }
                this.$nextTick( () =>{
                    this.delayedDragging =false
                })
            }
        }
    }
</script>

<style>
    .flip-list-move {
        transition: transform 0.5s;
    }

    .no-move {
        transition: transform 0s;
    }

    .ghost {
        opacity: .5;
        background: #C8EBFB;
    }

    .list-group {
        min-height: 20px;
    }

    .list-group-item {
        cursor: move;
    }

    .list-group-item i{
        cursor: pointer;
    }
    .drag-title{
        font-weight: bold;
        font-size: 14px;
        padding: 5px 0;
        color: #5a5a5a;
    }
</style>
