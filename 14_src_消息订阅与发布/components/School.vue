<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-17 09:11:35
-->
<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 引入消息发布与订阅库
import pubsub from "pubsub-js";
export default {
  name: `School`,

  data() {
    return {
      name: "农带",
      address: "南昌",
    };
  },
 /*  methods: {
    demo(msgName, data){
      console.log("有人发布了hello消息，hello消息的回调执行了",data,this);
    }
  }, */
  mounted() {
    /*  this.$bus.$on('hello',(data)=>{
      console.log('我是School事件，收到了数据',data);
    }) */
    // 写成箭头函数拿到的this为Vue实例
    this.pubId = pubsub.subscribe("hello",(msgName, data)=>{
      //function第一个参数是消息名，第二个是数据
      console.log("有人发布了hello消息，hello消息的回调执行了", msgName, data);
    });
  },
  beforeDestroy() {
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId);//需要通过id取消订阅
  },
};
</script>

<style scoped>
.school {
  background-color: blue;
  padding: 5px;
}
</style>