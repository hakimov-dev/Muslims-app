import axios from 'axios'

export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
       async getIpAdress(ctx){
        try{
         const IPadress = await axios.get(`${process.env.VUE_APP_IP_API}`)

         console.log(IPadress.data)
        }catch(error){
            console.log(error)
        }
       },

       async getIpInfo(ctx, payload){
        try{
         const { data } = await axios.get(`${process.env.VUE_APP_IP_INFO_API}/${payload}/json`)
        }catch(error){
          console.log(error)
        }
       }
    },
    getters: {}
}