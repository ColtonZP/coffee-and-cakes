import Head from 'next/head'
import { observer } from 'mobx-react-lite'
import { RichText } from 'prismic-reactjs'

import BagItem from '../components/BagItem'
import CheckOut from '../components/CheckOut'

const Bag = ({ bag }) => {
  const { items, store, setStore } = bag

  const getTotal = () => {
    let price = 0

    items.forEach(item => (price += item.price * item.quantity))

    return price.toFixed(2)
  }

  return (
    <div className="container">
      <Head>
        <title>Bag</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bag">
        {items.length > 0 ? (
          <>
            <ul>
              {items.map(item => (
                <BagItem key={RichText.asText(item.name)} item={item} bag={bag} />
              ))}
            </ul>
            <CheckOut price={getTotal()} store={store} setStore={setStore} />
          </>
        ) : (
          <div>
            <span>Bag Empty</span>
          </div>
        )}
      </main>
    </div>
  )
}

export default observer(Bag)
