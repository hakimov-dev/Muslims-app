import axios from 'axios'

export default {
    namespaced: true,
    state: {
        surahList: null,
        author: null,
    },
    mutations: {
        setSurahList(state, payload){
         state.surahList = payload
        },

        setEdition(state, payload){
         state.author = payload
        }
    },
    actions: {
     async getAbouts(ctx){
       try{
       const list = await axios.get(`${process.env.VUE_APP_QURAN_API}`) 
       
       ctx.commit('setSurahList',  list.data.data.surahs)
       ctx.commit('setEdition', list.data.data.edition)
       }catch(error){
        console.log(error)
       }
        }
    },
    getters: {}
}