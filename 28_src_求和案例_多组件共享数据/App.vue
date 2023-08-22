<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:35:39
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-18 14:22:41
-->
<template>
  <div>
    <Count/>
    <Person/>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";

export default {
  name: "App",
  components: { Count,Person },
  mounted() {
    // console.log('App',this);
  },
};
</script>

