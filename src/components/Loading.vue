<template>
  <transition name="fade">
    <div id="loader-wrapper" v-if="tranShow">
      <div class="loader">
        <img class="img" src="@images/sf_loading.gif" alt="loading..">
        <div class="desc">{{ desc || '努力加載中...' }}</div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {
  @Prop() private desc!: string

  @Prop({ default: true }) private tranShow!: boolean
}
</script>

<style lang="less">
#loader-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    text-align: center;
  }
  .img {
    width: 36px;
  }
  .desc {
    color: #999999;
    margin-top: 6px;
    font-size: 12px;
  }
}
</style>
