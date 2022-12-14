<template>
  <v-banner
    single-line
    color="#E3F2FD"
    two-line
    mobile-breakpoint="md"
  >
    <div class="d-flex justify-end mr-md-5">
      {{ currentLanguage === 'en' ? textEn : textRu }}
    </div>
  
    <template v-slot:actions>
      <!-- <ButtonFlat
        class="mr-auto"
        @callback="goTo('About')"
        :title="currentLanguage === 'en' ? 'About Us' : 'О нас'"
      /> -->
      <router-link :to="{name: 'Contact'}" class="link">{{ currentLanguage === 'en' ? 'About Us' : 'О нас' }}</router-link>
    </template>
  </v-banner>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import ButtonFlat from '@/components/buttons/ButtonFlat.vue';

  export default {
    name: 'Banner',
    components: {
      ButtonFlat
    },
    data: () => ({
      textEn: 'High Quality Online Design Services',
      textRu: 'High Quality Online Design Services'
    }),
    computed: {
      ...mapGetters(["currentLanguageText", "currentLanguageIcon"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),
    },
    methods: {
      goTo(link) {
        this.$router.push(link);
      }
    }
  }
</script>

<style lang="scss">
@import '@/styles/_variables';
  .v-banner__wrapper {
      border-bottom: none !important;

    .v-banner__actions {
      margin-left: 0;
    }
  }
  .link {
    color: $black !important;
    text-decoration: none;
    margin-right: auto;
    font-weight: $font-weight-semibold;

    &:hover {
      color: $palette-gray;
      text-decoration: underline;
    }
  }
</style>