import { observable, makeObservable, action } from 'mobx'

function updateStorage(bag) {
    localStorage.setItem('inBag', JSON.stringify(bag))
}

class BagState {
    items = []

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
        updateStorage(this.items)
    }

    removeItem = itemName => {
        this.items = this.items.filter(item => item.name !== itemName)
        updateStorage(this.items)
    }

    changeQuantity = (itemName, value) => {
        const currentItem = this.items.find(item => item.name === itemName)
        currentItem.quantity = value
        updateStorage(this.items)
    }

    pullItems = items => {
        this.items = items
    }

    constructor() {
        this.items = []
        makeObservable(this, {
            items: observable,
            addItem: action,
            removeItem: action,
            changeQuantity: action,
            pullItems: action
        })
    }
}

export default new BagState()
