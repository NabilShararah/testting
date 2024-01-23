<template>
  <div class="container">
    <img src="@/assets/Kit.jpg" class="centered-image" style="width: 350px; height: 350px;" />
    
    <div class="button-row">
      <button v-on:click="goToSolo" class="solo-button">Solo Crate</button>
      <div class="spacer"></div>
      <button v-on:click="goToTrio" class="trio-button">Trio Crate</button>
    </div>

    <button v-on:click="goToHome" class="logout-button">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Home',

  methods: {
    goToSolo() {
      this.$router.push({ name: "SoloCrate" });
    },
    goToTrio() {
      this.$router.push({ name: "TrioCrate" });
    },
    goToHome() {
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  align-items: center; /* Center items horizontally */
}

.button-row {
  display: flex;
  gap: 10px; /* Adjust the gap between Solo and Trio buttons */
  justify-content: center; /* Center buttons horizontally */
  margin-top: 20px; /* Adjust the top margin as needed */
}

.solo-button,
.trio-button,
.logout-button {
  padding: 10px;
  font-size: 12px;
}





.logout-button {
 
  
  
  margin-top: 20px; /* Adjust the top margin as needed */
}

.spacer {
  width: 500px; /* Adjust the space between buttons */
}

.centered-image {
  width: 200px; /* Adjust the width as needed */
  height: 200px; /* Adjust the height as needed */
  display: inline-block;
  margin: 20px auto; /* Center the image horizontally with a margin */
}
</style>
