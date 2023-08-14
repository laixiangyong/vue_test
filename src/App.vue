<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:35:39
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-14 14:15:07
-->
<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
     <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法） -->
    <Student @lai="getStudentName"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <!-- <Student ref="student"/> -->
  </div>
</template>

<script>

import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name:'App',
     components:{
        Student,
        School
    },
    data() {
      return {
        msg:'真不错！'
      }
    },
    methods:{
      getSchoolName(name){
        console.log('app收到了学校名',name);
      },
      getStudentName(name,...params){
        console.log('APP收到了学生姓名',name,params);
       } 
    },
    mounted() {
      // this.$refs.student.$on('lai',this.getStudentName)//绑定自定义事件
      // this.$refs.student.$once('lai',this.getStudentName)//绑定自定义事件（一次性）
    },
}
</script>
 
<style  scoped>
  .app{
    background-color: darkgrey;
     padding: 5px;
  }
</style>