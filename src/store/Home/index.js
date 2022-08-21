import axios from 'axios'

export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
     async getAbouts(ctx){
       try{
       const userIP = await axios.get(process.env.VUE_APP_IP_API)
       
       console.log(userIP)
       }catch(error){
        console.log(error)
       }
        }
    },
    getters: {}
}