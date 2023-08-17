<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:35:39
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-17 11:29:22
-->
<template>
  <div>
    <Test/>
    <Test2/>
    <Test3/>
  </div>
</template>

<script>

import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";
import Test3 from "./components/Test3.vue";

export default {
  name: "App",
  components: {
    Test,Test2,Test3
  },
 
};
</script>