import { defineStore } from "pinia";
import axios from "axios";

export const useUIStore = defineStore("uiStore", {
	state: () => ({
        loading: false,
        errors: {},
        members: {},
	}),
	actions: {
		setErrors(e) {
            this.loading = false;
            this.errors = e;
        },
        clearErrors() {
            this.loading = false;
            this.errors = {};
        },
        loadingUI() {
            this.loading = true;
        },
        async fetchMembers () {
			try {
                this.loading = true;
				const res = await axios.get("/discord/members");
				this.members = res.data;
                this.loading = false;
			} catch (e) {
				console.log(e.response.data);
                this.loading = false;
			}
		}
	}
});
