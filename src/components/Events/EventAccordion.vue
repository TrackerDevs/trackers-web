<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <div class="w-full shadow-md rounded-lg mb-4">
    <div
      class="flex flex-row w-full p-4 cursor-pointer"
      @click="show = !show"
    >
      <div :class="`min-w-[4px] bg-${event.info.theme.stringValue}-600 m-2 rounded-md`" />
      <div
        :class="`text-2xl text-gray-800 dark:text-[#cdc8c2] rounded-sm p-2`"
      >
        {{ event.info.name.stringValue }} - {{ new Date(event.info.startTime.timestampValue).toLocaleString() }}
      </div>
      <div class="ml-auto text-2xl my-auto">
        {{ event.info.rsvp.arrayValue.values ? event.info.rsvp.arrayValue.values.length : '0' }} RSVP'd
      </div>
    </div>
    <div 
      :class="`grid ${show ? 'grid-rows-[1fr] opacity-100 p-4' : 'grid-rows-[0fr] opacity-50 p-0 pl-4'} transition-all duration-300 ease-in-out overflow-hidden`"
    >
      <div class="overflow-hidden">
        <div
          v-if="event.info.rsvp.arrayValue.values"
        >
          <template
            v-for="person in event.info.rsvp.arrayValue.values"
            :key="person"
          >
            <div>
              <p>{{ person.username.stringValue }}</p>
            </div>
          </template>
          <hr class="my-2 dark:border-[#363b3d]">
          <template
            v-for="person in event.info.rsvp.arrayValue.values"
            :key="person"
          >
            <div>
              <p>{{ person.email.stringValue }}</p>
            </div>
          </template>
        </div>
        <div v-else>
          <p>no rsvp</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'EventAccordionComponent',
    props: {
        event: {
            type: Object,
            default: () => {}
        },
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
        alreadyRsvp() {
          return 0;
        },
    }
}
</script>

<style>
@import '../../dist/output.css';
</style>