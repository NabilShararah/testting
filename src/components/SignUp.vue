    <script>
    import { ref } from 'vue';
    import axios from 'axios'
        const crate = ref("");
    export default{
        name:'SignUp',
        data(){
            return{
                username:'',
                email:'',
                password:''
            }
        },
        methods:{
            async signUp(){
               let result = await axios.post(`http://ec2-16-171-230-40.eu-north-1.compute.amazonaws.com/api/User/${this.username}/${this.password}/${this.email}`);
               console.log(result);
               this.$router.push({name: 'Login'})
            },
            GoToHome(){
                this.$router.push({name: 'Login'})
            }
        }
    }
    </script>
<template>
    
<p>{{$route.params.crate}}</p>

    <img v-on:click="GoToHome" class = "logo" src="../assets/Kit.jpg"/>
   
    <h1>Sign Up</h1>
    
    <div class="register" >
        <input type="text" v-model="username" placeholder="Enter Username"/>
        <input type="text" v-model="email"  placeholder="Enter Email"/>
        <input type="text" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="signUp">Sign Up</button>
        <button v-on:click="GoToHome" class="logout-button">Back</button>


    </div>
        
</template>



<style>
.logo{
    display: inline-block;
    margin: 0 auto;
    width:  150px;
    height: 150px;
}
.register input{
    
    width: 300px;
    height: 40px;
    padding-left: 20px;
display: block;
margin-bottom: 30px;
margin-right: auto;
margin-left: auto;
border: 1px solid gold;

}


h1 {     width: 300px;
    height: 40px;
    padding-left: 20px;
display: block;
margin-bottom: 30px;
margin-right: auto;
margin-left: auto;
 
  height: 30vh;
  text-align: center;
  padding-right: 100px;
}

</style>




