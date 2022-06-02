<template>
  <span class="material-symbols-outlined">
    <slot></slot>
  </span>
</template>

<style lang="scss" scoped>
@import "~/scss/_variables";

span {
  color: $color-primary;
  font-size: 30px;
  vertical-align: middle;

  transition: .2s;
  &:hover {
    color: $color-second;
    cursor: pointer;
    transform: scale(1.1);
  }
}
</style>
