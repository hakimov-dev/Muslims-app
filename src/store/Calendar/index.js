import axios from 'axios'

export default {
    namespaced: true,
    state: {
        inputDate: ''
    },
    mutations: {},
    actions: {
        async getCalendar(ctx, date){
          try{
           const { data } = axios.get(`${process.env.VUE_APP_PRAY_TIMES_API}${$cookies.get('user_city')}&country=${$cookies.get('user_country')}=2&month=${date.month}&year=${date.year}`)
          }catch(error){
            console.log(error)
          }
        }
    },
    getters: {}
}