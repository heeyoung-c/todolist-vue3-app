<template>
  <li>
    <div class="handle">
      ::
    </div>
    <span class="title">
      {{ todo.title }}
      {{ todo.order }}
    </span>
    <EditButton />
    <DeleteButton @click="$emit('delete-todo', todo.id)" />
  </li>
</template>

<script>
import DeleteButton from '~/components/Buttons/DeleteButton.vue'
import EditButton from '~/components/Buttons/EditButton.vue'

export default {
  components: {
    DeleteButton,
    EditButton
  },
  props: {
    todo: {
      type: Object,
      default() {}
    }
  },
  emits: [
    'delete-todo'
  ]
}
</script>

<style lang="scss" scoped>
li {
  display: flex; 
  margin-bottom: 5px;
  background-color: rgba(0,0,0,.05);

  .title {
    flex-grow: 1;
  }
}
</style>
