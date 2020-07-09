import vue from 'vue'
import toastComponent from './toast.vue'

// 返回一个 扩展实例构造器
const ToastConstructor = vue.extend(toastComponent)

// 定义弹出组件的函数 接收2个参数, 要显示的文本 和 显示时间
const toast = (text: string, duration: number = 3000) => {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text,
        showWrap: true, // 是否显示组件
        showContent: true // 作用:在隐藏组件之前,显示隐藏动画
      }
    }
  })
  document.body.appendChild(toastDom.$el)

  // 提前 250ms 执行淡出动画(因为我们再css里面设置的隐藏动画持续是250ms)
  setTimeout(() => { toastDom.showContent = false }, duration - 1250)
  // 过了 duration 时间后隐藏整个组件
  setTimeout(() => { toastDom.showWrap = false }, duration)
}

export default toast
