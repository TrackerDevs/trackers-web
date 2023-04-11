import { defineStore } from "pinia";
import axios from "axios";

import { useUIStore } from "./uiStore";

export const useUserDataStore = defineStore("userData", {
	persist: true,
	state: () => ({
		loading: false,
		authenticated: false,
		errors: {},
		user: {}
	}),
	actions: {
		async fetchUser () {
			try {
				this.loading = true;
				const res = await axios.get("/user");
				this.user = res.data.userData;
				this.authenticated = true;
				this.loading = false;
			} catch (e) {
				console.log(e);
				this.authenticated = false;
			}
		},
		async loginUser (userData, router) {
			const uiStore = useUIStore();
			try {
				uiStore.loadingUI();
				const res = await axios.post("/login", userData);
				localStorage.setItem("RefreshToken", res.data.refreshToken);
				axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.refreshToken}`;
				await this.fetchUser();
				uiStore.clearErrors();
				router.push({ path:"/" });
			} catch (e) {
				console.log(e);
				uiStore.setErrors(e.response.data);
			}
		},
		async signupUser (userData, router) {
			const uiStore = useUIStore();
			try {
				uiStore.loadingUI();
				const res = await axios.post("/signup", userData);
				localStorage.setItem("RefreshToken", res.data.refreshToken);
				axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.refreshToken}`;
				await this.fetchUser();
				uiStore.clearErrors();
				router.push({ path:"/" });
			} catch (e) {
				console.log(e);
				uiStore.setErrors(e.response.data);
			}
		},
		logoutUser (router) {
			localStorage.removeItem("RefreshToken");
			localStorage.removeItem("userData");
			delete axios.defaults.headers.common["Authorization"];
			this.authenticated = false;
			router.go();
		}
	}
});
