<template>
  <v-app>
    <TopMenu />

    <v-main>
      <MainPage />
    </v-main>
  </v-app>
</template>

<script>
import TopMenu from './components/TopMenu.vue';
import MainPage from '@/views/MainPage.vue'

export default {
  name: 'App',
  components: {
    TopMenu,
    MainPage
  },

  data: () => ({
    //
  }),
};
</script>
