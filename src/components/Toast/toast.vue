<template>
  <div :class="showContent ? 'fadein':'fadeout'" class="wrap">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class toast extends Vue {}
</script>

<style lang="less" scoped>
.wrap {
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 5px;
  transform: translate(-50%, -50%);
  padding: 8px;
  font-size: 14px;
  color: #fff;
}
.fadein {
  animation: animate_in 0.25s;
}
.fadeout {
  animation: animate_out 0.25s;
  opacity: 0;
  display: none;
}
@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
