<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <div class="flex flex-col w-full h-full">
    <div
      class="grid grid-cols-7 w-full"
    >
      <template
        v-for="day in days"
        :key="day"
      >
        <div
          class="py-2 text-gray-600 text-sm uppercase tracking-wide font-bold justify-center text-center border-r border-b"
        >
          <p>
            {{ day }}
          </p>
        </div>
      </template>
    </div>
    <div
      class="grid grid-cols-7 grid-rows-6 w-full h-full"
    >
      <template
        v-for="padding in startPadding"
        :key="padding"
      >
        <div
          class="text-center border-r border-b border-gray-300 bg-gray-200"
        />
      </template>
      <template
        v-for="dayNum in daysInMonth"
        :key="dayNum"
      >
        <div
          :class="`border-r border-b bg-gray-100 transition ease-in-out duration-100 hover:bg-blue-200`"
        >
          <div
            :class="`inline-flex w-6 h-6 items-center justify-center cursor-default text-center leading-none text-gray-700 ${isToday(dayNum) ? 'text-white bg-red-500 rounded-full' : ''}`"
          >
            {{ dayNum }}
          </div>
        </div>
      </template>
      <template
        v-for="padding in endPadding"
        :key="padding"
      >
        <div
          class="text-center border-r border-b border-gray-300 bg-gray-200"
        />
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
    }
  },
  methods: {
    isToday(date) {
      return new Date(this.year, this.month, date).toDateString() == this.today.toDateString();
    }
  }
}
</script>

<style>
@import '../../dist/output.css';
</style>