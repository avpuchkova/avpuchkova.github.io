<template>
  <v-text-field outlined shaped label="Search" v-model="text">
    <v-btn
      icon
      slot="append"
      @click:append="click"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-text-field>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

  export default {
    name: 'Search',
    props: {

    },
    data: () => ({
      text: '',
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
    },
    methods: {
      click() {
        this.$emit('callback', this.text);
      }
    }
  }
</script>