/* 
该文件是整个项目的入口文件 */
// 引入Vue
import Vue from 'vue'
// 引入APP组件，他是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

/* 
关于不同版本的Vue：
  1.Vue.js与vue.runtime.xx.js的区别
    （1）vue.js是完整版的vue，包含：核心功能+模板解析器
    （2）vue.runtime.xx.js是运行版的vue，只包含：核心功能：没有模板解析器
  2.因为vue.runtime.xx.js没有模板解析器，所以不能使用template配置项，需要使用render函数收到
  createElement函数去指定具体内容.
 */
new Vue({
  // 讲APP组件放入容器中
  el:'#app',
  render: h => h(App),
})
