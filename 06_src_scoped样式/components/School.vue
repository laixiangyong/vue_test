<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-08 13:20:58
-->
<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>

export default {
  name: `School`,
  data() {
    return {
      name: "农带就是一个",
      address:'南昌'
    }
  }
};
</script>

<style scoped>
  .demo {
    background-color: blue;
  }
</style>