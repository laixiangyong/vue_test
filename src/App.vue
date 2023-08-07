<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-07 14:01:40
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-07 17:48:00
-->
<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// 引入组件
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
    name:`App`,
    components:{
        School,
        Student
    }
}
</script>

<style>

</style>