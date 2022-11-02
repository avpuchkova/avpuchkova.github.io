<template>
  <Wrapper> 
    <div class="text-center my-5">
      <h2>My Cart</h2>
    </div>
    <div class="px-5 settings-box">
      <div v-if="!totalItems" class="empty-cart">
        <div v-if="currentLanguage === 'en'">Your cart is empty. You can see <ButtonLink :title="'Order History'" />.</div>
        <div v-else>Ваша корзина пуста. Вы можете посмотреть свою <ButtonLink :title="'Историю Заказов'" />.</div>
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
        <v-row>
          <v-col cols="12" sm="6" class="pr-5">
            <v-divider></v-divider>
            <v-row v-for="item in updatedItems" :key="item.id" class="mt-3 align-stretch">
              <v-col cols="4">
                <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="150"
                  max-width="250"
                  src="https://picsum.photos/id/11/500/300"
                ></v-img>
              </v-col>
              <v-col cols="8" class="item">
                <div class="d-flex flex-row justify-space-between">
                  <div class="d-flex flex-column">
                    <div class="item-title">{{ item.title }}</div>
                    <div class="item-price">&euro; {{ item.price.toFixed(2) }}</div>
                    <div></div>
                  </div>
                  <div><ButtonLink :title="'Remove'" @callback="removeItem(item.id)"/></div>
                </div>        
              </v-col>
            </v-row>
            <v-row class="mt-3 justify-end">
              <v-col cols="8">
                <div class="d-flex flex-row justify-space-between">
                  <div class="text-h6">Total price:</div>
                  <div class="text-h6 font-weight-bold">&euro; {{totalPrice.toFixed(2)}}</div>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" class="pl-5">
            <v-card outlined color="#f8f8f8" flat tile class="pa-5">
              <div class="text-h6 mb-5">This order</div>
              <v-divider></v-divider>
              <div class="mb-5">
                <v-row v-for="item in updatedItems" :key="item.id" class="mt-3">
                  <v-col>{{ item.title }}</v-col>
                  <v-col class="text-end">&euro; {{ item.price.toFixed(2) }}</v-col>
                </v-row>
              </div>
              <v-divider></v-divider>
              <v-row class="mt-3 mb-5 d-flex justify-space-between">
                <v-col class="subtitle-2">Subtotal</v-col>
                <v-col class="text-end font-weight-bold">&euro; {{ totalPrice.toFixed(2) }}</v-col>
              </v-row>
              <div class="text-center my-5">
                <ButtonRoundLink
                  :title="currentLanguage === 'en' ? 'Checkout' : 'Оформить'"
                  :link="'payment'"
                  :block="true"
                  :dark="true"
                  :color="'black'"
                />
              </div>
              <div class="text-center my-5">
                <ButtonRoundLink
                  :title="currentLanguage === 'en' ? 'Continue shopping' : 'Продолжить покупки'"
                  :link="'order'"
                  :block="true"
                />
              </div>
            </v-card>
          </v-col>
        </v-row>       
      </div>
    </div>
  </Wrapper>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Wrapper from '@/components/Wrapper.vue';
  import ButtonFlat from '@/components/buttons/ButtonFlat.vue';
  import ButtonLink from '@/components/buttons/ButtonLink.vue';
  import ButtonRoundLink from '@/components/buttons/ButtonRoundLink.vue';

  export default {
    name: 'Cart',
    components: {
      Wrapper,
      ButtonFlat,
      ButtonLink,
      ButtonRoundLink
    },
    data: () => ({
      // items: [
      //   {id: 1, title: 'Business card 1', img: '', price: 25.00},
      //   {id: 2, title: 'Business card 2', img: '', price: 25.00},
      //   {id: 3, title: 'Presentation Folder', img: '', price: 50.00}
      // ]
    }),
    computed: {
      ...mapGetters(["isLoggedIn", "updatedItems", "totalPrice", "totalItems"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),
    },
    methods: {
      ...mapActions(["deleteItem"]),
      removeItem(id) {
        this.deleteItem(id).then(() => {         
        });;
      },
    },
  }
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';

.settings-box {
  margin: 0 0;

  .empty-cart {
    font-size: $font-size-large;
    text-align: center;
    margin-bottom: 5rem;
  }

  .item {
    border-bottom: 1px $border-light solid;

    &-title {
      font-weight: $font-weight-bolt;
    }
    &-price {
      color: $palette-5;
    }
  }
}
 
</style>