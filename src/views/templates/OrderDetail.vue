<template>
  <Wrapper>
    <v-row>
      <v-col>
        <Breadcrumbs :breadcrumbs="currentLanguage === 'en' ? breadcrumbsEn : breadcrumbsRu" />
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">

      <v-col cols="12" class="d-flex flex-column">
        <v-stepper
          v-model="e6"
          vertical
          flat
         
        >
          <v-stepper-step
            :complete="e6 > 1"
            editable
            step="1"
          >
          {{ currentLanguage === 'en' ? 'Select options' : 'Выбрать опции' }}
            <small>
              {{ currentLanguage === 'en' ? 'Click Continue if You have not decided yet' : 'Выбрать опции' }}  
            </small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card
              color=""
              class="ma-5"
              flat
            >
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
                      v-for="(option,inx) in options(option.name).filter(o => o.typeId === currentProduct.productTypeId)"
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
                <!-- <v-expansion-panel :key="i" v-if="option.type === 'checkbox'">
                  <v-expansion-panel-header>{{option.name}} || {{ currentLanguage === 'en' ? option.titleEn : option.titleRu }}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <label :for="form[option.name]" class="text-field-label">{{currentLanguage === 'en' ? 'Upload your logo/photo' : 'Загрузить логотип/фото'}}</label>
                    <v-file-input
                      v-model="form[option.name]"
                      required
                      outlined
                      full-width
                      prepend-icon=""
                      append-icon="mdi-file-image-plus"
                    ></v-file-input>
                  </v-expansion-panel-content>
                </v-expansion-panel> -->

              </template>
            </v-expansion-panels>
            </v-card>
            <ButtonRound
              :title="currentLanguage === 'en' ? 'Continue' : 'Продолжить'"
              :dark="true"
              :color="'black'"
              :disabled="false"
              class="ma-5"
              @callback="(e6 = 2)"
            />
          </v-stepper-content>

          <v-stepper-step
            :complete="e6 > 2"
            editable
            step="2"
          >
            {{ currentLanguage === 'en' ? 'Upload your logo/photo if You have it' : 'Загрузите логотип/фото' }}
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card
              color=""
              class="ma-5"
              flat
            >
              <v-file-input
                v-model="currentFile"
                required
                outlined
                multiple
                full-width
                show-size
                prepend-icon=""
                append-icon="mdi-file-image-plus"
                @change="inputChanged"
              ></v-file-input>

              <div v-if="files.length">
                <v-row v-for="(file, i) in files" :key="i">
                  <v-col>{{ file.name }}</v-col>
                  <v-col>
                    <v-btn icon color="black" @click="remove(i)">
                      <v-icon>mdi-delete-forever</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-card>
            <ButtonRound
              :title="currentLanguage === 'en' ? 'Continue' : 'Продолжить'"
              :dark="true"
              :color="'black'"
              :disabled="false"
              @callback="(e6 = 3)"
            />
          </v-stepper-content>

          <v-stepper-step
            :complete="e6 > 3"
            editable
            step="3"
          >
          {{ currentLanguage === 'en' ? 'Your contacts' : 'Ваши контакты' }}
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card
              color=""
              class="ma-5"
              flat
            >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="contacts.name"
                :counter="50"
                :rules="nameRules"
                label="Name"
                outlined
                required
              ></v-text-field>

              <v-text-field
                v-model="contacts.email"
                :rules="emailRules"
                label="E-mail"
                outlined
                required
              ></v-text-field>

            </v-form>
          </v-card>
            <ButtonRound
              :title="currentLanguage === 'en' ? 'Continue' : 'Продолжить'"
              :dark="true"
              :color="'black'"
              :disabled="(!valid || !contacts.name.length || !contacts.email.length)"
              @callback="validateContact"
            />
          </v-stepper-content>

          <v-stepper-step :complete="(e6 > 4)" editable step="4">
            Comments
            <small>
              If You would like to say something
            </small>
          </v-stepper-step>

          <v-stepper-content
            :complete="(e6 > 4)"
            editable
            step="4"
          >
            <v-card
              color=""
              class="ma-5"
              flat
            >
            <v-textarea
              outlined
              name="Comments"
              label="Comments"
              clearable
              clear-icon="mdi-close-circle"
              v-model="contacts.comments"
              counter
              :rules="commentsRules"
            ></v-textarea>
            </v-card>
            <ButtonRound
              :title="currentLanguage === 'en' ? 'Continue' : 'Продолжить'"
              :dark="true"
              :color="'black'"
              :disabled="false"
              @callback="(e6 = 5)"
            />
          </v-stepper-content>

          <v-stepper-step
            :complete="(e6 > 5)"
            editable
            step="5"
          >
          {{ currentLanguage === 'en' ? 'Preview' : 'Предпросмотр' }}
          </v-stepper-step>

          <v-stepper-content step="5">
            <v-card
              color=""
              class="ma-lg-5"
              flat
            >
            <v-sheet
              class="mx-auto pa-5"
              color="grey lighten-5"
            >
              <div class="text-center text-h4 mb-5">Your order</div>
                <v-row class="d-flex justify-space-between align-stretch">
                  <v-col cols="12" lg="6" class="px-5">
                    <div class="text-h6 mb-5 text-center text-lg-left">{{currentProduct.titleEn}}</div>
                    <v-row class="white">
                      <v-col cols="12" lg="3" class="text-center text-lg-left">Options:</v-col>
                      <v-col cols="10" lg="8" class="text-start">
                        <div v-for="([key, value], i) in customOptions" :key="i">
                          {{key}}: {{value}}
                        </div>
                      </v-col>
                      <v-col cols="1" class="text-end">
                        <v-btn icon color="black" @click="(e6 = 1)">
                          <v-icon>mdi-border-color</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-row class="white">
                      <v-col cols="12" lg="3" class="text-center text-lg-left">Files:</v-col>
                      <v-col cols="10" lg="8" class="text-start">
                        <div v-if="files.length">
                          <v-row v-for="(file, i) in files" :key="i">
                            <v-col>{{ file.name }}</v-col>
                            <v-col>
                              <v-btn icon color="black" @click="remove(i)">
                                <v-icon>mdi-delete-forever</v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </div>
                        <div v-else>
                          <v-row>
                            <v-col>No files</v-col>
                          </v-row>
                        </div>
                      </v-col>
                      <v-col cols="1" class="text-end">
                        <v-btn icon color="black" @click="(e6 = 2)">
                          <v-icon>mdi-border-color</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" lg="6" class="px-5 d-flex flex-column align-stretch">
                    <div class="text-h6 mb-5 text-center text-lg-left">Contacts</div>
                    <v-row class="white">
                      <v-col cols="12" lg="3" class="text-center text-lg-left">Your name:</v-col>
                      <v-col cols="10" lg="8" class="text-start">{{contacts.name}}</v-col>
                      <v-col cols="1" class="text-end">
                        <v-btn icon color="black" @click="(e6 = 3)">
                          <v-icon>mdi-border-color</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-row class="white">
                      <v-col cols="12" lg="3" class="text-center text-lg-left">Email:</v-col>
                      <v-col cols="10" lg="8" class="text-start">{{contacts.email}}</v-col>
                      <v-col cols="1" class="text-end">
                        <v-btn icon color="black" @click="(e6 = 3)">
                          <v-icon>mdi-border-color</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-row class="white">
                      <v-col cols="12" lg="3" class="text-center text-lg-left">Comments:</v-col>
                      <v-col cols="10" lg="8" class="text-start">{{contacts.comments}}</v-col>
                      <v-col cols="1" class="text-end">
                        <v-btn icon color="black" @click="(e6 = 3)">
                          <v-icon>mdi-border-color</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
            
            </v-sheet>
            
           </v-card>
           <div class="text-center mt-5">
            <ButtonRound
              :title="currentLanguage === 'en' ? `Order for ${currentProduct.price.toFixed(2)} €` : `Заказать за ${currentProduct.price.toFixed(2)} €`"
              :dark="true"
              :color="'black'"
              :disabled="false"
              @callback="orderProduct()"
              class="mt-5"
            />
          </div>
          </v-stepper-content>
        </v-stepper>
        
        <!-- <div class="d-flex flex-column align-center mt-5">
          <ButtonRound
            v-if="(e6 === 6)"
            :title="currentLanguage === 'en' ? `Order for ${currentProduct.price.toFixed(2)} €` : `Заказать за ${currentProduct.price.toFixed(2)} €`"
            :color="'black'"
            :dark="true"
            @callback="orderProduct()"
            :disabled="disabled"
            class="mb-5"
          />
        </div> -->
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
    name: 'orderDetail',
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
      form: {},
      currentFile: [],
      files: [],
      contacts: {
        name: 'Anna Puchkova',
        email: 'MAILtesttesttetstest.testtest@mail.ru',
        comments: 'dxbgfnfg gfnsfgnfgnfgng gfbsdgngnfg gnsfgnfgnfg gfnsgfnsgnsgn fgdbsdgf'
      },
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      commentsRules: [v => v.length <= 25 || 'Max 25 characters'],
      price: 0,
      e6: 1,
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
        "productTypeId",
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

        productTypeId: (state) => state.base.productTypeId,
        options: (state) => (type) => state.base[type]
      }),
      breadcrumbsEn() {
        return [
          {
            text: 'Home',
            disabled: false,
            href: 'main',
          },
          {
            text: this.currentProduct.titleEn,
            disabled: false,
            href: 'OrderProduct',
          },
          {
            text: 'Order',
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
            text: this.currentProduct.titleRu,
            disabled: false,
            href: 'OrderProduct',
          },
          {
            text: 'Order',
            disabled: true,
          },
        ]
      },
      disabled() {
        //return !this.title.length || (this.currentBusinessCard.logo > 0 && !this.logo)
        return false
      },
      customOptions() {
        return Object.entries(this.form)
      }
    },
    methods: {
      ...mapActions(["selectProduct"]),
      download() {
        console.log('download', this.form)
      },
      remove (index) {
        this.files.splice(index, 1)
      },
      inputChanged () {
        console.log('currentFile', this.currentFile)
        this.files = [
            ...this.currentFile,
            ...this.files
        ]
        console.log('files', this.files)
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
      validateContact () {
        this.$refs.form.validate()
        this.e6 = 4
      },
      toTo(name) {
        this.$router.push({name: name})
      },
      orderProduct() {
        this.e6 = 6
        console.log('currentProduct: ', this.currentProduct.product)
        console.log('form: ', this.form)
        console.log('files: ', this.files)
        console.log('contacts: ', this.contacts) 
      }
    }
  }

</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
.selected-chip {

}

</style>