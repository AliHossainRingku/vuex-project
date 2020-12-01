<template>
  <div class="home">
  <add-todo></add-todo>
  <FilterTodos />
	<Todos />
  </div>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo.vue'
import FilterTodos from '@/components/FilterTodos.vue'
import Todos from '@/components/Todos.vue'

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>
