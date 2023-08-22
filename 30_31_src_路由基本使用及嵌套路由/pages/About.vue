<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-22 13:56:43
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-22 14:52:35
-->
<template>
  <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name:'About',
        beforeDestroy(){
          console.log('About组件即将被销毁');
          
        },
        mounted(){
          console.log('About组件挂载完毕');
          
        }
    }
</script>

