import { createStore } from "vuex";
import moduleAuth from "./Auth";
import moduleHome from "./Home";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: moduleAuth,
    home: moduleHome
  }
});
