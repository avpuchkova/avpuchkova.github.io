<template>
  <div class="footer">
    <div class="footer-content">
      <v-row>
        <v-col cols="12" sm="4" class="d-flex flex-column align-start">
          <h4 class="footer-links-title">Quick Links</h4>
          <ul class="footer-links">
            <li>
              <router-link :to="{name: 'main'}" class="footer-link">Home</router-link>
            </li>
            <li>
              <router-link :to="{name: 'main'}" class="footer-link">Contact</router-link>
            </li>
            <li>
              <router-link :to="{name: 'main'}" class="footer-link">Link 3</router-link>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex flex-row justify-start">

        </v-col>
        <v-col cols="12" sm="4" class="d-flex flex-row justify-start">

        </v-col>
      </v-row>
    </div>
    <div class="copyright">
      <div class="footer-content">
        <v-row>
          <v-col cols="12" sm="4" class="d-flex flex-row justify-start">
            © 2022 Pet Project ChP Terms | Privacy
          </v-col>
          <v-col cols="12" sm="4" class="d-flex flex-row justify-center">
            <v-img
              lazy-src="@/assets/footer/mastercard.svg"
              max-height="30"
              max-width="42"
              src="@/assets/footer/mastercard.svg"
              class="mx-3"
            ></v-img>
            <v-img
              lazy-src="@/assets/footer/visa.svg"
              max-height="30"
              max-width="42"
              src="@/assets/footer/visa.svg"
              class="mx-3"
            ></v-img>
            <v-img
              lazy-src="@/assets/footer/paypal.svg"
              max-height="30"
              max-width="42"
              src="@/assets/footer/paypal.svg"
              class="mx-3"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="4" class="d-flex flex-row justify-end">
            <LanguageSelect dark />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import LanguageSelect from '@/components/LanguageSelect.vue'

  export default {
    name: 'Footer',
    components: {
      LanguageSelect
    },
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
  .footer {
    background-color: $body-color;
    color: $white;
    text-align: center;
    box-sizing: border-box;
    .copyright {
      background-color: $black;
      color: $white;
    }
    .footer-links-title {
      border-bottom: 1px solid $white;
      padding-bottom: 10px;
      margin-bottom: 15px;
    }
    .footer-links {
      list-style-type: none;
      margin: 0;
      padding: 0;
      text-align: start;
      .footer-link {
        color: $white;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .footer-content {
    width: 80%;
    margin: auto;
    padding: 20px 0;
  }
  @media (max-width: 600px) {

  }
</style>
