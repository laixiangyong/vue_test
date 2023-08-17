<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-17 11:16:13
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-17 11:44:20
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
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
}

/* 默认名为v给transition起名时把v改成起的名字 */
.hello-enter-active {
  animation: lai 1s;
}
.hello-leave-active {
  animation: lai 1s reverse;
}

@keyframes lai {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>