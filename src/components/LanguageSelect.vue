<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        outlined
        class=""
        :dark="dark"
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
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';

  export default {
    name: 'LanguageSelect',
    props: {
      dark: {
        type: Boolean,
        default: false
      }
    },
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
  }
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
</style>
