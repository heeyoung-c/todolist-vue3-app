<template>
  <ul>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @update-title="todo.title = $event"
      @update-todo="updateTodo"
      @delete-todo="deleteTodo" 
      @done-todo="todo.done = true" 
      @not-done-todo="todo.done = false" />
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
      update: 'updateTodo',
      delete: 'deleteTodo'
    }),
    async readTodos() {
      this.read()
    },
    async updateTodo(todoToUpdate) {
      this.update(todoToUpdate)
    },
    async deleteTodo(todoIdToDelete) {
      this.delete(todoIdToDelete)
    }
  }
}
</script>

