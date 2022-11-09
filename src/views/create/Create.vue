<template>
  <Wrapper>
    <v-tabs
      :vertical="vertical"
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
      background-color="transparent"
      hide-slider
      v-model="tab"
      
    >
      <v-tab v-for="(button, i) in buttons" :key="i" :ripple="false">
        <TitleButton
          :title="currentLanguage === 'en' ? button.titleEn : button.titleRu"
          :icon="button.icon"
          :color="button.color"
          :iconSrc="button.iconSrc"
          :isActive="tab === i">
        </TitleButton>
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Business cards are the ultimate way to give a great first impression. Our paper business cards are available in both classic landscape orientation and, for something a bit different, portrait format. Stand out by choosing a different size, with four options to choose from.
            </p>
          </v-card-text>
          <v-card-actions>
            <ButtonRoundLight
              :title="currentLanguage === 'en' ? 'Download Example' : 'Скачать образец'"
            >
            </ButtonRoundLight>
            <ButtonRound
              :color="'black'"
              :dark="true"
              :title="currentLanguage === 'en' ? 'Get started' : 'Начать'"
              @callback="clickGetStart('/business-cards')"
            >
            </ButtonRound> 
          </v-card-actions>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Invitation cards are an important tool for spreading the word about your business – customise yours to advertise an event, product or launch. There are three different types to choose from – standard, special finish or postcard – so you can send your customers a product that stands out from the crowd.
            </p>
          </v-card-text>
          <v-card-actions>
            <ButtonRoundLight
              :title="`${currentLanguage === 'en' ? 'Get started' : 'Начать'}`" 
              :link="'templateBusinessCards'"
            >
            </ButtonRoundLight>
          </v-card-actions>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Presentation folders are customised files that help you sort out your documents and keep your office shipshape. With various sizes available, they are ideal for holding your papers, introducing yourself at meetings or handing out information at events or trade fairs in professional branded folders.
            </p>
          </v-card-text>
          <v-card-actions>
            <ButtonRoundLight
              :title="`${currentLanguage === 'en' ? 'Get started' : 'Начать'}`" 
              :link="'templateBusinessCards'"
            >
            </ButtonRoundLight>
          </v-card-actions>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </Wrapper>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';

  import Wrapper from '@/components/Wrapper.vue';
  import TitleButton from '@/views/create/TitleButton.vue';
  import ButtonRoundLink from '@/components/buttons/ButtonRoundLink.vue';
  import ButtonRound from '@/components/buttons/ButtonRound.vue';
  import ButtonRoundLight from '@/components/buttons/ButtonRoundLight.vue';
  export default {
    name: 'Create',
    components: {
      Wrapper,
      TitleButton,
      ButtonRoundLink,
      ButtonRound,
      ButtonRoundLight
    },
    data: () => ({
      tab: null,
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
      },
      openCreateBusinessCard() {
        this.$router.push('/business-cards');
      },
      clickGetStart(link) {
        this.$router.push(link);
      }
    },
  };
</script>

<style scoped>
.v-tab {
  min-width: 300px !important;
  height: 120px !important;
}
  .v-tab--active {
      background-color: transparent !important;
  }
  .v-tab:hover {
    background-color: transparent !important;
}
  .v-tab:before {
    background-color: transparent !important;
  }
  .link-btn {
    text-decoration: none;
    text-transform: none;
  }
  @media (max-width: 600px) {
    .v-tab {
      height: 48px !important;
      min-width: 196px !important;
      max-width: 260px !important;
      padding: 0 !important;
    }
  }
</style>