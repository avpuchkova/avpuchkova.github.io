<template>
  <div>
    
    <v-btn text plain color="black" class="top-menu-btn" @click.stop="dialogLogin = true">
      <v-icon>mdi-account</v-icon>
      <span class="mr-2">{{ currentLanguage === 'en' ? 'Login' : 'Войти' }}</span>
    </v-btn>
   
    <v-dialog
      v-model="dialogLogin"
      max-width="600"
    >
      <v-card class="py-5">
        <v-card-title>
          <v-row>
            <v-col cols="6"  class="text-h6">Sign in to your account</v-col>
            <v-col cols="6" class="text-right">
              <v-btn link plain color="primary">Register</v-btn>
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

            <v-btn
              class="mb-4 wide-btn"
              type="submit"
              
              large dark block
              
            >
              Sing in
            </v-btn>
          </form>
          <div class="text-center">
            <v-btn
              class="mb-3 link-btn"
              :disabled="invalid"
              text plain
            >
              Forgot your password?
            </v-btn>
          </div>
        </v-card-text>

          <v-divider></v-divider>
          <v-spacer></v-spacer>
          
          <div class="d-flex align-center flex-column mt-5">
            <div class="mb-5 text-caption">By signing in, I agree to the User Agreement and Privacy Policy</div>
            <div class="d-flex justify-center align-center">
              <div>Don't have an account?</div>
              <v-btn
                class="link-btn"
                text link plain retain-focus-on-click
                @click="dialogLogin = false"
              >
                Create new account
              </v-btn>
            </div>
          </div>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Login',
    components: {

    },
    data: () => ({
      dialogLogin: false,
      email: '',
      password: '',
      errors: ''
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
      ...mapActions(["login"]),
      clickLogin() {
        // this.$store.dispatch("login", {
        //   email: this.email,
        //   password: this.password
        // }).then(() => {
        //   this.$router.push("/")
        // });
        this.login({ email: this.email, password: this.password }).then(() => {
          this.dialogLogin = false
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
  .label {
    color: black;
  }
  .wide-btn {
    background-color: $palette-1 !important;
    text-transform: none;
  }
  .link-btn {
    color: $palette-1;
    text-transform: none;
    font-size: 0.875rem;
  }
</style>