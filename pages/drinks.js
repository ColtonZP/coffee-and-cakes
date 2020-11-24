import Head from 'next/head'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import { Client } from '../lib/prismic-config'
import Drink from '../components/Drink'

export default function Drinks({ coffee, bag, tea }) {
  const { addItem } = bag

  return (
    <div className="container">
      <Head>
        <title>Drinks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="drinks">
        <h1>Coffee</h1>

        <div className="itemGrid">
          {coffee.map(coffee => (
            <Drink
              key={RichText.asText(coffee.data.name)}
              drink={coffee}
              addItem={addItem}
              type="coffee"
            />
          ))}
        </div>

        <h1>Tea</h1>

        <div className="itemGrid">
          {tea.map(tea => (
            <Drink key={RichText.asText(tea.data.name)} drink={tea} addItem={addItem} type="tea" />
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const coffee = await Client().query(Prismic.Predicates.at('document.type', 'coffee'))
  const tea = await Client().query(Prismic.Predicates.at('document.type', 'tea'))

  return { props: { coffee: coffee.results, tea: tea.results } }
}
