<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-17 11:16:13
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-17 14:09:03
-->
<template>
  <!-- 使用过度来写动画 -->
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="hello" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition> -->
    <!-- 多个元素过度 -->
    <transition-group name="animate__animated animate__bounce" 
    appear
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp">
      <h1 v-show="!isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">真不错</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: khaki;
  /* transition: 0.5s linear; */
}
</style>