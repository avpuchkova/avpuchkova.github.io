<template>
  <router-link :to="{name: link}" class="link">
    <v-btn
      outlined
      rounded
      x-large
      class="link-btn"
    >
      {{ title }}
    </v-btn>
  </router-link>
</template>

<script>
export default {
  name: 'ButtonRoundLink',
  props: {
    link: {
      type: String,
      default: 'main'
    },
    title: {
      type: String
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
.link {
  text-decoration: none;
}
.link-btn {
  text-transform: none;
}
</style>