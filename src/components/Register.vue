<template>
  <div>
    <h4>Register</h4>
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
</template>


<script>
  export default {
    name: "Register",
    data(){
      return {
        user: { 
            name : "",
            email : "",
            password : "",
            password_confirmation : "",
            is_admin : null
        }
      }
    },

    methods: {
        register(user) {
            this.$store.dispatch('register', user)
        }
    },
    computed: {
        isValid() {
            return this.user.name !== '' && this.user.email !== '' && this.user.password !== '' && this.password_confirmation !== ''
        }
    }


  }
</script>

<style scoped>
.formReg{
  align-content: center;
  margin-top: 33px;
  background: #1A6888;
  color: #FFFFFF;
  padding: 50px;;
}
.formReg label{
  background: #eee;
}
.formReg input{
  padding: 5px;
  width: 300px;
  font-size: 16px;
}

</style>