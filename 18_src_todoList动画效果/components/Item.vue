<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-08 13:56:30
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-17 14:27:09
-->
<template>
  <!-- 给li添加动画，此示例也可以在List组件添加动画，
  但Item组件li是多个需要在List组件中写成transition-group标签 -->
  <transition name="todo" appear>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        /><!--可以使用click和change -->
        <!-- 如下代码也能实现单选框布尔值得变化功能，但是不推荐使用此方法，违反原则，因为修改了props -->
        <!-- <input type="checkbox" v-model="todo.done"> -->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <button
        v-show="!todo.isEdit"
        class="btn btn-edit"
        @click="handleEdit(todo)"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
// 引入消息发布与订阅库
import pubsub from "pubsub-js";
export default {
  name: `Item`,
  // 生命接收todo对象
  props: ["todo"],
  methods: {
    // 勾选或取消勾选
    handleCheck(id) {
      // 通知APP组件将对应的todo对象的done值取反
      // this.checkTodo(id)
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      if (confirm("确定要删除吗?")) {
        // this.deleteTodo(id)
        // 全局事件总线，触发事件
        // this.$bus.$emit('deleteTodo',id)、
        // 发布消息
        pubsub.publish("deleteTodo", id);
      }
    },
    // 编辑
    handleEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        console.log("@");
        // 将新增的isEdit设置为响应式
        this.$set(todo, "isEdit", true);
      }
      /* 
      1. 语法：```this.$nextTick(回调函数)```
      2. 作用：在下一次 DOM 更新结束后执行其指定的回调。
      3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。
          比如input框里的isEdit发生改变input框更新后，想要直接获取焦点时，使用$nextTick
      */
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 鼠标失去焦点时不显示input框，并修改信息
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空"); //判断编辑时输入是否为空
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}

/* 默认名为v给transition起名时把v改成起的名字 */
.todo-enter-active {
  animation: lai 1s;
}
.todo-leave-active {
  animation: lai 1s reverse;
}

@keyframes lai {
  from {
    /* 从右边出来 */
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>