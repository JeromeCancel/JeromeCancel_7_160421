<template>
  <v-app>
    <navigation></navigation>
    <v-main transition="slide-x-transition">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
