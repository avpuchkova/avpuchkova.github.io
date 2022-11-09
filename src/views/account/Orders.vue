<template>
    <Wrapper> 
    <div class="text-center my-5">
      <h2 v-if="currentLanguage === 'en'">Your Order History</h2>
      <h2 v-else>История ваших заказов</h2>
    </div>
    <div class="px-5 orders-box">
      <div v-if="!orders" class="empty-orders">
        <div v-if="currentLanguage === 'en'">No orders yet – when you've placed your first order, you'll see it here</div>
        <div v-else>У вас пока нет истории заказов – когда вы сделаете первый заказ, вы увидите его здесь</div>
        <div class="text-center my-5">
          <ButtonRoundLink
            :title="currentLanguage === 'en' ? 'Continue shopping' : 'Продолжить покупки'"
            :link="'order'"
            :dark="true"
            :color="'black'"
          />
        </div>
      </div>
      <div v-else>
        <v-data-table
          :headers="headers"
          :items="orders"
          single-expand
          :expanded.sync="expanded"
          item-key="id"
          show-expand
          class='row-height-50'
        >
          <template v-slot:item.status="{ item }">
            <v-chip
              :color="getColor(item.statusId)"
              dark
            >
              {{ item.status }}
            </v-chip>
          </template>
          <template v-slot:item.totalItems="{ item }">
            {{item.items.length}} item
          </template>
          <template v-slot:item.price="{ item }">
            &euro; {{ priceFormat(item.price) }}
          </template>
          <template v-slot:expanded-item="{ headers, item }" class="test">
            <td :colspan="headers.length" class="py-5">
              <v-row v-for="(item, i) in item.items" :key="i" class="border-bottom">
                <v-spacer></v-spacer>
                <v-col cols="2">
                  <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="30"
                  max-width="50"
                  src="https://picsum.photos/id/11/500/300"
                ></v-img></v-col>
                <v-col cols="7" class="my-auto">{{ item.title }}</v-col>
                <v-col cols="2" class="my-auto">&euro; {{ priceFormat(item.price) }}</v-col>
              </v-row>   
            </td>
          </template>
        </v-data-table>
      </div>
    </div>
    </Wrapper>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Wrapper from '@/components/Wrapper.vue';
  import ButtonRoundLink from '@/components/buttons/ButtonRoundLink.vue';

  export default {
    name: 'Orders',
    components: {
      Wrapper,
      ButtonRoundLink
    },
    data: () => ({
      orders: [
        {id: 1, date: '03.11.2022', items: [{id: 11, title: 'Business card 12', price: 10.00}, {id: 12, title: 'Business card 11', price: 5.15}, {id: 13, title: 'Presentation Folder', price: 10.00}], status: 'in progress', statusId: 1, price: 25.15,  details: []},
        {id: 2, date: '03.11.2022', items: [{id: 14, title: 'Business card 13', price: 35.45}], status: 'wait payment', statusId: 2, price: 35.45, details: []},
        {id: 3, date: '03.11.2022', items: [{id: 15, title:'Presentation Folder', price: 105.00}], status: 'success', statusId: 3, price: 105.00, details: []}       
      ],
      headers: [
        {text: 'Date order', value: 'date'},
        {text: 'Order items', value: 'totalItems'},
        {text: 'Total Price', value: 'price'},
        {text: 'Status', value: 'status'},
        { text: 'Details', value: 'data-table-expand' }
      ],
      expanded: [],
    }),
    computed: {
      ...mapGetters(["isLoggedIn", "userEmail"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),

    },
    methods: {
      ...mapActions(["logout", "login"]),
      clickLogout() {
        this.logout().then(() => {

        });;
      },
      getColor(statusId) {
        switch (statusId) {
          case 1:
            return 'gray';
          case 2:
            return 'red';
          case 3:
            return 'green';
          default:
            return 'black'
        }
      },
      priceFormat(num) {
        return num.toFixed(2)
      }
    },
  }
</script>

<style lang="scss">
@import '@/styles/_variables';
 
 .orders-box {
  margin: 0 7rem;
  .empty-orders {
    text-align: center;
  }
  $data-table-expanded-content-box-shadow: none;
  .border-bottom {
    border-bottom: 1px solid $border-light;
  }
 }

 .v-data-table > .v-data-table__wrapper tbody tr.v-data-table__expanded__content {
    box-shadow: none !important;
  }
  .v-data-table.row-height-50 td {
    height: 100px !important;
    font-size: 1.2rem !important;
  }
  .v-data-table-header tr th {
    font-size: $font-size-base !important;
    font-weight: $font-weight-semibold;
    color: $black !important;
  }
</style>