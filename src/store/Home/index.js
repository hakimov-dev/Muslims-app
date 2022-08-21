import axios from 'axios'

export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
     async getAbouts(ctx){
       try{
       const list = await axios.get(`${process.env.VUE_APP_QURAN_API}`) 
       
       ctx.commit('setSurahList', list.data.data.surah)
       }catch(error){
        console.log(error)
       }
        }
    },
    getters: {}
}