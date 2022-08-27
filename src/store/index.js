import { createStore } from "vuex";
import moduleAuth from "./Auth";
import moduleHome from "./Home";
import modulePrayTimes from "./PrayTimes"
import moduleCalendar from './Calendar'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: moduleAuth,
    home: moduleHome,
    prayTimes: modulePrayTimes,
    calendar: moduleCalendar
  }
});
