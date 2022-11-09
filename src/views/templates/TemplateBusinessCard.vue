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
          :lazy-src="currentBusinessCard.src"
          max-width="90%"
          :src="currentBusinessCard.src"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="4" class="d-flex flex-column">
          <label for="title" class="text-field-label">Enter your title</label>
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
          <div v-if="currentBusinessCard.logo">
            <label for="logo" class="text-field-label">Upload your logo/photo</label>
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
          <div>
            <ButtonRound :title="'Download for free'" :color="'black'" :dark="true" @callback="download"/>
          </div>
          <div class="mt-5">
            Or 
          </div>
          <div>
            <ButtonFlat :title="'Create your own design'"  @callback="toTo('/order')" />
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
      img: '',
      logo: ''
    }),
    computed: {
      ...mapGetters([
        "currentLanguageText",
        "currentLanguageIcon",
        "currentBusinessCard",
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
            text: 'Business Cards',
            disabled: false,
            href: 'templateBusinessCards',
          },
          {
            text: this.currentBusinessCard.title,
            disabled: true,
            href: 'business-cards',
          },
        ]
      }
    },
    methods: {
      download() {
        console.log('download')
      },
      toTo(link) {
        this.$router.push({name: 'Order'})
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

</style>
