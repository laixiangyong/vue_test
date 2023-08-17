<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-17 11:16:13
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-17 14:05:13
-->
<template>
<!-- 使用过度来写动画 -->
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="hello" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition> -->
    <!-- 多个元素过度 -->
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">真不错</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
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
/* 进入的起点,离开的终点*/
.hello-enter,.hello-leave-to{
  transform: translate(-100%);
}
/* 进入的终点，离开的起点 */
.hello-enter-to，.hello-leave{
  transform: translate(0);
}
.hello-enter-active,.hello-leave-active{
  transition: 0.5s linear;
}
</style>