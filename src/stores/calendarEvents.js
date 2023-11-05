import { defineStore } from "pinia";
import axios from "axios";

import { useUIStore } from "./uiStore";

export const useCalendarEventsStore = defineStore("calendarEvents", {
	state: () => ({
		events: [],
		upcomingEvents: [],
		event: {}
	}),
	actions: {
		async fetchEvents () {
			const res = await axios.get("/calendar");
			this.events = res.data.events;
		},
		async fetchEventsAdmin () {
			const res = await axios.get("/calendarAdmin");
			this.events = res.data.events;
		},
		async fetchUpcomingEvents () {
			const res = await axios.post("/calendar/upcoming");
			this.upcomingEvents = res.data.events;
		},
		async getEvent(id) {
			const res = await axios.get(`/calendar/${id}`);
			this.event = res.data.event;
		},
		async rsvpEvent(id) {
			const uiStore = useUIStore();
			try {
				uiStore.loadingUI();
				await axios.post(`/calendar/rsvp`, { eventId: id });
				const res = await axios.get(`/calendar/${id}`);
				this.event = res.data.event;
				const res2 = await axios.get("/calendar");
				this.events = res2.data.events;
				uiStore.clearErrors();
			} catch (e) {
				uiStore.setErrors(e.response.data);
			}
		}
	}
});
