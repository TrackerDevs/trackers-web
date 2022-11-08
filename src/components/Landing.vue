<template>
  <div class="font-roboto bg-gray-50">
    <Nav />
    <div class="flex flex-col min-h-screen pt-[104px] mb-16 mx-4 sm:mx-6 lg:mx-8">
      <div class="mt-32 mb-16 h-[75vh]">
        <img
          class="h-16 mb-3 ml-auto mr-auto"
          src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Flogo.png?alt=media"
          alt="CS Trackers Logo"
        >
        <h1 class="text-center mb-3 text-6xl leading-none text-slate-900">
          CS Trackers
        </h1>
        <h1 class="text-center mb-3 text-2xl leading-none text-slate-900">
          CS Trackers was created during the midst of the global pandemic back in 2020 to connect computer science students who couldn't do so in person. Years later, CS Trackers is still the most popular and active student forum for help with any class, support for future careers, and a place for friendships and connections to be formed.
        </h1>
        <div class="text-center mt-8 space-y-6">
          <a href="/signup">
            <button
              type="button"
              class="inline-block px-7 py-3 bg-blue-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >Sign up</button>
          </a>
        </div>
      </div>
      
      <div class="mb-8">
        <h1 class="text-center mb-3 font-bold text-4xl leading-none text-slate-900">
          Everything you need to succeed
        </h1>
      </div>

      <div class="flex flex-wrap flex-row-reverse mb-12">
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
          >
            <a href="#!">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/028.jpg"
                class="w-full"
                alt="Louvre"
              >
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style="background-color: rgba(251, 251, 251, 0.2)"
              />
            </a>
          </div>
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
          <h3 class="text-2xl font-bold mb-4">
            Active Discord Server
          </h3>
          <p class="text-gray-500 mb-6">
            Join an active Discord server and interact with fellow peers. Pick the classes you are currently taking and discuss future classes with previous students. Interact with classmates for all of your courses, and keep track of when homework and projects are due. Collaborate with people for group projects or group study sessions. Ask questions on homework and projects, and compare your performance to others. Even get real time access to teacher assistants and school faculty!
          </p>
          <p class="text-gray-500">
            There is more than just classes! Interact with fellow musicians, cooks, gamers, and gym goers. Discuss financial markets and companies. Use your skills to contribute to the Trackers community and join ongoing projects. Stay ahead career wise by getting questions answered about career fairs, internships and early career opportunities and jobs. Get behind the scenes advice and information from school Alumni working in industry.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap mb-12">
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
          >
            <a href="#!">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/028.jpg"
                class="w-full"
                alt="Louvre"
              >
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style="background-color: rgba(251, 251, 251, 0.2)"
              />
            </a>
          </div>
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
          <h3 class="text-2xl font-bold mb-4">
            In-person and Virtual Events
          </h3>
          <p class="text-gray-500 mb-6">
            Interact with the community more actively by joining or hosting events. These events can be meetups, study sessions, coding workshops, resume reviews, job search preps, and more!
          </p>
          <p class="text-gray-500 mb-6">
            View upcoming events here or on the Discord server. Join our email list to receive updates about new events and times.
          </p>
          <a href="/events">
            <button class="bg-transparent hover:bg-blue-700 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition duration-300 ease-in-out inline-flex">
              <p>View Events</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-4 relative top-[0.05em]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div class="flex flex-wrap flex-row-reverse mb-12">
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
          >
            <a href="#!">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/028.jpg"
                class="w-full"
                alt="Louvre"
              >
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style="background-color: rgba(251, 251, 251, 0.2)"
              />
            </a>
          </div>
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
          <h3 class="text-2xl font-bold mb-4">
            Community Trackers
          </h3>
          <p class="text-gray-500 mb-6">
            Active community members taking classes right along side you who keep everything in the class up to date and organized for you. Community Tracker Mods send announcements for new homework, incoming due dates, and grades being released. These community members also make sure every chat is open and welcoming to everyone and academic honesty is followed at all times. Never miss a homework assignment ever again!
          </p>
          <p class="text-gray-500">
            A fully comprehensive and regularly updated list of all classes being taught, which professors are teaching each course, and the amount and names of all assigned tracker mods is included on this website. Apply to become a Community Tracker Mod today and help fellow classmates and yourself with course workloads and recommend this community to others!
          </p>
        </div>
      </div>
      
      <hr>

      <section class="mt-10 mb-32 text-gray-800 text-center">
        <h2 class="text-4xl font-bold mb-20">
          Why join?
        </h2>

        <div class="grid lg:gap-x-12 lg:grid-cols-3">
          <div class="mb-12 lg:mb-0">
            <div class="rounded-lg shadow-lg h-full block bg-white">
              <div class="flex justify-center">
                <div class="p-4 bg-blue-900 rounded-full shadow-lg inline-block -mt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-10 h-10 text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                      clip-rule="evenodd"
                    />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                  </svg>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold text-blue-900">
                  1700+
                </h3>
                <h5 class="text-lg font-medium mb-4">
                  Members
                </h5>
                <p class="text-gray-500">
                  CS Trackers is the largest computer science community of all UIC student organizations!
                </p>
              </div>
            </div>
          </div>

          <div class="mb-12 lg:mb-0">
            <div class="rounded-lg shadow-lg h-full block bg-white">
              <div class="flex justify-center">
                <div class="p-4 bg-blue-900 rounded-full shadow-lg inline-block -mt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-10 h-10 text-white"
                  >
                    <path d="M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 0 10-1.409.516c.059.16.116.321.17.483z" />
                  </svg>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold text-blue-900">
                  40+
                </h3>
                <h5 class="text-lg font-medium mb-4">
                  Tracked Classes
                </h5>
                <p class="text-gray-500">
                  All years of experience are supported whether you're first or second year or undergraduate or graduate!
                </p>
              </div>
            </div>
          </div>

          <div class="">
            <div class="rounded-lg shadow-lg h-full block bg-white">
              <div class="flex justify-center">
                <div class="p-4 bg-blue-900 rounded-full shadow-lg inline-block -mt-8">
                  <svg
                    class="w-10 h-10 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"
                    />
                  </svg>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bold text-blue-800">
                  49
                </h3>
                <h5 class="text-lg font-medium mb-4">
                  Projects
                </h5>
                <p class="text-gray-500">
                  Cupiditate enim, minus nulla dolor cumque iure eveniet facere ullam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-32 text-gray-800">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          style="background-position: 50%;background-image: url('https://mdbootstrap.com/img/new/textures/full/66.jpg');height: 300px;"
        />
        <div class="container text-gray-800 px-4 md:px-12">
          <div
            class="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
            style="margin-top: -100px;background: hsla(0, 0%, 100%, 0.8);backdrop-filter: blur(30px);"
          >
            <div class="flex flex-wrap justify-center text-center lg:text-left">
              <div class="grow-0 shrink-0 basis-auto w-full xl:w-10/12 px-6">
                <div class="grid lg:grid-cols-2 gap-x-6 items-center">
                  <div class="mb-10 lg:mb-0">
                    <h2 class="text-2xl font-bold">
                      Keep up with announcements and events!
                      <br>
                      <span class="text-3xl text-blue-800">Subscribe to our email list</span>
                    </h2>
                  </div>

                  <div class="mb-6 md:mb-0">
                    <div class="md:flex flex-row">
                      <input
                        type="text"
                        class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter your email"
                      >
                      <button
                        type="submit"
                        class="inline-block px-7 py-3 bg-blue-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from './Nav';
import Footer from './Footer';
export default {
  name: 'LandingComponent',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
@import '../dist/output.css';
</style>