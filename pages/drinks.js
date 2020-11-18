import Head from 'next/head'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import { Client } from '../lib/prismic-config'
import add from '../public/add.svg'

export default function Drinks({ coffee, bag }) {
  const { addItem } = bag

  const isBadge = coffee => {
    const day = new Date(coffee.last_publication_date)
    day.setDate(day.getDate() + 30)
    if (coffee.data.seasonal) {
      return <span className="badge">Seasonal</span>
    } else if (day >= new Date()) {
      return <span className="badge">New</span>
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Drinks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="drinks">
        <h1>Coffee</h1>
        <div className="item-grid">
          {coffee.map(coffee => (
            <div className="item-card" key={coffee.data.name}>
              <img
                className="photo"
                src={coffee.data.picture && coffee.data.picture.url}
                alt={RichText.asText(coffee.data.name)}
              />

              <h2>
                {isBadge(coffee)} {RichText.asText(coffee.data.name)}
              </h2>

              {/* {RichText.render(coffee.data.description)} */}

              <span className="price">${coffee.data.price.toFixed(2)}</span>

              <div className="buttonGroup">
                <button onClick={() => addItem(coffee.data)}>Add</button>

                <Link href={`/drinks/${coffee.uid}`}>
                  <button onClick={() => addItem(coffee.data)}>More Info</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const coffee = await Client().query(Prismic.Predicates.at('document.type', 'coffee'))

  return { props: { coffee: coffee.results } }
}
