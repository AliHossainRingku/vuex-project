<template>
  <div class="modal">
        <div class="modalContainer">
            <div class="modalHeading">
                Modal Heading <button>Close</button>
            </div>
            <div class="modalContent">
                <table class="list table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Encrypted Password</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(user, index) in users" :key="user.id">
                        <td>:userName="userName"</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.password}}</td>
                        <td>
                            <button class="btn btn-danger" @click="viewUser(index)">View<i style="color:white" class="fa fa-trash"></i></button>
                            <button class="btn btn-danger" @click="updateUser(user)">Edit<i style="color:white" class="fa fa-trash"></i></button>
                            <button class="btn btn-danger" @click="deleteUser(user)">Delete<i style="color:red" class="fa fa-trash"></i></button>
                        </td>
                    </tr>
                    </tbody>
                </table>   
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
    data(){
        return{
            
        }
        
    },

    props: ["showModal"],
    methods: {
        closeModal(){
                this.showModal = false;
            }
    }

}
</script>

<style scoped>

.modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.modalContainer{
    background: #FFFFFF;
    margin: 30px auto; 
    width: 555px;  
}
.modalHeading{
    background: rgba(0, 0, 0, 0.4);
    margin: auto;
    padding: 6px;
}
.modalHeading button{
    left: 10px;
    float: right;
}
.modalContent{
    min-height: 333px;
    margin: auto;
    padding: 44px;
    background: #06307C;
    color: #FFFFFF;
}
button{
    color: red;
}
</style>