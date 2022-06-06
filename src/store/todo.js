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
      order: 1,
      loading: false
    }
  },
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    setTodos(state, payload) {
      state.todos = payload
    },
    addTodos(state, payload) {
      state.todos.push(payload)
    },
    deleteTodo(state, payload) {
      const index = state.todos.findIndex(todo => todo.id === payload)
      state.todos.splice(index, 1)
    },
    setOrder(state) {
      if (state.todos.length === 0) {
        state.order = 1
      } else {
        state.order = state.todos[state.todos.length - 1].order + 1
      }      
    }
  },
  actions: { 
    // CREATE
    async createTodo({ state, commit }, title) {
      const res = await axios({
        url: END_POINT,
        method: 'POST',
        headers,
        data: {
          title,
          order: state.order
        }
      })
      console.log(res)
      commit('addTodos', res.data)
      commit('setOrder')
    },

    // READ
    async readTodos({ commit }) {
      commit('updateState', {
        loading: true
      })
      const res = await axios({
        url: END_POINT,
        method: 'GET',
        headers
      })
      console.log(res)
      commit('setTodos', res.data)
      commit('setOrder')
      commit('updateState', {
        loading: false
      })
    },

    // UPDATE
    async updateTodo(context, { id, title, done, order }) {
      const res = await axios({
        url: END_POINT + '/' + id,
        method: 'PUT',
        headers,
        data: {
          title,
          done,
          order
        }
      })
      console.log(res)
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
