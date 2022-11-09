<template>
  <div>
    <v-btn text plain color="black" class="top-menu-btn" @click.stop="clickLoginBtn">
      <v-icon>mdi-account</v-icon>
      <span class="mr-2">{{ currentLanguage === 'en' ? 'Login' : 'Войти' }}</span>
    </v-btn>

    <LoginPopup
      :isShown="dialogLogin"
      @showRegisterPopup="showRegisterPopup"
      @showRecoverPopup="showRecoverPopup"
    />

    <RegisterPopup
      :isShown="dialogRegister"
      @showLoginPopup="showLoginPopup"
      @hideRegisterPopup="hideRegisterPopup"
    />

    <RecoverPopup
      :isShown="dialoForgotPassword"
      @showLoginPopup="showLoginPopup"
      @hideRecoverPopup="hideRecoverPopup"
    />

    <ConformPopup :isShown="loading" @clickConfirm="clickConfirm" />
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import LoginPopup from '@/components/auth/LoginPopup.vue';
  import RegisterPopup from '@/components/auth/RegisterPopup.vue';
  import RecoverPopup from '@/components/auth/RecoverPopup.vue';
  import ConformPopup from '@/components/auth/ConformPopup.vue'

  export default {
    name: 'Login',
    components: {
      LoginPopup,
      RegisterPopup,
      RecoverPopup,
      ConformPopup
    },
    data: () => ({
      dialogLogin: false,
      dialogRegister: false,
      dialoForgotPassword: false,
      registerConfirm: false,
      email: '',
      password: '',
      errors: ''
    }),
    computed: {
      ...mapGetters(["isLoggedIn", "userEmail", "pending", "loading"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage
      }),
      invalid() {
        return this.email.length > 0 && this.password.length > 0
      }
    },
    methods: {
      ...mapActions(["login", "register", "recoverPassword", "confirm"]),
      clickLoginBtn() {
        this.dialogLogin = true;
      },
      hideLoginPopup() {
        this.dialogLogin = false;
      },
      showRegisterPopup() {
        this.dialogLogin = false;
        this.dialogRegister = true;
      },
      hideRegisterPopup() {
        this.dialogRegister = false;
      },
      showLoginPopup() {
        this.dialogRegister = false;
        this.dialoForgotPassword = false;
        this.dialogLogin = true;
      },
      hideRecoverPopup() {
        this.dialoForgotPassword = false
      },
      showRecoverPopup() {
        this.dialogLogin = false;
        this.dialogRegister = false;
        this.dialoForgotPassword = true;
      },
      clickConfirm() {
        this.confirm();
      }
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
  .label {
    color: black;
  }
  .btn-link {
    color: black !important;
    text-transform: none;
    font-size: $font-size-large;

    &:hover {
      text-decoration: underline;
    }
  }
</style>