
<script>
import { ref } from 'vue';
import axios from 'axios';



const username = ref("")
const password = ref("")
const isLoggedIn = ref(false)
const loginError = ref("");

export default{
    name:"Login",
    data(){
        return{
                username:'',
                password:'',
                isLoggedIn:false,
                userId: null,
                loginError:'',
            }
    },
    methods:{
        async login(){
                try {
            const response = await axios.get(`http://ec2-16-171-230-40.eu-north-1.compute.amazonaws.com/api/User/${this.username}`);
            // Check if the response data matches the provided password
            if (response.data.password === this.password) {
                this.isLoggedIn = true;
                this.userId = response.data.id;
                this.loginError = '';
                this.$router.push({name: 'Home'})
            } else {
                this.isLoggedIn = false;
                this.loginError = 'Invalid username or password';
            }
            } catch (error) {
            this.isLoggedIn = false;
            this.loginError = 'Invalid username or password';
            console.error('Error authenticating:', error);
            }
            console.log(this.isLoggedIn);
            console.log(this.userId);
        },
        logout(){
            this.isLoggedIn = false;
            this.userId = null;
            this.username = "";
            this.password = "";
        },

        GoToSignUp(){
            this.$router.push({name:"SignUp"});
        },
        
        GoToSolo(){
            this.$router.push({name:"SoloCrate"});
        },
        GoToTrio(){
            this.$router.push({name:"TrioCrate"});
        }
        
        
    }
}

</script>


<template>
 
    <div class="container">
      <img src="../assets/Kit.jpg" class="centered-image " style="width: 350px; height: 350px;" />
    <h1>Kit Crates</h1>
    
    <div>
      
     

      <div v-if="!isLoggedIn" class="login-form">
        <div class="input-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" placeholder="Enter your username">
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input type="text" v-model="password" id="password" placeholder="Enter your password">
        </div>
        <button v-on:click="login">Login</button>
        <button v-on:click="GoToSignUp">Sign Up</button>
       
        <p v-if="loginError" class="error-msg">{{ loginError }}</p>
      </div>

     
    </div>
    
    
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttons-container {
  display: flex;
  justify-content:  space-between; /* Adjust the space between buttons */
  margin-top: 20px;
}
.buttons-container button {
  margin: 0 150px; /* Adjust the horizontal margin for each button */
}
.spacer {
  flex: 1;
}

.input-group {
  margin-bottom: 10px;
}

.error-msg {
  color: red;
  margin-top: 5px;
}


h1 {
  text-align: center;
  margin-left: 100px;
  margin-bottom: 50px;
}
button#logout-button {
  margin-top: 190px; /* Adjust the top margin to move it lower */
  align-self: center; /* Center horizontally */
}

.centered-image {
  width: 200px; /* Adjust the width as needed */
  height: 200px; /* Adjust the height as needed */
  display: inline-block;
  margin: 0 auto; /* This centers the image horizontally */
}
</style>
