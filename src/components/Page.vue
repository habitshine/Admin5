<template>
    <nav>
        <ul class="pagination">
            <li :class="{disabled: page <= 1}"><a @click="previous"><i class="glyphicon glyphicon-arrow-left"></i> 上一页</a></li>
            <li :class="{active: i == page}" v-for="i in pageNumber">
                <a @click="pageTo(i)">{{i}}</a>
            </li>
            <li :class="{disabled: page >= count}"><a @click="next">下一页<i class="glyphicon glyphicon-arrow-right"></i></a></li>
        </ul>
    </nav>
</template>
<script>
export default {
    props: {
        page: {
            type: Number
        },

        count: {
            type: Number
        },

        limit: {
            type: Number
        }
    },

    computed: {
        pageNumber() {
            var array = [];
            // 总数是否超过max
            if(10 < this.count) {
                if(4 >= this.page) {
                    for(var i = 1; i <= 10; i++) {
                        array.push(i);
                    }
                } else if(this.count < this.page + 5){
                    for(var i = this.count - 10; i <= this.count; i++){
                        array.push(i);
                    }
                } else {
                     for(var i = this.page - 4; i <= this.page + 5; i++){
                        array.push(i);
                    }
                }
            } else {
                for(var i = 1; i <= this.count; i++) {
                    array.push(i);
                }
            }
            return array;
        }
    },

    methods: {
        pageTo: function(page) {
            this.$emit('change', page);
        },

        previous: function() {
            if (1 < this.page) {
                this.$emit('change', this.page - 1);
            }
        },

        next: function() {
            if (this.page < this.count) {
                this.$emit('change', this.page + 1);
            }
        },
    }
};
</script>
<style scoped lang=scss>
.pagination {
    margin:0;
    padding: 0;
    li {
        &.active {
            a {
                background: #ccc;
                border-color: #ccc;
                color: #fff;
            }
        }
        a {
            color: #444;
        }
    }
    li:not(.active) {
        cursor: pointer;
    }
}
</style>