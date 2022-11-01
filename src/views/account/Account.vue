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
                    ></v-text-field>
                    <!-- <label for="password" class="label">Last Name</label> -->
                    <v-text-field
                      v-model="lastName"
                      label="Last Name"
                      :error-messages="errors"
                      dense
                      type="text"
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
                  <form @submit.prevent="clickSaveEmail({ email })">
                    <!-- <label for="email" class="label">Email</label> -->
                    <v-text-field
                      v-model="email"
                      label="New Email"
                      :error-messages="errors"
                      required
                      dense
                      type="text"
                    ></v-text-field>
                    <ButtonRound :title="'Save'" :dark="true" :color="'black'" :disabled="!email" @callback="saveEmail"/>
                    <ButtonLink :title="'Cancel'" @callback="cancelEmail"/>
                  </form>
                </div>
                <div v-else>{{ userEmail }}</div>
              </v-col>
            </v-row>
            <v-divider></v-divider>
        </v-tab-item>
        <v-tab-item>
          <v-divider></v-divider>
            <v-row class="my-5">
              <v-col cols="6" class="setting-title">Password</v-col>
              <v-col cols="6"><ButtonLink :title="'Edit'" @callback="openEmailEdit"/></v-col>
              <v-col cols="12">********</v-col>
            </v-row>
        </v-tab-item>
      </v-tabs-items>

    </div>
  </Wrapper>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import Wrapper from '@/components/Wrapper.vue'
  import ButtonLink from '@/components/buttons/ButtonLink.vue';
  import ButtonRound from '@/components/buttons/ButtonRound.vue'

  export default {
    name: 'Account',
    components: {
      Wrapper,
      ButtonLink,
      ButtonRound
    },
    data: () => ({
      tab: null,
      showNameEdit: false,
      showEmailEdit: false,
      firstName: '',
      lastName: '',
      email: '',
      errors: ''
    }),
    computed: {
      ...mapGetters(["isLoggedIn", "userEmail", "userFirstName", "userLastName"]),
      ...mapState({
        currentLanguage: (state) => state.language.currentLanguage,
      }),
    },
    methods: {
      ...mapActions(["logout", "login", "saveName"]),
      clickLogout() {
        // this.$store.dispatch("login", {
        //   email: this.email,
        //   password: this.password
        // }).then(() => {
        //   this.$router.push("/")
        // });
        this.logout().then(() => {
          this.drawer = null
        });
      },
      openNameEdit() {
        this.showNameEdit = true
      },
      clickSaveName(name) {
        console.log('save start')
        this.saveName(name).then(() => {
          this.showNameEdit = false
        });
        
      },
      cancelName() {
        this.showNameEdit = false
      },
      openEmailEdit() {
        this.showEmailEdit = true
      },
      saveEmail() {
        console.log(this.email)
        this.showEmailEdit = false
      },
      cancelEmail() {
        this.showEmailEdit = false
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