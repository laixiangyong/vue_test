<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:35:39
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-17 15:41:27
-->
<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      // 方式一
      // axios.get("http://localhost:8080/students").then(
        // 方式二
      axios.get("http://localhost:8080/lai/students").then(
        (response) => {
          console.log('请求成功了',response.data);
        },
        (error) => {
          console.log('请求失败了',error.message);
        }
      );
    },
    getCars() {
      // 方式一
      // axios.get("http://localhost:8080/students").then(
        // 方式二
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log('请求成功了',response.data);
        },
        (error) => {
          console.log('请求失败了',error.message);
        }
      );
    },
  },
};
</script>