<template>
    
    <div class="container">
    <img src="../assets/Kit.jpg" class="centered-image " style="width: 350px; height: 350px;" />
    <h1>Thank You for Your Order!</h1>
    <h2>We Will Contact You For Your Address</h2>
    <h3>Delivery Takes Up To 5 Days Hope You Enjoy Our Product!!</h3>
    <button @click="GoToHome" class="Back">Back to Available Crates</button>
  </div>
</template>

<script>
export default {
  methods: {
    GoToHome() {
      this.$router.push({ name: 'Home' }); // Change 'Home' to the name of your home component
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 20px;
}

.container button {
  color: black;
  background-color: gold;
  margin-top: 10px;
}
h1,h2,h3{
    font-size: 18px;
    color: gold;
}

</style>