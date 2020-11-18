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
        {RichText.render(item.data.name)}
        {RichText.render(item.data.description)}

        <button onClick={() => addItem(item.data)}>Add</button>

        <div className="nutrition">
          <h3>Nutrition</h3>
          <span>
            <b>Calories</b> {item.data.calories}
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
