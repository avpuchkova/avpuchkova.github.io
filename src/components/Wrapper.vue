<template>
  <v-card

    class="mx-auto wrapper"
    flat
    >
    <slot>

  	</slot>
  </v-card>
</template>

<script>
  export default {
    name: 'Wrapper',

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
  .wrapper {
    max-width: 80%;
  }

  @media (max-width: 960px) {
    .wrapper {
      max-width: 100%;
    }
  }
</style>
