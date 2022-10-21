<template>
  <div>
    <v-tabs v-model="tab" centered fixed-tabs>
        <v-tab v-for="(item, i) in items" :key="i" class="tabs">{{item[currentLanguage]}}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-card flat>
          <component :is="item.component"></component>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Create from '@/views/create/Create.vue';
  import Templates from '@/views/templates/Templates.vue'
  import Order from '@/views/order/Order.vue';

  export default {
    name: 'MainPage',
    components: {
      Create,
      Templates,
      Order
    },

    data: () => ({
      tab: null,
      items: [
        {'en': 'Create', 'ru': 'Создать', component: 'Create'},
        {'en': 'Templates', 'ru': 'Библиотека', component: 'Templates'}, 
        {'en': 'Order', 'ru': 'Заказать', component: 'Order'}],
    }),
    computed: {
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),
    },
    methods: {

    },
  };
</script>

<style lang="scss" scoped>
  @import '@/styles/_variables';
  .tabs {
    font-size: $font-size-card-large !important;
  }
</style>
