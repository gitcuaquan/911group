<template>
  <SectionHero></SectionHero>
  <SectionAbout></SectionAbout>
  <SectionDominance></SectionDominance>
</template>

<script>
import SectionHero from '@/components/section/hero.vue'
import SectionAbout from '@/components/section/about.vue'
import SectionDominance from '@/components/section/dominance.vue'
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    SectionHero,
    SectionAbout,
    SectionDominance
  }
}
</script>
