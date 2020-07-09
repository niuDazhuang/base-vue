import Vue from 'vue'

const bus = new Vue()

export function setTitle(title) {
  document.title = title
  bus.$emit('setTitle', title)
}

export default bus
