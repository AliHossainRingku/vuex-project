const state = {
    counter: 0
};

const getters = {
    //counter: (state) => state.counter
};

const mutations = {
    increment(state){
        state.counter = state.counter + 2;
    },
    increase(state, payload){
        state.counter = state.counter + payload.value;
    }
};

const actions = {
    
};

export default {
    state,
    getters,
    mutations,
    actions
};
