<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-08 11:21:20
-->
<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>

export default {
  name: `Student`,
  data() {
    return {
      name: "李四",
      sex:'男'
    }
  },
  
};
</script>

<style>
.demo {
  background-color: bisque;
}
</style>