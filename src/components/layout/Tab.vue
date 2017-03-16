<template>
    <div class="layout-tab">
        <ul class="nav nav-tabs">
            <!-- 头部按钮 -->
            <li @click="changeTab(item ,i)" :class="{active: i == value, disabled: headerButton[i].disabled}" v-for="(item, i) in headerButton">
                <a>{{item.label}}</a>
            </li>
        </ul>
        <ul class="tab-content">
            <slot></slot>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Tab',

    props: {
        value: {} // 当期tab的索引
    },

    data() {
        return {
            headerButton: [], // [{disable, label}], 引用panel中props属性
            panelLength: 0
        };
    },

    watch: {
        value(value) {
            // 广播给每个tab-panel
            this.$children.forEach((panelComponent, i) => {
                panelComponent.$data.activeIndex = value;
                // 等待数据队列更新完毕, 保证读取tab-panel的值是最新值
                this.$nextTick(() => {
                    // {disable, label}
                    this.headerButton[i] = {...panelComponent.$options.propsData
                    };
                });
            });
        }
    },

    mounted() {
        this.$children.forEach(panelComponent => {
            // propsData: {disable, label}
            this.headerButton.push({...panelComponent.$options.propsData
            });
            // 广播给子组件, 当前激活的索引
            panelComponent.$data.activeIndex = this.value;
        });
    },

    methods: {
        changeTab(item, i) {
            if (!item.disabled) {
                this.$emit('input', i);
            }
        }
    }
}
</script>
<style lang=scss scoped>
.layout-tab {
    position: relative;
    .nav-tabs {
        li {
            a {}
        }
    }
    .tab-content {
        transition: all 1s;
        position: relative;
    }
}
</style>
