<template>
  <div>
    <Banner />
    <Order />
    <!-- <div class="top-tabs">
      <v-tabs v-model="tab" centered hide-slider active-class="active-class-tab">
          <v-tab v-for="(item, i) in items" :key="i" class="tabs">{{item[currentLanguage]}}</v-tab>
      </v-tabs>
    </div>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-card flat>
          <component :is="item.component"></component>
        </v-card>
      </v-tab-item>
    </v-tabs-items> -->
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Create from '@/views/create/Create.vue';
  import Order from '@/views/order/Order.vue';
  import Banner from '@/components/Banner.vue'

  export default {
    name: 'MainPage',
    components: {
      Create,
      Order,
      Banner
    },

    data: () => ({
      tab: null,
      items: [ 
        {'en': 'Order', 'ru': 'Заказать', component: 'Order'},
        {'en': 'Create', 'ru': 'Создать', component: 'Create'},
      ]
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
  // .top-tabs {
  //   //border-bottom: 1px solid $border-light;
  //   padding: 15px 0;
  //   .tabs {
  //     font-size: $font-size-card-medium !important;
  //     color: $palette-gray;
  //     text-transform: none;
  //     padding: 0 20px;
  //     background-color: none !important;

  //     &::before {
  //       background-color: none !important;
  //     }
  //   }
  //   & .active-class-tab {
  //     color: $black;
  //     font-weight: $font-weight-bolt;
  //     text-decoration: underline;

  //     &::before {
  //       background-color: none !important;
  //       opacity: 0 !important;
  //     }
  //   }
  // }
  // .v-tabs .v-tab:hover::before {
  //   opacity: 0 !important;

  //   .v-tab--active::before {
  //     opacity: 0 !important;
  //   }
  //   .v-tab--active:focus::before {
  //     opacity: 0 !important;
  //   }
  //   .v-tab:focus::before {
  //     opacity: 0 !important;
  //   }
  //   .v-tab::before{
  //     background-color: none !important;
  //   }
  // }
</style>
