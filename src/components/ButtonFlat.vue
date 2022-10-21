<template>
    <v-btn
      text
      :rounded="rounded"
      class="button-flat"
      @click="click"
    >
     <slot></slot>
    </v-btn>
</template>

<script>
  export default {
    name: 'ButtonFlat',
    props: {
      rounded: {
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
    text-decoration: underline;
  }
</style>