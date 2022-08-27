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
        refreshPage: false
    },
    mutations: {
        postUserAbouts(state, payload){
         if(state.user.username.trim() !== '' && state.user.name.trim() !== '' && state.user.surname.trim() !== '' || payload){
            state.updateProfileError = ''
            alert('Your profile was updated!')
            $cookies.set('user_username', state.user.username.trim())
            $cookies.set('user_lastname', state.user.surname.trim())
            $cookies.set('user_name', state.user.name.trim())
            if(payload)
             $cookies.set('user_pic', payload)

             state.refreshPage = true
             setTimeout(() => {
                 state.refreshPage = false
             }, 1);
         }else
           state.updateProfileError = 'Rows are empty enter something in rows!'
        }
    },
    actions: {},
    getters: {}
}