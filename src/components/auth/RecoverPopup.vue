<template>
  <v-dialog
    v-model="isShown"
    max-width="600"
  >
    <v-card class="py-5" :loading="pending ? 'black' : false">
      <v-card-title>
        <v-row>
          <v-col cols="6"  class="text-h6">{{ currentLanguage === 'en' ? 'Forgot your password?' : 'Забыли пароль?'}}</v-col>
          <v-col cols="6" class="text-h6 text-right">
            <v-btn text plain retain-focus-on-click class="btn-link" @click="openLoginDialog">
              {{ currentLanguage === 'en' ? 'Sign in' : 'Войти' }}
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text>
        <form @submit.prevent="clickSentPassword({ email })">
          <label for="email" class="label">Email Address:</label>
          <v-text-field
            v-model="email"
            :error-messages="errors"
            required
            outlined
            dense
            type="text"
          ></v-text-field>
          <div class="text-center mt-5">
            <ButtonRound
                :dark="true"
                :color="'black'"
                :title="currentLanguage === 'en' ? 'Sent password' : 'Выслать пароль'"
                type="submit"
              >
              </ButtonRound>
          </div>
        </form>
      </v-card-text>

        <v-divider></v-divider>
        <v-spacer></v-spacer>
        
        <div class="d-flex align-center flex-column mt-5">
          <div class="d-flex justify-center align-center">
            <div>{{ currentLanguage === 'en' ? 'Do You remember password?' : 'Вспомнили пароль?'}}</div>
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
  ...mapGetters(["isLoggedIn", "userEmail", "pending", "loading"]),
  ...mapState({
    currentLanguage: (state) => state.language.currentLanguage
  }),
  invalid() {
    return this.email.length > 0 && this.password.length > 0
  }
},
methods: {
  ...mapActions(["recoverPassword"]),
  openLoginDialog() {
    this.$emit('showLoginPopup')
  },
  clickSentPassword () {
      this.recoverPassword({ email: this.email }).then(() => {
        this.$emit('hideRecoverPopup')
      });
    },
  }
}
</script>