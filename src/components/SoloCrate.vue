<template>
  <div class="container">
    <img src="../assets/Solo.jpg" class="centered-image" style="width: 350px; height: 350px;" />

    <h1>Price 27$</h1>
    
    <button v-on:click="GoToShoppingCart" class="cart-button">Order</button>

    

    <button v-on:click="GoToHome" class="logout-button">Back</button>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'SoloCrate',
  data() {
    return {
      isLoggedIn: false, // Make sure isLoggedIn is defined in your data
      userId: null,
    };
  },
  methods: {
    async addToCart() {
      try {
        // Check if the user is logged in before making the addToCart request
        if (this.isLoggedIn) {
          // Make an API request to add a crate to the user's cart using the obtained user ID
          await axios.post(`http://ec2-16-171-230-40.eu-north-1.compute.amazonaws.com/api/ShoppingCart/${this.userId}/add/1`, {
            userId: this.userId,
            crateId: 'yourCrateId',
          });

          // You can handle success or update the UI accordingly
        } else {
          console.error('User not logged in');
        }
      } catch (error) {
        console.error('Error adding to cart', error);
      }
    },
    GoToHome() {
      this.$router.push({ name: 'Home' });
    },

    GoToShoppingCart() {
      this.$router.push({ name: 'ShoppingCart' });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px; /* Adjust the top margin as needed */
}
.container button{
  color: black;
  background-color: gold;

}

.cart-button {
  margin-top: 20px; /* Adjust the top margin as needed */
}

.logout-button {
  align-self: flex-start; /* Align to the left */
  margin-top: 20px; /* Adjust the top margin as needed */
}
</style>
