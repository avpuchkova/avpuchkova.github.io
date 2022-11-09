<template>
  <Wrapper>
    <v-row>
      <v-col>
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col class="text-center">
        <div class="text-h3 mb-2">
          Business Cards
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
            <!-- <v-expansion-panel>
              <v-expansion-panel-header>{{ currentLanguage === 'en' ? 'Type' : 'Тип' }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-radio-group v-model="form.type">
                  <v-radio
                    v-for="(type,i) in types"
                    :key="i"
                    :label="`${currentLanguage === 'en' ? type.titleEn : type.titleRu}`"
                    :value="type.value"
                  ></v-radio>
                </v-radio-group>
              </v-expansion-panel-content>
            </v-expansion-panel> -->

            <v-expansion-panel>
              <v-expansion-panel-header>{{ currentLanguage === 'en' ? 'Size' : 'Размер' }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-radio-group v-model="form.size">
                  <v-radio
                    v-for="(size,i) in sizes"
                    :key="i"
                    :label="`${currentLanguage === 'en' ? size.titleEn : size.titleRu}`"
                    :value="size.id"
                    
                  ></v-radio>
                </v-radio-group>
              </v-expansion-panel-content>
            </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>{{ currentLanguage === 'en' ? 'Corners' : 'Размер' }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-radio-group v-model="form.corners">
                    <v-radio
                      v-for="(corner,i) in corners"
                      :key="i"
                      :label="`${currentLanguage === 'en' ? corner.titleEn : corner.titleRu}`"
                      :value="corner.id"
                    ></v-radio>
                  </v-radio-group>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>{{ currentLanguage === 'en' ? 'Orientation' : 'Ориентация' }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-radio-group v-model="form.orientation">
                    <v-radio
                      v-for="(orient,i) in orientations"
                      :key="i"
                      :label="`${currentLanguage === 'en' ? orient.titleEn : orient.titleRu}`"
                      :value="orient.id"
                    ></v-radio>
                  </v-radio-group>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>{{ currentLanguage === 'en' ? 'Styles & Themes' : 'Стили и темы' }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-checkbox
                    v-for="(style) in styles"
                      hide-details
                      :key="style.value"
                      v-model="form.styles"
                      :value="style.id"
                      :label="`${currentLanguage === 'en' ? style.titleEn : style.titleRu}`"
                  >
                  </v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>{{ currentLanguage === 'en' ? 'Colour' : 'Цвета' }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-chip-group multiple column v-model="form.colours">
                    <v-tooltip
                      right
                      v-for="(colour,i) in colours"
                      :key="i"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-chip
                          class="ma-2"
                          :color="colour.value === 'white'? 'black' : colour.value === 'cream' ? 'brown lighten-5' : colour.value"
                          hide-details
                          :value="colour.id"
                          small
                          :outlined="colour.value === 'white'"
                          v-bind="attrs"
                          v-on="on"
                        >
                        </v-chip>
                      </template>
                      <span>{{currentLanguage === 'en' ? colour.titleEn : colour.titleRu}}</span>
                    </v-tooltip>
                  </v-chip-group>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>{{ currentLanguage === 'en' ? 'Logo / Photo Area' : 'Логотип / Фото' }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox
                    v-model="form.logo"
                    :label="`${currentLanguage === 'en' ? 'Has Logo/Photo Area' : 'У меня есть фото / логотип'}`"
                  ></v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-expansion-panels>
          </div>
        </v-col>
      <v-col class="pa-2 align-self-auto flex-grow-1 flex-shrink-0">
        <v-row>
          <v-col class="pa-2 align-self-auto flex-grow-1 flex-shrink-0">
            <div class="text-center">
              <!-- <v-chip
                v-if="form.type"
                class="ma-2"
                close
                outlined
                @click:close="form.type = null"
              >
                {{form.type}}
              </v-chip> -->

              <v-chip
                v-if="form.size"
                class="ma-2"
                close
                outlined
                @click:close="form.size = null"
              >
                {{getTag('size', form.size)}}
              </v-chip>

              <v-chip
                v-if="form.corners"
                class="ma-2"
                close
                outlined
                @click:close="form.corners = null"
              >
                {{getTag('corners', form.corners)}}
              </v-chip>

              <v-chip
                v-if="form.orientation"
                class="ma-2"
                close
                outlined
                @click:close="form.orientation = null"
              >
                {{getTag('orientation', form.orientation)}}
              </v-chip>

              <v-chip
                v-for="(style,i) in form.styles"
                :key="`style-${i}`"
                class="ma-2"
                close
                outlined
                @click:close="form.styles.splice(i, 1)"
              >
                {{getTag('style', style)}}
              </v-chip>

              <v-chip
                v-for="(colour,i) in form.colours"
                :key="`colour-${i}`"
                class="ma-2"
                close
                outlined
                :color="colour === 10 ? 'black' : colour === 9 ? 'brown lighten-4' : getTag('colour', colour)"
                @click:close="form.colours.splice(i, 1)"
              >
                {{getTag('colour', colour)}}
              </v-chip>

              <v-chip
                v-if="form.logo"
                class="ma-2"
                close
                outlined
                @click:close="form.logo = false"
              >
                {{getTag('logo', form.logo)}}
              </v-chip>

              <v-btn
                v-if="showClearAll"
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
                v-model="showPage"
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
          <v-col v-if="sortedBusinessCards.length === 0">No items available. Please change filter parametres</v-col>
          <v-col v-else v-for="(item, i) in sortedBusinessCards" :key="i">
            <div>
              <span>{{item.id}} ~ {{item.title}} ~ size: {{item.size}} ~ corners: {{item.corners}} ~ orientation: {{item.orientation}} ~ styles: {{item.styles}} ~ colours: {{item.colours}}</span>
              <v-img
                :src="item.src"
                :lazy-src="item.src"
                max-height="150"
                max-width="250"
                @click="clickImg(item.id)"
              ></v-img>
            </div>
          </v-col>
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

  export default {
    name: 'Templates',
    components: {
      Wrapper,
      Breadcrumbs,
      TitleButton,
      ButtonFlat,
      ButtonRound
    },
    data: () => ({
      panel: [],
      form: {
        typeId: 1,
        size: null,
        corners: null,
        orientation: null,
        styles: [],
        colours: [],
        logo: false,
      },
      breadcrumbs: [
        {
          text: 'Home',
          disabled: false,
          href: 'main',
        },
        {
          text: 'Business Cards',
          disabled: true,
          href: 'templateBusinessCards',
        },
      ],
      pages: [5,10,20,50,100],
      showPage: 5,
      sreenSize: window.innerWidth
    }),
    watch: {
      form: {
        handler: function(newValue) {
          this.sortItems(newValue);
        },
        deep: true
      }
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
      ]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
        languages: (state) => state.language.languages,
        types: (state) => state.base.types,
        sizes: (state) => state.base.sizes,
        corners: (state) => state.base.corners,
        orientations: (state) => state.base.orientations,
        styles: (state) => state.base.styles,
        colours: (state) => state.base.colours,
      }),
      getCategories() {
        return this.currentLanguage === 'en' ? this.categoriesEn : this.categoriesRu
      },
      vertical() {
        if (this.sreenSize > 601)
          return true
        return false
      },
      showClearAll() {
        return Object.entries(this.form)
          .map(([key, v]) => (key == 'typeId' || !v || v === null || v.length === 0) ? 0 : 1)
          .some(e => e > 0)
      },

    },
    methods: {
      ...mapActions(["setCurrentLanguage", "sortItems", "sortSize", "selectBusinessCard"]),
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
          logo: false
        }
      },
      getTag(type, value){
        switch (type) {
          case 'size':
            return this.sizes.find(item => item.id === value).value;
          case 'corners':
            return this.corners.find(item => item.id === value).value;
          case 'orientation':
            return this.orientations.find(item => item.id === value).value;
          case 'style':
            return this.styles.find(item => item.id === value).value;
          case 'colour':
            return this.colours.find(item => item.id === value).value;
          case 'logo':
            return 'Own logo/photo'
          default:
            return ''
        }
      },
      clickImg(id) {
        console.log('clickImg', id)
       this.selectBusinessCard(id).then(() => {
        this.$router.push({name: 'templateBusinessCard', params: { id: id}})
        }
       )
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