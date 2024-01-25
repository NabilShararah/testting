import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import SoloCrate from "./components/SoloCrate.vue";
import TrioCrate from "./components/TrioCrate.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import ShoppingCart2 from "./components/ShoppingCart2.vue";
import Thankyou from "./components/Thankyou.vue";




import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        name:"Home",
        component: Home,
        path: "/Home",
    },

    {
        name:"SignUp",
        component: SignUp,
        path: "/SignUp",
    },
    
    {
        name:"Login",
        component: Login,
        path: "/",
    },

    {
        name:"SoloCrate",
        component: SoloCrate,
        path: "/SoloCrate",
    },

    {
        name:"TrioCrate",
        component: TrioCrate,
        path: "/TrioCrate",
    },

    {
        name:"ShoppingCart",
        component: ShoppingCart,
        path: "/ShoppingCart",
    },

    {
        name:"ShoppingCart2",
        component: ShoppingCart2,
        path: "/ShoppingCart2",
    },
    {
        name:"Thankyou",
        component: Thankyou,
        path: "/Thankyou",
    },
];

const router= createRouter({
    history: createWebHistory(),
    routes,
});
export default router;