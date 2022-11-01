const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const SAVING = "SAVING";
const SAVE_NAME_SUCCESS = "SAVE_NAME_SUCCESS"

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  userEmail: localStorage.getItem('email'),
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
  pending: false,
  saving: false,
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  userEmail: state => state.userEmail,
  userFirstName: state => state.firstName,
  userLastName: state => state.lastName
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
        console.log('LOGIN', state.isLoggedIn, creds)
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
    }, 500);
  },
  saveName({
    commit
  }, name) {
    commit(SAVING);
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.setItem("firsName", name.firstName);
        localStorage.setItem("lastName", name.lastName);
        commit(SAVE_NAME_SUCCESS, name);
        console.log('SAVE NAME', state.firstName)
        resolve();
      }, 500);
    });
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
