import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

import { Client } from '../../lib/prismic-config'

const Drink = ({ item, bag }) => {
  const { addItem } = bag

  return (
    <div className="container">
      <Head>
        <title>{RichText.asText(item.data.name)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="item">
        <img src={item.data.picture.url} alt="" />

        <div className="info">
          {RichText.render(item.data.name)}
          {RichText.render(item.data.description)}
          <button onClick={() => addItem(item.data)}>Add to order</button>
        </div>

        <div className="nutrition">
          <h3>Nutrition</h3>
          <span>
            <b>Calories</b> {item.data.calories}
          </span>
          <span>
            <b>Fat</b> {Math.floor(Math.random() * 10) + 4}g
          </span>
          <span>
            <b>Sodium</b> {Math.floor(Math.random() * 250) + 4}mg
          </span>
          <span>
            <b>Carbohydrates</b> {Math.floor(Math.random() * 30)}g
          </span>
          <span>
            <b>Caffeine</b> {item.data.caffeine}mg
          </span>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const item = await Client().getByUID('coffee', query.drink)

  return { props: { item } }
}

export default Drink
