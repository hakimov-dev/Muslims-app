import axios from "axios";

export default {
  namespaced: true,
  state: {
    inputDate: "",
    calendarData: null
  },
  mutations: {
    setCalendarData(state, data) {
      state.calendarData = data;
    }
  },
  actions: {
    async getCalendar(ctx, date) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_PRAY_TIMES_API}${$cookies.get(
            "user_city"
          )}&country=${$cookies.get("user_country")}=2&month=${
            date.month
          }&year=${date.year}`
        );

        ctx.commit("setCalendarData", data.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {}
};
