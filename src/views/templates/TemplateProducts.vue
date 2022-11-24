<template>
  <Wrapper>
    <v-row>
      <v-col>
        <Breadcrumbs :breadcrumbs="currentLanguage === 'en' ? breadcrumbsEn : breadcrumbsRu" />
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col class="text-center">
        <div class="text-h3 mb-2">
          {{ currentLanguage === 'en' ? currentProduct.titleEn : currentProduct.titleRu}}
        </div>
      </v-col>
    </v-row>
    <v-row justify="space-between" align-content="center">
      <v-col class="pa-2 align-self-auto flex-grow-0 flex-shrink-0" cols="12" sm="3">
        <div>
          <v-expansion-panels
            v-model="panel"
            multiple flat class="pa-2"
          >
            <template v-for="(option,i) in currentProductOptions">

              <v-expansion-panel :key="i" v-if="option.type === 'radiobutton'">
                <v-expansion-panel-header>{{ currentLanguage === 'en' ? option.titleEn : option.titleRu }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-radio-group :key="i" v-model="form2[option.name]" v-if="option.type === 'radiobutton'">
                    <v-radio
                      v-for="(row,inx) in options(option.name)"
                      :key="`${row.name}-${inx}`"
                      :label="`${currentLanguage === 'en' ? row.titleEn : row.titleRu}`"
                      :value="row.id"
                      @click="sortItems"      
                    ></v-radio>
                    <v-radio
                      :key="`${option.name}-0`"
                      :label="`${currentLanguage === 'en' ? 'I do not know' : 'Не знаю'}`"
                      :value="null"
                      @click="sortItems"
                    ></v-radio>
                  </v-radio-group>
                </v-expansion-panel-content>
              </v-expansion-panel>
            
              <v-expansion-panel :key="i" v-if="option.type === 'checkboxes' && option.name !== 'colour'">
                <v-expansion-panel-header>{{ currentLanguage === 'en' ? option.titleEn : option.titleRu }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox      
                      v-for="(row,i) in options(option.name)"
                      v-model="form2[option.name]"
                      hide-details
                      :key="`${row.id}-${i}`"             
                      :value="row.id"
                      :label="`${currentLanguage === 'en' ? row.titleEn : row.titleRu}`"                   
                      @click="sortItems"
                  >
                  </v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel :key="i" v-if="option.type === 'checkboxes' && option.name === 'colour'">
                <v-expansion-panel-header>{{ currentLanguage === 'en' ? option.titleEn : option.titleRu }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox      
                      v-for="(row,i) in options(option.name)"
                      v-model="form2[option.name]"
                      :color="row.value === 'white' ? 'gray' : row.value"
                      hide-details
                      :key="`${row.id}-${i}`"             
                      :value="row.id"
                      :label="`${currentLanguage === 'en' ? row.titleEn : row.titleRu}`"                   
                      @click="sortItems"
                  >
                  </v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </template>
          </v-expansion-panels>
          <div v-for="(option,i) in currentProductOptions" :key="i">
            <v-checkbox
            v-if="option.type === 'checkbox'"
              v-model="form2[option.name]"
              :value="1"
              :label="`${currentLanguage === 'en' ? option.titleEn : option.titleRu}`"    
              @click="sortItems"
            ></v-checkbox>
          </div>
        </div>
      </v-col>
      <v-col class="pa-2 align-self-auto flex-grow-1 flex-shrink-0">
        <v-row>
          <v-col class="pa-2 align-self-auto flex-grow-1 flex-shrink-0">
            <div class="text-center">
              <div v-for="(option,i) in currentProductOptions" :key="i">
                <v-chip
                  v-if="!Array.isArray(form2[option.name]) && form2[option.name]"
                  class="ma-2"
                  close
                  outlined             
                  @click:close="clickClose(option.name)"
                >
                  {{getTag(option.name, form2[option.name])}}
                </v-chip>
                <div v-if="Array.isArray(form2[option.name]) && form2[option.name].length">
                  <v-chip
                    v-for="(elem,i) in form2[option.name]"
                    :key="`style-${i}`"
                    class="ma-2"
                    close
                    outlined
                    @click:close="clickClose(option.name, elem)"
                  >
                    {{getTag(option.name, elem)}}
                  </v-chip>
                </div>
              </div>

              <v-btn
                v-if="test"
                rounded
                depressed
                outlined
                small
                @click="clearForm"

              >Clear All
              </v-btn>

            </div>
          </v-col>
          <v-col class="pa-2 align-self-auto flex-grow-0 flex-shrink-0" cols="12" sm="3">
            <div class="text-center">
              <v-select
                :items="pages"
                flat
                dense
                rounded
                outlined
                hide-details
                v-model="pageSize"
                :menu-props="{ bottom: true, offsetY: true }"
              >
                <template v-slot:selection="{ item }">
                  {{item}} per page
                </template>
                <template v-slot:item="{ item }">
                  {{item}} per page
                </template>
             </v-select>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <!-- <v-col v-if="sortedBusinessCards.length === 0">No items available. Please change filter parametres</v-col>
          <v-col v-else v-for="(item, i) in sortedBusinessCards" :key="i"> -->
            <v-col v-if="itemsPerPage.length === 0">No items available. Please change filter parametres</v-col>
          <v-col v-else v-for="(item, i) in itemsPerPage" :key="i">
            <div>
              <span>{{item.id}} ~ {{item.title}}</span>
              <v-badge
                bordered
                :value="item.price"
                color="success"
                icon="mdi-crown"
                overlap
              >
                <v-img
                  :src="item.src"
                  :lazy-src="item.src"
                  max-height="150"
                  max-width="250"
                  @click="clickImg(item.id)"
                ></v-img>
              </v-badge>
            </div>
          </v-col>
        </v-row>
        <v-row class="d-felx justify-center py-5">
          <!-- <Pagination
            :pageSize="pageSize"
            :length="sortedBusinessCards.length"
            @callback="showItemsPerPage"
          /> -->
          <Pagination
            :pageSize="pageSize"
            :length="sortedProducts.length"
            @callback="showItemsPerPage"
          />
          
        </v-row>
      </v-col>
    </v-row>
  </Wrapper>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Wrapper from '@/components/Wrapper.vue';
  import Breadcrumbs from '@/components/Breadcrumbs.vue';
  import TitleButton from '@/views/create/TitleButton.vue';
  import ButtonFlat from '@/components/buttons/ButtonFlat.vue';
  import ButtonRound from '@/components/buttons/ButtonRound.vue';
  import Pagination from '@/components/paginations/Pagination.vue'

  export default {
    name: 'TemplateProducts',
    components: {
      Wrapper,
      Breadcrumbs,
      TitleButton,
      ButtonFlat,
      ButtonRound,
      Pagination
    },
    data() {
      let pageSize = 3;
      return {
      panel: [],
      form: {
        typeId: 1,
        size: null,
        corners: null,
        orientation: null,
        styles: [],
        colours: [],
        logo: false,
        premium: false
      },
      form2: {},
      pages: [3,5,10,20,50,100],
      pageSize: pageSize,
      sreenSize: window.innerWidth,
      start: 0,
      end: pageSize,
      test: false
    }},
    watch: {
      form: {
        handler: function(newValue) {
          this.sortItems(newValue);
        },
        deep: true
      },
      form2: {
        handler: function(newValue) {
          console.log('WATCH form 2: ', newValue)
          //this.sortItems(newValue);
        },
        deep: true
      }
    },
    async beforeMount() {
     await this.selectProduct(this.$route.params.name)
     this.showAllItems(this.currentProduct.id)

     this.form2 = {}
      this.currentProductOptions.map(option => {
        this.form2[option.name] = option.type === 'checkboxes' ? [] : null
      })
    },
    mounted() {
      // this.form2 = {}
      // console.log('currentProductOptions: ', this.currentProductOptions)
      // this.currentProductOptions.map(option => {
      //   this.form2[option.name] = option.type === 'checkboxes' ? [] : null
      // })
      // console.log('this.form2: ', this.form2)
    },
    beforeRouteLeave (to, from, next) { 
      this.clearForm()
      next()
    },
    created() {
      window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
      window.removeEventListener("resize", this.myEventHandler);
    },
    computed: {
      ...mapGetters([
        "currentLanguageText",
        "currentLanguageIcon",
        "sortedBusinessCards",
        "sortedProducts",

        "currentProduct",
        "currentProductOptions",
        "openedProduct",

        "size"
        
      ]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
        languages: (state) => state.language.languages,
        types: (state) => state.base.types,
        page: (state) => state.base.page,
        //size: (state) => state.base.size,
        corners: (state) => state.base.corners,
        orientation: (state) => state.base.orientation,
        style: (state) => state.base.style,
        colour: (state) => state.base.colour,
        premium: (state) => state.base.premium,
        logo: (state) => state.base.logo,

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
            disabled: true,
          },
        ]
      },
      getCategories() {
        return this.currentLanguage === 'en' ? this.categoriesEn : this.categoriesRu
      },
      vertical() {
        if (this.sreenSize > 601)
          return true
        return false
      },
      showClearAll: {
        get() {
          return false
          // Object.entries(this.form2)
          // .map(([key, v]) => (!v || v === null || v.length === 0) ? 0 : 1)
          // .some(e => e > 0)
        },
        set(newValue){
          console.log('newValue', newValue)
        }
      },
      // showClearAll() {
      //   console.log('Object.entries(this.form2)', Object.entries(this.form2))
      //   return Object.entries(this.form2)
      //     .map(([key, v]) => (!v || v === null || v.length === 0) ? 0 : 1)
      //     .some(e => e > 0)
      // },
      itemsPerPage() {
        let start = this.start
        let end = start + this.pageSize

       return this.sortedProducts.slice(start, end)
       
      },
    },
    methods: {
      ...mapActions(["setCurrentLanguage", 
      "showAllItems",  
      "sortProducts", 
    
      "selectBusinessCard", 
      "selectProduct",
      "openProduct"
    ]),
      getOption(type) {
        return this.$store.state[type]
      },
      isActiveChip(option, value) {
        if (!option) return false
        let values = Object.values(this.form2[option])
        return values.includes(value)
      },
      clickClose(option, value) {
        
        if (!value) {
          this.form2[option] = null
        } else {
          let inx = this.form2[option].indexOf(value)
          this.form2[option].splice(inx, 1)
        }
        console.log('this.form2', this.form2)
        this.sortItems()
      },
      myEventHandler(e) {
        this.sreenSize = window.innerWidth;
      },
      clearForm() {
        this.form = {
          typeId: 1,
          size: null,
          corners: null,
          orientation: null,
          styles: [],
          colours: [],
          logo: false,
          price: false
        }
        this.form2 = {}
        this.showClearAll = false
        this.showAllItems(this.currentProduct.id);
      },
      getTag(type, value){
        return typeof value === 'number' ?
        this[type].find(item => item.id === value).value
        : value
      },
      clickImg(id) {
        this.openProduct(id).then(() => {
          this.$router.push({name: 'templateProduct', params: { id: id}})
        })
      },
      showItemsPerPage({start, end}) {
        this.start = start
        this.end = end
      },
      sortItems() {
        

        this.test = Object.entries(this.form2)
        .map(([key, v]) => (!v || v === null || v.length === 0) ? 0 : 1)
        .some(e => e > 0)
        console.log('sortItems  form2', this.form2)

        this.sortProducts({form: this.form2, id: this.currentProduct.id})
      }
    },
  };
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
.breadcrumb {
  text-decoration: none;
  color: $palette-gray;
}
.breadcrumb-active {
    color: $black;
}
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
  @media (max-width: 600px) {
    .v-tab {
      height: 48px !important;
      min-width: 196px !important;
      max-width: 260px !important;
      padding: 0 !important;
    }
  }
</style>