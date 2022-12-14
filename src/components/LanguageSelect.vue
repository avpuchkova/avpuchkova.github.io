<template>
  <div>
    <v-btn
        outlined
        class=""
        :dark="dark"
        @click.native="clickDrawer"
      >
        <v-avatar class="lang-menu-flag">
          <img
            class="d-block mr-md-2"
            :src="currentLanguageIcon"
            :alt="currentLanguage"
          >
        </v-avatar>
        <span v-if="$vuetify.breakpoint.mdAndUp">{{ currentLanguageText }}</span>
      </v-btn>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary app
      right
      class="py-5"
    >
      <v-list-item>
        <v-list-item-icon class="mr-4">
          <img :src="currentLanguageIcon"
            :alt="currentLanguageText"
            class="d-block lang-menu-item-flag"
          />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-start">{{ currentLanguageText }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense class="my-5">
        <v-list-item
          v-for="(lang, index) in languages"
          :key="index"
          @click="setLanguage(lang.value)"
        >
          <v-list-item-icon>
            <img :src="lang.iconSrc"
              :alt="lang.value"
              class="mr-2 d-block lang-menu-item-flag"
            />
          </v-list-item-icon>
          <v-list-item-title class="text-start">
            {{ lang.text }}
          </v-list-item-title>
          <v-list-item-action>

            <v-icon
              v-if="(lang.value === currentLanguage)"
              color="black"
            >mdi-check</v-icon>

        </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
  <!-- <v-menu offset-y>
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
  </v-menu> -->
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
    data: () => ({
      drawer: null,
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
        this.drawer = false
      },
     clickDrawer() {
      window.scrollTo(0,0);
      this.drawer = !this.drawer
     }
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
