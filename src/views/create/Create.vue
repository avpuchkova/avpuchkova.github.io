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
      <v-tab v-for="(product, i) in products" :key="i" :ripple="false">
        <TitleButton
          :title="currentLanguage === 'en' ? product.titleEn : product.titleRu"
          :icon="product.icon"
          :color="product.color"
          :iconSrc="product.iconSrc"
          :isActive="tab === i">
        </TitleButton>
      </v-tab>

      <v-tab-item v-for="(product, i) in products" :key="i">
        <v-card flat>
          <v-card-text>
            <p>
              {{currentLanguage === 'en' ? product.textEn : product.textRu }}
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
              @callback="clickGetStart(product)"
            >
            </ButtonRound> 
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
      sreenSize: window.innerWidth
    }),
    mounted() {
      console.log('this.products', this.products) 
    },
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
        languages: (state) => state.language.languages,
        products: (state) => state.base.products
      }),
      vertical() {
        if (this.sreenSize > 601)
          return true
        return false
      }
    },
    methods: {
      ...mapActions(["setCurrentLanguage", "selectProduct"]),
      myEventHandler(e) {
        this.sreenSize = window.innerWidth;
      },
      openCreateBusinessCard() {
        this.$router.push('/business-cards');
      },
      clickGetStart(product) {
        console.log('product.product>>>>>>>', product.product)
        this.selectProduct(product.product).then(() => {
          this.$router.push({name: 'CreateProduct', params: { name: product.product}})
          }
        )
       // this.$router.push({name: 'CreateProduct', params: { name: product.product}})
       
      }
    },
  };
</script>

<style scoped>
.v-tab {
  min-width: 300px !important;
  height: 100% !important;
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