<template>
    <div class="layout-sidebar">
        <ul class="menu">
            <li v-for="level1 in menu" @click="toggle(level1.id)" :key="level1.id">
                <!-- 无子菜单 -->
                <template v-if="undefined == level1.children">
                    <router-link role="a" :to="level1.route">
                        {{level1.text}}
                    </router-link>
                </template>

                <!-- 有子菜单 -->
                <template v-else>
                    <!-- 三角形 -->
                    <a>
                        {{level1.text}} 
                        <span :class="{caret: true, rotate: toggleMap[level1.id]}"></span>
                    </a>
                    <transition name="menu">
                    <ul v-show="toggleMap[level1.id]">
                        <li v-for="level2 in level1.children">
                            <router-link role="a" :to="level2.route">
                                {{level2.text}}
                            </router-link>
                        </li>
                    </ul>
                    </transition>
                </template>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'sidebar',

    data() {
        return {
            menu: [],
            toggleMap: {
                '1': true,
                '2': false
            }
        }
    },

    mounted() {
        this.$store.dispatch('getMenuList', this.$store.state.accessToken).then(response => {
            if (1 == response.status) {
                this.menu = response.data.menu;
                this.$store.commit('setPathMap', this.mapPath(this.menu));
            }
        });
    },

    methods: {
        mapPath(menuData) {
            var pathMap = {};
            menuData.forEach(menuItem => {
                // 一级菜单
                if (undefined != menuItem.templateAjaxUrl) {
                    pathMap[menuItem.path] = {
                        template: menuItem.template,
                        url: menuItem.templateAjaxUrl
                    }
                }

                // 二级菜单
                if (undefined != menuItem.children) {
                    menuItem.children.forEach(subMenuItem => {
                        if (undefined != subMenuItem.templateAjaxUrl) {
                            pathMap[subMenuItem.route.path] = {
                                template: subMenuItem.template,
                                url: subMenuItem.templateAjaxUrl
                            }
                        }
                    })
                }
            });
            return pathMap;
        },

        toggle(id) {
            this.toggleMap[id] = !this.toggleMap[id];
        }
    }
}
</script>
<style scoped lang=scss>
$bgColor: #fff;
$hoverColor: #e7e7e7;
$fontColor: #777;


.menu-enter-active {
    animation: menIn .3s;
}


.menu-leave-active {
    animation: menuOut .3s;
}

@keyframes menIn {
    0% {
        height: 0;
    }
    100% {
        height: 50px;
    }
}

@keyframes menuOut {
    0% {
        height: 50px;
    }
    100% {
        height: 0;
        
        
    }
}

.layout-sidebar {
    transition: all .3s;
    box-shadow: 1px 0 3px rgba(0, 0, 0, .1);
    min-height: 100%;
    background: $bgColor;
    .caret {
        transition: all .3s;
    }
    .rotate {
        transform: rotate(-90deg);
    }
    ul.menu {
        >li {
            a {
                font-size: 13px;
                display: block;
                text-decoration: none;
                color: $fontColor;
                &:hover {
                    background: $hoverColor;
                    cursor: pointer;
                }
            }
            >a {
                padding: 15px;
            }

            >ul{}

            >ul>li {
                >a {
                    padding: 15px 30px;
                }
            }
        }
    }
}
</style>
