<template>
    <div>        
        <button @click="onModal">Add New</button>
        <div v-if="showModal" class="modal">
            <div class="modalContainer">
                <div class="modalHeading">
                    Modal Heading <button @click="closeModal">Close</button>
                </div>
                <div class="modalContent">
                    <form class="formReg" action="" @submit="register(user)">
                        <label for="name">Name</label>
                        <div>
                            <input id="name" type="text" v-model="user.name" required autofocus>
                        </div>

                        <label for="email" >E-Mail Address</label>
                        <div>
                            <input id="email" type="email" v-model="user.email" required>
                        </div>

                        <label for="password">Password</label>
                        <div>
                            <input id="password" type="password" v-model="user.password" required>
                        </div>

                        <label for="password-confirm">Confirm Password</label>
                        <div>
                            <input id="password-confirm" type="password" v-model="user.password_confirmation" required>
                        </div>

                        <div>
                            <button :disabled="!isValid" class="btn btn-block btn-primary" @click.prevent="register(user)">Submit
                            </button>
                        </div>
                    </form>   
                </div>
            </div>
        </div>

        <!--add-user-modal v-if="showModal"></add-user-modal-->
        <view-single-user 
            v-if="viewUserFlag"
            :userId="userId"
        
        ></view-single-user>

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
                <td>{{index+1 }}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.password}}</td>
                <td>
                    <button class="btn btn-danger" @click="ViewUser">View<i style="color:white" class="fa fa-trash"></i></button>
                    <button class="btn btn-danger" @click="updateUser(user)">Edit<i style="color:white" class="fa fa-trash"></i></button>
                    <button class="btn btn-danger" @click="deleteUser(user)">Delete<i style="color:red" class="fa fa-trash"></i></button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Register from './Register.vue'
    import AddUserModal from './molecule/AddUserModal'
    import ViewSingleUser from './molecule/ViewSingleUser.vue'
    export default {
        name: "Users",
        components: {
            Register,
            AddUserModal,
            ViewSingleUser,
        },
        data(){
            return{
                showModal: false,
                
                user: { 
                    name : "",
                    email : "",
                    password : "",
                    password_confirmation : "",
                    is_admin : null
                },
                viewUserFlag: false,
                
            }
        },

        mounted() {
            this.$store.dispatch('fetchUsers')
        },
        methods: {
            viewUser() {
                viewUserFlag: true
                
            },
            deleteUser(user) {
                this.$store.dispatch('deleteUser',user)
            },
            updateUser(user){
                this.$store.dispatch('updateUser',user)
            },
            onModal(){
                this.showModal = true;
            },
            closeModal(){
                this.showModal = false;
            },
            register(user) {
                this.$store.dispatch('register', user)
            }
        },
        computed: {
            ...mapGetters([
                'users'
            ]),

            isValid() {
                return this.user.name !== '' && this.user.email !== '' && this.user.password !== '' && this.password_confirmation !== ''
            }
            //This for loading
            // isFetchingUser() {
            //     return this.$store.state.user.isFetchingUser;
            // },
        }
    }
</script>

<style scoped>
.table tr {
    border: red 1px solid;
}
table.list{
    width:100%;
    margin-top: 33px;
}
table.list th{
    background: #1A6888;
    color: #FFFFFF;
    padding: 9px;
}
table.list td{
    padding: 9px;
    text-align: center;
    
}
table.list tr{
    background: #EEEEEE;  
}





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
    background: #1A6888;
    color: #FFFFFF;
}
button{
    color: red;
}
</style>