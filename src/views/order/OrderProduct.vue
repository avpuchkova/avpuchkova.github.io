<template>
  <Wrapper>
    <v-row>
      <v-col>
        <Breadcrumbs :breadcrumbs="currentLanguage === 'en' ? breadcrumbsEn : breadcrumbsRu" />
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-5 mx-md-0">
      <v-col cols="12" sm="8">
        <v-img
          :lazy-src="currentProduct.iconSrc"
          max-width="80%"
          :src="currentProduct.iconSrc"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="4" class="d-flex flex-column">
        <div class="text-h3 mb-5">{{ currentLanguage === 'en' ? currentProduct.titleEn : currentProduct.titleRu }}</div>
        <div class="mb-5">
          {{ currentLanguage === 'en' ? currentProduct.textEn : currentProduct.textRu }}
        </div>
        <!-- <div>
          <v-checkbox
            v-model="hasOptions"
            @click="clickHasOptions"
            :label="currentLanguage === 'en' ? 'I know some options' : 'У меня есть требования'"
          ></v-checkbox>
        </div>
        <div v-if="hasOptions">
          <v-expansion-panels
            v-model="panel"
            multiple flat class="pa-2"
          >
          <template v-for="(option,i) in currentProductOptions">

            <v-expansion-panel :key="i" v-if="option.type === 'radiobutton'">
              <v-expansion-panel-header>{{ currentLanguage === 'en' ? option.titleEn : option.titleRu }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-radio-group :key="i" v-model="form[option.name]" v-if="option.type === 'radiobutton'">
                  <v-radio
                    v-for="(option,inx) in options(option.name)"
                    :key="`${option.name}-${inx}`"
                    :label="`${currentLanguage === 'en' ? option.titleEn : option.titleRu}`"
                    :value="option.titleEn"         
                  ></v-radio>
                  <v-radio
                    :key="`${option.name}-0`"
                    :label="`${currentLanguage === 'en' ? 'I do not know' : 'Не знаю'}`"
                    value="I do not know"
                  ></v-radio>
                </v-radio-group>
              </v-expansion-panel-content>
            </v-expansion-panel>
           
              <v-expansion-panel :key="i" v-if="option.type === 'checkboxes' && option.name != 'colour'">
                <v-expansion-panel-header>{{ currentLanguage === 'en' ? option.titleEn : option.titleRu }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox      
                      v-for="(row,inx) in options(option.name)"
                      hide-details
                      :key="`${option.name}-${inx}`"             
                      :value="row.titleEn"
                      :label="`${currentLanguage === 'en' ? row.titleEn : row.titleRu}`"
                      @click="clickOption(option.name, row.titleEn)"
                  >
                  </v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel :key="i" v-if="option.type === 'checkboxes' && option.name === 'colour'">
                <v-expansion-panel-header>{{ currentLanguage === 'en' ? option.titleEn : option.titleRu }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-chip-group multiple column v-model="form[option.name]">
                    <v-tooltip
                      right
                      v-for="(row,inx) in options(option.name)"
                      :key="`${row.name}-${inx}`"
                    >
                      <template v-slot:activator="{ on, attrs }">

                        <v-chip
                          class="ma-2"
                          :color="row.value === 'white'? 'black' : row.value === 'cream' ? 'brown lighten-5' : row.value"
                          hide-details
                          :value="row.value"
                          small
                          :outlined="row.value === 'white'"
                          :input-value="isActiveChip(row.name, row.value)"
                          filter
                          filter-icon="mdi-plus"
                          active-class="selected-chip"
                          v-bind="attrs"
                          v-on="on"
                        >
                        </v-chip>                 
                      </template>
                      <span>{{currentLanguage === 'en' ? row.titleEn : row.titleRu}}</span>
                    </v-tooltip>

                  </v-chip-group>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel :key="i" v-if="option.type === 'checkbox'">
                <v-expansion-panel-header>{{ currentLanguage === 'en' ? option.titleEn : option.titleRu }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <label :for="form[option.name]" class="text-field-label">{{currentLanguage === 'en' === 'en' ? 'Upload your logo/photo' : 'Загрузить логотип/фото'}}</label>
                  <v-file-input
                    v-model="form[option.name]"
                    required
                    outlined
                    full-width
                    prepend-icon=""
                    append-icon="mdi-file-image-plus"
                  ></v-file-input>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </template>
          </v-expansion-panels>      
        </div> -->
        
        <div class="d-flex flex-column align-center mt-5">
          <ButtonRound
            :title="currentLanguage === 'en' ? `Order for ${currentProduct.price.toFixed(2)} €` : `Заказать за ${currentProduct.price.toFixed(2)} €`"
            :color="'black'"
            :dark="true"
            @callback="orderProduct(currentProduct)"
            :disabled="disabled"
            class="mb-5"
          />
          <ButtonRoundLight
            :title="currentLanguage === 'en' ? 'Download Example' : 'Скачать образец'"
          >
          </ButtonRoundLight>
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
  import ButtonRoundLight from '@/components/buttons/ButtonRoundLight.vue';

  export default {
    name: 'templateProduct',
    components: {
        Wrapper,
        Breadcrumbs,
        ButtonRound,
        ButtonFlat,
        ButtonRoundLight
    },
    data: () => ({
      hasOptions: false,
      panel: [],
      form: {}
    }),
    async beforeMount() {
     await this.selectProduct(this.$route.params.name)
    },
    beforeRouteLeave(to, from, next) {
      this.hasOptions = false
      next()
    },
    mounted() {
      this.form = {}

      this.currentProductOptions.map(option => {
        this.form[option.name] = option.type === 'checkboxes' ? [] : null
      })
    },
    computed: {
      ...mapGetters([
        "currentProduct",
        "currentProductOptions",
        "loadingCart"
      ]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
        types: (state) => state.base.types,
        size: (state) => state.base.size,
        corners: (state) => state.base.corners,
        orientation: (state) => state.base.orientation,
        style: (state) => state.base.style,
        colour: (state) => state.base.colour,

        options: (state) => (type) => state.base[type]
      }),
      breadcrumbsEn() {
        return [
          {
            text: 'Home',
            disabled: false,
            href: 'main',
          },
          // {
          //   text: 'Order',
          //   disabled: false,
          //   href: 'Order',
          // },
          {
            text: this.currentProduct.titleEn,
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
          // {
          //   text: 'Заказать',
          //   disabled: false,
          //   href: 'Order',
          // },
          {
            text: this.currentProduct.titleRu,
            disabled: true,
          },
        ]
      },
      disabled() {
        //return !this.title.length || (this.currentBusinessCard.logo > 0 && !this.logo)
        return false
      }
    },
    methods: {
      ...mapActions(["selectProduct"]),
      download() {
        console.log('download', this.form)
      },
      getOption(type) {
        return this.$store.state[type]
      },
      isActiveChip(option, value) {
        if (!option) return false
        let values = Object.values(this.form[option])
        return values.includes(value)
      },
      clickOption(option, value) {
        this.form[option].push(value)
      },
      clickHasOptions() {
        if (!this.hasOptions) {
          this.form = {}
        }
      },
      toTo(name) {
        this.$router.push({name: name})
      },
      orderProduct(product) {
        console.log('form: ', this.form)
        console.log('Order product: ', product)
        this.$router.push({name: 'orderDetail'})
      }
    }
  }

</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
.selected-chip {

}

</style>