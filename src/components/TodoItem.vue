<template>
  <template v-if="!showComplete && !todo.done">
    <li>
      <div
        class="handle">
        <TheButton>
          height
        </TheButton>
      </div>
      <template v-if="!editMode">
        <span 
          class="title"
          :class="{ 'done-todo': todo.done }">
          {{ todo.title }}
        </span>
          
        <template v-if="!todo.done">
          <TheButton @click.stop="onEditMode">
            edit
          </TheButton>
          <TheButton
            @click="doneTodo(); updateTodo()">
            check_box_outline_blank
          </TheButton>
        </template>
    
        <template v-else>
          <TheButton
            @click="notDoneTodo(); updateTodo()">
            check_box
          </TheButton>
        </template>
          
        <TheButton @click="deleteTodo">
          delete_forever
        </TheButton>
      </template>
    
      <template v-else>
        <div @click.stop>
          <input
            ref="titleInput" 
            :value="title" 
            @input="title = $event.target.value" 
            @keydown.enter="offEditMode(); updateTitle(), updateTodo()"
            @keydown.esc="offEditMode" />
    
          <TheButton 
            @click="offEditMode(); updateTitle(); updateTodo()"> 
            check_circle
          </TheButton>
    
          <TheButton @click="offEditMode">
            cancel
          </TheButton>
        </div>
      </template>
    </li>
    <div
      class="update-date">
      <span class="material-symbols-outlined">
        subdirectory_arrow_right
      </span>
      <span class="update-date__date">
        수정: {{ updateDate(todo.updatedAt) }}
      </span>
    </div>
  </template>
      
  <template v-else-if="showComplete && todo.done">
    <li>
      <div
        class="handle">
        <TheButton>
          height
        </TheButton>
      </div>
      <span 
        class="title"
        :class="{ 'done-todo': todo.done }">
        {{ todo.title }}
      </span>
      
      <TheButton
        @click="notDoneTodo(); updateTodo()">
        check_box
      </TheButton>
      
      <TheButton @click="deleteTodo">
        delete_forever
      </TheButton>
    </li>
    <div
      class="update-date">
      <span class="material-symbols-outlined">
        subdirectory_arrow_right
      </span>
      <span class="update-date__date">
        수정: {{ updateDate(todo.updatedAt) }}
      </span>
    </div>
  </template>
</template>

<script>
import TheButton from '~/components/Buttons/TheButton.vue'

export default {
  components: {
    TheButton,
},
  props: {
    todo: {
      type: Object,
      required: true
    },
    showComplete: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    'update-title',
    'update-todo',
    'delete-todo',
    'done-todo',
    'not-done-todo'
  ],
  data() {
    return {
      title: '',
      editMode: false
    }
  },
  methods: {
    async onEditMode() {
      this.editMode = true
      this.title = this.todo.title
      window.addEventListener('click', this.offEditMode)
      await this.$nextTick() 
      this.$refs.titleInput.focus()
    },
    offEditMode() {
      this.editMode = false
      window.removeEventListener('click', this.offEditMode)
    },
    updateTitle() {
      this.$emit('update-title', this.title)
    },
    updateTodo() {
      this.$emit('update-todo', this.todo)
    },
    deleteTodo() {
      this.$emit('delete-todo', this.todo.id)
    },
    doneTodo() {
      this.$emit('done-todo', this.todo)
    },
    notDoneTodo() {
      this.$emit('not-done-todo', this.todo)
    },
    updateDate(oldDate) { // 받아온 todo 수정날짜 현지화
      return new Date(oldDate)
        .toLocaleString('ko-KR')
        .replace(/(\s*)/g, '')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/_variables";

li {
  display: flex; 

  height: 60px;
  box-sizing: border-box;

  padding-top: 16px;
  margin-top: 10px;
  border: 1px solid $color-primary;
  background-color: rgba($color-white,.9);

  font-family: "Oswald", sans-serif;
  font-size: 16px;
  .title {
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    padding-top: 2px;
  }
  input {
    width: 280px;
    height: 24px;

    border: none;
    color: $color-second;
    font-family: "Oswald", sans-serif;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
}
.done-todo {
  color: rgba($color-black, 0.2);
  text-decoration-line: line-through;
  text-decoration-color: rgba($color-black, 0.2);

  transition-duration: 0.5s;
}
.update-date {
  color: rgba($color-black, 0.5);
  font-family: "Oswald", sans-serif;
  span {
  font-size: 14px;
  }
  &__date {
    display: inline-block;
  }
}
</style>
