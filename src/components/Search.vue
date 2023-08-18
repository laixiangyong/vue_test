<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-17 16:27:57
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-18 09:56:01
-->
<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前更新List数据
      this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          // 请求成功后更新List数据
          console.log("请求成功了");
          // this.$bus.$emit("getUsers", response.data.items);
          this.$bus.$emit("updateListData", {isLoading:false,errMsg:'',users:response.data.items});
        },
        (error) => {
          // 请求失败后更新List数据
          // console.log("请求失败了", error.message);
          this.$bus.$emit("updateListData", {isLoading:false,errMsg:error.message,users:[]});
        }
      );
    },
  },
};
</script>

