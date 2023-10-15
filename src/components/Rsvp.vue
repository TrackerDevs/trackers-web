<template>
  <div class="font-roboto bg-gray-50">
    <Nav />
    <div class="flex min-h-screen pt-[113px] mb-16 mx-4 sm:mx-6 lg:mx-8">
      <div class="flex mx-auto mt-2 rounded-md bg-white dark:bg-[#181a1b] w-full">
        <div class="flex flex-wrap content-center justify-center w-full mx-16 md:mx-32 lg:mx-64">
          <div>
            <p class="font-bold text-4xl">
              Subscribe to Mailing List
            </p>
            <div class="flex flex-row items-center m-4">
              <div class="p-4 mr-4 bg-blue-900 rounded-full shadow-lg inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <p>
                Join our mailing list for event info and updates!
              </p>
            </div>
            <div v-if="!userStore.authenticated && !userStore.loading">
              <div class="flex flex-wrap justify-center items-center">
                <div class="m-2">
                  <router-link to="/signup">
                    <button
                      :class="`px-7 py-3 text-white leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-all duration-300 ease-in-out w-full flex justify-center items-center mb-3 bg-blue-900 ${uiStore.loading ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`"
                    >
                      Sign up to Subscribe!
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
            </div>
            <div v-else-if="!userStore.loading && userStore.user.credentials.subscribed.booleanValue">
              <div class="flex flex-wrap justify-center items-center">
                <div class="m-2">
                  <button
                    :class="`px-7 py-3 text-white leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-all duration-300 ease-in-out w-full flex justify-center items-center mb-3 bg-blue-900 ${uiStore.loading ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`"
                    :disabled="uiStore.loading"
                    @click="subscribe"
                  >
                    Unsubscribe
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
              </div>
            </div>
            <div v-else-if="!userStore.loading">
              <div class="flex flex-wrap justify-center items-center">
                <div class="m-2">
                  <button
                    :class="`px-7 py-3 text-white leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-all duration-300 ease-in-out w-full flex justify-center items-center mb-3 bg-blue-900 ${uiStore.loading ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`"
                    :disabled="uiStore.loading"
                    @click="subscribe"
                  >
                    Subscribe
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
              </div>
            </div>
            <div v-else>
              <div class="flex flex-wrap justify-center items-center">
                <div class="mt-1">
                  <div
                    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  >
                    <span
                      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            class="h-64 ml-auto my-auto"
            src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Flogo.png?alt=media"
            alt="Trackers Logo"
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
  
<script>
import Nav from './Nav';
import Footer from './Footer';
import { useUserDataStore } from '../stores/userData';
import { useUIStore } from '../stores/uiStore';
export default {
    name: 'RsvpComponent',
    components: {
        Nav,
        Footer
    },
    setup() {
        const userStore = useUserDataStore();
        const uiStore = useUIStore();
        return { userStore, uiStore };
    },
    methods: {
        subscribe() {
            this.userStore.subscribe();
        },
    },
}
</script>

<style>
@import '../dist/output.css';
</style>