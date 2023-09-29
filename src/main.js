import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import vue3GoogleLogin from 'vue3-google-login';

import Landing from "./components/Landing";
import Login from "./components/Login";
import About from "./components/About";
import AboutTeam from "./components/AboutTeam";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Signup from "./components/Signup";
import Support from "./components/Support";
import Rsvp from "./components/Rsvp";
import Hub from "./components/Hub";
import NotFoundComponent from "./components/404";
import App from "./App";

// import AuthRoute from "./util/AuthRoute";
import UnAuthRoute from "./util/UnAuthRoute";

import axios from "axios";
axios.defaults.baseURL = "https://us-central1-cs-trackers.cloudfunctions.net/api";

import { useUserDataStore } from "./stores/userData";

const app = createApp(App);

app.use(vue3GoogleLogin, {
	clientId: "935833516033-47ej1juso2sihf7cu7h6jqict9vddnqj.apps.googleusercontent.com"
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

const token = localStorage.RefreshToken;
if (token) {
	axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	const store = useUserDataStore();
	store.fetchUser();
}

const routes = [
	{ path: "/", component: Landing },
	{
		path: "/login",
		component: Login,
		beforeEnter: [ UnAuthRoute ]
	},
	{
		path: "/signup",
		component: Signup,
		beforeEnter: [ UnAuthRoute ]
	},

	{ path: "/about", component: About },
	{ path: "/about/team", component: AboutTeam },
	{ path: "/contact", component: Contact },
	{ path: "/support", component: Support },
	{ path: "/rsvp", component: Rsvp },
	{ path: "/hub", component: Hub },

	{ path: "/events", component: Events },

	{ path: "/:pathMatch(.*)", component: NotFoundComponent }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

app.use(router);

app.mount("#app");
