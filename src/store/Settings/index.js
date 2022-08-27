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
            $cookies.setItem('user_username', state.user.username.trim())
            $cookies.setItem('user_lastname', state.user.surname.trim())
            $cookies.setItem('user_name', state.user.name.trim())
            if(state.user.pic !== null)
             $cookies.setItem('user_pic', state.user.pic)
         }else
           state.updateProfileError = 'Rows are empty enter something in rows!'
        }
    },
    actions: {},
    getters: {}
}