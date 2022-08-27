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
    },
    mutations: {
        getUserAbouts(state, payload){
         if(state.user.username.trim() !== '' && state.user.name.trim() !== '' && state.user.surname.trim() !== '' || state.user.pic !== null){
            state.updateProfileError = ''
         }else
           state.updateProfileError = 'Rows are empty enter something in rows!'
        }
    },
    actions: {},
    getters: {}
}