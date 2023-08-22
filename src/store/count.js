/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-22 11:26:57
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-22 11:27:15
 */
// 求和相关配置
export default {
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