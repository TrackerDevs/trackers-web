import { defineStore } from "pinia";

export const useUIStore = defineStore("uiStore", {
	state: () => ({
        loading: false,
        errors: {}
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
        }
	}
});
