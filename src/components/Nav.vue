<template>
  <nav class="fixed w-full z-10 top-0 bg-gray-50 dark:bg-[#1b1d1e]">
    <div :class="`relative bg-blue-700 ${atTop && useBanner ? 'h-10 py-2 visible' : 'h-0 invisible'} transition-all duration-700 ease-in-out`">
      <p class="font-bold text-white text-center text-sm">
        <span class="mr-2">Be a part of the community now!</span>
        <router-link
          to="/hub"
          class="underline pl-2 inline-flex"
        >
          Join Discord Server
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </router-link>
      </p>
    </div>
    <div class="container max-w-7xl mx-auto sm:px-4 lg:px-8 py-4 flex items-center">
      <div class="flex-shrink-0 mr-2">
        <router-link to="/">
          <img
            class="h-10"
            src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Flogo-2-trim.png?alt=media"
            alt="Trackers Logo"
          >
        </router-link>
      </div>
      <div class="flex space-x-4 lg:block lg:ml-8">
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/events">
          Events
        </router-link>
        <router-link to="/about">
          About
        </router-link>
      </div>

      <div class="flex space-x-4 ml-auto">
        <div class="flex justify-content items-center">
          <button
            class="bg-transparent h-fit text-blue-900 px-2 py-2 border border-blue-800 dark:border-[#1c3ca5] rounded-full transition duration-300 ease-in-out inline-flex justify-center items-center"
            @click="toggleTheme"
          >
            <svg
              v-if="isDarkMode"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#82afe4"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        </div>
        <div class="dark:border-[#363b3d] border-r h-10" />
        <div
          v-if="!userStore.authenticated && !userStore.loading"
          class="flex justify-center items-center"
        >
          <div class="hidden w-0 sm:flex sm:w-full">
            <router-link
              to="/login"
              class="mr-2"
            >
              Login
            </router-link>
            <router-link to="/signup">
              Sign Up
            </router-link>
          </div>
          <div class="relative w-full sm:hidden sm:w-0 mr-4">
            <button
              class="bg-transparent h-fit text-blue-900 px-2 py-2 border border-blue-800 dark:border-[#1c3ca5] rounded-full transition duration-300 ease-in-out inline-flex justify-center items-center"
              @click.prevent="show = !show"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </button>
            <!-- <img
              :src="`${userStore.user.credentials.imageUrl.stringValue}`"
              class="w-10 rounded-lg cursor-pointer z-10 relative"
              :alt="`${userStore.user.credentials.username.stringValue} profile picture`"
              @click.prevent="show = !show"
            > -->

            <!-- Dropdown menu -->
            <div
              v-show="show"
              class="absolute right-0 top-12 z-10 bg-white dark:bg-[#181a1b] rounded-lg shadow w-44"
            >
              <router-link
                to="/login"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer text-sm"
              >
                Login
              </router-link>
              <hr class="dark:border-[#363b3d]">
              <router-link
                to="/signup"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer text-sm"
              >
                Sign Up
              </router-link>
            </div>
            <button
              v-show="show"
              tabindex="-1"
              class="fixed w-full h-full inset-0 opacity-0 cursor-default"
              @click.prevent="show = false"
            />
          </div>
        </div>
        <div
          v-else-if="!userStore.loading"
          class="flex"
        >
          <div class="relative mr-4">
            <img
              :src="`${userStore.user.credentials.imageUrl.stringValue}`"
              class="w-10 rounded-lg cursor-pointer z-10 relative"
              :alt="`${userStore.user.credentials.username.stringValue} profile picture`"
              @click.prevent="show = !show"
            >

            <!-- Dropdown menu -->
            <div
              v-show="show"
              class="absolute right-0 top-12 z-10 bg-white dark:bg-[#181a1b] rounded-lg shadow w-44"
            >
              <div class="px-4 py-3 text-sm">
                <div>{{ userStore.user.credentials.username.stringValue }}</div>
              </div>
              <hr class="dark:border-[#363b3d]">
              <div class="py-2">
                <div
                  class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer"
                  @click.prevent="logout"
                >
                  Sign out
                </div>
              </div>
            </div>
            <button
              v-show="show"
              tabindex="-1"
              class="fixed w-full h-full inset-0 opacity-0 cursor-default"
              @click.prevent="show = false"
            />
          </div>
        </div>
        <div v-else>
          <div class="w-10" />
        </div>
      </div>
    </div>
    <hr :class="`${atTop ? 'opacity-0' : 'opacity-100'} transition-all duration-300 ease-in-out dark:border-[#363b3d]`">
  </nav>
</template>
    
<script>
import { useUserDataStore } from '../stores/userData';
export default {
  name: "NavComponent",
  props: {
    useBanner: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const userStore = useUserDataStore();
    return { userStore };
  },
  data() {
    return {
      hideBanner: this.useBanner ? 100 : 0,
      bannerHeight: this.useBanner ? 'block' : 'none',
      show: false,
      atTop: true,
      isDarkMode: localStorage.theme === 'dark'
    }
  },
  created() {
    document.addEventListener('scroll', this.onScroll)
  },
  unmounted() {
    document.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (this.useBanner) {
        if (window.scrollY === 0) {
          this.bannerHeight = 'block';
          setTimeout(() => {
            if (window.scrollY === 0) {
              this.hideBanner = 100;
            }
          }, 50);
        } else {
          this.hideBanner = 0;
          setTimeout(() => {
            if (window.scrollY !== 0) {
              this.bannerHeight = 'none';
            }
          }, 300);
        }
      }
      this.atTop = window.scrollY === 0;
    },
    logout() {
      this.userStore.logoutUser(this.$router);
    },
    toggleTheme() {
      if (localStorage.theme === 'dark') {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
        this.isDarkMode = false;
      } else {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
        this.isDarkMode = true;
      }
    }
  },
}
</script>

<style>
@import '../dist/output.css';
</style>