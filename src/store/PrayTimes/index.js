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

         ctx.dispatch('getPrayTimes')
        }catch(error){
          console.log(error)
        }
       },

       async getPrayTimes(ctx){
        try{
         const { data } = await axios.get(`${process.env.VUE_APP_PRAY_TIMES_API}${$cookies.get('user_city')}&country=${$cookies.get('user_country')}=2&month=${new Date().getMonth() + 1}&year=${new Date().getFullYear()}`)

          const times = data.data[new Date().getDate() - 1].timings
          
          ctx.commit('setPrayTimes', [String(times['Fajr']), String(times['Sunrise']), String(times['Dhuhr']), String(times['Asr'], String(times['Maghrib']), String(times['Isha']))])
        }catch(error){
            console.log(error)
        }
       }
    },
    getters: {}
}