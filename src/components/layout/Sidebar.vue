<template>
    <div class="layout-sidebar">
        <ul class="menu">
            <li v-for="level1 in menu" @click="toggle">
                <router-link v-if="level1.route" role="a" :to="level1.route">
                    {{level1.text}}
                </router-link>
                <a v-else>{{level1.text}} <span class="caret rotate"></span></a>
                <ul>
                    <li v-for="level2 in level1.children">
                        <router-link role="a" :to="level2.route">
                            {{level2.text}}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Menu',

    mounted() {
        axios.get(this.baseUrl, {
                params: {
                    accessToken: this.$store.state.accessToken
                }
            })
            .then((response) => {
                if(1 == response.data.status) {
                    this.menu = response.data.data.menu;
                }
            })
            .catch((error) => {
                console.log(error)
            });
    },

    data() {
        return {
            baseUrl: './mock/menu',
            // baseUrl: 'http://113.6.252.23:6688/ndrcs/menus',
            menu: []
        }
    },

    methods: {
        toggle() {}
    }
}
</script>
<style scoped lang=scss>
$bgColor: #fff;
$hoverColor: #e7e7e7;
$fontColor: #777;

.layout-sidebar {
    box-shadow: 1px 0 3px rgba(0,0,0,.1);
    /*border-right: 1px solid #e7e7e7;*/
    min-height: 100%;
    background: $bgColor;
    .rotate {
        transform: rotate(270deg);
        transition: all .3s;
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
            >ul>li {
                >a {
                    padding: 15px 30px;
                }
            }
        }
    }
}
</style>
