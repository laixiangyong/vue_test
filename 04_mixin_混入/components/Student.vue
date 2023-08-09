<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-08 11:08:35
-->
<template>
  <div class="demo">
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
// 引入一个混合
// import {mixin} from '../mixin'
export default {
  name: `Student`,
  data() {
    return {
      name: "李四",
      sex:'男'
    }
  },
  // mixins:[mixin]
};
</script>

<style>
.demo {
  background-color: bisque;
}
</style>