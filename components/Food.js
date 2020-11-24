import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

export default function CheckOut({ item, addItem, type }) {
  const hasBadge = drink => {
    const day = new Date(drink.last_publication_date)
    day.setDate(day.getDate() + 30)
    if (drink.data.seasonal) {
      return <span className="badge">Seasonal</span>
    } else if (day >= new Date()) {
      return <span className="badge">New</span>
    }
  }

  return (
    <div className="itemCard">
      <img
        className="photo"
        src={item.data.picture && item.data.picture.url}
        alt={RichText.asText(item.data.name)}
      />

      <h2>
        {hasBadge(item)} {RichText.asText(item.data.name)}
      </h2>

      <span className="price">${item.data.price.toFixed(2)}</span>

      <div className="buttonGroup">
        <button onClick={() => addItem(item.data)}>Add</button>

        <Link href={`/food/${type}/${item.uid}`}>
          <button>More Info</button>
        </Link>
      </div>
    </div>
  )
}
