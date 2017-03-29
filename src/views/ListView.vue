<template>
    <div class="list-view">
        <transition appear mode="out-in">
            <template v-if="-1 == viewData.status">
                <v-spinner></v-spinner>
            </template>
            <div v-else>
                <!-- 过滤条件 -->
                <filter-panel v-if="1 == viewData.status" @submit="filter" @reset="reset">
                    <!-- 表单集合 -->
                    <v-form v-model="formValues.filter" :form="viewData.data.form">
                    </v-form>
                    <template slot="btn-group">
                        <!-- 循环 -->
                        <template v-for="btn in viewData.data.btnGroup">
                            <a @click="commonHttpReqest(btn.url)" v-if="'table' == btn.source" :key="btn.text" class="btn btn-default">
                                <i :class="['fa', 'fa-' + btn.icon]"></i> {{btn.text}}
                            </a>
                        </template>
                    </template>
                </filter-panel>
                <!-- 表格 -->
                <v-table v-model="table.ids" style="margin-top:15px" :primaryKey="table.primaryKey" :table="table.data.list" :status="table.status" :message="table.message" :activePrimaryKey="table.activePrimaryKey" :action="table.action">
                    <!-- tr th -->
                    <template slot="header">
                        <th nowrap v-for="item in viewData.data.table.header">
                            <i :class="['fa', 'fa-' + item.icon]"></i> {{item.text}}
                        </th>
                        <th>操作</th>
                    </template>
                    <!-- tr td -->
                    <template slot="row" scope="props">
                        <!-- 数据列 -->
                        <td v-for="obj in viewData.data.table.header">
                            {{props.row[obj.key]}}
                        </td>
                        <!-- 功能列 -->
                        <td nowrap>
                            <a class="btn btn-xs btn-link" @click="del(props.primaryKey)">
                                <i class="fa fa-remove"></i> 删除
                            </a>
                            <router-link :key="btn.text" v-for="btn in viewData.data.table.btnGroupInRow" :to="{path: btn.path, query: {id: props.row.id}}" class="btn btn-xs btn-link">
                                <i class="fa fa-edit"></i> {{btn.text}}
                            </router-link>
                        </td>
                    </template>
                </v-table>
                <!-- 分页 -->
                <v-page v-show="1 == table.status" @change="changePage" :count="table.data.count" :page="parseInt($route.query.page)" :limit="parseInt($route.query.limit)">
                </v-page>
            </div>
        </transition>
    </div>
</template>
<script>
import FilterPanel from '../components/layout/Filter'
import FrameLayout from '../components/layout/Frame'
import VSpinner from '../components/Spinner'
import VTable from '../components/Table'
import VPage from '../components/Page'
import VForm from '../components/Form'

export default {
    name: 'listView',

    props: {
        url: {
            type: String
        }
    },

    components: {
        FilterPanel,
        FrameLayout,
        VSpinner,
        VTable,
        VPage,
        VForm
    },

    data() {
        return {
            // 已勾选数据
            formValues: {
                accessToken: this.$store.state.accessToken,
                limit: this.$route.query.limit,
                page: this.$route.query.page,
                filter: {}
            },
            // 构造表单
            viewData: {
                status: -1,
                data: {
                    form: [],
                    url: {
                        submit: '',
                        table: ''
                    }
                }
            },

            // 表格
            table: {
                status: -1,
                message: '',
                activePrimaryKey: '',
                action: '',
                ids: null,
                removeIndex: null,
                data: {
                    list: [],
                    count: 0
                }
            }
        };
    },

    created() {
        // 渲染: 条件筛选
        this.httpGetBaseView(response => {
            this.viewData = response.data;
            // 遍历默认值
            this.setDefaultValue();
            // 之后根据默认值, 渲染表格数据
            this.httpGetTable();
        });
    },

    watch: {
        /**
         * 监视路由变更
         * 触发: 处理表单(过滤)的默认值
         * 触发: 获取表格数据
         */
        $route() {
            // 遍历默认值
            this.setDefaultValue();
            // 之后根据默认值, 渲染表格数据
            this.httpGetTable();
        }
    },

    methods: {
        /**
         * 如果当前组件在url上没有值
         * 那么用form自带的默认值渲染组件默认值
         * 否则优先用url上的值做默认值渲染
         * 默认值优先级为: route.query.filter > form[xx].value
         */
        setDefaultValue() {
            this.viewData.data.form.forEach(component => {
                // 必须 ===, 否则会把null也当成undefined
                if (undefined === this.routerFilterObject[component.name]) {
                    // bug 需要根据类型判断是否使用JSON对象转换, 否则赋值不正确
                    var type = Object.prototype.toString.call(component.value);
                    // 一定要找到原因...
                    if (-1 == ['[object Array]', '[object Object]'].indexOf(type)) {
                        this.formValues.filter[component.name] = component.value;
                    } else {
                        this.formValues.filter[component.name] = JSON.parse(JSON.stringify(component.value));
                    }
                } else {
                    this.formValues.filter[component.name] = this.routerFilterObject[component.name];
                }

            });
        },
        /**
         * 获取渲染页面所需基础数据
         * @param  {Function} cb
         */
        httpGetBaseView(cb) {
            axios.get(this.url, {
                    params: {
                        accessToken: this.$store.state.accessToken,
                    }
                })
                .then((response) => {
                    cb(response);
                })
                .catch((error) => {
                    syslog(error);
                });
        },
        /**
         * 获取表格数据
         */
        httpGetTable() {
            this.table.status = -1;
            this.table.primaryKey = this.viewData.data.table.primaryKey;
            axios.get(this.viewData.data.table.url.list, {
                    params: {
                        page: this.$route.query.page,
                        limit: this.$route.query.limit,
                        ...this.formValues.filter
                    }
                })
                .then((response) => {
                    this.table.status = response.data.status;
                    if (0 == response.data.status) {
                        this.table.message = response.data.message;
                    } else {
                        this.table.data.count = response.data.data.count;
                        this.table.data.list = response.data.data.list;
                    }
                })
                .catch((error) => {
                    syslog(error);
                });
        },
        /**
         * 翻页
         * @param  {Number} page 页码
         */
        changePage(page) {
            var query = this.$route.query;
            query = JSON.parse(JSON.stringify(query));
            query.page = page;
            this.$router.push({
                query
            });
        },
        /**
         * 过滤
         */
        filter() {
            this.$router.push({
                query: {
                    page: 1,
                    limit: this.formValues.limit,
                    filter: JSON.stringify(this.formValues.filter)
                }
            });
        },
        /**
         * 重置
         */
        reset() {
            this.setDefaultValue();
            this.$router.push({
                query: {
                    page: 1,
                    limit: this.formValues.limit
                }
            });
        },

        /**
         * 删除
         */
        del(id) {
            var self = this;
            this.$store.commit('confirm', {
                show: true,
                text: '您确定要删除吗?',
                ok() {
                    self.httpDel(id).then(() => {
                        self.table.activePrimaryKey = id;
                        self.table.action = 'remove';
                    });
                }
            });
        },
        /**
         * 异步请求
         * @param  {Array} id 
         */
        httpDel(id) {
            return new Promise((resolve, reject) => {
                axios.delete(this.viewData.data.table.url.del, {
                    params: {
                        id
                    }
                }).then(response => {
                    resolve();
                }).catch((error) => {
                    reject();
                });
            });
        },
        /**
         * 通用ajax请求
         * @param  {String} url
         */
        commonHttpReqest(url) {
            if (0 < this.table.ids.length) {
                var self = this;
                this.$store.commit('confirm', {
                    show: true,
                    text: '您确定执行该操作吗?',
                    ok() {
                        axios.delete(url, {
                            params: {
                                [self.table.primaryKey]: self.table.ids
                            }
                        }).then(response => {
                            self.$store.commit('alert', {
                                holdTime: 1000,
                                show: true,
                                text: response.data.message
                            });
                            self.httpGetTable();
                        }).catch((error) => {
                            syslog(error);
                        });
                    }
                });
            }
        }
    },

    computed: {
        /**
         * 路由上过滤条件
         */
        routerFilterObject() {
            try {
                return JSON.parse(this.$route.query.filter);
            } catch (e) {
                return {};
            }
        }
    }
}
</script>
<style scope lang=scss>
.list-view {
    padding-bottom: 45px;
    .btn-bar {
        margin-top: 30px;
    }
}

.v-enter {
    opacity: 0;
    transform: translateY(-.5rem);
}

.v-enter-active {
    transition: all .5s;
}

.v-leave-active {
    opacity: 0;
    transition: all .5s;
    transform: translateY(-.5rem);
}
</style>
