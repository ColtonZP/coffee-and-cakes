import { observer } from 'mobx-react-lite'
import { RichText } from 'prismic-reactjs'

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
      <img className="photo" src={item.picture && item.picture.url} alt="" />
      <div className="text">
        <div className="info">
          <span className="title">{RichText.asText(item.name)}</span>
          <span className="price">${item.price}</span>
        </div>

        <div className="quantity">
          <span>QTY:</span>
          <input
            type="number"
            value={item.quantity}
            onChange={e => handleChange(item.name, e)}
            min="0"
          />
          <button onClick={() => removeItem(item.name)}>
            <img src={del} alt="delete" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default observer(BagItem)
