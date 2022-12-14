<template>
  <Wrapper>
    <Breadcrumbs :breadcrumbs="currentLanguage === 'en' ? breadcrumbsEn : breadcrumbsRu" />
    <h1>{{ currentLanguage === 'en' ? 'About Us' : 'О нас' }}</h1>
    <p>
      PET PROJECT provides design services for individuals and businesses purposes.
      We provide high quality business cards, flyers, leaflets, brochures, stickers, 
      rubber stamps, photo prints, banners and other custom print products with 
      fast turnaround times.
    </p>
    <p>
      If You have any question, please feel free to
      <router-link :to="{name: 'Contact'}" class="link">Contact</router-link>
    </p>
  </Wrapper>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Wrapper from '@/components/Wrapper.vue';
  import ButtonFlat from '@/components/buttons/ButtonFlat.vue';
  import Breadcrumbs from '@/components/Breadcrumbs.vue';

  export default {
    name: 'About',
    components: {
      Wrapper,
      ButtonFlat,
      Breadcrumbs
    },
    data: () => ({

    }),
    computed: {
      ...mapGetters(["currentLanguageText", "currentLanguageIcon"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),
      breadcrumbsEn() {
        return [
          {
            text: 'Home',
            disabled: false,
            href: 'main',
          },
          {
            text: 'About',
            disabled: true,
          },
        ]
      },
      breadcrumbsRu() {
        return [
          {
            text: 'Главная',
            disabled: false,
            href: 'main',
          },
          {
            text: 'О нас',
            disabled: true,
          },
        ]
      },
    },
    methods: {
      goTo(link) {
        this.$router.push(link);
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
  .link {
    color: $black;
    text-decoration: underline;

    &:hover {
      color: $palette-gray;
    }
  }
</style>