<template>
  <div class="w-full top-0">
    <hr class="dark:border-[#363b3d]">
    <footer class="text-center lg:text-left bg-gray-100 dark:bg-[#1e2022] text-gray-600 dark:text-[#b1aaa0]">
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="">
            <h6 class="font-semibold mb-4 flex items-center justify-center md:justify-start">
              <img
                class="h-8 mr-4"
                src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Flogo-2-trim.png?alt=media"
                alt="Trackers Logo"
              >
              Trackers
            </h6>
            <div class="mb-4">
              Made with &#60;3 by Tracker Devs
            </div>
            <div class="mb-4">
              © 2022-2023 Trackers
            </div>
          </div>
          <div class="">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Useful links
            </h6>
            <div class="text-gray-500 dark:text-[#9e9589] hover:text-gray-800 dark:hover:text-[#cdc8c2] mb-4">
              <router-link to="/events">
                Events
              </router-link>
              <span class="text-gray-400 dark:text-[#afa99e] mx-4">
                •
              </span>
              <router-link to="/about">
                About
              </router-link>
              <span class="text-gray-400 dark:text-[#afa99e] mx-4">
                •
              </span>
              <router-link to="/contact">
                Contact
              </router-link>
              <!-- <span class="text-gray-400 mx-4">
                •
              </span> -->
              <!-- <router-link to="/support">
                Support
              </router-link> -->
            </div>
          </div>
          <div class="">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Socials
            </h6>
            <div class="flex justify-center items-center lg:justify-between mb-4">
              <div class="flex justify-center">
                <router-link
                  to="/hub"
                  type="button"
                  class="rounded-full border-2 border-gray-600 dark:border-[#6f675b] text-gray-600 leading-normal uppercase hover:bg-black hover:bg-black dark:hover:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="discord"
                    class="w-4 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 96"
                  >
                    <path
                      class="fill-current dark:fill-[#b1aaa0]"
                      d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                    />
                  </svg>
                </router-link>
                <a
                  href="https://github.com/TrackerDevs"
                  target="_blank"
                  type="button"
                  class="rounded-full border-2 border-gray-600 dark:border-[#6f675b] text-gray-600 leading-normal uppercase hover:bg-black dark:hover:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    class="w-4 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      class="fill-current dark:fill-[#b1aaa0]"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
      
<script>
export default {
  name: "FooterComponent",
  props: []
}
</script>
  
<style>
@import '../dist/output.css';
</style>