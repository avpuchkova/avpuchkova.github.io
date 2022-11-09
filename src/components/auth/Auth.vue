<template>
  <div>
    <Login v-if="!isLoggedIn" />
    <Logout v-else/>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Login from '@/components/auth/Login.vue';
  import Logout from '@/components/auth/Logout.vue';

  export default {
    name: 'Auth',
    components: {
      Login,
      Logout
    },
    data: () => ({

    }),
    computed: {
      ...mapGetters(["isLoggedIn",]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),
    },
    methods: {

    },
  }
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
  
</style>