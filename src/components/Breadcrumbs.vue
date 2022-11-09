<template>
  <Wrapper>

    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :disabled="item.disabled">
            <router-link :to="{name: item.href}" :class="['breadcrumb', {'breadcrumb-active': !item.disabled}]">{{ item.text }}</router-link>         
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>

  </Wrapper>
</template>
<script>

import { mapState, mapActions, mapGetters } from 'vuex';
import Wrapper from '@/components/Wrapper.vue';

export default {
  name: 'Breadcrumbs',
  components: {
      Wrapper
  },
  props: {
    breadcrumbs: {
      type: Array
    }
  },
  data: () => ({
    
  }),
  computed: {
    ...mapGetters([
      "currentLanguageText",
      "currentLanguageIcon",
      "currentBusinessCard",
    ]),
  }
}

</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
  .breadcrumb {
    text-decoration: none;
    color: $palette-gray;
  }
  .breadcrumb-active {
      color: $black;
  }
</style>