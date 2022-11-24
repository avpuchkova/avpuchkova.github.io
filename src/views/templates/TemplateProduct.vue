<template>
  <Wrapper>
    <v-row>
      <v-col>
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="8">
        <v-img
          :lazy-src="openedProduct.src"
          max-width="90%"
          :src="openedProduct.src"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="4" class="d-flex flex-column">
          <label for="title" class="text-field-label">{{ currentLanguage === 'en' ? 'Enter your title' : 'Введите текст' }}</label>
          <v-text-field
            v-model="title"
            :counter="20"
            full-width
            outlined
            required
            type="text"
            class="mb-5"
            append-icon="mdi-format-color-highlight"
          >
          </v-text-field>
          <div v-if="openedProduct.logo">
            <label for="logo" class="text-field-label">{{currentLanguage === 'en' === 'en' ? 'Upload your logo/photo' : 'Загрузить логотип/фото'}}</label>
            <v-file-input
              v-model="logo"
              required
              outlined
              full-width
              prepend-icon=""
              append-icon="mdi-file-image-plus"
            ></v-file-input>
          </div>

          <!-- <label for="img" class="text-field-label">Upload your image</label>
          <v-file-input
            v-model="img"
            required
            outlined
            full-width
            prepend-icon=""
            append-icon="mdi-file-image-plus"
          ></v-file-input> -->
        
        <div class="text-center">
          <div v-if="openedProduct.price">
            <ButtonRound
            :title="currentLanguage === 'en' ? `Add to Cart for ${openedProduct.price}` : `Добавить в корзину за ${openedProduct.price}`"
            :color="'black'"
            :dark="true"
             @callback="addToCart(openedProduct)"
             :disabled="disabled"
             />
             <v-alert
              :value="loadingCart"
              outlined
              type="success"
              icon="mdi-cart-arrow-down"
              transition="scale-transition"
              close-icon
            >
              {{openedProduct.title}} is added to Cart
            </v-alert>
          </div>
          <div v-else>
            <ButtonRound
            :title="currentLanguage === 'en' ? 'Download for free' : 'Скачать бесплатно'"
            :color="'black'"
            :dark="true"
             @callback="download"
             :disabled="disabled"
             />
          </div>
          <div class="mt-5">
            Or 
          </div>
          <div>
            <ButtonFlat :title="currentLanguage === 'en' ? 'Get your own design' : 'Заказать уникальный дизайн'"  @callback="toTo('Order')" />
          </div>
        </div>
      </v-col>
    </v-row>
  </Wrapper>
</template>
<script>

  import { mapState, mapActions, mapGetters } from 'vuex';
  import Wrapper from '@/components/Wrapper.vue';
  import Breadcrumbs from '@/components/Breadcrumbs.vue';
  import ButtonRound from '@/components/buttons/ButtonRound.vue';
  import ButtonFlat from '@/components/buttons/ButtonFlat.vue';

  export default {
    name: 'templateBusinessCard',
    components: {
        Wrapper,
        Breadcrumbs,
        ButtonRound,
        ButtonFlat
    },
    data: () => ({
      title: '',
      logo: null
    }),
    async beforeMount() {
     // await this.selectBusinessCard(this.$route.params.id)
     await this.selectProduct(this.$route.params.name)
     await this.openProduct(this.$route.params.id)
     
    },
    computed: {
      ...mapGetters([
        "currentLanguageText",
        "currentLanguageIcon",
        "currentBusinessCard",
        "loadingCart",

        "currentProduct",
        "openedProduct"
      ]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),
      breadcrumbs() {
        return [
          {
            text: 'Home',
            disabled: false,
            href: 'main',
          },
          {
            text: this.currentProduct.titleEn,
            disabled: false,
            href: 'CreateProduct',
            to: {
              name: 'CreateProduct',
              params: {
                name: 'business-card'
              }
            }
          },
          {
            text: this.openedProduct.title,
            disabled: true,
          },
        ]
      },
      disabled() {
        return !this.title.length || (this.currentBusinessCard.logo > 0 && !this.logo)
      }
    },
    methods: {
      ...mapActions(["setCurrentLanguage", "selectBusinessCard","selectProduct", "openProduct", "addItem"]),
      download() {
        console.log('download', this.title, this.logo)
      },
      toTo(name) {
        this.$router.push({name: name})
      },
      addToCart(item) {
        this.addItem(item)
      }
    }
  }

</script>

<style lang="scss" scoped>
@import '@/styles/_variables';

.text-field-label {
  font-weight: $font-weight-bolt;
  margin: 0 0 5px 0;
}
.v-alert {
  position: fixed;
  right: 0;
  top: 200px;
  transform: translate(-50%, -50%);
  margin: 0 auto;  // Without this the box extends the width of the page
}
</style>
