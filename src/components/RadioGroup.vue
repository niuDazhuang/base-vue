<template>
  <div :class="`column-${column}`" class="RadioGroup">
    <label
      v-for="(x, i) in list"
      :key="i"
      @click="handleClick(i)"
      class="Radio"
    >
      <i :class="{checked: checkedIndex===i}" class="check" />
      {{ x.label }}
    </label>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ default: 0 }) column: number
  @Prop({ default: () => ({}), required: true }) value: number | string
  @Prop({ default: [], required: true }) list: IRadioItem[]
  get checkedIndex() {
    return this.list.findIndex(v => v.value === this.value)
  }
  set checkedIndex(i) {
    const item = this.list[i]
    this.$emit('input', item.value)
    this.$emit('chnage', item)
  }
  private handleClick(i) {
    if (this.checkedIndex !== i) {
      this.checkedIndex = i
    }
  }
}
</script>

<style lang="less">
.RadioGroup {
  display: flex;
  flex-wrap: wrap;
  &.column-2 { .Radio { width: 50%; } }
  &.column-3 { .Radio { width: 33%; } }
  .Radio {
    display: flex;
    align-items: center;
    .check {
      width: 16px;
      height: 16px;
      background-image: url('~@images/single_choice_off.svg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-right: 6px;
      &.checked {
        background-image: url('~@images/single_choice_on.svg');
      }
    }
  }
}
</style>
