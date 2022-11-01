<template>
  <div>

    <buttonFlat
      @callback="drawer = !drawer"
      :title="currentLanguage === 'en' ? 'My Account' : 'Мой Аккаунт'"
      :icon="'mdi-account'"
    />

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary app
      right
      class="py-5"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-icon class="icons" large>mdi-account-circle-outline</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ userEmail }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense class="my-5">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon class="icons">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="{name: item.link}" class="link">
                {{ currentLanguage === 'en' ? item.titleEn : item.titleRu }}
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <div class="d-flex justify-center mt-5">
        <buttonFlat @callback="clickLogout" :title="currentLanguage === 'en' ? 'Logout' : 'Выйти'" />
      </div>
    </v-navigation-drawer>

  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import ButtonFlat from '@/components/buttons/ButtonFlat.vue';

  export default {
    name: 'Logout',
    components: {
      ButtonFlat
    },
    data: () => ({
      dialogLogin: false,
      email: '',
      password: '',
      errors: '',
      drawer: null,
        items: [
          { titleEn: 'My Account', titleRu: 'Мой Аккаунт', icon: 'mdi-account-circle-outline', link: 'account' },
          { titleEn: 'My Orders', titleRu: 'Мои Заказы', icon: 'mdi-clipboard-text-multiple-outline', link: 'orders' },
        ],
    }),
    computed: {
      ...mapGetters(["isLoggedIn", "userEmail"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),
      invalid() {
        return this.email.length > 0 && this.password.length > 0
      }
    },
    methods: {
      ...mapActions(["logout", "login"]),
      clickLogout() {
        // this.$store.dispatch("login", {
        //   email: this.email,
        //   password: this.password
        // }).then(() => {
        //   this.$router.push("/")
        // });
        this.logout().then(() => {
          console.log('logout')
          this.drawer = null
        });;
      },
    },
  }
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
  .top-menu-btn {
    text-transform: none;
    color: black;

    span {
      opacity: 1;
    }
  }
  .top-menu-btn::before {
   // background-color: white !important;
  }
  .top-menu-btn:hover span span{
    text-decoration: underline;
  }
  .icons {
    color: black;
  }
  .link {
    color: $black;
    text-transform: none;
    text-decoration: none;
    font-size: 0.875rem;
  }
</style>