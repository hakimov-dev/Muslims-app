export default{
    namespaced: true,
    state: {
        loginValue: 'hakimov-dev',
        passwordValue: 'hakimovDev',
        isError: false,
    },
    mutations: {
        signUp(state, payload){
            if(state.loginValue == 'hakimov-dev' && state.passwordValue == 'hakimovDev'){
                alert('Good')
                state.isError = false
            }else
                state.isError = true
        }
    },
    actions: {},
    getters: {}
}