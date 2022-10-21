<template>
  <Wrapper>
    <v-row justify="space-between" align-content="center">
      <v-col class="pa-2 align-self-auto flex-grow-0 flex-shrink-0" cols="12" sm="3">
        <div>
          <v-expansion-panels
            v-model="panel"
            multiple flat class="pa-2"
          >
            <v-expansion-panel>
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
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>{{ currentLanguage === 'en' ? 'Size' : 'Размер' }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-radio-group v-model="form.size">
                  <v-radio
                    v-for="(size,i) in sizes"
                    :key="i"
                    :label="`${currentLanguage === 'en' ? size.titleEn : size.titleRu}`"
                    :value="size.value"
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
                      :value="corner.value"
                    ></v-radio>
                  </v-radio-group>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>{{ currentLanguage === 'en' ? 'Orientation' : 'Ориентация' }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-radio-group v-model="form.orientation">
                    <v-radio
                      v-for="(orient,i) in orientation"
                      :key="i"
                      :label="`${currentLanguage === 'en' ? orient.titleEn : orient.titleRu}`"
                      :value="orient.value"
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
                      :value="style.value"
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
                          :value="colour.value"
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
              <v-chip
                v-if="form.type"
                class="ma-2"
                close
                outlined
                @click:close="form.type = null"
              >
                {{form.type}}
              </v-chip>

              <v-chip
                v-if="form.size"
                class="ma-2"
                close
                outlined
                @click:close="form.size = null"
              >
                {{form.size}}
              </v-chip>

              <v-chip
                v-if="form.corners"
                class="ma-2"
                close
                outlined
                @click:close="form.corners = null"
              >
                {{form.corners}}
              </v-chip>

              <v-chip
                v-if="form.orientation"
                class="ma-2"
                close
                outlined
                @click:close="form.orientation = null"
              >
                {{form.orientation}}
              </v-chip>

              <v-chip
                v-for="(style,i) in form.styles"
                :key="style"
                class="ma-2"
                close
                outlined
                @click:close="form.styles.splice(i, 1)"
              >
                {{style}}
              </v-chip>

              <v-chip
                v-for="(colour,i) in form.colours"
                :key="colour"
                class="ma-2"
                close
                outlined
                :color="colour === 'white'? 'black' : colour === 'cream' ? 'brown lighten-4' : colour"
                @click:close="form.colours.splice(i, 1)"
              >
                {{colour}}
              </v-chip>

              <button-flat
                v-if="showClearAll"
                :rounded="true"
                @callback="clearForm"
              >
                Clear All
              </button-flat>

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
      </v-col>
    </v-row>
  </Wrapper>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Wrapper from '@/components/Wrapper.vue';
  import TitleButton from '@/views/create/TitleButton.vue'
  import ButtonFlat from '@/components/ButtonFlat.vue'

  export default {
    name: 'Templates',
    components: {
      Wrapper,
      TitleButton,
      ButtonFlat
    },
    data: () => ({
      panel: [],
      form: {
        type: null,
        size: null,
        corners: null,
        orientation: null,
        styles: [],
        colours: [],
        logo: false
      },
      types: [
        {titleEn: 'Business Card', titleRu: 'Визитка', value: 'business-card'},
        {titleEn: 'Invitation Card', titleRu: 'Приглашение', value: 'invitation-card'},
        {titleEn: 'Presentation Folder', titleRu: 'Буклет', value: 'presentation-folder'}
      ],
      sizes: [
        {titleEn: 'Standart', titleRu: 'Стандартный', value: 'standart'},
        {titleEn: 'Square (65 x 65 mm)', titleRu: 'Квадратный (65 x 65 мм)', value: 'square'},
        {titleEn: 'Slim (85 x 40 mm)', titleRu: 'Стандартный (85 x 40 mm)', value: 'slim'}
      ],
      corners: [
        {titleEn: 'Rounded', titleRu: 'Скругленные', value: 'rounded'},
        {titleEn: 'Standart', titleRu: 'Стандартные', value: 'standart'}        
      ],
      orientation: [
        {titleEn: 'Horizontal', titleRu: 'Горизонтальная', value: 'horizontal'},
        {titleEn: 'Vertical', titleRu: 'Вертикальная', value: 'vertical'}         
      ],
      styles: [
        {titleEn: 'Animals', titleRu: 'Животные', value: 'animals'},
        {titleEn: 'Bold & Colourful', titleRu: 'Красочный', value: 'colourful'},
        {titleEn: 'Business Specific', titleRu: 'Для бизнесса', value: 'business'},
        {titleEn: 'Cultural', titleRu: 'Культура', value: 'cultural'},
        {titleEn: 'Floral', titleRu: 'Цветочный', value: 'floral'},
        {titleEn: 'Folk & rustic', titleRu: 'Рустик', value: 'folk'},
        {titleEn: 'Modern & Simple', titleRu: 'Простой и современный', value: 'modern'},
        {titleEn: 'Patriotic & Military', titleRu: 'Патриотический', value: 'military'},
        {titleEn: 'Patterns & Textures', titleRu: 'Узоры и текстуры', value: 'textures'},
        {titleEn: 'Religious', titleRu: 'Религия', value: 'religious'},
        {titleEn: 'Retro & Vintage', titleRu: 'Ретро и винтаж', value: 'retro'},
        {titleEn: 'Seasonal', titleRu: 'Времена года', value: 'seasonal'},
        {titleEn: 'Sports', titleRu: 'Спорт', value: 'sports'},
        {titleEn: 'Typographical', titleRu: 'География', value: 'typographical'},
        {titleEn: 'Wedding Events', titleRu: 'Свадьба', value: 'wedding'},
      ],
      colours: [
        {titleEn: 'Pink', titleRu: 'Розовый', value: 'pink'},
        {titleEn: 'Red', titleRu: 'Красный', value: 'red'},
        {titleEn: 'Orange', titleRu: 'Оранжевый', value: 'orange'},
        {titleEn: 'Yellow', titleRu: 'Желтый', value: 'yellow'},
        {titleEn: 'Green', titleRu: 'Зеленый', value: 'green'},
        {titleEn: 'Blue', titleRu: 'Синий', value: 'blue'},
        {titleEn: 'Purple', titleRu: 'Фиолетовый', value: 'purple'},
        {titleEn: 'Brown', titleRu: 'Коричневый', value: 'brown'},
        {titleEn: 'Cream', titleRu: 'Бежевый', value: 'cream'},
        {titleEn: 'White', titleRu: 'Белый', value: 'white'},
        {titleEn: 'Gray', titleRu: 'Серый', value: 'gray'},
        {titleEn: 'Black', titleRu: 'Черный', value: 'black'},
      ],
      pages: [5,10,20,50,100],
      showPage: 5,
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
      getCategories() {
        return this.currentLanguage === 'en' ? this.categoriesEn : this.categoriesRu
      },
      vertical() {
        if (this.sreenSize > 601)
          return true
        return false
      },
      showClearAll() {
        return Object.values(this.form)
                .map(e => (!e || e === null || !e.length) ? 0 : 1)
                .some(e => e > 0)
      }
    },
    methods: {
      ...mapActions(["setCurrentLanguage"]),
      myEventHandler(e) {
        this.sreenSize = window.innerWidth;
      },
      clearForm() {
        this.form = {
          type: null,
          size: null,
          corners: null,
          orientation: null,
          styles: [],
          colours: [],
          logo: false
        }
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
  @media (max-width: 600px) {
    .v-tab {
      height: 48px !important;
      min-width: 196px !important;
      max-width: 260px !important;
      padding: 0 !important;
    }
  }
</style>