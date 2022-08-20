import { createStore } from "vuex";

export default createStore({
  state: {
    searchValue: '',
    searchResult: []
  },
  getters: {},
  mutations: {
    search(state, payload){
    let allLinks = [
      { title: "Home", link: "/" },
      { title: "Pray times", link: "/pray-time" },
      { title: "Muslims calendar", link: "/muslims-calendar" },
      { title: "Settings", link: "/user-settings" },
      { title: "Update password", link: "/update-passwords" },
      { title: "Favorite", link: "/favorite" }
    ]

      const search = allLinks[allLinks.findIndex(x => x.title == state.searchValue.trim())]
      
      state.searchResult = []
      state.searchResult.push(search)
  }},
  actions: {},
  modules: {}
});
