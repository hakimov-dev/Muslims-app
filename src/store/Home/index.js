import axios from "axios";

export default {
  namespaced: true,
  state: {
    surahList: null,
    activaSurahID: 0,
    playerContent: null
  },
  mutations: {
    setSurahList(state, payload) {
      state.surahList = payload;
    },
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
          const surah = await axios.get(`${process.env.VUE_APP_SURAH_BY_ID_API}/${id}/ar.alafasy`)
           
          console.log(surah)
        }catch(error){
          console.log(error)
        }
    }
  },
  getters: {}
};
