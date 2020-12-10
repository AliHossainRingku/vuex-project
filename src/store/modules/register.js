import axios from "axios";
//import api from './../api.js'

let $url = ''

const state = {
    users: [
    ],
    isFetchingUser: false
};

const getters = {
    users: state => {
        return state.users
    }
};

const mutations = {
        CREATE_USER(state, user) {
            state.users.unshift(user)
        },
        FETCH_USERS(state, users) {
            return state.users = users
        },
        UPDATE_USER(state, users) {
            return state.users.findIndex(item => item.id === users.id)
            state.users.splice(index, 1)
        },
        DELETE_USER(state, users) {
            let index = state.users.findIndex(item => item.id === users.id)
            state.users.splice(index, 1)
        },

        //these lines are for loading
        // setFetchingState(state, value) {
        //     state.isFetchingUser = value
        // },
    
};

const actions = {
    register({ commit }, user) {
        axios.post('http://127.0.0.1:8000/api/users', user)
            .then(res => {
                console.log('Congrats! Registered...')
                commit('CREATE_USER', res.data)
                
            }).catch(err => {
                console.log(err)
            })
    }, 

    //
    // async register({ commit }, user) {
    //         console.log(user);
    //     commit('setFetchingState', true)
    //     let response = await api('get', `api/users`);
    //     commit('setFetchingState', false)
    //     if (response.success) {
    //         commit('CREATE_USER', response.data)
    //     }
    // },
    //
    fetchUsers({ commit }) {
        axios.get('http://127.0.0.1:8000/api/users')
            .then(res => {
                commit('FETCH_USERS', res.data)
            }).catch(err => {
                console.log(err)
            })
    },
    updateUser({ commit }, user) {
        console.log("hhhh")
        axios.put(`http://127.0.0.1:8000/api/users/${user.id}`)
            .then(res => {
                commit('UPDATE_USER', res.data)
            }).catch(err => {
                console.log(err)
            })
    },
    deleteUser({ commit }, user) {
        axios.delete(`http://127.0.0.1:8000/api/users/${user.id}`)
            .then(res => {
                if (res.data === 'ok')
                    console.log('User '+user.id+' '+user.name+' Deleted')
                    commit('DELETE_USER', user)
            }).catch(err => {
                console.log(err)
            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
