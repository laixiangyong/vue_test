<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:35:39
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-17 17:02:25
-->
<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import List from "./components/List.vue";
import Search from "./components/Search.vue";
// import axios from "axios";

export default {
  name: "App",
  components: { Search, List },
};
</script>

