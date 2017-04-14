import Dialog from './Dialog'

var plugin = {};
plugin.install = (Vue, options) =>{
    // Vue.component('VPrompt', Prompt);
    // document.createDocumentFragment()
    var DialogComponent = Vue.extend(Dialog);
    var node = document.createElement('div');
    node.id = '_v-dialog';
    document.body.appendChild(node);
    var vm = new DialogComponent().$mount('#_v-dialog');
    Vue.prototype.$alert = (options = {})=> {
        vm.alert.text = 123123;
        vm.alert.value = true;
    }
}

export default plugin;