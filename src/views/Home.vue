<template>
<div class="container">
  <div class="home">
      <h1>This is homepage</h1>
      <base-container>
        <h3>0</h3>
        <button>Add 1</button>
      </base-container>
  </div>
</div>
</template>

<script>
import BaseContainer from '../components/BaseContainer.vue'
import Todos from '../components/Todos.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Todos,
    BaseContainer,
  }
}
</script>

<style>

</style>
