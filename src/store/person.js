// 人员管理相关配置
import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
    namespaced:true,
    actions: {
        addPersonWang(context,personObj){
            if(personObj.name.indexOf('王')===0){
                context.commit('ADD_PERSON',personObj)
            }else{
                alert('添加的人必须姓王！')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response=>{
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error=>{
                    alert(error.message)
                }
            )
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
}