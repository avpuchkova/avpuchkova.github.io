<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center logo">
      <v-img
        alt="Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
    Pet Project
    </div>
    <v-spacer></v-spacer>
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar class="lang-menu-flag">
              <img
                class="d-block mr-2"
                :src="currentLanguageIcon"
                :alt="currentLanguage"
              >
            </v-avatar>
            {{ currentLanguageText }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(lang, index) in languages"
            :key="index"
            @click="setLanguage(lang.value)">
            <img :src="lang.iconSrc"
              :alt="lang.value"
              class="mr-2 d-block lang-menu-item-flag"
            />
            <v-list-item-title>{{ lang.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-btn text>
      <span class="mr-2">Login</span>
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';

  export default {
    name: 'TopMenu',

    data: () => ({

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
    },
  };
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
  .lang-menu-flag {
    border-radius: 0 !important;
  }

  .lang-menu-flag,
  .lang-menu-item-flag {
    width: 35px !important;
    min-width: 35px !important;
    height: 30px !important;
  }
  .logo {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
  .logo {
    font-size: $font-size-base;
  }
  }
</style>
