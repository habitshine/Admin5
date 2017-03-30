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

            for (var i = 4; i > 0; i--) {
                if (0 < this.page - i) {
                    array.push(this.page - i);
                }
            }

            for (var i = 0; i < 5; i++) {
                if (this.count + 1 > this.page + i) {
                    array.push(this.page + i);
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
/*    display: table;
    margin: 0 auto;*/
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
