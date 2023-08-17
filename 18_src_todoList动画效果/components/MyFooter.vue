<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 13:56:30
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-16 13:37:00
-->
<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: `MyFooter`,
  props: ["todos"],
  computed: {
    // 计算todos长度
    total() {
      return this.todos.length;
    },
    // 统计完成的事件数
    doneTotal() {
      /*   let i = 0
      this.todos.forEach((todo)=>{
        if(todo.done) i++
      })
      return i */

      // 不简写
      /* return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0); */
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    /* isAll() {
      return this.doneTotal === this.total && this.total > 0;
    }, */
    // 使用v-model时的完整写法
    isAll:{
      get(){
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value){
        this.$emit('checkAllTodo',value)
      }
    }
  },
  methods:{
    /* checkAll(e){
      this.checkAllTodo(e.target.checked)
    } */
    clearAll(){
      if(confirm('确定要删除吗?')){
        this.$emit('clearAllTodo')
      }
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>