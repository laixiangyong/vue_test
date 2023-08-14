<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-14 11:44:51
-->
<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给APP</button>
  </div>
</template>

<script>

export default {
  name: `School`,
  props:['getSchoolName'],
  data() {
    return {
      name: "农带",
      address:'南昌'
    }
  },
  methods: {
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  },
};
</script>

<style scoped>
  .school {
    background-color: blue;
    padding: 5px;
  }
  
</style>