<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:35:39
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-18 13:51:11
-->
<template>
  <div class="container">
    <Category title="游戏">
      <template scope="lai">
        <ul>
          <li v-for="(g, index) in lai.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!-- {lais}结构赋值 -->
      <template scope="{games}">
        <ol>
          <li style="color:red" v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 另一种写法 -->
      <template slot-scope="{games}">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

// import axios from "axios";

export default {
  name: "App",
  components: { Category },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>