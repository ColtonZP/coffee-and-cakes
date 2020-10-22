import { observable, makeObservable, action } from 'mobx'

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
    }

    removeItem = itemName => {
        this.items = this.items.filter(item => item.name !== itemName)
    }

    changeQuantity = (itemName, value) => {
        const currentItem = this.items.find(item => item.name === itemName)
        currentItem.quantity = value
    }

    constructor() {
        makeObservable(this, {
            items: observable,
            addItem: action,
            removeItem: action,
            changeQuantity: action,
        })
    }
}

export default new BagState()
