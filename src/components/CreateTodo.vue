<template>
  <h1>TODO LIST</h1>
  <div class="container">
    <input
      :value="title"
      @input="title = $event.target.value"
      @keydown.enter="createTodo" />
    <AddButton
      @click="createTodo">
      TODO
    </AddButton>  
  </div>
</template>

<script>
import AddButton from '~/components/Buttons/AddButton.vue'

export default {
  components: {
    AddButton
  },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    async createTodo() {
      if (!this.title.trim()) return
      
      this.$store.dispatch('todo/createTodo', this.title)
      this.title = '' // 입력한 input값 초기화
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/_variables";
* {
  font-family: "Oswald", sans-serif;
}
h1 {
  font-size: 60px;
  color: $color-primary;
  text-align: center;
}
input {
  width: 76.9%;
  height: 30px;

  margin: 10px 2% 10px 0;
  border: none;
  &:focus {
    outline: 2px solid $color-primary;
  }
}
</style>
