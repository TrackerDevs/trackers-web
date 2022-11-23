<template>
  <div class="font-roboto bg-gray-50">
    <Nav />
    <div class="flex flex-col min-h-screen pt-[104px] mb-16 mx-4 sm:mx-6 lg:mx-8">
      <section class="mb-32 mt-10 text-gray-800 text-center">
        <h1 class="text-center mb-12 font-bold text-4xl leading-none text-slate-900">
          Meet the Team
        </h1>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-xl-12">
          <TeamCard
            v-for="(p,idx) in store.people" 
            v-bind="p"
            :key="idx"
          />
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>
    
<script>
import Nav from './Nav';
import Footer from './Footer';
import TeamCard from './TeamCard';
import { useTeamCardsStore } from '../stores/teamCards';
export default {
    name: 'AboutTeamComponent',
    components: {
        Nav,
        Footer,
        TeamCard
    },
    setup() {
      const store = useTeamCardsStore();
      return { store };
    }
}
</script>

<style>
@import '../dist/output.css';
</style>