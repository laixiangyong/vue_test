// 引入vue
import Vue from 'vue'
// 引入APP
import App from './App.vue'
// 引入插件
import plugins from './plugins'
// 关闭vue的生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(plugins)
// 创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})