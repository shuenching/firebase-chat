import Vuex from "vuex";
import Vue from "vue";
import user from "./user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user
  }
});

export default store;
