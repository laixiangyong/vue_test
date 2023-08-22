/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-18 15:30:40
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-22 11:29:05
 */
// 该文件用于插件Vuex中最为核心的store

import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
// 应用Vuex插件
Vue.use(Vuex)

/* // 求和相关配置
const countOptions = {
    // 开启命名空间
    namespaced:true,
    // 准备actions用于响应组件中的动作
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        }
    },
    // 准备mutations用于操作数据(state)
    // 没有什么逻辑操作时直接在mutations里写
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    // 准备state用于存储数据
    state: {
        sum: 0,//求和
        school: '电大',
        subject: '前端',
    },
    // 准备getters用于将state中的数据进行加工
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}

// 人员管理相关配置
const personOptions = {
    namespaced:true,
    actions: {
        addPersonWang(context,personObj){
            if(personObj.name.indexOf('王')===0){
                context.commit('ADD_PERSON',personObj)
            }else{
                alert('添加的人必须姓王！')
            }
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            console.log('mutations中的ADD_PERSON被调用了');
            state.personList.unshift(personObj)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {
        firstPersonName(state){
            return state.personList[0].name
        }
    }
} */


// 暴露并创建store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})

