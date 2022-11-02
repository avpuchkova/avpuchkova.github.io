<template>
  <Wrapper>
    <div class="text-center my-5">
      <h2>Payment pages</h2>
    </div>
  </Wrapper>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Wrapper from '@/components/Wrapper.vue';
  import ButtonLink from '@/components/buttons/ButtonLink.vue';
  import ButtonRound from '@/components/buttons/ButtonRound.vue';
  import ButtonFlat from '@/components/buttons/ButtonFlat.vue';

  export default {
    name: 'Payment',
    components: {
      Wrapper,
      ButtonLink,
      ButtonRound,
      ButtonFlat
    },
    data: () => ({

    }),
    computed: {
      ...mapGetters(["isLoggedIn", "userEmail", "userFirstName", "userLastName", "userPhone"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),
    },
    methods: {
      ...mapActions(["logout", "login", "saveName", "savePhone", "saveEmail", "savePassword"]),
      clickLogout() {
        this.logout().then(() => {

        });
      },
      
    },
  }
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';

 
</style>