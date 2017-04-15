import Dialog from './Dialog'

var plugin = {};
plugin.install = (Vue, options) => {
    // Vue.component('VPrompt', Prompt);
    // document.createDocumentFragment()
    var DialogComponent = Vue.extend(Dialog);
    // 创建一个挂载点
    var node = document.createElement('div');
    node.id = '_v-dialog';
    document.body.appendChild(node);
    // 挂载
    var vm = new DialogComponent().$mount('#_v-dialog');
    // =================================================
    // ==============组件内调用: this.$alert==============
    // =================================================
    Vue.prototype.$alert = (options = {}) => {
        return new Promise((resolve, reject) => {
            if ('string' == typeof(options)) {
                vm.mask.show = true;
                vm.alert = {
                    show: true,
                    ok: () => {
                        vm.mask.show = false;
                        resolve();
                    },
                    text: options
                };
            } else {
                vm.mask.show = true;
                vm.alert = {
                    ...options,
                    ok: () => {
                        vm.mask.show = false;
                        resolve();
                    },
                    show: true
                };
            };
        });
    };
    // =================================================
    // ==============组件内调用: this.$confirm============
    // =================================================
    Vue.prototype.$confirm = (options = {}) => {
        return new Promise((resolve, reject) => {
            if ('string' == typeof(options)) {
                vm.mask.show = true;
                vm.confirm = {
                    show: true,
                    ok: () => {
                        vm.mask.show = false;
                        resolve();
                    },
                    cancel: () => {
                        vm.mask.show = false;
                        reject();
                    },
                    text: options
                };
            } else {
                vm.mask.show = true;
                vm.confirm = {
                    ...options,
                    ok: () => {
                        vm.mask.show = false;
                        resolve();
                    },
                    cancel: () => {
                        vm.mask.show = false;
                        reject();
                    },
                    show: true
                };
            };
        });
    };

}

export default plugin;
