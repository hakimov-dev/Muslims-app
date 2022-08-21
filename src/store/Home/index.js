import axios from "axios";

export default {
  namespaced: true,
  state: {
    surahList: null,
    activaSurahID: 0
  },
  mutations: {
    setSurahList(state, payload) {
      state.surahList = payload;
    },

    setEdition(state, payload) {
      state.author = payload;
    }
  },
  actions: {
    async getAbouts(ctx) {
      try {
        const list = await axios.get(`${process.env.VUE_APP_QURAN_API}`);

        ctx.commit("setSurahList", list.data.data);
      } catch (error) {
        console.log(error);
      }
    },

    async getSurahById(ctx, id){
        try{
          const surah = await axios.get(`{${process.env.VUE_APP_SURAH_BY_ID_API}/${id}/ar.alafasy`)
        }catch(error){
          console.log(error)
        }
    }
  },
  getters: {}
};
