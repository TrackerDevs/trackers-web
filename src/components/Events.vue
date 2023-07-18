<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <div class="font-roboto bg-gray-50">
    <Nav :use-banner="false" />
    <div class="flex pt-[72px]">
      <div class="flex flex-col w-full h-[calc(100vh-72px)]">
        <div class="flex flex-row w-full items-center border-b p-4">
          <p class="text-gray-800 font-bold text-xl w-[19rem]">
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
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:outline-none focus:border-red-400"
                placeholder="Search"
                required
              >
            </form>
          </div>
          <div>
            <button :class="`bg-gray-100 hover:bg-red-100 text-gray-600 font-bold rounded py-1 px-4 mx-2`">
              Day
            </button>
            <button :class="`bg-gray-100 hover:bg-red-100 text-gray-600 font-bold rounded py-1 px-4 mx-2`">
              Week
            </button>
            <button :class="`bg-red-50 hover:bg-red-100 text-red-500 font-bold rounded py-1 px-4 mx-2`">
              Month
            </button>
          </div>
        </div>
        <div class="flex flex-row w-full h-full border-l">
          <div class="flex flex-col w-2/5 h-full border-r border-b">
            <div class="flex flex-row items-center justify-between py-2 px-6">
              <p class="text-gray-800 mr-auto font-bold">
                {{ MONTH_NAMES[controllerMonth] }} {{ controllerYear }}
              </p>
              <div
                class="border rounded-lg px-1"
                style="padding-top: 2px;"
              >
                <button
                  type="button"
                  class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-red-100 p-1 items-center"
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
                <div class="border-r inline-flex h-6" />
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
                    <p>
                      {{ _dayName }}
                    </p>
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
                    :class="`group text-center items-center justify-center cursor-pointer`"
                    @click="month = controllerMonth; year = controllerYear; day = dayNum; update()"
                  >
                    <!-- TODO: Fix transition -->
                    <p
                      :class="`m-auto w-6 h-6 text-gray-700 rounded-full transition ease-in-out duration-100 ${controllerIsToday(dayNum) ? 'bg-red-500 text-white group-hover:bg-red-800' : 'group-hover:bg-blue-200'}`"
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
          </div>
          <Month
            :start-padding="startPadding"
            :days-in-month="daysInMonth"
            :end-padding="endPadding"
            :today="today"
            :month="month"
            :year="year"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav';
import Month from "./Events/Month.vue";
export default {
  name: 'EventsComponent',
  components: {
    Nav,
    Month
  },
  data() {
    return {
      MONTH_NAMES: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      DAYS: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      DAYS_FULL: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      today: new Date(),
      month: 0,
      year: 0,
      day: 0,
      dayName: "",
      datepickerValue: new Date(),
      startPadding: [],
      daysInMonth: [],
      endPadding: [],

      controllerMonth: 0,
      controllerYear: 0,
      controllerStartPadding: [],
      controllerDaysInMonth: [],
      controllerEndPadding: [],
    }
  },
  mounted() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const datepickerValue = new Date(year, month, today.getDate()).toDateString();

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

    this.today = today;
    this.month = month;
    this.year = year;
    this.day = day;
    this.dayName = this.today.getDay();
    this.datepickerValue = datepickerValue;
    this.startPadding = startPadding;
    this.daysInMonth = daysInMonth;
    this.endPadding = endPadding;

    this.controllerMonth = month;
    this.controllerYear = year;
    this.controllerStartPadding = startPadding;
    this.controllerDaysInMonth = daysInMonth;
    this.controllerEndPadding = endPadding;

    return {};
  },
  methods: {
    controllerIsToday(date) {
      return new Date(this.controllerYear, this.controllerMonth, date).toDateString() == this.today.toDateString();
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

      this.startPadding = startPadding;
      this.daysInMonth = daysInMonth;
      this.endPadding = endPadding;
    }
  }
}
</script>

<style>
@import '../dist/output.css';
</style>