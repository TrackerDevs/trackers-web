<template>
  <div class="font-roboto bg-gray-50">
    <Nav />
    <div class="flex h-screen my-16 mx-4 sm:mx-6 lg:mx-8">
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
      </div>
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