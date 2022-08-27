export default {
    namespaced: true,
    state: {
        user: {
            username: '',
            name: '',
            surname: '',
            pic: null 
        },
        updateProfileError: '',
        updatePasswordError: ''
    },
    mutations: {
        getUserAbouts(state, payload){
         
        }
    },
    actions: {},
    getters: {}
}