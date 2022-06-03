<template>
  <div
    v-if="!todos.length" 
    class="no-todo">
    <div class="inner">
      작성된 TODO가 존재하지 않습니다
    </div>
  </div>

  <ul v-else>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :show-complete="showComplete"
      @update-title="todo.title = $event"
      @update-todo="updateTodo"
      @delete-todo="deleteTodo" 
      @done-todo="todo.done = true" 
      @not-done-todo="todo.done = false" />
  </ul>

  <div class="button-container">
    <div class="inner">
      <TheButton
        class="btn"
        @click="handler(false)">
        format_list_bulleted
      </TheButton>

      <TheButton
        class="btn"
        @click="handler(true)">
        checklist
      </TheButton>

      <TheButton
        v-if="showComplete"
        class="btn remove">
        delete_sweep
      </TheButton>
    </div>
  </div>
</template>

<script>
import TodoItem from '~/components/TodoItem.vue'
import TheButton from './Buttons/TheButton.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    TodoItem,
    TheButton
  },
  data() {
    return {
      showComplete: false
    }
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
    },
    handler(boolean) {
      this.showComplete = boolean
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/scss/_variables";
ul, .no-todo {
  min-height: 350px;
  box-sizing: content-box;
  border: 1px solid rgba($color-primary, 0.1);
}
.no-todo {
  .inner {
  color: rgba($color-black, 0.5);
  text-align: center;    
  padding-top: calc(350px / 2 - 16px);
  }
}
.button-container {
  box-sizing: content-box;
  .inner {
    text-align: center;
    .btn {
      margin-right: 10px;
      font-size: 50px;
      font-weight: bold;
      border: 4px solid;
      &.remove {
        color: $color-red;
      }
    }
  }
}
</style>
