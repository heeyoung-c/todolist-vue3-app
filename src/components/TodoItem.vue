<template>
  <li>
    <div class="handle">
      ::
    </div>
    <template v-if="!editMode">
      <span class="title">
        {{ todo.title }}
        {{ todo.order }}
      </span>
      <TheButton @click.stop="onEditMode">
        edit
      </TheButton>
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
    TheButton
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
    'delete-todo'
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
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  display: flex; 
  margin-bottom: 10px;

  font-family: "Oswald", sans-serif;
  font-weight: 700;
  background-color: rgba(0,0,0,.05);
  .title {
    flex-grow: 1;
  }
  input {
    width: 306px;
    height: 24px;
    border: none;
    &:focus {
      outline: 2px solid $color-primary;
    }
  }
}

</style>
