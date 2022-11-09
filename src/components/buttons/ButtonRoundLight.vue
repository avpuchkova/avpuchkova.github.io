<template>
  <v-btn
    outlined
    rounded
    depressed
    :dark="dark && !disabled"
    :color="color"
    x-large
    @click="click"
    class="link-btn"
    :disabled="disabled"
  >
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonRoundLight',
  props: {
    link: {
      type: String,
      default: 'main'
    },
    title: {
      type: String
    },
    dark: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'black'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click() {
      this.$emit('callback')
    }
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
    padding: 0 30px !important;
  }
</style>