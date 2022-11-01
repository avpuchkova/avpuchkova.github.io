<template>
    <v-btn
      :outlined="color !== 'black'"
      rounded
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
  name: 'ButtonRoundLink',
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
      default: 'white'
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
}
</style>