<template>
  <div>
    Cart
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import ButtonFlat from '@/components/buttons/ButtonFlat.vue';

  export default {
    name: 'Cart',
    components: {
      ButtonFlat
    },
    data: () => ({
//
    }),
    computed: {
      ...mapGetters(["isLoggedIn", "userEmail"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),
    },
    methods: {
      ...mapActions(["logout", "login"]),
      clickLogout() {
        // this.$store.dispatch("login", {
        //   email: this.email,
        //   password: this.password
        // }).then(() => {
        //   this.$router.push("/")
        // });
        this.logout().then(() => {
          console.log('houhouhouho')
          this.drawer = null
        });;
      },
    },
  }
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
 
</style>