<template>
  <div class="container">
    <img src="../assets/Kit.jpg" class="centered-image" style="width: 350px; height: 350px;" />
    <h1>Kit Crates</h1>
    <h2>Trio Crate</h2>

    <div>
      <div v-if="!isLoggedIn" class="login-form">
        <div class="input-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" placeholder="Enter your username" />
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" placeholder="Enter your password" />
          <button @click="login" class="order-button">Order</button>
        </div>
        <button @click="GoToTrio" class="Back">Back</button>
        <p v-if="loginError" class="error-msg">{{ loginError }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      isLoggedIn: false,
      userId: null,
      loginError: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.get(
          `http://ec2-16-171-230-40.eu-north-1.compute.amazonaws.com/api/User/${this.username}`
        );
        if (response.data.password === this.password) {
          this.isLoggedIn = true;
          this.userId = response.data.id;
          this.loginError = "";
          const addToCartResponse = await axios.post(
            `http://ec2-16-171-230-40.eu-north-1.compute.amazonaws.com/api/ShoppingCart/${this.userId}/add/2`
          );
        } else {
          this.isLoggedIn = false;
          this.loginError = "Invalid username or password";
        }
      } catch (error) {
        this.isLoggedIn = false;
        this.loginError = "Invalid username or password";
        console.error("Error authenticating:", error);
      }
      console.log(this.isLoggedIn);
      console.log(this.userId);
    },
    logout() {
      this.isLoggedIn = false;
      this.userId = null;
      this.username = "";
      this.password = "";
    },

    GoToSignUp() {
      this.$router.push({ name: "SignUp" });
    },

    GoToSolo() {
      this.$router.push({ name: "SoloCrate" });
    },
    GoToTrio() {
      this.$router.push({ name: "TrioCrate" });
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 20px;
}

.centered-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.login-form {
  max-width: 400px;
  margin: 5px auto;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 3px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error-msg {
  color: #ff0000;
  margin-top: 10px;
}
</style>
