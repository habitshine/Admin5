<template>
    <div class="add-view">
        <transition appear mode="out-in">
            <!-- 页面加载中 -->
            <v-spinner v-if="-1 == form.status">
            </v-spinner>
            <!-- 页面加载完毕 -->
            <div class="body" v-else>
                <form-layout v-if="1 == form.status">
                    <v-form v-model="formValues.body" :form="form.data.form"></v-form>
                    <template slot="btn-group">
                        <a @click="back" class="btn btn-danger">
                            <i class="glyphicon glyphicon-return"></i> 返回
                        </a>
                        <a @click="submit" class="btn btn-primary">
                            <i class="glyphicon glyphicon-ok"></i> 确定
                        </a>
                    </template>
                </form-layout>
            </div>
        </transition>
    </div>
</template>
<script>
import FormLayout from '../components/layout/Form'
import VSpinner from '../components/Spinner'
import VForm from '../components/Form'

export default {
    name: 'addView',

    props: {
        url: {
            type: String
        }
    },

    data() {
        return {
              // 表单结果数据
            formValues: {
                accessToken: this.$store.state.accessToken,
                body: {}
            },
            // 构造表单
            form: {
                status: -1,
                data: {}
            }
        };
    },

    created() {
        this.httpGetBaseView(response => {
            this.form = response.data;
            this.setDefaultValue();
        });
    },

    methods: {
        /**
         * 保存提示成功后执行, 回退
         */
        afterClose() {
            this.$router.back();
        },

        /**
         * 提取默认值到formValue
         */
        setDefaultValue() {
            this.form.data.form.forEach(component => {
                this.formValues.body[component.name] = JSON.parse(JSON.stringify(component.value));
            });
        },

        /**
         * 获取基础view数据
         * @param  {Function} cb 回调
         */
        httpGetBaseView(cb) {
            axios.get(this.url, {
                    params: {
                        accessToken: this.$store.state.accessToken
                    }
                })
                .then((response) => {
                    cb(response);
                })
                .catch((error) => {
                    syslog(error)
                });
        },

        /**
         * 提交
         */
        submit() {
            var self = this;
            axios.post(this.form.data.url.submit, qs.stringify({
                    accessToken: this.$store.state.accessToken,
                    ...this.formValues.body
                }))
                .then((response) => {
                    // this.$store.commit('notify', {type: 'success', text: response.data.message}); 
                    this.$store.commit('alert', {
                        width: '200px',
                        show: true,
                        text: response.data.message,
                        holdTime: 2000,
                        lock: true,
                        afterClose() {
                            try {
                                self.$router.back();
                            } catch (e) {

                            }
                        }
                    });
                })
                .catch((error) => {
                    syslog(error);
                });
        },

        back() {
            this.$router.back();
        }
    },

    components: {
        VSpinner,
        FormLayout,
        VForm
    },

    activated() {}
}
</script>
<style>
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
