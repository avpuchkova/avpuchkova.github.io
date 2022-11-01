<template>
  <v-hover v-slot="{ hover }">
    <v-card
      max-width="100%"
      min-width="100%"
      height="90%"
      class="d-flex justify-start align-center px-2 px-sm-5 mx-auto card"
      :class="{ 'active-class': isActive, 'on-hover': hover }"
      :elevation="hover ? 2 : 0"
      flat
      outlined
      >
        <!-- <v-img 
          :src="iconSrc"
          :alt="title"
          max-height="65"
          max-width="90"
        ></v-img> -->
        <v-icon class="mr-5" x-large :color="color">
          {{icon}}
        </v-icon>
        <div class="title">{{title}}</div>

    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'TitleButton',
    props: {
      title: String,
      icon: String,
      iconSrc: String,
      color: String,
      isActive: Boolean,
    },
    data: () => ({

    }),
    computed: {

    },
    methods: {

    },
  };
</script>
<style lang="scss" scoped>
@import '@/styles/_variables';
  .active-class {
    background-color: $card-lightgray;
    border: 1px solid $palette-gray;
  }
  .card {
    .title {
      font-size: $font-size-card-large !important;
      text-align: start;
    }
  }

  @media (max-width: 600px) {
    .card {
      .title {
        font-size: $font-size-card-mobile !important;
      }
    }
  }
</style>