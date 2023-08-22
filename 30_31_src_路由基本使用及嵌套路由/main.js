/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-21 16:14:01
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-22 13:52:35
 */
// 引入vue
import Vue from 'vue'
// 引入APP
import App from './App.vue'
//引入 
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 关闭vue的生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)
// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    router:router
})