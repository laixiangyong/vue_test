<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-08 13:37:50
-->
<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2 class="qwe">学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: `Student`,
  data() {
    return {
      name: "李四",
      sex: "男",
    };
  },
};
</script>

<style lang="less" scoped>
  .demo {
    background-color: bisque;
    .qwe {
      font-size: 40px;
    }
    
  }
</style>