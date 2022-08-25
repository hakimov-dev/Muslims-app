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
            state.cityName = `${$cookies.get('user_country')} | ${$cookies.get('user_city')}`
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

      async searchCity(ctx, value){
        try{
            if(value !== ''){
                // const { data } = await axios.get(`${process.env.VUE_APP_PRAY_TIMES_API}${value.split(" ")[0]}&country=${value.split(" ")[0]}=2&month=${new Date().getMonth() + 1}&year=${new Date().getFullYear()}`)

                // const times = data.data[new Date().getDate() - 1].timings
                
                // console.log(times)
                const options = {
                    method: 'GET',
                    url: 'https://vanitysoft-boundaries-io-v1.p.rapidapi.com/reaperfire/rest/v1/public/boundary/county/levy/state/fl',
                    headers: {
                      'X-RapidAPI-Key': 'a3edcb46b9msh778b6a70b4e7f29p1f63aajsn6433f5ae43f9',
                      'X-RapidAPI-Host': 'vanitysoft-boundaries-io-v1.p.rapidapi.com'
                    }
                  };
                  
                  axios.request(options).then(function (response) {
                      console.log(response.data);
                  }).catch(function (error) {
                      console.error(error);
                  });
            }else
                alert('Input is emty')
            
        }catch(error){
            console.log(error)
        }
       }
    },
    getters: {}
}