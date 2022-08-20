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
            }else
                state.isError = true
        }
    },
    actions: {},
    getters: {}
}