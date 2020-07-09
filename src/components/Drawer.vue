<template>
  <div v-dom-portal class="Drawer">
    <transition name="fade">
      <div v-if="value" @click="$emit('input', false)" class="Drawer_layer" />
    </transition>
    <div :class="[from, {open: value}]" class="Drawer_content">
      <slot />
    </div>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Watch,
  Vue
} from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  /** v-model 显隐 */
  @Prop({ default: false }) value!: boolean
  /**
   * 弹出位置
   * - bottom 从底部弹出
   * - right 从右侧弹出
   */
  @Prop({ default: 'right' }) from!: string
  @Watch('value')
  private handleShowChange(v) {
    if (v) {
      document.querySelector('#app').classList.add('filter-blur')
    } else {
      document.querySelector('#app').classList.remove('filter-blur')
    }
  }
}
</script>

<style lang="less">
.Drawer {
  &_layer {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .2);
  }
  &_content {
    position: fixed;
    z-index: 4;
    transition: all .3s ease;
    background: #fff;
    &.right {
      top: 0;
      right: 0;
      height: 100vh;
      transform: translateX(100%);
      transform-origin: right;
      &.open {
        transform: translateX(0);
      }
    }
    &.bottom {
      bottom: 0;
      width: 100vw;
      transform: translateY(100%);
      transform-origin: bottom;
      &.open {
        transform: translateY(0);
      }
    }
  }
}
</style>
