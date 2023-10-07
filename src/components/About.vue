<template>
  <div class="font-roboto bg-gray-50">
    <Nav />
    <div class="flex flex-col min-h-screen pt-[113px] mb-16 mx-4 sm:mx-6 lg:mx-8">
      <div class="mb-8 mt-10">
        <h1 class="text-center mb-3 font-bold text-4xl leading-none text-slate-900">
          Everything you need to succeed
        </h1>
      </div>

      <div class="flex flex-wrap flex-row-reverse mb-12">
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
          <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2FUIC_Campus.jpg?alt=media"
              class="w-full h-[30rem]"
              alt="uic campus image"
            >
            <div
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style="background-color: rgba(251, 251, 251, 0.2)"
            />
          </div>
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
          <h3 class="text-2xl font-bold mb-4">
            Active Community
          </h3>
          <p class="text-gray-500 mb-6">
            Join an active UIC Discord server to interact with fellow classmates. Create connections with students in the classes you are currently taking, and keep track of due dates for homework and projects. Collaborate with people for group projects or study sessions. Discuss and receive advice about future classes from peers, upperclassmen, and even alumni! Additionally, get real time access to teaching assistants and school faculty!
          </p>
          <p class="text-gray-500">
            This server supports more than just classes, we foster a community! Interact with fellow musicians, cooks, gamers, and gym enthusiasts. Discuss financial markets, investing, and companies for future employment. Use your professional skills to contribute to the Trackers community by joining ongoing projects. Stay ahead, by getting questions answered about career fairs, internships, early career opportunities, and jobs. Get exclusive advice from UIC alumni working in the industry.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap mb-12">
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
          <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2FUIC_Campus2.jpg?alt=media"
              class="w-full h-[30rem]"
              alt="uic campus"
            >
            <div
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style="background-color: rgba(251, 251, 251, 0.2)"
            />
          </div>
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
          <h3 class="text-2xl font-bold mb-4">
            In-person and Virtual Events
          </h3>
          <p class="text-gray-500 mb-6">
            Interact with the Trackers student organization by joining and actively participating in events. These events include social meetups, study sessions, coding workshops, resume reviews, networking events, and more!
          </p>
          <p class="text-gray-500 mb-6">
            View upcoming events on this website or on the <router-link
              to="/hub"
              class="text-blue-600 font-bold underline decoration-transparent hover:decoration-current transition-all duration-300 ease-in-out"
            >
              <span>Discord server</span>
            </router-link>.
          </p>
          <router-link to="/events">
            <button
              class="bg-transparent hover:bg-blue-700 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition duration-300 ease-in-out inline-flex mb-6"
            >
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
          </router-link>
          <p class="text-gray-500 mb-6">
            Please fill out this form to join our listserv to receive updates about new events and times:
          </p>
          <router-link to="/rsvp">
            <button
              class="bg-transparent hover:bg-blue-700 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition duration-300 ease-in-out inline-flex mb-6"
            >
              <p>Subscribe to mailing list</p>
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
          </router-link>
        </div>
      </div>

      <div class="flex flex-wrap flex-row-reverse mb-12">
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
          <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2FUIC_Campus3.jpg?alt=media"
              class="w-full h-[30rem]"
              alt="uic campus"
            >
            <div
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style="background-color: rgba(251, 251, 251, 0.2)"
            />
          </div>
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
          <h3 class="text-2xl font-bold mb-4">
            Course Trackers
          </h3>
          <p class="text-gray-500 mb-6">
            Course Trackers are students who volunteer to keep everyone up to date on new developments that happen in classes. They send announcements regarding homework, upcoming due dates, and when grades are released. Course trackers also ensure that chats are open and welcoming for everyone, and that academic honesty is followed at all times. With course trackers, you'll never miss an assignment deadline again!
          </p>
          <p class="text-gray-500 mb-6">
            If you would like to volunteer and help the community, please apply to become a Course Tracker today!
          </p>
          <a
            href="https://forms.gle/Dwy2wJ6TCqJy14as7"
            target="_blank"
          >
            <button
              class="bg-transparent hover:bg-blue-700 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition duration-300 ease-in-out inline-flex mb-6"
            >
              <p>View Form</p>
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
          <p class="text-gray-500">
            Note: This website includes the names of all assigned course trackers, a fully comprehensive and regularly updated list of all classes being taught, and which professors are teaching each course.
          </p>
        </div>
      </div>
      
      <hr>

      <div class="mb-8 mt-10">
        <h1 class="text-center mb-3 font-bold text-4xl leading-none text-slate-900">
          About Trackers
        </h1>
      </div>

      <div class="flex flex-wrap flex-row-reverse mb-12">
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
          <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Ftrackers-logo-v4-cs-banner-invite.jpg?alt=media"
              class="w-full h-[30rem]"
              alt="trackers logo banner"
            >
            <div
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style="background-color: rgba(251, 251, 251, 0.2)"
            />
          </div>
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
          <h3 class="text-2xl font-bold mb-4">
            Our Story
          </h3>
          <p class="text-gray-500 mb-6">
            The community was founded on August 24th, 2020. It was a time of uncertainty for everyone. Due to covid and the transition from in-person to online instruction, many students were sad and upset at the lack of socializing, and the nonexistent college experience. It was during this time that Leland Moy, a student dedicated to enhancing his college experience, decided to bring together the students in his CS classes via Discord. In doing so, he created a small haven which has developed over the years to become the  expansive community that we have today. With the transition back to in-person teaching, the community continues to thrive on Discord, now expanding to different majors under the College of Engineering. Trackers has now become a key resource for students in networking and professional growth.
          </p>
        </div>
      </div>
      
      <!-- <div class="flex flex-wrap mb-12">
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
          <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Ftrackers-logo-v4-me-banner-invite.jpg?alt=media"
              class="w-full h-[30rem]"
              alt="trackers logo banner"
            >
            <div
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style="background-color: rgba(251, 251, 251, 0.2)"
            />
          </div>
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
          <h3 class="text-2xl font-bold mb-4">
            Our Mission
          </h3>
          <p class="text-gray-500 mb-6">
            At Trackers, we push our members forward to their limits while supporting them to a brighter future. We strive to grow our members by providing up to date resources regarding the courses they are taking and the ability to stay connected with the community both online and offline. This is a place for every member to academically grow and meet others with similar majors and interests.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap flex-row-reverse mb-12">
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
          <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2FUIC_Halsted.jpg?alt=media"
              class="w-full h-[30rem]"
              alt="uic halsted station"
            >
            <div
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style="background-color: rgba(251, 251, 251, 0.2)"
            />
          </div>
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
          <h3 class="text-2xl font-bold mb-4">
            Our Vision
          </h3>
          <p class="text-gray-500 mb-6">
            At Trackers, we wish to provide support to every member's professional career with our infrastructure. Built and designed by our team, we strive to be able to showcase our member's both creative and technical skills to our partners.
          </p>
        </div>
      </div> -->

      <hr>

      <div class="flex mt-10 shadow w-full max-w-4xl mx-auto">
        <router-link
          to="/about/team"
          class="w-full"
        >
          <button class="flex flex-row items-center justify-center group relative h-20 w-full bg-white text-lg">
            <div class="absolute inset-0 w-0 bg-blue-500 transition-all duration-[300ms] ease-out group-hover:w-full shadow-inner" />
            <span class="relative text-black group-hover:text-white">Meet the Team</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 group-hover:text-white absolute right-0 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>
  
<script>
import Nav from './Nav';
import Footer from './Footer';
export default {
  name: 'AboutComponent',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
@import '../dist/output.css';
</style>