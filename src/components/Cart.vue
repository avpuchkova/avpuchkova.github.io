<template>
  <v-btn text class="top-menu-btn" @click="clickCart">
    <v-badge
      color="blue"
      :content="totalItems"
      bottom
      left
      overlap
      v-if="totalItems > 0"
    >
      <v-icon>mdi-cart-variant</v-icon>
    </v-badge>
    <v-icon v-else>mdi-cart-variant</v-icon>
    <div class="d-flex flex-column align-start">
      <span class="title">{{ currentLanguage === 'en' ? 'Cart' : 'Корзина' }}</span>
      <span v-if="totalPrice > 0" class="subtitle text-caption red--text">&euro; {{ totalPrice.toFixed(2) }}</span>
    </div>
  </v-btn>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Cart',
    props: {
      dark: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({

    }),
    computed: {
      ...mapGetters(["currentLanguageText", "currentLanguageIcon", "totalPrice", "totalItems"]),
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
      clickCart() {
        this.$router.push('/cart');
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
  .top-menu-btn {
    text-transform: none;
    padding: 10px auto;
    margin: 0 20px;

    &::before {
      opacity: 0 !important;
    }

    .subtitle {
      line-height: 1;
    }

    .title {
      font-size: 0.875rem !important;
      line-height: 1.5;
    }

    &:hover .title {
      text-decoration: underline;
    }
  }
</style>