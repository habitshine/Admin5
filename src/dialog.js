import Prompt from './components/notice/Prompt'

var plugin = {};
plugin.install = (Vue, options) =>{
    Vue.component('VPrompt', Prompt);
    Vue.prototype.$promptOptions = {text: 'xxxx$prompt!xxxx'};
    Vue.prototype.$prompt = (options = {})=> {
        Vue.$promptOptions = {...Vue.$promptOptions , ...options};
    }
}

export default plugin;