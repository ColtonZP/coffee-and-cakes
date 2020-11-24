import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

export default function CheckOut({ drink, addItem, type }) {
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
        src={drink.data.picture && drink.data.picture.url}
        alt={RichText.asText(drink.data.name)}
      />

      <h2>
        {hasBadge(drink)} {RichText.asText(drink.data.name)}
      </h2>

      {/* {RichText.render(coffee.data.description)} */}

      <span className="price">${drink.data.price.toFixed(2)}</span>

      <div className="buttonGroup">
        <button onClick={() => addItem(drink.data)}>Add</button>

        <Link href={`/drinks/${type}/${drink.uid}`}>
          <button>More Info</button>
        </Link>
      </div>
    </div>
  )
}
