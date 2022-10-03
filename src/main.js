import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Landing from "./components/Landing";
import NotFoundComponent from "./components/404";
import App from "./App";

const routes = [ { path: "/", component: Landing }, { path: "/:pathMatch(.*)", component: NotFoundComponent } ];

const router = createRouter({
	mode: "history",
	history: createWebHistory(),
	routes
});

const app = createApp(App);

app.use(router);

app.mount("#app");
