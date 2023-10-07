<template>
  <div class="font-roboto bg-gray-50">
    <Nav />
    <div class="flex min-h-screen pt-[113px] mb-16 mx-4 sm:mx-6 lg:mx-8">
      <div class="flex mx-auto mt-2 rounded-l-md w-full">
        <div class="flex flex-wrap pt-16 w-full md:mx-32 lg:mx-[12rem]">
          <p class="font-bold mb-16 text-4xl">
            Join Trackers Discord
          </p>
          <div class="flex flex-wrap mb-16 h-64 w-full bg-stone-900 text-white shadow-lg">
            <div class="w-full flex flex-col">
              <div class="w-full h-[40%] background-img" />
              <div class="h-[60%] w-full flex flex-wrap items-center justify-center">
                <div class="flex flex-wrap">
                  <img
                    class="h-16 mr-4 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Ftrackers-logo-v4-cs-compress.png?alt=media"
                    alt="Trackers Logo"
                  >
                  <div class="flex-col lg:mr-32">
                    <a 
                      href="https://discord.gg/xYW8hsesjt"
                      target="_blank"
                      class="block w-fit"
                    >
                      <p class="w-fit font-bold underline decoration-transparent hover:decoration-current transition-all duration-300 ease-in-out">
                        CS Trackers @ UIC
                      </p>
                    </a>
                    <div
                      v-if="uiStore.loading || !uiStore.members.cs"
                      class="flex flex-row w-64"
                    >
                      --- members <div class="mt-[8px] w-3 h-3 rounded-full bg-green-500 mr-2 ml-4" /> --- online
                    </div>
                    <div
                      v-else
                      class="flex flex-row w-64"
                    >
                      {{ uiStore.members.cs.members }} members <div class="mt-[8px] w-3 h-3 rounded-full bg-green-500 mr-2 ml-4" /> {{ uiStore.members.cs.online }} online
                    </div>
                  </div>
                </div>
                <a
                  href="https://discord.gg/xYW8hsesjt"
                  target="_blank"
                  class=""
                >
                  <button
                    class="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out inline-flex"
                  >
                    Join now!
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap mb-16 h-64 w-full bg-stone-900 text-white shadow-lg">
            <div class="w-full flex flex-col">
              <div class="w-full h-[40%] background-img2" />
              <div class="h-[60%] w-full flex flex-wrap items-center justify-center">
                <div class="flex flex-wrap">
                  <img
                    class="h-16 mr-4 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Ftrackers-logo-v4-me-compress.png?alt=media"
                    alt="Trackers Logo"
                  >
                  <div class="flex-col lg:mr-32">
                    <a 
                      href="https://discord.gg/YwsCqyC8QD"
                      target="_blank"
                      class="block w-fit"
                    >
                      <p class="w-fit font-bold underline decoration-transparent hover:decoration-current transition-all duration-300 ease-in-out">
                        MIE Trackers @ UIC
                      </p>
                    </a>
                    <div
                      v-if="uiStore.loading || !uiStore.members.cs"
                      class="flex flex-row w-64"
                    >
                      --- members <div class="mt-[8px] w-3 h-3 rounded-full bg-green-500 mr-2 ml-4" /> --- online
                    </div>
                    <div
                      v-else
                      class="flex flex-row w-64"
                    >
                      {{ uiStore.members.me.members }} members <div class="mt-[8px] w-3 h-3 rounded-full bg-green-500 mr-2 ml-4" /> {{ uiStore.members.me.online }} online
                    </div>
                  </div>
                </div>
                <a
                  href="https://discord.gg/YwsCqyC8QD"
                  target="_blank"
                  class=""
                >
                  <button
                    class="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out inline-flex"
                  >
                    Join now!
                  </button>
                </a>
              </div>
            </div>
          </div>
            
          <div class="flex w-full mb-8 justify-center items-center">
            <div class="m-2">
              More to come!
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from './Nav';
import Footer from './Footer';
import { useUIStore } from '../stores/uiStore';
export default {
    name: 'HubComponent',
    components: {
        Nav,
        Footer
    },
    setup() {
      const uiStore = useUIStore();
      uiStore.fetchMembers();
      return { uiStore };
    }
}
</script>

<style>
@import '../dist/output.css';
.background-img {
    background: url("https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Ftrackers-logo-v4-cs-banner-invite.jpg?alt=media") center no-repeat;
    background-size: cover;
}
.background-img2 {
    background: url("https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Ftrackers-logo-v4-me-banner-invite.jpg?alt=media") center no-repeat;
    background-size: cover;
}
</style>