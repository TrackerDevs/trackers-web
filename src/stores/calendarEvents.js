import { defineStore } from "pinia";
import axios from "axios";

export const useCalendarEventsStore = defineStore("calendarEvents", {
	state: () => ({
		events: []
	}),
	actions: {
		async fetchEvents () {
			const res = await axios.get("/calendar");
			this.events = res.data.events;
		}
	}
});
