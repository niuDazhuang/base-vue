<template>
  <div class="WrapLoading">
    <Loading v-if="loading" />
    <slot v-else />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Loading from './Loading.vue'

@Component({ components: { Loading } })
export default class extends Vue {
  @Prop({ default: true }) loading: boolean
}
</script>

<style lang="less">
.WrapLoading {
  #loader-wrapper {
    min-height: 80vh;
  }
}
</style>
