/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-18 15:30:40
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-18 17:06:37
 */
// 该文件用于插件Vuex中最为核心的store

import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 准备actions用于响应组件中的动作
const actions = {
    /* jia(context,value){
        context.commit('JIA',value)
    },
    jian(context,value){
        context.commit('JIAN',value)
    }, */
    jiaOdd(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
    }
}
// 准备mutations用于操作数据(state)
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    }
}
// 准备state用于存储数据
const state = {
    sum:0,//求和
}

// 暴露并创建store
export default new Vuex.Store({
    actions,
    mutations,
    state
})

