import axios from 'axios'

export default {
    namespaced: true,
    state: {
        prayTimes: null,
        cityName: ''
    },
    mutations: {
        setPrayTimes(state, payload){
            state.prayTimes = payload,
            state.cityName = $cookies.get('user_city')
        }
    },
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

          $cookies.set('user_country', data.country_name, '30min')
         .set('user_city', data.city, '30min')
         .set('user_timezone', data.timezone, '30min')

         ctx.dispatch('getPrayTimes')
        }catch(error){
          console.log(error)
        }
       },

       async getPrayTimes(ctx){
        try{
         const { data } = await axios.get(`${process.env.VUE_APP_PRAY_TIMES_API}${$cookies.get('user_city')}&country=${$cookies.get('user_country')}=2&month=${new Date().getMonth() + 1}&year=${new Date().getFullYear()}`)

          const times = data.data[new Date().getDate() - 1].timings
          
          ctx.commit('setPrayTimes', [{title: 'Fajr', time: String(times['Fajr'])}, {title: 'Sunrise', time:String(times['Sunrise'])}, {title: 'Dhuhr', time: String(times['Dhuhr'])}, {title: 'Asr', time:String(times['Asr'])}, {title: 'Maghrib', time:String(times['Maghrib'])}, {title: 'Isha', time:String(times['Isha'])}])
        }catch(error){
            console.log(error)
        }
       },

       searchCity(ctx, value){
        if(value !== ''){
            alert('succes')
        }else{
            alert('Input is emty')
        }
       }
    },
    getters: {}
}