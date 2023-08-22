/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-18 15:30:40
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-22 10:01:58
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
// 没有什么逻辑操作时直接在mutations里写
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
    ADD_PERSON(state,personObj){
        console.log('mutations中的ADD_PERSON被调用了');
        state.personList.unshift(personObj)
    }
}
// 准备state用于存储数据
const state = {
    sum:0,//求和
    school:'电大',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}
// 准备getters用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
// 暴露并创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

