<template>
  <label @click="handleClick" class="Checkbox">
    <i :class="{checked: item.checked}" class="check" />
    {{ item.label }}
  </label>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ default: () => ({}) }) item: IRadioItem
  private handleClick() {
    this.item.checked = !this.item.checked
  }
}
</script>

<style lang="less">
.Checkbox {
  display: flex;
  align-items: center;
  .check {
    width: 16px;
    height: 16px;
    background-image: url('~@images/multiple_choice_off.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: 4px;
    &.checked {
      background-image: url('~@images/multiple_choice_on.svg');
    }
  }
}
</style>
