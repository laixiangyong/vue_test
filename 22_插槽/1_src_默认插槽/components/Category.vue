<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-18 10:51:38
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-18 11:35:42
-->
<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title']
}
</script>

<style>
    .category{
        background-color: blanchedalmond;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: plum;
    }
</style>