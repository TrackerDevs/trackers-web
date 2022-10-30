<template>
  <div class="font-roboto bg-gray-50">
    <Nav />
    <div class="flex h-screen my-16 mx-4 sm:mx-6 lg:mx-8">
      About
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