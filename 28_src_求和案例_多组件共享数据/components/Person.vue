<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-22 09:14:29
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-22 10:08:34
-->
<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:red">Count组件的求和为:{{sum}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personList
        },
        sum(){
            return this.$store.state.sum
        }

    },
    methods: {
        add(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('ADD_PERSON',personObj)
            this.name = ''
        }
    },
};
</script>

