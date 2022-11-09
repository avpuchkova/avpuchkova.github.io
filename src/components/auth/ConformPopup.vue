<template>
  <v-dialog
    v-model="isShown"
    max-width="600"
  >
    <v-card class="py-5">
      <v-card-title>
        Please check your email
      </v-card-title>

      <v-card-text>
        <div class="d-flex align-center flex-column mt-5">
          <div class="d-flex justify-center align-center">
            <buttonRound
              @callback="clickConfirm"
              :title="'OK'"
              :dark="true"
              :color="'black'"
            >
            </buttonRound>
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
  clickConfirm() {
    this.$emit('clickConfirm')
  }
  }
}
</script>