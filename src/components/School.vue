<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 08:42:35
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-08 08:42:50
-->
<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:`School`,
    data() {
        return {
            name:'农带',
            address:'南昌'
        }
    },
}
</script>

<style>
.demo{
    background-color: bisque;
}
</style>