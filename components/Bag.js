import { observable, makeObservable, action } from 'mobx'

class BagState {
    items = []

    addItem = newItem => {
        const exists = this.items.find(item => item.name === newItem.name)
        // items.forEach(item => {
        //     item.name === newItem.name
        // });
        if (exists) {
            exists.quantity++
        } else {
            newItem.quantity = 1
            this.items = [...this.items, newItem]
        }
    }

    removeItem = itemName => {
        this.items = this.items.filter(item => item.name !== itemName)
    }

    constructor() {
        makeObservable(this, {
            items: observable,
            addItem: action,
            removeItem: action,
        })
    }
}

export default new BagState()
