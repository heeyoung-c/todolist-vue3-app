<template>
  <div
    v-if="!todos.length || (todos.filter(todo => todo.done).length === todos.length && !showComplete)" 
    class="no-todo">
    <div class="inner">
      진행중인 TODO가 존재하지 않습니다😎
    </div>
  </div>

  <div
    v-else-if="todos.filter(todo => !todo.done).length === todos.length && showComplete" 
    class="no-todo">
    <div class="inner">
      완료된 TODO가 존재하지 않습니다😥
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
        @click="navHandler(false)">
        toc
      </TheButton>

      <TheButton
        class="btn"
        @click="navHandler(true)">
        checklist_rtl
      </TheButton>

      <TheButton
        v-if="showComplete"
        class="btn remove"
        @click="doneTodoToDelete">
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
    async updateTodo(todoToUpdate) { // 단일 todo 업데이트
      this.update(todoToUpdate)
    },
    async deleteTodo(todoIdToDelete) { // 단일 todo 제거
      this.delete(todoIdToDelete)
    },
    navHandler(boolean) { // 전체 todo목록, 완료 목록 보여주는 nav 설정
      this.showComplete = boolean
    }, 
    async doneTodoToDelete() { // 완료 todo 목록 id값 추출, 한번에 삭제하기 위함
      let todosIdToDelete = []
      this.todos
        .filter(todo => todo.done)
        .forEach(todo => todosIdToDelete.push(todo.id))

      for (let todoIdToDelete of todosIdToDelete) { // 추출된 id값 하나씩 보내서 삭제하기
        this.delete(todoIdToDelete)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/scss/_variables";
ul, .no-todo {
  min-height: 350px;
  box-sizing: content-box;
  border: 1px solid rgba($color-primary, 0);
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
