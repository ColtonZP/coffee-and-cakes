import Head from 'next/head'
import { observer } from 'mobx-react-lite'
import { RichText } from 'prismic-reactjs'

import BagItem from '../components/BagItem'
import CheckOut from '../components/CheckOut'

const Bag = ({ bag }) => {
  const { items, store, setStore, clearBag } = bag

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

      <main className="bagPage">
        {items.length > 0 ? (
          <>
            <h1>Bag</h1>
            <div className="bag">
              <ul>
                {items.map(item => (
                  <BagItem key={RichText.asText(item.name)} item={item} bag={bag} />
                ))}
              </ul>
              <CheckOut price={getTotal()} store={store} setStore={setStore} clearBag={clearBag} />
            </div>
          </>
        ) : (
          <div>
            <h1>Bag empty, come back here when you&#39;ve added some items.</h1>
          </div>
        )}
      </main>
    </div>
  )
}

export default observer(Bag)
