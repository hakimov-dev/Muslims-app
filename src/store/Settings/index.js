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
            $cookies.set('user_username', state.user.username.trim())
            $cookies.set('user_lastname', state.user.surname.trim())
            $cookies.set('user_name', state.user.name.trim())
            if(state.user.pic !== null)
             $cookies.set('user_pic', state.user.pic)
         }else
           state.updateProfileError = 'Rows are empty enter something in rows!'
        }
    },
    actions: {},
    getters: {}
}