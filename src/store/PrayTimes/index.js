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

         if($cookies.isKey('user_country') || $cookies.isKey('user_city') || $cookies.isKey('user_timezone')){
          $cookies.set('user_country', data.country_name, '30min')
         .set('user_city', data.city, '30min')
         .set('user_timezone', data.timezone, '30min')
         }
        }catch(error){
          console.log(error)
        }
       }
    },
    getters: {}
}