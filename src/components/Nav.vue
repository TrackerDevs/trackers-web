<template>
  <nav class="fixed w-full z-10 top-0 bg-gray-50">
    <div class="container max-w-7xl mx-auto sm:px-4 lg:px-8 py-4 flex items-center">
      <div class="flex-shrink-0">
        <a href="/">
          <img
            class="h-8"
            src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Flogo.png?alt=media"
            alt="CS Trackers Logo"
          >
        </a>
      </div>
      <div class="flex space-x-4 lg:block lg:ml-8">
        <a href="/">
          Home
        </a>
        <a href="/events">
          Events
        </a>
        <a href="/about">
          About
        </a>
      </div>

      <div class="flex space-x-4 ml-auto">
        <a href="/login">
          Log In
        </a>
        <a href="/signup">
          Sign Up
        </a>
      </div>
    </div>
    <hr>
  </nav>
</template>
    
<script>
export default {
  name: "NavComponent",
  props: []
}
</script>

<style>
@import '../dist/output.css';
</style>