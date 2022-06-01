<template>
  <button> 
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import "~/scss/_variables";

/* From uiverse.io by @cuatrofender */
button {
  width: 20%;
  vertical-align: middle;
  border: none;
  font-family: "Oswald" ,sans-serif;
  font-size: 20px;
  background: transparent;
  color: $color-primary;
  border: solid 1px rgba(0, 107, 179, 0.2);
  border-radius: 4px;
  transition-duration: 0.2s;
  &:before {
    content: "+";
    opacity: 0;
    margin-left: -15px;
    color: $color-second;
    transition-duration: 0.2s;
  }
  &:hover {
    color: $color-second;
    background: rgba(0, 0, 0, 0.02);
    border: solid 1px gainsboro;
    &:before {
      margin-left: 0px;
      opacity: 1;
    }
  }
}
</style>
