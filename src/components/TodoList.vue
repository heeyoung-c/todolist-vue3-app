<template>
  <ul>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete-todo="deleteTodo" />
  </ul>
</template>

<script>
import TodoItem from '~/components/TodoItem.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    TodoItem
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos
    }
  },
  created() {
    this.readTodos()
  },
  methods: {
    ...mapActions('todo', {
      read: 'readTodos',
      delete: 'deleteTodo'
    }),
    async readTodos() {
      this.read()
    },
    async deleteTodo(todoIdToDelete) {
      this.delete(todoIdToDelete)
    }
  }
}
</script>

