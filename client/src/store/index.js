import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import PostService from '../services/PostService'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    posts: []
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    async loadPosts({commit}) {
      let response = await PostService.findAllPost();
      //debugger
      commit('SET_POSTS', response.data.posts)

    }
  }
});