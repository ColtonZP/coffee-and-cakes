import { observable, makeObservable, action } from 'mobx'
import { RichText } from 'prismic-reactjs'

function updateStorage(name, item) {
  if (name === 'bag') {
    localStorage.setItem('inBag', JSON.stringify(item))
  } else if (name === 'store') {
    localStorage.setItem('store', JSON.stringify(item))
  }
}

class BagState {
  items = []
  order = []
  store = {}

  addItem = newItem => {
    const currentItem = this.items.find(
      item => RichText.asText(item.name) === RichText.asText(newItem.name),
    )

    if (currentItem) {
      currentItem.quantity++
    } else {
      newItem.quantity = 1
      this.items = [...this.items, newItem]
    }

    updateStorage('bag', this.items)
  }

  removeItem = itemName => {
    this.items = this.items.filter(item => item.name !== itemName)

    updateStorage('bag', this.items)
  }

  changeQuantity = (itemName, value) => {
    const currentItem = this.items.find(item => item.name === itemName)
    currentItem.quantity = value

    updateStorage('bag', this.items)
  }

  pullItems = items => {
    this.items = items
  }

  setStore = item => {
    this.store = item

    updateStorage('store', item)
  }

  clearBag = () => {
    this.order = this.items
    this.items = []
    updateStorage('bag', this.items)
  }

  constructor() {
    this.items = []
    makeObservable(this, {
      items: observable,
      store: observable,
      addItem: action,
      removeItem: action,
      changeQuantity: action,
      pullItems: action,
      setStore: action,
      clearBag: action,
    })
  }
}

export default new BagState()
