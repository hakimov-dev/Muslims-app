import axios from 'axios'

export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
       async getIpAdress(ctx){
        try{
         const IPadress = await axios.get(`${process.env.VUE_APP_IP_API}`)

         ctx.dispatch('getIpInfo', IPadress.data.ip || IPadress.data)
        }catch(error){
            console.log(error)
        }
       },

       async getIpInfo(ctx, payload){
        try{
         const { data } = await axios.get(`${process.env.VUE_APP_IP_INFO_API}/${payload}/json`)

         console.log(data)
         if($cookies.isKey('user_country') || $cookies.isKey('user_city') || $cookies.isKey('user_timezone')){
     
         }
        }catch(error){
          console.log(error)
        }
       }
    },
    getters: {}
}