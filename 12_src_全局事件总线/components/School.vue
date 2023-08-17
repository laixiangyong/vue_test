<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-16 13:55:13
-->
<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>

export default {
  name: `School`,

  data() {
    return {
      name: "农带",
      address:'南昌'
    }
  },
  mounted() {
    this.$bus.$on('hello',(data)=>{
      console.log('我是School事件，收到了数据',data);
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  },
};
</script>

<style scoped>
  .school {
    background-color: blue;
    padding: 5px;
  }
  
</style>