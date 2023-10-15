<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <div class="flex flex-col w-full h-full">
    <div class="grid grid-cols-7 w-full">
      <template
        v-for="dayName in days"
        :key="dayName"
      >
        <div
          class="py-2 text-gray-600 dark:text-[#cdc8c2] text-sm uppercase tracking-wide font-bold justify-center text-center border-r border-b dark:border-[#363b3d]"
        >
          <p>
            {{ dayName }}
          </p>
        </div>
      </template>
    </div>
    <div :class="`grid grid-cols-7 grid-rows-[${(startPadding.length + daysInMonth.length + endPadding.length) / 7}] w-full h-full`">
      <template
        v-for="padding in startPadding"
        :key="padding"
      >
        <div class="text-center border-r border-b border-gray-300 dark:border-[#363b3d] bg-gray-200 dark:bg-[#25282a]" />
      </template>
      <template
        v-for="dayNum in daysInMonth"
        :key="dayNum"
      >
        <div
          :class="`z-[${dayNum}] relative overflow-auto border-r border-b dark:border-[#363b3d] bg-gray-100 dark:bg-[#1e2022] transition ease-in-out duration-100 hover:bg-blue-200 dark:hover:bg-blue-900 ${isSelected(dayNum) ? 'border border-blue-500 dark:border-blue-500' : ''}`"
          @click="gotoFunc(dayNum)"
        >
          <div
            :class="`inline-flex w-6 h-6 items-center justify-center cursor-default text-center leading-none text-gray-700 dark:text-[#cdc8c2] ${isToday(dayNum) ? 'text-white bg-red-500 rounded-full' : ''}`"
          >
            {{ dayNum }}
          </div>
          <div class="absolute">
            <template
              v-for="event in events"
              :key="event.id"
            >
              <div
                v-if="containsEvent(dayNum, event.info.startTime.timestampValue, event.info.endTime.timestampValue)"
                :class="`bg-${event.info.theme.stringValue}-600 my-2 mx-2 rounded-md pl-1`"
              >
                <div
                  :class="`bg-${event.info.theme.stringValue}-50 dark:bg-[#1b1d1e] text-${event.info.theme.stringValue}-600 font-bold rounded-sm p-2`"
                >
                  {{ event.info.name.stringValue }}
                </div>
              </div>
            </template>
          </div>
          <div
            class="bg-red-50 bg-red-600 hover:bg-red-500 text-red-600 bg-blue-50 bg-blue-600 hover:bg-blue-500 text-blue-600 bg-orange-50 bg-orange-600 hover:bg-orange-500 text-orange-600 bg-green-50 bg-green-600 hover:bg-green-500 text-green-600 bg-purple-50 bg-purple-600 hover:bg-purple-500 text-purple-600 bg-cyan-50 bg-cyan-600 hover:bg-cyan-500 text-cyan-600 bg-fuchsia-50 bg-fuchsia-600 hover:bg-fuchsia-500 text-fuchsia-600 z-[0] z-[1] z-[2] z-[3] z-[4] z-[5] z-[6] z-[7] z-[8] z-[9] z-[10] z-[11] z-[12] z-[13] z-[14] z-[15] z-[16] z-[17] z-[18] z-[19] z-[20] z-[21] z-[22] z-[23] z-[24] z-[25] z-[26] z-[27] z-[28] z-[29] z-[30] z-[31] grid-rows-5 grid-rows-6"
          />
        </div>
      </template>
      <template
        v-for="padding in endPadding"
        :key="padding"
      >
        <div class="text-center border-r border-b dark:border-[#363b3d] border-gray-300 bg-gray-200 dark:bg-[#25282a]" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonthComponent',
  props: {
    days: {
      type: Array,
      default: () => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    startPadding: {
      type: Array,
      default: () => []
    },
    daysInMonth: {
      type: Array,
      default: () => []
    },
    endPadding: {
      type: Array,
      default: () => []
    },
    today: {
      type: Date,
      default: new Date()
    },
    year: {
      type: Number,
      default: 0
    },
    month: {
      type: Number,
      default: 0
    },
    day: {
      type: Number,
      default: 0
    },
    events: {
      type: Array,
      default: () => []
    },
    gotoFunc: {
      type: Function,
      default: () => { }
    }
  },
  methods: {
    isToday(date) {
      return new Date(this.year, this.month, date).toDateString() == this.today.toDateString();
    },
    isSelected(date) {
      return new Date(this.year, this.month, date).toDateString() == new Date(this.year, this.month, this.day).toDateString();
    },
    containsEvent(date, startTime, endTime) {
      let currentDate = new Date(this.year, this.month, date);
      startTime = new Date(startTime);
      endTime = new Date(endTime);
      startTime.setHours(0);
      startTime.setMinutes(0);
      startTime.setSeconds(0);
      startTime.setMilliseconds(0);
      endTime.setHours(0);
      endTime.setMinutes(0);
      endTime.setSeconds(0);
      endTime.setMilliseconds(0);
      return currentDate >= startTime && endTime >= currentDate;
    }
  }
}
</script>

<style>
@import '../../dist/output.css';
</style>