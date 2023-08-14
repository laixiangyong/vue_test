<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-14 13:50:54
-->
<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给APP</button>
    <button @click="unbind">解绑lai事件</button>
  </div>
</template>

<script>
export default {
  name: `Student`,
  data() {
    return {
      name: "李四",
      sex: "男",
    }
  },
  methods:{
    sendStudentName(){
      // 触发Student组件实例身上的lai事件
      this.$emit('lai',this.name,12,345,6,5)
    },
    unbind(){
      
    }
  }
};
</script>

<style lang="less" scoped>
  .student {
    background-color: bisque;
     padding: 5px;
     margin-top: 30px;
  }
</style>