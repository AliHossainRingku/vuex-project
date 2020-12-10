import axios from "axios";

const state = {
    posts: [

    ]
};

const getters = {
    posts: state => {
        return state.posts
    }
};

const mutations = {
        CREATE_POST(state, post) {
            state.posts.unshift(post)
        },
        FETCH_POSTS(state, posts) {
            return state.posts = posts
        },
        UPDATE_POSTS(state, posts) {
            return state.posts.findIndex(posts => posts._id === posts.id)
        },
        DELETE_POST(state, post) {
            let index = state.posts.findIndex(item => item.id === post.id)
            state.posts.splice(index, 1)
        }

    
};

const actions = {
    createPost({ commit }, post) {
        axios.post('http://127.0.0.1:8000/api/posts', post)
            .then(res => {
                commit('CREATE_POST', res.data)
            }).catch(err => {
                console.log(err)
            })
    }, 
    fetchPosts({ commit }) {
        axios.get('http://127.0.0.1:8000/api/posts')
            .then(res => {
                commit('FETCH_POSTS', res.data)
            }).catch(err => {
                console.log(err)
            })
    }, 
    updatePost({ commit }) {
        axios.put(`http://127.0.0.1:8000/api/posts/${post.id}`)
            .then(res => {
                commit('UPDATE_POSTS', res.data)
            }).catch(err => {
                console.log(err)
            })
    },
    deletePost({ commit }, post) {
        axios.delete(`http://127.0.0.1:8000/api/posts/${post.id}`)
            .then(res => {
                if (res.data === 'ok')
                    console.log(res.data)
                    commit('DELETE_POST', post)
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
