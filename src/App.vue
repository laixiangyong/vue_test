<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:35:39
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-16 13:56:40
-->
<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "真不错！",
    };
  },
};
</script>
 
<style  scoped>
.app {
  background-color: darkgrey;
  padding: 5px;
}
</style>