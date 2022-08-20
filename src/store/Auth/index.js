import router from '@/router'

export default{
    namespaced: true,
    state: {
        loginValue: 'hakimov-dev',
        passwordValue: 'hakimovDev',
        isError: false,
    },
    mutations: {
        login(state, payload){
            if(state.loginValue == 'hakimov-dev' && state.passwordValue == 'hakimovDev'){
                state.isError = false
                router.push('/')
                $cookies.set('user_username', 'hakimov-dev')
                $cookies.set('user_name', 'Muhammadamin')
                $cookies.set('user_lastname', 'Hakimov')
                $cookies.set('user_pic', null)
                $cookies.set('user_pass', state.passwordValue) 
                $cookies.set('user_favorite', JSON.stringify([]))
            }else
                state.isError = true
        }
    },
    actions: {},
    getters: {}
}