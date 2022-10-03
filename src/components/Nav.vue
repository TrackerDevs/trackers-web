<template>
  <nav class="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
    <div class="px-6 w-full flex flex-wrap items-center justify-between">
      <div class="navbar-collapse collapse grow items-center">
        <ul class="navbar-nav mr-auto lg:flex lg:flex-row">
          <li class="nav-item">
            <a
              href="/"
              class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
            >Home</a>
          </li>
        </ul>
      </div>
    </div>
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