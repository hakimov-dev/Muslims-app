import { createStore } from "vuex";
import moduleAuth from "./Auth";
import moduleHome from "./Home";
import modulePrayTimes from "./PrayTimes"

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: moduleAuth,
    home: moduleHome,
    prayTimes: modulePrayTimes
  }
});
