<template>
  <div>
      Add New Status
      <form @submit="onSubmit">
          <input type="text" v-model="status.title" placeholder="Add status title here ">
          <input type="text" v-model="status.body" placeholder="Add status body here ">
          <input type="submit" value="Submit">
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex' 
export default {
    name: 'AddStatus',
    data(){
        return{
            status: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        ...mapActions(['addStatus']),
            onSubmit(e){
                e.preventDefault();
                this.addStatus(this.status.title, this.status.body);
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