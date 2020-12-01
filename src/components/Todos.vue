<template>
  <div>
    <h1>Todos List</h1>
    <div class="todos">
      <div 
      @dblclick="onDblClick(todo)" 
      class="todo" 
      v-bind:class="{'is-complete':todo.completed}"
      v-for="todo in allTodos" 
      :key="todo.id"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)">X</i>
      </div>
    </div>
  </div>
</template>

<script>
 import { mapGetters, mapActions } from "vuex";
 export default {
    name: "Todos",
    methods: {
      ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
      onDblClick(todo){
        const updTodo = {
          id: todo.id,
          title: todo.title,
          completed: !todo.completed
        };
        this.updateTodo(updTodo);
      }
    },
    computed: mapGetters(["allTodos"]),
    created() {
      this.fetchTodos();
    },
 };
</script>

<style scoped>
.todos{
  margin: 100px auto;
}
.todo{
  height: 60px;
  width: 300px;
  background: #483b48;
  font-size: 18px;
  color: black;
  margin: 10px;
  padding: 10px;
  float: left;
  position: relative;
}
i{
  position: relative;
  color: red;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  position: absolute;
}

.is-complete{
  color:red;
  background: gray;
}

</style>