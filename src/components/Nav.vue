<template>
  <nav class="fixed w-full z-10 top-0 bg-gray-50">
    <div :class="`relative bg-blue-700 ${atTop && useBanner ? 'h-10 py-2 visible' : 'h-0 invisible'} transition-all duration-700 ease-in-out`">
      <p class="font-bold text-white text-center text-sm">
        <span class="mr-2">Be a part of the community now!</span>
        <a
          href="https://discord.gg/xYW8hsesjt"
          target="_blank"
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
        </a>
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
        <div v-if="!userStore.authenticated && !userStore.loading">
          <router-link
            to="/login"
            class="mr-2"
          >
            Log In
          </router-link>
          <router-link to="/signup">
            Sign Up
          </router-link>
        </div>
        <div
          v-else-if="!userStore.loading"
          class="w-10 relative"
        >
          <img
            :src="`${userStore.user.credentials.imageUrl.stringValue}`"
            class="w-10 rounded-lg cursor-pointer z-10 relative"
            :alt="`${userStore.user.credentials.username.stringValue} profile picture`"
            @click.prevent="show = !show"
          >

          <!-- Dropdown menu -->
          <div
            v-show="show"
            class="absolute right-0 top-12 z-10 bg-white divide-y rounded-lg shadow w-44"
          >
            <div class="px-4 py-3 text-sm">
              <div>{{ userStore.user.credentials.username.stringValue }}</div>
            </div>
            <ul class="py-2 text-sm">
              <li>
                <router-link
                  to="#"
                  class="block px-4 py-2 hover:bg-gray-100"
                >
                  Dashboard
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </router-link>
              </li>
            </ul>
            <div class="py-2">
              <div
                class="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
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
        <div v-else>
          <div class="w-10" />
        </div>
      </div>
    </div>
    <hr :class="`${atTop ? 'opacity-0' : 'opacity-100'} transition-all duration-300 ease-in-out`">
  </nav>
</template>
    
<script>
import { useUserDataStore } from '../stores/userData';
export default {
  name: "NavComponent",
  props: {
    useBanner: {
      type: Boolean,
      default: true
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
      atTop: true
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
    }
  },
}
</script>

<style>
@import '../dist/output.css';
</style>