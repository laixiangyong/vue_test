<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:35:39
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-08 09:07:59
-->
<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>

import School from './components/School.vue'
export default {
    name:'App',
     components:{
        School
    },
    data() {
        return {
            msg:'真不错啊'
        }
    },
    methods:{
        showDOM(){
            // 通过this.$refs获取ref标记的title的DOM元素
            // 若使用ref标记组件时获取的时组件的实例对象，用id标记即可获取组件的DOM元素
            console.log(this.$refs.title)
            console.log(this.$refs.btn)
            console.log(this.$refs.sch)
        }
    }
}
</script>

<style>

</style>