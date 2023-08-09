<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-08 11:59:57
-->
<template>
  <div class="demo">
    <h2>学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="test">点我测试一个hello方法</button>
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
  },
  methods:{
    test(){
      this.hello()
    }
  }
};
</script>

<style>
.demo {
  background-color: bisque;
}
</style>