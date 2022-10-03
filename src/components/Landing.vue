<template>
  <div class="h-full font-roboto bg-gray-50">
    <Nav />
    <div class="flex h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div class="m-auto">
        <h1 class="text-center mb-3 text-2xl leading-none text-slate-900">
          Landing
        </h1>
        <div class="text-center mt-8 space-y-6">
          <form>
            <a href="/login">
              <button
                type="button"
                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >Login</button>
            </a>
          </form>
        </div>
        <div class="p-8">
          <a href="/Shibboleth.sso/Metadata">
            <button
              type="button"
              class="inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >Shibboleth
              metadata</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav';
export default {
  name: 'LandingComponent',
  components: {
    Nav
  }
}
</script>

<style>
@import '../dist/output.css';
</style>