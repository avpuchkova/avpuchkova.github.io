<template>
    <v-btn
      text 
      :rounded="rounded"
      class="button-flat"
      @click="click"
      :x-large="large"
    >
      <v-icon v-if="icon" class="icons">{{ icon }}</v-icon>
      <span class="mr-2">{{ title }}</span>
    </v-btn>
</template>

<script>
  export default {
    name: 'ButtonFlat',
    props: {
      title: {
        type: String
      },
      icon: {
        type: String
      },
      rounded: {
        type: Boolean,
        default: false
      },
      large: {
        type: Boolean,
        default: false
      }
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
    text-decoration: none;
    text-transform: none;
    opacity: 1 !important;

    &:hover span {
        text-decoration: underline;
    }
    &::before {
        opacity: 0 !important;
        background-color: transparent !important;
      }
    &:hover .icons {
        text-decoration: none;
      }
  }
</style>
