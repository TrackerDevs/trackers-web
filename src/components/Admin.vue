<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <div class="font-roboto bg-gray-50">
    <Nav />
    <div class="flex min-h-screen pt-[113px] mb-16 mx-4 sm:mx-6 lg:mx-8">
      <div class="flex mx-auto mt-2 w-full">
        <div class="flex flex-wrap w-full md:mx-32 lg:mx-[12rem] pt-12">
          <div class="w-full">
            <p class="font-bold text-4xl mb-4">
              Admin portal
            </p>
            <p class="text-2xl">
              Mailing List:
            </p>
            <div
              v-if="userStore.mailingList.length !== 0"
              class="w-full m-4"
            >
              <template
                v-for="event in userStore.mailingList"
                :key="event.id.stringValue"
              >
                <p>{{ event.username.stringValue }}</p>
              </template>
              <hr class="my-2 dark:border-[#363b3d]">
              <template
                v-for="event in userStore.mailingList"
                :key="event.id.stringValue"
              >
                <p>{{ event.email.stringValue }}</p>
              </template>
            </div>
            <div v-else>
              <p>Loading...</p>
            </div>
            <p class="text-2xl">
              All Events:
            </p>
            <div
              v-if="store.events.length !== 0"
              class="w-full"
            >
              <template
                v-for="event in store.events"
                :key="event.info.id.stringValue"
              >
                <EventAccordion :event="event" />
              </template>
            </div>
            <div v-else>
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
  
<script>
import Nav from './Nav';
import Footer from './Footer';
import EventAccordion from './Events/EventAccordion';
import { useCalendarEventsStore } from '../stores/calendarEvents';
import { useUserDataStore } from '../stores/userData';
export default {
    name: 'AdminComponent',
    components: {
        Nav,
        Footer,
        EventAccordion
    },
    setup() {
      const store = useCalendarEventsStore();
      store.fetchEventsAdmin();
      const userStore = useUserDataStore();
      userStore.fetchMailingList();
      return { store, userStore };
    },
}
</script>

<style>
@import '../dist/output.css';
</style>