<template>
  <li>
    <div class="handle">
      ::
    </div>

    <template v-if="!editMode">
      <span 
        ref="notDone"
        class="title"
        :class="{ 'done-todo': todo.done }">
        {{ todo.title }}
        {{ todo.order }}
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
      console.log(this.$refs.notDone)
    },
    notDoneTodo() {
      this.$emit('not-done-todo', this.todo)
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
  margin-bottom: 10px;
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
    width: 302px;
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

</style>
