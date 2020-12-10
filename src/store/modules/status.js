import axios from "axios";

const state = {
    status: [
        {title: ''},
        {body: ''}
    ]
};
const getters = {
    allStatus: (state) => state.status
};
const actions = {
    async fetchStatus({ commit }) {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(response.data);
        commit('setStatus', response.data);
    },

    async addStatus({ commit }, title, body, id) {
        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/posts", { title, body, completed: false }
        );
        console.log(response.data);
        commit('newStatus', response.data);
    },

    async deleteStatus({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        commit('removeStatus', id);
    },

    async filterTodos({ commit }, e) {
        //get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        //console.log(limit);
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
        );
        commit('setTodos', response.data);
    },

    async updateTodo({ commit }, updTodo) {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo
        );
        console.log(response.data);
        commit('updateTodo', response.data);
    }
};
const mutations = {
    setStatus: (state, status) => (state.status = status),

    newStatus: (state, status) => state.status.unshift(status),

    removeStatus: (state, id) =>
        (state.status = state.status.filter(status => status.id !== id)),

    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
