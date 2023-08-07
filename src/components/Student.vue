<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-07 13:22:49
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-07 13:54:17
-->
 <!-- 组件的结构 -->
<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    
  </div>
</template>

<script>
// 组件交互相关的代码(数据、方法等)
// 分别暴露
export default {
  name:`Student`,
  data() {
    return {
      name: "张三",
      age:19,
    };
  },
};
// 统一暴露
// export{school}
// 默认暴露
// export default school
</script>
