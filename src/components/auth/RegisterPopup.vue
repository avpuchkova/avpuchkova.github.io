<template>
  <v-dialog
    v-model="isShown"
    max-width="600"
  >
      <v-card class="py-5" :loading="pending ? 'black' : false">
        <v-card-title>
          <v-row>
            <v-col cols="6"  class="text-h6">{{ currentLanguage === 'en' ? 'Create your account' : 'Создать аккаунт'}}</v-col>
            <v-col cols="6" class="text-h6 text-right">
              <v-btn text plain retain-focus-on-click class="btn-link" @click="openLoginDialog">{{ currentLanguage === 'en' ? 'Or Sign in' : 'Или войти' }}</v-btn>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text>
          <form @submit.prevent="clickRegister({ email, password })">
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
                  :title="currentLanguage === 'en' ? 'Create new account' : 'Создать аккаунт'"
                  type="submit"
                  :disabled="pending"
                >
                </ButtonRound>
            </div>
          </form>
        </v-card-text>

          <v-divider></v-divider>
          <v-spacer></v-spacer>
          
          <div class="d-flex align-center flex-column mt-5">
            <div class="mb-5 text-caption">By creating an account, I agree to the User Agreement and Privacy Policy</div>
            <div class="d-flex justify-center align-center">
              <div>Already have an account?</div>
              <buttonFlat
                @callback="openLoginDialog"
                :title="currentLanguage === 'en' ? 'Sign in' : 'Войти'"
              >
              </buttonFlat>
            </div>
          </div>

      </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import ButtonRound from '@/components/buttons/ButtonRound.vue';
import ButtonFlat from '@/components/buttons/ButtonFlat.vue';
import ButtonRoundLight from '@/components/buttons/ButtonRoundLight.vue';

export default {
name: 'RegisterPopup',
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
  ...mapGetters(["isLoggedIn", "userEmail", "pending"]),
  ...mapState({
    currentLanguage: (state) => state.language.currentLanguage
  }),
  invalid() {
    return this.email.length > 0 && this.password.length > 0
  }
},
methods: {
  ...mapActions(["login", "register"]),
  clickLogin() {
    this.login({ email: this.email, password: this.password }).then(() => {
      this.$emit('hideLoginPopup')
    });;
  },
  openLoginDialog() {
    this.$emit('showLoginPopup')
  },
  clickRegister() {
    this.register({ email: this.email, password: this.password }).then(() => {
      this.$emit('hideRegisterPopup')
    });
  },
  openRegisterDialog() {
    this.$emit('hideLoginPopup')
    this.$emit('showRegisterPopup')
  },
}
}
</script>