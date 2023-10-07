<!-- eslint-disable vue/no-v-for-template-key -->
<template>
  <div
    id="defaultModal"
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 overflow-x-hidden overflow-y-auto md:inset-0 h-full"
  >
    <div
      class="flex h-full"
      @click.self="closeFunc"
    >
      <div
        v-if="event.name"
        class="relative bg-white rounded-lg shadow w-1/2 mx-auto my-auto dark:bg-gray-700"
      >
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 :class="`text-xl font-semibold text-${event.theme.stringValue}-600`">
            {{ event.name.stringValue }}
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click.prevent="closeFunc"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <div
            :class="`bg-${event.theme.stringValue}-50 text-${event.theme.stringValue}-600 rounded-sm p-2`"
          >
            <div class="flex flex-row items-center justify-center">
              <div class="mr-4">
                <p>
                  Location: <span class="font-bold">{{ event.locationName.stringValue }}</span>
                </p>
                <p :class="`font-normal`">
                  Time: {{ new Date(event.startTime.timestampValue).toLocaleTimeString() }} - {{ new
                    Date(event.endTime.timestampValue).toLocaleTimeString() }}
                </p>
              </div>
              <div
                v-if="!userStore.authenticated && !userStore.loading"
                class="flex flex-row ml-auto justify-center items-center"
              >
                <div class="m-2">
                  <router-link to="/signup">
                    <button
                      :class="`px-7 py-3 text-white leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-all duration-300 ease-in-out w-full flex justify-center items-center bg-blue-900 ${uiStore.loading ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`"
                    >
                      Sign up to RSVP!
                      <div
                        v-if="uiStore.loading"
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
                <p>You and {{ event.rsvp.arrayValue.values ? event.rsvp.arrayValue.values.length - 1 : 0 }} others are RSVPed!</p>
                <button
                  :class="`bg-${event.theme.stringValue}-600 hover:bg-${event.theme.stringValue}-500 text-white font-semibold py-3 px-7 m-4 flex justify-center items-center rounded-full transition duration-300 ease-in-out inline-flex h-fit ${uiStore.loading ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`"
                  :disabled="uiStore.loading"
                  @click="rsvpFunc(event.id.stringValue)"
                >
                  Cancel RSVP
                  <div
                    v-if="uiStore.loading"
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
                <p>Join {{ event.rsvp.arrayValue.values ? event.rsvp.arrayValue.values.length : 0 }} others and RSVP!</p>
                <button
                  :class="`bg-${event.theme.stringValue}-600 hover:bg-${event.theme.stringValue}-500 text-white font-semibold py-3 px-7 m-4 flex justify-center items-center rounded-full transition duration-300 ease-in-out inline-flex h-fit ${uiStore.loading ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`"
                  :disabled="uiStore.loading"
                  @click="rsvpFunc(event.id.stringValue)"
                >
                  RSVP
                  <div
                    v-if="uiStore.loading"
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
                <p>Join {{ event.rsvp.arrayValue.values ? event.rsvp.arrayValue.values.length : 0 }} others and RSVP!</p>
                <button
                  :class="`bg-${event.theme.stringValue}-600 hover:bg-${event.theme.stringValue}-500 text-white font-semibold py-3 px-7 m-4 flex justify-center items-center rounded-full transition duration-300 ease-in-out inline-flex h-fit opacity-50 cursor-not-allowed`"
                  :disabled="uiStore.loading"
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
      <div
        v-else
        class="relative mx-auto my-auto"
      >
        <div
          class="inline-block h-24 w-24 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        >
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { useUserDataStore } from '../../stores/userData';
import { useUIStore } from '../../stores/uiStore';
export default {
    name: 'EventModalComponent',
    props: {
        event: {
            type: Object,
            default: () => {}
        },
        closeFunc: {
            type: Function,
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
    methods: {
        alreadyRsvp(id) {
            if (this.event.rsvp.arrayValue.values)
              return this.event.rsvp.arrayValue.values.map((a) => a.stringValue).includes(id);
            else
              return false;
        },
    }
}
</script>

<style>
@import '../../dist/output.css';
</style>