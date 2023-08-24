<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <div class="font-roboto bg-gray-50">
    <Nav :use-banner="false" />
    <div class="flex pt-[72px]">
      <div class="flex flex-col w-full h-[calc(100vh-72px)]">
        <div class="border-b py-2">
          <div class="flex flex-row w-[85%] items-center mx-auto">
            <p class="text-gray-800 font-bold text-xl lg:w-[19rem] md:w-32">
              {{ DAYS_FULL[dayName] }}, {{ MONTH_NAMES[month] }} {{ day }} {{ year }}
            </p>
            <div class="mr-auto ml-2 relative">
              <form>
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  id="default-search"
                  type="search"
                  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:outline-none focus:border-red-400"
                  placeholder="Search"
                  required
                >
              </form>
            </div>
            <div>
              <button
                :class="`${type === 2 ? 'bg-red-50 hover:bg-red-100 text-red-500' : 'bg-gray-100 hover:bg-red-100 text-gray-600'} font-bold rounded py-1 px-4 mx-2`"
                @click="type = 2"
              >
                Day
              </button>
              <button
                :class="`${type === 1 ? 'bg-red-50 hover:bg-red-100 text-red-500' : 'bg-gray-100 hover:bg-red-100 text-gray-600'} font-bold rounded py-1 px-4 mx-2`"
                @click="type = 1"
              >
                Week
              </button>
              <button
                :class="`${type === 0 ? 'bg-red-50 hover:bg-red-100 text-red-500' : 'bg-gray-100 hover:bg-red-100 text-gray-600'} font-bold rounded py-1 px-4 mx-2`"
                @click="type = 0"
              >
                Month
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-row w-full h-full border-l">
          <div class="flex flex-col w-2/5 h-full border-r border-b">
            <div class="flex flex-row items-center justify-between py-2 w-[80%] mx-auto">
              <p class="text-gray-800 mr-auto font-bold">
                {{ MONTH_NAMES[controllerMonth] }} {{ controllerYear }}
              </p>
              <div class="rounded-lg pt-[2px]">
                <button
                  type="button"
                  class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-red-100 items-center p-1"
                  @click="controllerUpdate(controllerMonth - 1)"
                >
                  <svg
                    class="h-6 w-6 text-gray-500 inline-flex leading-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-red-100 p-1"
                  @click="controllerUpdate(controllerMonth + 1)"
                >
                  <svg
                    class="h-6 w-6 text-gray-500 inline-flex leading-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex flex-col mx-auto w-[80%] h-50">
              <div class="grid grid-cols-7">
                <template
                  v-for="_dayName in DAYS"
                  :key="_dayName"
                >
                  <div class="py-2 text-gray-600 text-sm tracking-wide font-bold justify-center text-center">
                    {{ _dayName }}
                  </div>
                </template>
              </div>
              <div class="grid grid-cols-7 grid-rows-6">
                <template
                  v-for="padding in controllerStartPadding"
                  :key="padding"
                >
                  <div />
                </template>
                <template
                  v-for="dayNum in controllerDaysInMonth"
                  :key="dayNum"
                >
                  <div
                    :class="`flex group text-center items-center justify-center cursor-pointer`"
                    @click="month = controllerMonth; year = controllerYear; day = dayNum; update()"
                  >
                    <p
                      :class="`flex items-center justify-center w-6 h-6 text-gray-700 rounded-full transition ease-in-out duration-100 ${controllerIsToday(dayNum) ? 'bg-red-500 text-white group-hover:bg-red-800' : 'group-hover:bg-blue-200'} ${controllerIsSelected(dayNum) ? 'border border-blue-500' : ''}`"
                    >
                      {{ dayNum }}
                    </p>
                  </div>
                </template>
                <template
                  v-for="padding in controllerEndPadding"
                  :key="padding"
                >
                  <div />
                </template>
              </div>
            </div>
            <div class="relative overflow-auto h-full border-t mt-4 p-4">
              <div class="text-gray-800 font-bold ml-4">
                Upcoming events
              </div>
              <div class="absolute left-6">
                <div v-if="store.upcomingEvents.length == 0">
                  <p class="m-2">
                    No upcoming events
                  </p>
                </div>
                <template
                  v-for="event in store.upcomingEvents"
                  :key="event.id"
                >
                  <div class="flex flex-row">
                    <div :class="`min-w-[4px] bg-${event.info.theme.stringValue}-600 m-2 rounded-md`" />
                    <div
                      :class="`text-gray-800 rounded-sm p-2`"
                    >
                      {{ event.info.name.stringValue }} - {{ new Date(event.info.startTime.timestampValue).toLocaleString() }}
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="w-full h-full mx-4 pb-4">
            <div class="w-full h-full border-l">
              <Month
                v-if="type === 0"
                :start-padding="startPadding"
                :days-in-month="daysInMonth"
                :end-padding="endPadding"
                :today="today"
                :month="month"
                :year="year"
                :day="day"
                :events="store.events"
                :goto-func="goto"
              />
              <Week
                v-if="type === 1"
                :start-padding="weekStartPadding"
                :days-in-week="weekDaysInWeek"
                :end-padding="weekEndPadding"
                :today="today"
                :month="month"
                :year="year"
                :day="day"
                :events="store.events"
                :goto-func="goto"
              />
              <Day
                v-if="type === 2"
                :days-in-week="[daysInMonth[day - 1]]"
                :today="today"
                :month="month"
                :year="year"
                :day="day"
                :days="[DAYS_FULL[dayName]]"
                :events="store.events"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav';
import Month from "./Events/Month.vue";
import Week from "./Events/Week.vue";
import Day from "./Events/Day.vue";
import { useCalendarEventsStore } from '../stores/calendarEvents';
export default {
  name: 'EventsComponent',
  components: {
    Nav,
    Month,
    Week,
    Day
  },
  setup() {
    const store = useCalendarEventsStore();
    store.fetchEvents();
    store.fetchUpcomingEvents();
    return { store };
  },
  data() {
    return {
      MONTH_NAMES: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      DAYS: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      DAYS_FULL: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      type: 0,
      today: new Date(),
      month: 0,
      year: 0,
      day: 0,
      dayName: "",
      startPadding: [],
      daysInMonth: [],
      endPadding: [],
      weekStartPadding: [],
      weekDaysInWeek: [],
      weekEndPadding: [],

      controllerMonth: 0,
      controllerYear: 0,
      controllerStartPadding: [],
      controllerDaysInMonth: [],
      controllerEndPadding: [],
    }
  },
  mounted() {
    this.today = new Date();
    this.day = this.today.getDate();
    this.dayName = this.today.getDay();
    this.month = this.today.getMonth();
    this.year = this.today.getFullYear();
    this.controllerMonth = this.month;
    this.controllerYear = this.year;

    this.update();
    this.controllerUpdate(this.controllerMonth);

    return {};
  },
  methods: {
    controllerIsToday(date) {
      return new Date(this.controllerYear, this.controllerMonth, date).toDateString() == this.today.toDateString();
    },
    controllerIsSelected(date) {
      return new Date(this.controllerYear, this.controllerMonth, date).toDateString() == new Date(this.year, this.month, this.day).toDateString();
    },
    controllerUpdate(newMonth) {
      if (newMonth > 11)
        this.controllerYear++;
      if (newMonth < 0) {
        newMonth = 11;
        this.controllerYear--;
      }
      this.controllerMonth = newMonth % 12;
      let month = this.controllerMonth;
      let year = this.controllerYear;

      let dayOfWeek = new Date(year, month).getDay();
      let startPadding = [];
      for (var i = 1; i <= dayOfWeek; i++) {
        startPadding.push(i);
      }

      let numDaysInMonth = new Date(year, month + 1, 0).getDate();
      let daysInMonth = [];
      for (i = 1; i <= numDaysInMonth; i++) {
        daysInMonth.push(i);
      }

      dayOfWeek = new Date(year, month + 1).getDay();
      let endPadding = [];
      for (i = 1; i <= 7 - dayOfWeek; i++) {
        endPadding.push(i);
      }

      this.controllerStartPadding = startPadding;
      this.controllerDaysInMonth = daysInMonth;
      this.controllerEndPadding = endPadding;
    },
    update() {
      this.dayName = new Date(this.year, this.month, this.day).getDay();
      let month = this.month;
      let year = this.year;

      let dayOfWeek = new Date(year, month).getDay();
      let startPadding = [];
      for (var i = 1; i <= dayOfWeek; i++) {
        startPadding.push(i * -1);
      }

      let numDaysInMonth = new Date(year, month + 1, 0).getDate();
      let daysInMonth = [];
      for (i = 1; i <= numDaysInMonth; i++) {
        daysInMonth.push(i);
      }

      dayOfWeek = new Date(year, month + 1).getDay();
      let endPadding = [];
      for (i = 1; i <= 7 - dayOfWeek; i++) {
        endPadding.push(i + 100);
      }

      this.startPadding = startPadding;
      this.daysInMonth = daysInMonth;
      this.endPadding = endPadding;

      this.weekStartPadding = [];
      this.weekDaysInWeek = [];
      this.weekEndPadding = [];
      let monthIndex = Math.floor((startPadding.length + this.day - 1) / 7);
      let totalDays = startPadding.concat(daysInMonth, endPadding);

      for (i = 0; i < 7; i++) {
        let day = totalDays[(monthIndex * 7) + i];
        if (day < 0) {
          this.weekStartPadding.push(day);
        } else if (day > 100) {
          this.weekEndPadding.push(day);
        } else {
          this.weekDaysInWeek.push(day);
        }
      }
    },
    goto(date) {
      this.type = 2;
      this.day = date;
      this.update();
    }
  }
}
</script>

<style>
@import '../dist/output.css';
</style>