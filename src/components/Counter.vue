<template>
   <div>
        <h1>Counter</h1>
        <base-container title="vuex">
            <h3>{{ counter }}</h3>
            <button @click="addOne">Add One</button>
            
        </base-container>
   </div>
</template>

<script>
import BaseContainer from './BaseContainer'
import { mapActions } from 'vuex' 
export default {
    components: {
        BaseContainer,
    },
    name: 'Counter',
    // data(){
    //     return{
    //         counter: 0
    //     }
    // },
    computed: {
        counter(){
            return this.$store.state.counter;
        }
    },
    methods: {     
        addOne(){
            //alert(this.$store.state.counter++)
            this.$store.state.counter++;//commit('increase');
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