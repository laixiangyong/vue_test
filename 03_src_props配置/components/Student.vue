<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-08 10:24:44
-->
<template>
  <div class="demo">
    <h2>{{ msg }}</h2>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge+1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: `Student`,
  data() {
    return {
      msg: "我是四年级学生",
      myAge:this.age
    }
  },
  methods:{
    updateAge(){
      this.myAge = 22
    }
  },
  // props:['name','sex','age'] 简单接受

  // 接收的同时对数据类型进行限制
 /*  props:{
    name:String,
    sex:String,
    age:Number
  } */

// 接收的同时对数据：进行类型限制+默认值得指定+必要的限制
  props:{
    name:{
      type:String,//name的类型
      required:true //name是必要的
    },
    age:{
      type:Number,
      default:99
    },
    sex:{
      type:String,
      required:true
    }
  }
};
</script>

<style>
.demo {
  background-color: bisque;
}
</style>