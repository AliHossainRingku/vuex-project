<template>
  <div>
    <h1>Todos List</h1>
    <add-todo></add-todo>
    <div class="todos">
      <div 
      @dblclick="onDblClick(todo)" 
      class="todo" 
      v-bind:class="{'is-complete':todo.completed}"
      v-for="todo in allTodos" 
      :key="todo.id"
      >
        <base-container>
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)">X</i>
        </base-container>
      </div>
    </div>
  </div>
</template>

<script>
 import { mapGetters, mapActions } from "vuex";
import BaseContainer from './BaseContainer.vue';
import AddTodo from './AddTodo';
 export default {
    name: "Todos",
    components:{
        BaseContainer,
        AddTodo
    },
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
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
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