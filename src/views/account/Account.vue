<template>
  <Wrapper> 
    <div class="text-center my-5">
      <h2>Account Settings</h2>
    </div>
    <div class="px-5 settings-box">
      <v-tabs v-model="tab" active-class="active-class-tab" color="black">
          <v-tab class="tabs">{{currentLanguage === "en" ? "Personal Info" : "Персональная информация"}}</v-tab>
          <v-tab class="tabs">{{currentLanguage === "en" ? "Security" : "Приватность"}}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-divider></v-divider>
            <v-row class="my-5">
              <v-col cols="6" class="setting-title">Name</v-col>
              <v-col cols="6"><ButtonLink :title="'Edit'" @callback="openNameEdit"/></v-col>
              <v-col cols="12">
                <div v-if="showNameEdit">
                  <form @submit.prevent="clickSaveName({ firstName, lastName })">
                    <!-- <label for="email" class="label">First Name</label> -->
                    <v-text-field
                      v-model="firstName"
                      label="First Name"
                      :error-messages="errors"
                      required
                      dense
                      type="text"
                      class="mb-5"
                      :placeholder="userFirstName"
                    ></v-text-field>
                    <!-- <label for="password" class="label">Last Name</label> -->
                    <v-text-field
                      v-model="lastName"
                      label="Last Name"
                      :error-messages="errors"
                      dense
                      type="text"
                      class="mb-5"
                      :placeholder="userLastName"
                    ></v-text-field>

                    <ButtonRound :title="'Save'" :dark="true" :color="'black'" :disabled="!firstName" type="submit"/>
                    <ButtonLink :title="'Cancel'" @callback="cancelName"/>
                  </form>
                </div>
                <div v-else>{{ userFirstName }} {{ userLastName }}</div>
              </v-col>
            </v-row>

            <v-divider></v-divider>
            <v-row class="my-5">
              <v-col cols="6" class="setting-title">Email</v-col>
              <v-col cols="6"><ButtonLink :title="'Edit'" @callback="openEmailEdit"/></v-col>
              <v-col cols="12">
                <div v-if="showEmailEdit">
                  <form @submit.prevent="clickSaveEmail(email)">
                    <!-- <label for="email" class="label">Email</label> -->
                    <v-text-field
                      v-model="email"
                      label="Email"
                      :error-messages="errors"
                      required
                      dense
                      type="text"
                      class="mb-5"
                    ></v-text-field>
                    <ButtonRound :title="'Save'" :dark="true" :color="'black'" :disabled="!email" type="submit"/>
                    <ButtonLink :title="'Cancel'" @callback="cancelEmail"/>
                  </form>
                </div>
                <div v-else>{{ userEmail }}</div>
              </v-col>
            </v-row>

            <v-divider></v-divider>
            <v-row class="my-5">
              <v-col cols="6" class="setting-title">{{ currentLanguage === 'en' ? 'Phone Number' : 'Телефон' }}</v-col>
              <v-col cols="6"><ButtonLink :title="'Edit'" @callback="openPhoneEdit"/></v-col>
              <v-col cols="12">
                <div v-if="showPhoneEdit">
                  <form @submit.prevent="clickSavePhone(phone)">
                    <!-- <label for="email" class="label">Email</label> -->
                    <v-text-field
                      v-model="phone"
                      :label="currentLanguage === 'en' ? 'Phone Number' : 'Телефон'"
                      :error-messages="errors"
                      required
                      dense
                      type="text"
                      class="mb-5"
                    ></v-text-field>
                    <ButtonRound :title="'Save'" :dark="true" :color="'black'" :disabled="!phone" type="submit"/>
                    <ButtonLink :title="'Cancel'" @callback="cancelPhone"/>
                  </form>
                </div>
                <div v-else>{{ userPhone }}</div>
              </v-col>
            </v-row>
            
        </v-tab-item>
        <v-tab-item>
          <v-divider></v-divider>
            <v-row class="my-5">
              <v-col cols="6" class="setting-title">{{ currentLanguage === 'en' ? 'Password' : 'Пароль' }}</v-col>
              <v-col cols="6"><ButtonLink :title="'Edit'" @callback="openPasswordEdit"/></v-col>
              <v-col cols="12">
                <div v-if="showPasswordEdit">
                  <form @submit.prevent="clickSavePassword(phone)">
                    <!-- <label for="email" class="label">Email</label> -->
                    <v-text-field
                      v-model="password"
                      :label="currentLanguage === 'en' ? 'Password' : 'Пароль'"
                      :error-messages="errors"
                      required
                      dense
                      :type="showPassword ? 'text' : 'password'"
                      class="mb-5"
                      :append-icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                      @click:append="showPassword = !showPassword"
                    >
                    </v-text-field>
                    <ButtonRound :title="'Save'" :dark="true" :color="'black'" :disabled="!password" type="submit"/>
                    <ButtonLink :title="'Cancel'" @callback="cancelPassword"/>
                  </form>
                </div>
                <div v-else>********</div>
              </v-col>
            </v-row>

            <v-divider></v-divider>
            <v-row class="my-5">
              <v-col cols="6" class="setting-title">
                <ButtonRound @callback="clickLogout" :dark="true" :color="'black'" :title="currentLanguage === 'en' ? 'Logout' : 'Выйти'" />
              </v-col>
            </v-row>
        </v-tab-item>
      </v-tabs-items>

    </div>
  </Wrapper>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Wrapper from '@/components/Wrapper.vue';
  import ButtonLink from '@/components/buttons/ButtonLink.vue';
  import ButtonRound from '@/components/buttons/ButtonRound.vue';
  import ButtonFlat from '@/components/buttons/ButtonFlat.vue';

  export default {
    name: 'Account',
    components: {
      Wrapper,
      ButtonLink,
      ButtonRound,
      ButtonFlat
    },
    data: () => ({
      tab: null,
      showNameEdit: false,
      showEmailEdit: false,
      showPhoneEdit: false,
      showPasswordEdit: false,
      showPassword: false,
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      email: localStorage.getItem('email'),
      phone: localStorage.getItem('phone'),
      password: null,
      errors: ''
    }),
    computed: {
      ...mapGetters(["isLoggedIn", "userEmail", "userFirstName", "userLastName", "userPhone"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),
    },
    methods: {
      ...mapActions(["logout", "login", "saveName", "savePhone", "saveEmail", "savePassword"]),
      clickLogout() {
        this.logout().then(() => {

        });
      },
      openNameEdit() {
        this.showPhoneEdit = false
        this.showEmailEdit = false
        this.showPasswordEdit = false
        this.showNameEdit = true
      },
      clickSaveName(name) {
        this.saveName(name).then(() => {
          this.showNameEdit = false
        });
      },
      cancelName() {
        this.showNameEdit = false
      },
      openEmailEdit() {
        this.showPhoneEdit = false
        this.showNameEdit = false
        this.showPasswordEdit = false
        this.showEmailEdit = true
      },
      clickSaveEmail(email) {
        this.saveEmail(email).then(() => {
          this.showEmailEdit = false
        });
      },
      cancelEmail() {
        this.showEmailEdit = false
      },
      openPhoneEdit() {
        this.showNameEdit = false
        this.showEmailEdit = false
        this.showPasswordEdit = false
        this.showPhoneEdit = true
      },
      clickSavePhone(phone) {
        this.savePhone(phone).then(() => {
          this.showPhoneEdit = false
        });      
      },
      cancelPhone() {
        this.showPhoneEdit = false
      },
      openPasswordEdit() {
        this.showNameEdit = false
        this.showEmailEdit = false
        this.showPhoneEdit = false
        this.showPasswordEdit = true
      },
      clickSavePassword(password) {
        this.savePassword(password).then(() => {
          this.showPasswordEdit = false
        });      
      },
      cancelPassword() {
        this.showPasswordEdit = false
      },
    },
  }
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';

.tabs {
  text-transform: none;
}
.settings-box {
  margin: 0 7rem;

  .setting-title {
    font-weight: $font-weight-bolt;
  }
}
 
</style>