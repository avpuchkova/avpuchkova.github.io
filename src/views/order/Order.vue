<template>
  <Wrapper>
    <v-container>
      <v-row>
        <v-col
          v-for="(product, i) in products"
          :key="i"
          cols="12"
          md="3"
        >
        <v-hover v-slot="{ hover }">
          <v-card
            class="button-class"
            outlined
            height="200"
            
          > 
            <v-img
              v-if="!hover"
              :lazy-src="product.iconSrc"
              max-height="133"
              max-width="160"
              :src="product.iconSrc"
            >
            </v-img>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out v-card--reveal active-button-class"
              style="height: 100%; width: 100%;"
              @click="clickProduct(product)"
            >
              <div class="active-button-class-text text-center">
                {{ currentLanguage === 'en' ? product.briefEn : product.briefRu }}
              </div>
            </div>
            <v-card-text
              class="text-center d-flex justify-center pa-0 mt-auto"    
            >
              <div class="button-class-title">{{ currentLanguage === 'en' ? product.titleEn : product.titleRu }}</div>
            </v-card-text>
          </v-card>
        </v-hover>
         
        </v-col>
      </v-row>
    </v-container>
  </Wrapper>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Wrapper from '@/components/Wrapper.vue';
  import ButtonRound from '@/components/buttons/ButtonRound.vue';

  export default {
    name: 'Order',
    components: {
      Wrapper,
      ButtonRound
    },
    data: () => ({
      carousel: null,
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
        products: (state) => state.products.productsOrder
      }),
      vertical() {
        if (this.sreenSize > 601)
          return true
        return false
      }
    },
    methods: {
      ...mapActions(["selectProduct"]),
      myEventHandler(e) {
        this.sreenSize = window.innerWidth;
      },
      clickProduct(product) {
        this.selectProduct(product.product).then(() => {
          this.$router.push({name: 'OrderProduct', params: { name: product.product}})
          }
        )
       // this.$router.push({name: 'OrderProduct', params: { name: product}})
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

.button-class {
  color: $black;
  background-color: $white;
  padding: 10px 20px;
  border: 1px solid $border-light;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;

    &-title {
      color: $body-color;
      font-weight: $font-weight-bolt;
      
    }
  }

  .active-button-class {
    display: flex;
    align-items: center;
    padding-top: 10px;
    cursor: pointer;

    &-text {
      font-size: $font-size-base !important;
    }
    
  }

  @media (max-width: 600px) {

  }
</style>