export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
       async getIpAdress(){
        try{
         const IPadress = await axios.get(`${process.env.VUE_APP_IP_API}`)

         console.log(IPadress.data)
        }catch(error){
            console.log(error)
        }
       }
    },
    getters: {}
}