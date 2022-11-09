<template>
  <router-link :to="{name: link}" class="link">
    <v-btn
      :outlined="false"
      rounded
      :dark="dark && !disabled"
      :color="color"
      x-large
      class="link-btn"
      :block="block"
      depressed
      retain-focus-on-click
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
    },
    block: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'white'
    },
    disabled: {
      type: Boolean,
      default: false
    },
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