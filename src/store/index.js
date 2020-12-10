import Vue from 'vue'
import Vuex from 'vuex'
//import VueAxios from 'vue-axios'

import todos from './modules/todos'
import status from './modules/status'
import posts from './modules/posts'
import counter from './modules/counter'
import register from './modules/register'

Vue.use(Vuex)
//Vue.use(VueAxios, axios)

export default new Vuex.Store({
 
  modules: {
    todos,
    status,
    counter,
    posts,
    register,
  }
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
})
