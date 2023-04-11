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
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                >
              </div>

              <!-- Password input -->
              <div class="mb-3">
                <input
                  v-model="password"
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                >
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
                  :class="`px-7 py-3 text-white leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-blue-900 ${uiStore.loading ? 'opacity-50 cursor-not-allowed': 'hover:cursor-pointer'}`"
                  @click.prevent="login"
                >
                  Sign in
                  <div
                    v-if="uiStore.loading"
                    role="status"
                    class="absolute"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-900"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    ><path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    /><path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    /></svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                </button>
                
                <div
                  class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p class="text-center font-semibold mx-4 mb-0">
                    OR
                  </p>
                </div>

                <a :class="`px-7 py-3 text-white leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-blue-900 ${uiStore.loading ? 'opacity-50 cursor-not-allowed': 'hover:cursor-pointer'}`">
                  <img
                    class="w-5 h-5 mr-2"
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                  >
                  Sign in with Google
                  <div
                    v-if="uiStore.loading"
                    role="status"
                    class="absolute"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-900"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    ><path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    /><path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    /></svg>
                    <span class="sr-only">Loading...</span>
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