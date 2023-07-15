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
          <div class="w-1/4 border-r border-b">
            CONTROLS
          </div>
          <Month
            :blankdays="blankdays"
            :no-of-days="no_of_days"
            :end-blankdays="endBlankdays"
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
  setup() {
    // Ref: https://tailwindcomponents.com/component/calendar-ui-with-tailwindcss-and-alpinejs
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const datepickerValue = new Date(year, month, today.getDate()).toDateString();

    let daysInMonth = new Date(year, month + 1, 0).getDate();

    // find where to start calendar day of week
    let dayOfWeek = new Date(year, month).getDay();
    let blankdaysArray = [];
    for (var i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    dayOfWeek = new Date(year, month + 1).getDay();
    let endBlankdaysArray = [];
    for (i = 1; i <= 7 - dayOfWeek; i++) {
      endBlankdaysArray.push(i);
    }

    const blankdays = blankdaysArray;
    const no_of_days = daysArray;
    const endBlankdays = endBlankdaysArray;

    return { today, month, year, datepickerValue, blankdays, no_of_days, endBlankdays };
  },
  data() {
    return {
      MONTH_NAMES: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      DAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    }
  },
  methods: {
  }
}
</script>

<style>
@import '../dist/output.css';
</style>