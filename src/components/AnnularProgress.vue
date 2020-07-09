<template>
  <div :style="{width: `${size}rem`, height: `${size}rem`, fontSize}" class="AnnularProcess">
    <div :class="{small: current === 100}" class="plan">
      <div class="nor">{{ current }}</div>
      <div class="sm">%</div>
    </div>
    <div class="annulus">
      <svg :style="{ transform: `rotate(${(75 - current) * 3.6}deg)` }" viewBox="0 0 200 200">
        <circle
          stroke="#F2F2F2"
          fill="none"
          stroke-width="20"
          cx="100"
          cy="100"
          r="90"
        />
        <circle
          :stroke-dasharray="2 * Math.PI * 90"
          :stroke-dashoffset="(2 * Math.PI * 90) * (100 - current)/100"
          class="path"
          stroke="#EB7B49"
          fill="none"
          stroke-width="20"
          cx="100"
          cy="100"
          r="90"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Process extends Vue {
  @Prop({ default: 0.48 }) private size: number
  @Prop({ default: 0 }) private current: number
  get fontSize() {
    return (this.size * 0.08) / 0.48 + 'rem'
  }
}
</script>

<style lang="less" scoped>
.AnnularProcess {
  position: relative;
  .plan {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    color: #EB7B49;
    display: flex;
    align-items: center;
    justify-content: center;
    &.small {
      transform: scale(0.68);
    }
    .nor {
      font-size: 2em;
      font-weight: bold;
    }
    .sm { font-size: 1em; position: relative; top: .2em }
  }
  .annulus {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    stroke-linejoin: round;
    stroke-linecap: round;
    .path {
      transition: stroke-dashoffset .2s linear;
      background-image: linear-gradient(to bottom right, red, yellow);
    }
  }
}
</style>
