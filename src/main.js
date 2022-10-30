import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Landing from "./components/Landing";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Signup from "./components/Signup";
import Support from "./components/Support";
import NotFoundComponent from "./components/404";
import App from "./App";

const routes = [ 
	{ path: "/", component: Landing }, 
	{ path: "/login", component: Login }, 
	{ path: "/signup", component: Signup }, 

	{ path: "/about", component: About }, 
	{ path: "/contact", component: Contact }, 
	{ path: "/support", component: Support }, 

	{ path: "/events", component: Events }, 
	
	{ path: "/:pathMatch(.*)", component: NotFoundComponent } 
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

const app = createApp(App);

app.use(router);

app.mount("#app");
