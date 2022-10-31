<template>
  <div class="w-full top-0">
    <hr>
    <div class="container max-w-7xl mx-auto sm:px-4 lg:px-8 py-4 flex items-center align-center">
      <div class="grid grid-cols-3 gap-4 w-full text-center">
        <div>
          <img
            class="h-8"
            src="https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Flogo.png?alt=media"
            alt="CS Trackers Logo"
          >
        </div>
        <div>
          <a href="/about">
            About
          </a>
          <a href="/contact">
            Contact
          </a>
          <a href="/support">
            Support
          </a>
        </div>
        <div class="text-left">
          Social
        </div>
        <div class="text-left text-xs">
          Copyright © 2022
        </div>
        <div class="text-xs">
          Made with &#60;3 by CS Tracker Devs
        </div>
        <div>
          <a href="#">
            Discord
          </a>
          <a href="#">
            Twitter
          </a>
        </div>
      </div>
    </div>
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