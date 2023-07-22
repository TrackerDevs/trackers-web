<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <div class="flex flex-col w-full h-full">
    <div
      class="grid grid-cols-1 w-full"
    >
      <template
        v-for="dayName in days"
        :key="dayName"
      >
        <div
          class="py-2 text-gray-600 text-sm uppercase tracking-wide font-bold justify-center text-center border-r border-b"
        >
          <p>
            {{ dayName }}
          </p>
        </div>
      </template>
    </div>
    <div
      class="grid grid-cols-1 grid-rows-1 w-full h-full"
    >
      <template
        v-for="dayNum in daysInWeek"
        :key="dayNum"
      >
        <div
          :class="`border-r border-b bg-gray-100 transition ease-in-out duration-100 hover:bg-blue-200 ${isSelected(dayNum) ? 'border border-blue-500' : ''}`"
        >
          <div
            :class="`inline-flex w-6 h-6 items-center justify-center cursor-default text-center leading-none text-gray-700 ${isToday(dayNum) ? 'text-white bg-red-500 rounded-full' : ''}`"
          >
            {{ dayNum }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DayComponent',
    props: {
        days: {
            type: Array,
            default: () => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        daysInWeek: {
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
        }
    },
    methods: {
        isToday(date) {
            return new Date(this.year, this.month, date).toDateString() == this.today.toDateString();
        },
        isSelected(date) {
            return new Date(this.year, this.month, date).toDateString() == new Date(this.year, this.month, this.day).toDateString();
        }
    }
}
</script>

<style>
@import '../../dist/output.css';
</style>