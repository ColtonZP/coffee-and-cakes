import { observable, makeObservable, action } from 'mobx'

class BagState {
    items = []

    addItem = item => {
        this.items = [...this.items, item]
    }

    removeItem = itemName => {
        this.items = this.items.filter(item => item.name !== itemName)
    }

    constructor() {
        makeObservable(this, {
            items: observable,
            addItem: action,
            removeItem: action
        })
    }
}

export default new BagState()
