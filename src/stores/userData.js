import { defineStore } from "pinia";
import axios from "axios";

import { useUIStore } from "./uiStore";

export const useUserDataStore = defineStore("userData", {
	persist: true,
	state: () => ({
		loading: false,
		authenticated: false,
		errors: {},
		user: {},
		mailingList: []
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
				console.log(e.response.data);
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
				
				if (router.options.history.state.back === "/login" || router.options.history.state.back === "/signup")
					router.push({ path: "/" });
				else
					router.go(-1);
			} catch (e) {
				// console.log(e);
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

				if (router.options.history.state.back === "/login" || router.options.history.state.back === "/signup")
					router.push({ path: "/" });
				else
					router.go(-1);
			} catch (e) {
				// console.log(e);
				uiStore.setErrors(e.response.data);
			}
		},
		logoutUser (router) {
			localStorage.removeItem("RefreshToken");
			localStorage.removeItem("userData");
			delete axios.defaults.headers.common["Authorization"];
			this.authenticated = false;
			this.user = {};
			router.go();
		},
		async loginUserGoogle (code, router) {
			const uiStore = useUIStore();
			try {
				uiStore.loadingUI();
				const res = await axios.post("/auth/google", { code });
				localStorage.setItem("RefreshToken", res.data.refreshToken);
				axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.refreshToken}`;
				await this.fetchUser();
				uiStore.clearErrors();

				if (router.options.history.state.back === "/login" || router.options.history.state.back === "/signup")
					router.push({ path: "/" });
				else
					router.go(-1);
			} catch (e) {
				// console.log(e);
				uiStore.setErrors(e.response.data);
			}
		},
		async subscribe () {
			const uiStore = useUIStore();
			try {
				uiStore.loadingUI();
				await axios.put("/user/subscribe");
				await this.fetchUser();
				uiStore.clearErrors();
			} catch (e) {
				uiStore.setErrors(e.response.data);
			}
		},
		async fetchMailingList () {
			const res = await axios.get("/mailingList");
			this.mailingList = res.data.mailingList;
		}
	}
});
