<template>
  <div class="font-roboto bg-gray-50">
    <Nav />
    <div class="flex min-h-screen pt-[113px] mb-16 mx-4 sm:mx-6 lg:mx-8">
      <div class="flex mx-auto mt-2 rounded-l-md bg-white w-full">
        <div class="flex flex-wrap content-center justify-center w-full mx-16 md:mx-32 lg:mx-64">
          <div>
            <p class="font-bold text-4xl">
              Contact
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
                Email us
              </p>
            </div>
            <div class="flex flex-wrap justify-center items-center">
              <div class="m-2">
                <p>
                  Leland Moy (President)
                </p>
                <p>
                  <span 
                    class="text-blue-600 font-bold"
                  >@adeptofficial</span>
                </p>
                <a
                  class="text-blue-600 font-bold underline decoration-transparent hover:decoration-current transition-all duration-300 ease-in-out"
                  href="mailto:ldmoy2@uic.edu"
                >
                  ldmoy2@uic.edu
                </a>
              </div>
              <div class="m-2">
                <p>
                  Riyaz Ahmed (Vice President)
                </p>
                <p>
                  <span 
                    class="text-blue-600 font-bold"
                  >@safryz</span>
                </p>
                <a
                  class="text-blue-600 font-bold underline decoration-transparent hover:decoration-current transition-all duration-300 ease-in-out"
                  href="mailto:riyaza2@uic.edu"
                >riyaza2@uic.edu</a>
              </div>
            </div>
            <div class="flex flex-row items-center m-4">
              <div class="p-4 mr-4 bg-blue-900 rounded-full shadow-lg inline-block">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="discord"
                  class="w-6 h-6 mx-auto"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 96"
                >
                  <path
                    fill="white"
                    d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                  />
                </svg>
              </div>
              <p>
                Discord
              </p>
            </div>
            <div class="flex flex-col w-fit">
              <div class="m-2">
                Message us directly in our Discord!
              </div>
              <a
                href="https://discord.gg/xYW8hsesjt"
                target="_blank"
                class="m-2 mx-auto"
              >
                <button
                  class="bg-transparent hover:bg-blue-700 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition duration-300 ease-in-out inline-flex"
                >
                  Join here
                </button>
              </a>
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
export default {
    name: 'ContactComponent',
    components: {
      Nav,
      Footer
    }
}
</script>

<style>
@import '../dist/output.css';
</style>