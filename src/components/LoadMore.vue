<template>
  <div class="LoadMore">
    <slot v-if="!isNoData" />
    <div v-if="isNoData" class="no-data">暂无数据~</div>
    <div v-else-if="isNoMore" class="loading">没有更多了</div>
    <div v-else class="loading">加载中...</div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop() isNoData: boolean
  @Prop() isNoMore: boolean
  mounted() {
    this.$el.addEventListener('scroll', () => {
      const {
        clientHeight, scrollHeight, scrollTop
      } = this.$el as any
      console.log(scrollHeight - clientHeight - scrollTop < 30)
      if (scrollHeight - clientHeight - scrollTop < 30) {
        this.$emit('load')
      }
    })
  }
}
</script>

<style lang="less">
.LoadMore {
  overflow-y: auto;
  .loading {
    height: 40px;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
    color: #ccc;
  }
  .no-data {
    text-align: center;
    font-size: 14px;
    color: #999;
    margin-top: 40px;
  }
}
</style>
