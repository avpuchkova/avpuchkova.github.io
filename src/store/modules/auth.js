import router from '@/router'

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const SAVING = "SAVING";
const SAVE_NAME_SUCCESS = "SAVE_NAME_SUCCESS";
const SAVE_EMAIL_SUCCESS = "SAVE_EMAIL_SUCCESS";
const SAVE_PHONE_SUCCESS = "SAVE_PHONE_SUCCESS";
const SAVE_PASSWORD_SUCCESS = "SAVE_PASSWORD_SUCCESS";

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  userEmail: localStorage.getItem('email'),
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
  email: localStorage.getItem('email'),
  phone: localStorage.getItem('phone'),
  password: null,
  pending: false,
  saving: false,
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  userEmail: state => state.userEmail,
  userFirstName: state => state.firstName,
  userLastName: state => state.lastName,
  userEmail: state => state.email,
  userPhone: state => state.phone,
  userPassword: state => state.password
}

const mutations = {
  [LOGIN](state) {
    state.pending = true;
  },
  [LOGIN_SUCCESS](state, playard) {
    state.isLoggedIn = true;
    state.userEmail = playard.email;
    state.pending = false;
  },
  [LOGOUT](state) {
    state.isLoggedIn = false;
  },
  [SAVING](state) {
    state.saving = true;
  },
  [SAVE_NAME_SUCCESS](state, playard) {
    state.firstName = playard.firstName;
    state.lastName = playard.lastName;
    state.saving = false;
  },
  [SAVE_EMAIL_SUCCESS](state, playard) {
    state.email = playard
  },
  [SAVE_PHONE_SUCCESS](state, playard) {
    state.phone = playard
  },
  [SAVE_PASSWORD_SUCCESS](state, playard) {
    state.password = playard
  }
}

const actions = {
  login({
    commit
  }, creds) {
    commit(LOGIN); // show spinner
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.setItem("token", "JWT");
        localStorage.setItem("email", creds.email);
        localStorage.setItem("password", creds.password);
        commit(LOGIN_SUCCESS, creds);
        resolve();
      }, 500);
    });
  },

  logout({
    commit
  }) {
    setTimeout(() => {
      localStorage.removeItem("token");
      commit(LOGOUT);
      router.push('/');
    }, 1000);
  },

  saveName({
    commit
  }, name) {
    commit(SAVING);
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(name)
        localStorage.setItem("firstName", name.firstName);
        localStorage.setItem("lastName", name.lastName);
        commit(SAVE_NAME_SUCCESS, name);
        console.log('SAVE NAME', state.firstName, state.lastName)
        resolve();
      }, 500);
    });
  },

  saveEmail({
    commit
  }, email) {
    commit(SAVING);
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('action', email)
        localStorage.setItem("email", email);
        commit(SAVE_EMAIL_SUCCESS, email);
        console.log('SAVE email', state.email)
        resolve();
      }, 500);
    });
  },

  savePhone({
    commit
  }, phone) {
    commit(SAVING);
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.setItem("phone", phone);
        commit(SAVE_PHONE_SUCCESS, phone);
        console.log('SAVE phone', state.phone)
        resolve();
      }, 500);
    });
  },

  savePassword({
    commit
  }, password) {
    commit(SAVING);
    return new Promise(resolve => {
      setTimeout(() => {
        commit(SAVE_PASSWORD_SUCCESS, password);
        resolve();
      }, 500);
    });
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
