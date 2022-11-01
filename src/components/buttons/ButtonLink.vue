<template>
  <v-btn
    text 
    class="button-flat"
    @click="click"
  >
    <span class="mr-2">{{ title }}</span>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: {
    title: {
      type: String
    },
  },
  methods: {
    click() {
      this.$emit('callback');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
.button-flat {
  color: $black !important;
  text-transform: none;
  opacity: 1 !important;
  font-size: 1.125rem;
  text-decoration: underline;

  &:hover span {
      text-decoration: underline;
      color: $palette-gray;
  }
  &::before {
      opacity: 0 !important;
      background-color: transparent !important;
    }
}
</style>
