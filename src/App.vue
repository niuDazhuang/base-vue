<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
}
</script>

<style lang="less">
@import '~@styles/atom.less';
@import '~@styles/icon.less';
#app {
  color: #999;
  font-size: 16px;
}
</style>
