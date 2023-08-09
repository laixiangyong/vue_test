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
    <Student name="李四" sex="男" :age="19"/>
  </div>
</template>

<script>

import Student from './components/Student.vue'
export default {
    name:'App',
     components:{
        Student
    },
}
</script>

<style>

</style>