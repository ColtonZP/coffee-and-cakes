import { useState } from 'react'
import { observer } from 'mobx-react-lite'

const Item = ({ item, bag }) => {
    const { removeItem, changeQuantity } = bag

    function handleChange(itemName, e) {
        changeQuantity(itemName, e.target.value)
    }

    return (
        <li className="bagItem" key={item}>
            <img src={item.image && item.image.url} alt="" />
            <span className="title">{item.name}</span>
            <span>x</span>
            <input type="number" value={item.quantity} onChange={e => handleChange(item.name, e)} />
            <button onClick={() => removeItem(item.name)}>X</button>
        </li>
    )
}

export default observer(Item)
