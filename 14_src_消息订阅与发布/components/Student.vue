<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-16 14:15:31
-->
<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
// 引入消息发布与订阅库
import pubsub from 'pubsub-js'
export default {
  name: `Student`,
  data() {
    return {
      name: "李四",
      sex: "男",
    }
  },
  methods: {
    sendStudentName(){
      // this.$bus.$emit('hello',this.name)
      pubsub.publish('hello',666)
    }
  },
};
</script>

<style lang="less" scoped>
  .student {
    background-color: bisque;
     padding: 5px;
     margin-top: 30px;
  }
</style>