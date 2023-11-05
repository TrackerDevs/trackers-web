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
          v-if="event.info.name"
          class="flex flex-row items-center justify-center"
        >
          <div class="mr-4">
            <p>
              Location: <span class="font-bold">{{ event.info.locationName.stringValue }}</span>
            </p>
            <p :class="`font-normal`">
              Time: {{ new Date(event.info.startTime.timestampValue).toLocaleTimeString() }} - {{ new
                Date(event.info.endTime.timestampValue).toLocaleTimeString() }}
            </p>
          </div>
          <div
            v-if="!userStore.authenticated && !userStore.loading"
            class="flex flex-row ml-auto justify-center items-center"
          >
            <div class="m-2">
              <router-link to="/signup">
                <button
                  :class="`px-7 py-3 text-white leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-all duration-300 ease-in-out w-full flex justify-center items-center bg-blue-900 ${show && uiStore.loading ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`"
                >
                  Sign up to RSVP!
                  <div
                    v-if="show && uiStore.loading"
                    class="absolute mt-1"
                  >
                    <div
                      class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    >
                      <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                      >Loading...</span>
                    </div>
                  </div>
                </button>
              </router-link>
            </div>
          </div>
          <div
            v-else-if="!userStore.loading && alreadyRsvp(userStore.user.credentials.userId)"
            class="flex flex-col ml-auto items-center justify-center"
          >
            <p>You and {{ event.info.rsvp.arrayValue.values ? event.info.rsvp.arrayValue.values.length - 1 : 0 }} others are RSVPed!</p>
            <button
              :class="`bg-${event.info.theme.stringValue}-600 hover:bg-${event.info.theme.stringValue}-500 text-white font-semibold py-3 px-7 m-4 flex justify-center items-center rounded-full transition duration-300 ease-in-out inline-flex h-fit ${show && uiStore.loading ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`"
              :disabled="show && uiStore.loading"
              @click="rsvpFunc(event.info.id.stringValue)"
            >
              Cancel RSVP
              <div
                v-if="show && uiStore.loading"
                class="absolute mt-1"
              >
                <div
                  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                >
                  <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                  >Loading...</span>
                </div>
              </div>
            </button>
          </div>
          <div
            v-else-if="!userStore.loading && !alreadyRsvp(userStore.user.credentials.userId)"
            class="flex flex-col ml-auto items-center justify-center"
          >
            <p>Join {{ event.info.rsvp.arrayValue.values ? event.info.rsvp.arrayValue.values.length : 0 }} others and RSVP!</p>
            <button
              :class="`bg-${event.info.theme.stringValue}-600 hover:bg-${event.info.theme.stringValue}-500 text-white font-semibold py-3 px-7 m-4 flex justify-center items-center rounded-full transition duration-300 ease-in-out inline-flex h-fit ${show && uiStore.loading ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`"
              :disabled="show && uiStore.loading"
              @click="rsvpFunc(event.info.id.stringValue)"
            >
              RSVP
              <div
                v-if="show && uiStore.loading"
                class="absolute mt-1"
              >
                <div
                  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                >
                  <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                  >Loading...</span>
                </div>
              </div>
            </button>
          </div>
          <div
            v-else
            class="flex flex-col ml-auto items-center justify-center"
          >
            <p>Join {{ event.info.rsvp.arrayValue.values ? event.info.rsvp.arrayValue.values.length : 0 }} others and RSVP!</p>
            <button
              :class="`bg-${event.info.theme.stringValue}-600 hover:bg-${event.info.theme.stringValue}-500 text-white font-semibold py-3 px-7 m-4 flex justify-center items-center rounded-full transition duration-300 ease-in-out inline-flex h-fit opacity-50 cursor-not-allowed`"
              :disabled="show && uiStore.loading"
            >
              Loading...
              <div class="absolute mt-1">
                <div
                  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                >
                  <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                  >Loading...</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserDataStore } from '../../stores/userData';
import { useUIStore } from '../../stores/uiStore';
export default {
    name: 'EventAccordion2Component',
    props: {
        event: {
            type: Object,
            default: () => {}
        },
        rsvpFunc: {
            type: Function,
            default: () => {}
        },
    },
    setup() {
        const userStore = useUserDataStore();
        const uiStore = useUIStore();
        return { userStore, uiStore };
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        alreadyRsvp(id) {
            if (this.event.info.rsvp.arrayValue.values)
              return this.event.info.rsvp.arrayValue.values.map((a) => a.stringValue).includes(id);
            else
              return false;
        }
    }
}
</script>

<style>
@import '../../dist/output.css';
</style>