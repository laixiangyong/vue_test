<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:35:39
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-08 10:25:49
-->
<template>
  <div>
    <School/>
    <hr>
    <Student/>
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
}
</script>

<style>

</style>