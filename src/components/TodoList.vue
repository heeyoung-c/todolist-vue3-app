<template>
  <div
    v-show="!todos.length || (todos.filter(todo => todo.done).length === todos.length && !showComplete)" 
    class="no-todo">
    <div
      v-if="!loading"
      class="inner">
      진행중인 TODO가 존재하지 않습니다😎
    </div>
  </div>

  <div
    v-show="todos.filter(todo => !todo.done).length === todos.length && (todos.length && showComplete)" 
    class="no-todo">
    <div class="inner">
      완료된 TODO가 존재하지 않습니다😥
    </div>
  </div>

  <ul
    ref="todoList">
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
import Sortable from 'sortablejs'

import { mapState ,mapActions } from 'vuex'

export default {
  components: {
    TodoItem,
    TheButton,
},
  data() {
    return {
      showComplete: false
    }
  },
  computed: {
    ...mapState('todo', [
      'todos',
      'loading'
    ])
  },
  created() {
    this.readTodos()
  },
  mounted() {
    this.initSortable()
  },
  methods: {
    ...mapActions('todo', {
      read: 'readTodos',
      update: 'updateTodo',
      delete: 'deleteTodo',
      reorder: 'reorderTodos'
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
    },
    initSortable() {
      new Sortable(this.$refs.todoList, {
        handle: 'li .handle', // 드래그 핸들이 될 요소의 선택자를 입력합니다.
        delay: 50, // 클릭이 밀리는 것을 방지하기 위해 약간의 지연 시간을 추가합니다.
        animation: 0, // 정렬할 때 애니메이션 속도(ms)를 지정합니다.
        forceFallback: true, // 다양한 환경의 일관된 Drag&Drop(DnD)을 위해 HTML5 기본 DnD 동작을 무시하고 내장 기능을 사용합니다.
        // 요소의 DnD가 종료되면 실행할 핸들러(함수)를 지정합니다.
        onEnd: event => {
          this.reorderTodos(event)
        }
      })
    },
    async reorderTodos(event) {
      this.reorder(event)
    },
  }
}
</script>

<style scoped lang="scss">
@import "~/scss/_variables";

ul {
  min-height: 350px;
  box-sizing: content-box;
  border: 1px solid rgba($color-primary, 0);
}
.no-todo {
  position: absolute;
  top: 273px;
  left: 50px;
  .inner {
  color: rgba($color-black, 0.5);
  text-align: center;    
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

