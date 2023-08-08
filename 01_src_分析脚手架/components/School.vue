<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-07 13:22:49
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-07 13:57:40
-->
 <!-- 组件的结构 -->
<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互相关的代码(数据、方法等)
// 分别暴露
export default {
  name:`School`,
  data() {
    return {
      name: "农带",
      address: "南昌",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
// 统一暴露
// export{school}
// 默认暴露
// export default school
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>