<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-18 10:51:38
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-18 13:43:33
-->
<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :games="games">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style>
.category {
  background-color: blanchedalmond;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: plum;
}
</style>