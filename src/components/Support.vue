<template>
  <div class="font-roboto bg-gray-50">
    <Nav />
    <div class="flex min-h-screen pt-[104px] mb-16 mx-4 sm:mx-6 lg:mx-8">
      Support
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from './Nav';
import Footer from './Footer';
export default {
    name: 'SupportComponent',
    components: {
      Nav,
      Footer
    }
}
</script>

<style>
@import '../dist/output.css';
</style>