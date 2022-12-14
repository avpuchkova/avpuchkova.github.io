<template>
  <div>

    <v-app-bar
      
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      color="white"
      outlined
     
      class="app-bar"
    >
      <v-btn class="d-flex align-center logo" @click="goTo('/')" text plain>
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"  
        />
        Pet Project
      </v-btn>
      <v-spacer></v-spacer>
      <div class="d-flex flex-row justify-space-between">
        <Auth />
        <LanguageSelect />
        <!-- <Cart /> -->
      </div>
    </v-app-bar>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import LanguageSelect from '@/components/LanguageSelect.vue';
  import Cart from '@/components/Cart.vue';
  import Auth from '@/components/auth/Auth.vue';

  export default {
    name: 'TopMenu',
    components: {
      LanguageSelect,
      Cart,
      Auth
    },
    data: () => ({
      collapseOnScroll: true,
    }),
    computed: {
      ...mapGetters(["currentLanguageText", "currentLanguageIcon"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
        languages: (state) => state.language.languages
      }),
    },
    methods: {
      ...mapActions(["setCurrentLanguage"]),
      setLanguage(lang) {
        this.setCurrentLanguage({ language: lang });
      },
      goTo(path){
        this.$router.push(path)
      }
    },
  };
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
  .logo {
    font-size: 1.5rem;
    .shrink {
      width: 40px;
    }
    
  }
  .app-bar {
    border-bottom: 1px solid $border-light !important;
  }

  @media (max-width: 600px) {
    .logo {
      font-size: $font-size-base;
      .shrink {
        width: 30px;
      }
    }
  }
</style>
