import { defineStore } from "pinia";
import axios from "axios";

export const useCalendarEventsStore = defineStore("calendarEvents", {
	state: () => ({
		events: [],
		upcomingEvents: []
	}),
	actions: {
		async fetchEvents () {
			const res = await axios.get("/calendar");
			this.events = res.data.events;
		},
		async fetchUpcomingEvents () {
			const res = await axios.get("/calendar/upcoming");
			this.upcomingEvents = res.data.events;
		}
	}
});
