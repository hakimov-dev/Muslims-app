import axios from "axios";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    prayTimes: null,
    cityName: ""
  },
  mutations: {
    setPrayTimes(state, payload) {
      (state.prayTimes = payload),
        (state.cityName = `${$cookies.get("user_country")} | ${$cookies.get(
          "user_city"
        )}`);
    }
  },
  actions: {
    async getIpAdress(ctx) {
      try {
        const IPadress = await axios.get(`${process.env.VUE_APP_IP_API}`);

        ctx.dispatch("getIpInfo", IPadress.data.ip || IPadress.data);
      } catch (error) {
        console.log(error);
      }
    },

    async getIpInfo(ctx, payload) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_IP_INFO_API}/${payload}/json`
        );

        $cookies
          .set("user_country", data.country_name)
          .set("user_city", data.city)
          .set("user_timezone", data.timezone);

        if (router.currentRoute.value.name == "pray-time")
          ctx.dispatch("getPrayTimes");
      } catch (error) {
        console.log(error);
      }
    },

    async getPrayTimes(ctx) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_PRAY_TIMES_API}${$cookies.get(
            "user_city"
          )}&country=${$cookies.get("user_country")}=2&month=${
            new Date().getMonth() + 1
          }&year=${new Date().getFullYear()}`
        );

        const times = data.data[new Date().getDate() - 1].timings;

        ctx.commit("setPrayTimes", [
          { title: "Fajr", time: String(times["Fajr"]) },
          { title: "Sunrise", time: String(times["Sunrise"]) },
          { title: "Dhuhr", time: String(times["Dhuhr"]) },
          { title: "Asr", time: String(times["Asr"]) },
          { title: "Maghrib", time: String(times["Maghrib"]) },
          { title: "Isha", time: String(times["Isha"]) }
        ]);
      } catch (error) {
        console.log(error);
      }
    },

    async searchCity(ctx, value) {
      try {
        if (value !== "") {
          // const { data } = await axios.get(`${process.env.VUE_APP_PRAY_TIMES_API}${value.split(" ")[0]}&country=${value.split(" ")[0]}=2&month=${new Date().getMonth() + 1}&year=${new Date().getFullYear()}`)
          // const times = data.data[new Date().getDate() - 1].timings
          // console.log(times)
        } else alert("Input is emty");
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {}
};
