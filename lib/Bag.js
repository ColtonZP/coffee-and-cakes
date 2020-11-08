import { observable, makeObservable, action } from 'mobx'

function updateStorage(name, item) {
    if (name === 'bag') {
        localStorage.setItem('inBag', JSON.stringify(item))
    } else if (name === 'store') {
        localStorage.setItem('store', JSON.stringify(item))
    }
}

class BagState {
    items = []
    store = []

    addItem = newItem => {
        const currentItem = this.items.find(item => item.name === newItem.name)
        // items.forEach(item => {
        //     item.name === newItem.name
        // });
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

    setLocation = item => {
        this.store = item
        updateStorage('store', item)
    }

    constructor() {
        this.items = []
        makeObservable(this, {
            items: observable,
            addItem: action,
            removeItem: action,
            changeQuantity: action,
            pullItems: action,
            setLocation: action,
        })
    }
}

export default new BagState()
