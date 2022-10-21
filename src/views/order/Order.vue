<template>
  <Wrapper>
    <v-carousel v-model="carousel" hide-delimiter-background class="carousel">
      <v-carousel-item
        v-for="(button, i) in buttons"
        :key="i"
      >
        <v-sheet
          height="100%"
          tile
          class="carousel-item"
        >
          <div
            class="d-flex flex-column align-center justify-center mb-6"
          >
            <div class="my-5">
              <v-icon
                x-large
                :color="button.color"
              >
                {{`${button.icon}`}}
              </v-icon>
            </div>
            <div class="text-h5 text-sm-h2 my-5">
              {{ currentLanguage === 'en' ? button.titleEn : button.titleRu }}
            </div>
            <div class="mt-5">
              <v-btn
                outlined
                rounded
                color="primary"
              >
                {{currentLanguage === 'en' ? 'Order' : 'Заказать'}}
              </v-btn>
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </Wrapper>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Wrapper from '@/components/Wrapper.vue';

  export default {
    name: 'Order',
    components: {
      Wrapper,
    },
    data: () => ({
      carousel: null,
      buttons: [
        {titleEn: 'Business Cards', titleRu: 'Визитки', icon: 'mdi-card-account-details-outline', color: 'green darken-2', iconSrc: require('@/assets/create/visit.png')},
        {titleEn: 'Invitation Cards', titleRu:'Приглашения', icon: 'mdi-card-account-details-star-outline', color: 'purple darken-2', iconSrc: require('@/assets/create/booklet.jpg')},
        {titleEn: 'Presentation Folders', titleRu:'Буклеты', icon: 'mdi-id-card', color: 'orange darken-2',},
      ],
      sreenSize: window.innerWidth
    }),
    created() {
      window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
      window.removeEventListener("resize", this.myEventHandler);
    },
    computed: {
      ...mapGetters(["currentLanguageText", "currentLanguageIcon"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
        languages: (state) => state.language.languages
      }),
      vertical() {
        if (this.sreenSize > 601)
          return true
        return false
      }
    },
    methods: {
      ...mapActions(["setCurrentLanguage"]),
      myEventHandler(e) {
        this.sreenSize = window.innerWidth;
      }
    },
  };
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
.carousel {

  height: 300px !important;
  border: 1px solid $palette-gray;
  .carousel-item {
    background-color: $palette-0;
  }
}

  @media (max-width: 600px) {

  }
</style>