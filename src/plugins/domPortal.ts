import { DirectiveOptions } from 'vue'

function querySelector(node) {
  if (!node) return document.body
  return node instanceof window.Node ? node : document.querySelector(node)
}

const homes = new Map()

const directive: DirectiveOptions = {
  inserted(el, { value }) {
    const { parentNode } = el
    const home = document.createComment('')
    let hasMovedOut = false
    if (value !== false) {
      parentNode.replaceChild(home, el)
      querySelector(value).appendChild(el)
      hasMovedOut = true
    }
    if (!homes.has(el)) homes.set(el, { parentNode, home, hasMovedOut })
  },
  componentUpdated(el, { value }) {
    const { parentNode, home, hasMovedOut } = homes.get(el)
    if (!hasMovedOut && value) {
      parentNode.replaceChild(home, el)
      querySelector(value).appendChild(el)
      homes.set(el, { ...homes.get(el), hasMovedOut: true })
    } else if (hasMovedOut && value === false) {
      parentNode.replaceChild(el, home)
      homes.set(el, { ...homes.get(el), hasMovedOut: false })
    } else if (value) {
      querySelector(value).appendChild(el)
    }
  },
  unbind(el) {
    homes.delete(el)
  }
}

export default directive
