import auth from "../firebase/auth";

const user = {
  namespaced: true,
  state: () => ({
    userInfo: {}
  }),
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    register: ({ commit }, data) => {
      const email = data.email;
      const password = data.password;
      return new Promise((resolve, reject) => {
        auth
          .register(email, password)
          .then((res) => {
            commit("setUserInfo", res);
            resolve(res);
          })
          .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            // reject(error.message);
          });
      });
    },
    login: ({ commit }, data) => {
      const email = data.email;
      const password = data.password;
      return new Promise((resolve, reject) => {
        auth
          .login(email, password)
          .then((res) => {
            console.log(res);
            commit("setUserInfo", res);
            resolve(res);
          })
          .catch((error) => {
            console.log(error.code);
            console.log(error.message);
          });
      });
    },
    logout: ({ commit }) => {
      return new Promise((resolve, reject) => {
        auth
          .logout()
          .then((res) => {
            commit("clearUserInfo");
            resolve(res);
          })
          .catch((error) => {
            console.log(error.code);
            console.log(error.message);
          });
      });
    }
  },
  getters: {}
};

export default user;
