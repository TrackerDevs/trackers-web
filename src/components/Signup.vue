<template>
  <div class="font-roboto bg-gray-50">
    <Nav />
    <div class="flex min-h-screen pt-[104px] mb-16 mx-4 sm:mx-6 lg:mx-8">
      <div class="flex mx-auto mt-16">
        <div
          class="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[24rem] h-[36rem] sm:w-[32rem]"
        >
          <div class="w-96 px-4">
            <!-- Heading -->
            <h1 class="text-xl font-semibold">
              Welcome to CS Trackers!
            </h1>
            <small class="text-gray-400">Please enter your details</small>

            <!-- Form -->
            <form class="mt-4">
              <!-- Name input -->
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Full name"
                >
              </div>

              <!-- Email input -->
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                >
              </div>

              <!-- Password input -->
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                >
              </div>

              <!-- Confirm input -->
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Confirm password"
                >
              </div>

              <div class="mb-3">
                <button
                  class="px-7 py-3 text-white leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-blue-900 hover:cursor-pointer"
                >
                  Sign up
                </button>

                <div
                  class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p class="text-center font-semibold mx-4 mb-0">
                    OR
                  </p>
                </div>

                <a
                  class="px-7 py-3 text-white leading-snug rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-blue-900 hover:cursor-pointer"
                >
                  <img
                    class="w-5 h-5 mr-2"
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                  >
                  Sign up with Google
                </a>
              </div>
            </form>

            <div class="text-center">
              <span class="text-xs text-gray-400 font-semibold">Already have an account?</span>
              <a
                href="/login"
                class="text-xs font-semibold text-blue-700 p-1"
              >Login</a>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap content-center justify-center rounded-r-md w-[16rem] h-[36rem] invisible sm:visible">
          <img
            class="w-full h-full bg-center bg-no-repeat object-cover bg-cover rounded-r-md"
            src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Flogo.png?alt=media"
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
export default {
  name: 'SignupComponent',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
@import '../dist/output.css';
</style>