<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-14 16:56:26
-->
<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为：{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给APP</button>
    <button @click="unbind">解绑lai事件</button>
    <button @click="death">销毁当前student组件实例（vc）</button>
  </div>
</template>

<script>
export default {
  name: `Student`,
  data() {
    return {
      name: "李四",
      sex: "男",
      number:0
    }
  },
  methods:{
    add(){
      console.log('add调用了');
      this.number++
    },
    sendStudentName(){
      // 触发Student组件实例身上的lai事件
      this.$emit('lai',this.name,12,345,6,5)
      // this.$emit('demo')
      // this.$emit('click')
    },
    unbind(){
      this.$off('lai')//解绑一个自定义事件
      // this.$off(['lai','demo'])//解绑多个自定义事件
      // this.$off()//解绑所有自定义事件
    },
    death(){
      this.$destroy()//销毁了当前Student组件实例
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