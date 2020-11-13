import { observer } from 'mobx-react-lite'

import del from '../public/delete.svg'

const BagItem = ({ item, bag }) => {
  const { removeItem, changeQuantity } = bag

  function handleChange(itemName, e) {
    console.log(e.target.value)
    if (e.target.value >= 0) {
      changeQuantity(itemName, e.target.value)
    }
  }

  return (
    <li className="bagItem" key={item}>
      <img className="photo" src={item.image && item.image.url} alt="" />
      <span className="title">{item.name}</span>
      <span>${item.price}</span>
      <input
        type="number"
        value={item.quantity}
        onChange={e => handleChange(item.name, e)}
        min="0"
      />
      {/* <span>${(item.price * item.quantity).toFixed(2)}</span> */}
      <button onClick={() => removeItem(item.name)}>
        <img src={del} alt="delete" />
      </button>
    </li>
  )
}

export default observer(BagItem)
