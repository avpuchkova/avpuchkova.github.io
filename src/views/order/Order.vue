<template>
  <Wrapper>
    <!-- <v-carousel v-model="carousel" hide-delimiter-background class="carousel">
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
    </v-carousel> -->
    <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="(product, i) in products"
          :key="i"
          cols="12"
          md="3"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :class="active ? 'active-button-class' : 'button-class'"
              outlined
              height="200"
              @click="toggle"
            >
            

              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="d-flex flex-column align-center align-self-stretch pa-5"
                >
                  <div class="active-button-class-text text-center">
                    {{ currentLanguage === 'en' ? product.briefEn : product.briefRu }}
                  </div>
                  <div class=" mt-auto">
                    <ButtonRound 
                      :dark="true"
                      :color="'black'"
                      :title="currentLanguage === 'en' ? 'Order' : 'Заказать'"
                      @callback="clickProduct(product)"
                    />
                  </div>      
                </div>
                <div
                  v-if="!active"
                  class="text-center"
                >
                  <v-img
                    :lazy-src="product.iconSrc"
                    max-height="160"
                    max-width="160"
                    :src="product.iconSrc"
                    >                
                    </v-img>
                    <div class="button-class-title">{{ currentLanguage === 'en' ? product.titleEn : product.titleRu }}</div>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
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
        console.log('product>>>>>>>', product)
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
  border: 1px solid $border-light;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;

    &-title {
      color: $body-color;
      font-weight: $font-weight-bolt;
      margin-top: 10px;
    }
  }

  .active-button-class {
    display: flex;
    &-text {
      font-size: $font-size-base !important;
    }
    
  }

  @media (max-width: 600px) {

  }
</style>