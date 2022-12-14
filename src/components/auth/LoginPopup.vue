<template>
  <v-dialog
    v-model="isShown"
    width="unset"
    class="pa-md-5"
  >
    <v-card class="px-md-5" :loading="pending ? 'black' : false">
      <v-card-title>
        <v-row class="d-flex flex-column flex-md-row">
          <v-col cols="12" md="8" class="text-h6 order-md-first">Sign in to your account</v-col>
          <v-col cols="12" md="4" class="text-h6 text-right order-first">
            <v-btn text plain retain-focus-on-click class="btn-link" @click="openRegisterDialog">
              {{ currentLanguage === 'en' ? 'Or register' : 'Регистрация' }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text>
        <form @submit.prevent="clickLogin({ email, password })">
          <label for="email" class="label">Email Address:</label>
          <v-text-field
            v-model="email"
            :error-messages="errors"
            required
            outlined
            dense
            type="text"
          ></v-text-field>
          <label for="password" class="label">Password:</label>
          <v-text-field
            v-model="password"
            :error-messages="errors"
            required
            outlined
            dense
            type="password"
          ></v-text-field>
          <div class="text-center mt-5">
            <ButtonRound
                :dark="true"
                :color="'black'"
                :title="currentLanguage === 'en' ? 'Sing in' : 'Войти'"
                type="submit"
                :disabled="pending"
              >
              </ButtonRound>
          </div>
        </form>
        <div class="text-center py-5">
          <buttonFlat @callback="openForgotPassword" :title="currentLanguage === 'en' ? 'Forgot your password?' : 'Забыли пароль?'" />
        </div>
        <v-divider></v-divider>
        <v-spacer></v-spacer>
        
        <div class="d-flex align-center flex-column mt-5">
          <div class="mb-5 text-caption d-flex flex-column flex-md-row align-center justify-center">
            <span>
              By signing in, I agree to the
            </span>
            <span>
              <a>User Agreement</a>  
              and 
              <a>Privacy Policy</a>
            </span>
          </div>
          <div class="d-flex flex-column flex-md-row justify-center align-center bottom-btns">
            <div>Don't have an account?</div>
            <buttonFlat
              @callback="openRegisterDialog"
              :title="currentLanguage === 'en' ? 'Create new account' : 'Создать аккаунт'"
            >
            </buttonFlat>
          </div>
        </div>
      </v-card-text>



    </v-card>
  </v-dialog>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import ButtonRound from '@/components/buttons/ButtonRound.vue';
  import ButtonFlat from '@/components/buttons/ButtonFlat.vue';
  import ButtonRoundLight from '@/components/buttons/ButtonRoundLight.vue';

  export default {
    name: 'LoginPopup',
    components: {
      ButtonRound,
      ButtonFlat,
      ButtonRoundLight
    },
    props: {
      isShown: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
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
      ...mapActions(["login"]),
      clickLogin() {
        this.login({ email: this.email, password: this.password }).then(() => {
          this.$emit('hideLoginPopup')
        });;
      },
      openForgotPassword() {
        this.$emit('showRecoverPopup')
      },
      openRegisterDialog() {
        this.$emit('showRegisterPopup')
      },
    }
  }
</script>

<style lang="scss">
@import '@/styles/_variables';



.bottom-btns {
  margin: 0 !important;
}

  @media (max-width: 960px) {
    .bottom-btns {
      font-size: $font-size-small;
      .v-btn {
        font-size: $font-size-small;
      }
    }
    .v-dialog__content {
      max-width: 70%;
      box-sizing: border-box;
    }
  }
</style>