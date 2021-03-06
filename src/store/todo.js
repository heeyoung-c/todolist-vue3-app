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
    },
    reorder(state, { oldIndex, newIndex }) {
      const clone = { ...state.todos[oldIndex] }
      state.todos.splice(oldIndex, 1)
      state.todos.splice(newIndex, 0, clone)
    }
  },
  actions: { 
    // CREATE
    async createTodo({ state, commit }, title) {
      try {
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
      } catch (err) {
        alert(err)
      }  
    },

    // READ
    async readTodos({ state, commit }, payload) {
      if (state.loading) return
      
      if (!payload) { // todo를 수정하는 경우에는 로딩 에니메이션이 동작하지 않도록 설정
        commit('updateState', {
          loading: true
        })
      }

      try {
        const res = await axios({
          url: END_POINT,
          method: 'GET',
          headers
        })
        console.log(res)
        commit('setTodos', res.data)
        commit('setOrder')
      } catch (err) {
        alert(err)
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    },

    // UPDATE
    async updateTodo({ dispatch }, { id, title, done, order }) {
      try {
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
        dispatch('readTodos', 'no') // todo를 수정하는 경우, 로딩 에니메이션 동작하지 않도록 payload로 문자열을 보내준다
        console.log(res)
      } catch (err) {
        alert(err)
      }
    },

    async reorderTodos({ commit, state }, event) {
      if (event) commit('reorder', event)
      const todoIds = state.todos.map(todo => todo.id)
      console.log(todoIds)
      try {
        const res = await axios({
          url: `${END_POINT}/reorder`,
          method: 'PUT',
          headers,
          data: {
            todoIds
          }
        })
        console.log(res)
      } catch (err) {
        alert(err)
      }
    },

    // DELETE
    async deleteTodo({ commit }, todoIdToDelete) {
      commit('deleteTodo', todoIdToDelete)

      try {
        const res = await axios({
          url: END_POINT + '/' + todoIdToDelete,
          method: 'DELETE',
          headers
        })
        console.log(res)
      } catch (err) {
        alert(err)
      }
    }
  }
}
