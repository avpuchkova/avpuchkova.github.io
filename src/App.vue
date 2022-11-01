<template>
  <v-app>
    <TopMenu />

    <v-main>
      <!-- <MainPage /> -->

      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import TopMenu from './components/TopMenu.vue';
import MainPage from '@/views/MainPage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    TopMenu,
    MainPage,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
