<template>
  <span class="material-symbols-outlined">
    <slot></slot>
  </span>
</template>

<style lang="scss" scoped>
@import "~/scss/_variables";

span {
  font-size: 30px;
  color: $color-primary;

  vertical-align: middle;
  
  transition: .2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: $color-second;
  }
}
</style>
