<template>
  <div>
      Add Todo
      <form @submit="onSubmit">
          <input type="text" v-model="title" placeholder="Add todo here ">
          <input type="submit" value="Submit">
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex' 
export default {
    name: 'AddTodo',
    data(){
        return{
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
            onSubmit(e){
                e.preventDefault();
                this.addTodo(this.title);
        }
    }
}
</script>

<style scoped>
form{
    display: flex;
}
input[type=text]{
    flex: 10;
    color: #41b883;
    padding: 10px;
}
input[type=submit]{
    flex: 2;
    color: #41b883;
    padding: 10px;
}
</style>