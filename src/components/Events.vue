<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <div class="font-roboto bg-gray-50">
    <Nav :use-banner="false" />
    <div class="flex pt-[72px]">
      <div class="flex flex-col w-full h-[calc(100vh-72px)]">
        <div class="flex w-full border-b p-4">
          MAIN
        </div>
        <div class="flex flex-row w-full h-full border-l">
          <div class="flex flex-col w-2/5 h-full border-r border-b">
            <div class="flex flex-row items-center justify-between py-2 px-6">
              <p class="mr-auto font-bold">
                {{ MONTH_NAMES[controllerMonth] }} {{ controllerYear }}
              </p>
              <div
                class="border rounded-lg px-1"
                style="padding-top: 2px;"
              >
                <button
                  type="button"
                  class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
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
                  class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
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
                  v-for="day in DAYS"
                  :key="day"
                >
                  <div class="py-2 text-gray-600 text-sm tracking-wide font-bold justify-center text-center">
                    <p>
                      {{ day }}
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
                    @click="month = controllerMonth; year = controllerYear; update()"
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
      today: new Date(),
      month: 0,
      year: 0,
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