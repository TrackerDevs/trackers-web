import { defineStore } from "pinia";
import axios from "axios";

export const useTeamCardsStore = defineStore("teamCard", {
	state: () => ({
		admins: [],
		engineers: []
	}),
	getters: {
		getTeamAdmins (state) {
			return state.admins;
		}
	},
	actions: {
		async fetchTeam () {
			const res = await axios.get("/team");
			this.admins = res.data.teamData.filter((person) => person.info.admin.booleanValue);
			this.engineers = res.data.teamData.filter((person) => !person.info.admin.booleanValue);
		}
	}
});
