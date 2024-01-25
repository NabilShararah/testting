<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      errorMessage: '', 
    };
  },
  methods: {
    async signUp() {
  this.errorMessage = ''; 
  if (!this.username || !this.email || !this.password) {
    this.errorMessage = 'Please fill in all the details.';
    return;
  }

  try {
    let result = await axios.post(
      `http://ec2-16-171-230-40.eu-north-1.compute.amazonaws.com/api/User/${this.username}/${this.password}/${this.email}`
    );
    console.log(result);
    this.$router.push({ name: 'Login' });
  } catch (error) {
    console.error('Error during signup:', error);

    if (error.response && error.response.status === 409) {
      // HTTP status 409 indicates a conflict, meaning the username or email already exists
      this.errorMessage = 'Username or email already exists. Please choose a different one.';
    } else {
      // Handle other errors accordingly
      this.errorMessage = 'An error occurred during signup. Username or email already exists';
    }
  }
},
    GoToHome() {
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<template>
  <div class="register">
    <p>{{$route.params.crate}}</p>

    <img v-on:click="GoToHome" class="logo" src="../assets/Kit.jpg" />
    <h1>Sign Up</h1>
    <input type="text" v-model="username" placeholder="Enter Username" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="text" v-model="password" placeholder="Enter Password" />

    <!-- Display error message if it exists -->
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <div class="SignUp2-group">
      <button v-on:click="signUp">Sign Up</button>
    </div>
    <div class="Back-group">
      <button v-on:click="GoToHome" class="logout-button">Back</button>
    </div>
  </div>
</template>




<style>
.logo {
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 150px;
}

.register {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: black; /* Optional: Set a background color if needed */
    color: white; /* Optional: Set text color for better visibility */
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    border: 1px solid gold;
}

.register h1 {
    width: 300px;
    height: 10px;
    display: block;
    margin-left: auto;
    height: 5vh;
}

h1 {
    width: 300px;
    height: 10px;
    display: block;
    margin-left: 30px;
    height: 30vh;
}


.SignUp2-group button {
    color: black;
    background-color: gold;
    margin-top: 5px;
}
.Back-group button{
    color: black;
    background-color: gold;
    margin-top: 8px;

}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>



