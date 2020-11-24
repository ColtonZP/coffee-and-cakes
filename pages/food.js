import Head from 'next/head'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import { Client } from '../lib/prismic-config'
import Drink from '../components/Drink'

export default function Drinks({ bakery, sweets, bag }) {
  const { addItem } = bag

  return (
    <div className="container">
      <Head>
        <title>Drinks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="drinks">
        <h1>Bakery</h1>

        <div className="itemGrid">
          {bakery.map(bakery => (
            <Drink
              key={RichText.asText(bakery.data.name)}
              drink={bakery}
              addItem={addItem}
              type="bakery"
            />
          ))}
        </div>

        <h1>Sweets</h1>

        <div className="itemGrid">
          {sweets.map(sweets => (
            <Drink
              key={RichText.asText(sweets.data.name)}
              drink={sweets}
              addItem={addItem}
              type="tea"
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const bakery = await Client().query(Prismic.Predicates.at('document.type', 'bakery'))
  const sweets = await Client().query(Prismic.Predicates.at('document.type', 'sweets'))

  return { props: { bakery: bakery.results, sweets: sweets.results } }
}
