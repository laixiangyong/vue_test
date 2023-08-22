<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-22 16:08:49
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-22 16:08:56
-->
<template>
  <ul>
    <li>消息编号:{{$route.query.id}}</li>
    <li>消息标题:{{$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
    name:'Detail',

}
</script>
