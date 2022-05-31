import axios from 'axios'

const END_POINT = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
const headers = {
  'Content-Type': 'application/json',
  apikey: 'FcKdtJs202204',
  username: 'KDT2_ChunHeeYoung'
}

export default {
  namespaced: true,
  state() {
    return {
      todos: [],
      order: 0
    }
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload
    },
    addTodos(state, payload) {
      state.todos.push(payload)
    },
    deleteTodo(state, payload) {
      const index = state.todos.findIndex(todo => todo.id === payload)
      state.todos.splice(index, 1)
    }
  },
  actions: { 
    // CREATE
    async createTodo({ commit }, title) {
      const res = await axios({
        url: END_POINT,
        method: 'POST',
        headers,
        data: {
          title
        }
      })
      console.log(res)
      commit('addTodos', res.data)
    },

    // READ
    async readTodos({ commit }) {
      const res = await axios({
        url: END_POINT,
        method: 'GET',
        headers
      })
      console.log(res)
      commit('setTodos', res.data)
    },

    // DELETE
    async deleteTodo({ commit }, todoIdToDelete) {
      commit('deleteTodo', todoIdToDelete)

      const res = await axios({
        url: END_POINT + '/' + todoIdToDelete,
        method: 'DELETE',
        headers
      })
      console.log(res)
    }
  }
}
