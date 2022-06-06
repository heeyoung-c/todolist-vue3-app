<template>
  <div class="container">
    <div class="inner">
      <section class="create-todo">
        <CreateTodo />
      </section>

      <Loading
        v-if="loading"
        class="loading" />

      <section class="todo-list">
        <TodoList />
      </section>
    </div>
  </div>
</template>

<script>
import CreateTodo from '~/components/CreateTodo.vue'
import TodoList from '~/components/TodoList.vue'
import Loading from '~/components/Loading.vue'

export default {
  components: {
    CreateTodo,
    TodoList,
    Loading
  },
  computed: {
    loading() {
      return this.$store.state.todo.loading
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/scss/_variables";

.container {
  width: 500px;
  min-height: 600px;
  padding: 20px 50px;
  margin: 70px auto 0;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-radius: 30px;
  background-color: rgba($color-primary, 0.1);
  .inner {
    position: relative;
    padding: 0 10px 0;
    .loading {
      position: absolute;
      top: 170px;
      left: 100px;
    }
  }  
}

</style>
