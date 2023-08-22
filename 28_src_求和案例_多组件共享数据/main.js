// 引入vue
import Vue from 'vue'
// 引入APP
import App from './App.vue'

// 引入store
import store from './store'
// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})