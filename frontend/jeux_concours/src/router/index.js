import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/MyHome.vue'
import Login from '../components/MyLogin.vue'
import Register from '../components/MyRegister.vue'
import Game from '../components/MyGame.vue'
import Admin from '../components/MyAdmin.vue'

function guardMyroute(to, from, next) {
    const token = "Bearer " + localStorage.getItem("token");
    const option = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
        credentials: "include",
    };
    fetch("http://localhost:9000/users/current", option)
        .then((response) => response.json())
        .then((data) => {
            
            if (data.message == "Invalid Token") {
                router.push("/login");
            }
            if (data.play == true) {
                router.push("/home");
            }
            next();
        });
}
function isAdmin(to, from, next) {
    const token = "Bearer " + localStorage.getItem("token");
    const option = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
        credentials: "include",
    };
    fetch("http://localhost:9000/users/current", option)
        .then((response) => response.json())
        .then((data) => {
            if (data.message == "Invalid Token" && data.role == "User") {
                router.push("/home");
            }
            next();
        });
}


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/game",
        name: "Game",
        component: Game,
        beforeEnter: guardMyroute,
    },
    {
        path: "/admin",
        name: "admin",
        component: Admin,
        beforeEnter: isAdmin,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
