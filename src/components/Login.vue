<template>
  <div class="font-roboto bg-gray-50">
    <Nav />
    <div class="flex min-h-screen pt-[113px] mb-16 mx-4 sm:mx-6 lg:mx-8">
      <div class="flex mx-auto mt-16">
        <div
          class="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[24rem] h-[32rem] sm:w-[32rem]"
        >
          <div class="w-96 px-4">
            <!-- Heading -->
            <h1 class="text-xl font-semibold">
              Welcome back
            </h1>
            <small class="text-gray-400">Please enter your details</small>

            <!-- Form -->
            <form class="mt-4">
              <!-- Email input -->
              <div class="mb-3">
                <input
                  v-model="email"
                  type="text"
                  :class="`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${uiStore.errors.email || uiStore.errors.error ? 'border-red-500' : ''}`"
                  placeholder="Email address"
                >
                <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {{ uiStore.errors.email }}
                </span>
              </div>

              <!-- Password input -->
              <div class="mb-3">
                <input
                  v-model="password"
                  type="password"
                  :class="`form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${uiStore.errors.password || uiStore.errors.error ? 'border-red-500' : ''}`"
                  placeholder="Password"
                >
                <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {{ uiStore.errors.password }} {{ uiStore.errors.error }}
                </span>
              </div>

              <div class="mb-3 flex flex-wrap content-center">
                <div class="form-check pr-1.5">
                  <input
                    id="remember"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                  >
                </div>
                <label
                  class="mr-auto form-check-label inline-block font-semibold text-gray-800 cursor-pointer"
                  for="remember"
                >Remember me</label>

                <a
                  href="#"
                  class="font-semibold text-blue-700"
                >Forgot password?</a>
              </div>

              <div class="mb-3">
                <button
                  :class="`px-7 py-3 text-white leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-blue-900 ${uiStore.loading ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`"
                  @click.prevent="login"
                >
                  Sign in
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
                
                <div
                  class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p class="text-center font-semibold mx-4 mb-0">
                    OR
                  </p>
                </div>

                <a :class="`px-7 py-3 text-white leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-blue-900 ${uiStore.loading ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`">
                  <img
                    class="w-5 h-5 mr-2"
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                  >
                  Sign in with Google
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
                </a>
              </div>
            </form>

            <div class="text-center">
              <span class="text-xs text-gray-400 font-semibold">Don't have an account?</span>
              <a
                href="/signup"
                class="text-xs font-semibold text-blue-700 p-1"
              >Sign up</a>
            </div>
          </div>
        </div>
        <div 
          class="flex flex-wrap content-center justify-center rounded-r-md w-[16rem] h-[32rem] invisible sm:visible"
        >
          <span class="w-full h-full gradient" />
          <!-- <img 
            class="w-full h-full bg-center bg-no-repeat object-cover bg-cover rounded-r-md"
            src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Flogo.png?alt=media"
          > -->
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
    name: 'LoginComponent',
    components: {
      Nav,
      Footer
    },
    setup() {
      const userStore = useUserDataStore();
      const uiStore = useUIStore();
      return { userStore, uiStore };
    },
    data() {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      login() {
        if (!this.userStore.loading && !this.uiStore.loading) {
          const userData = {
            email: this.email,
            password: this.password
          }
          this.userStore.loginUser(userData, this.$router);
        }
      }
    }
}
</script>

<style>
@import '../dist/output.css';
.gradient { 
  background: rgb(0,19,34);
  background: linear-gradient(34deg, rgba(0,19,34,1) 0%, rgba(40,20,35,1) 62%, rgba(245,31,29,1) 100%);
}
</style>