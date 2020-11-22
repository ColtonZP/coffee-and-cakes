import Head from 'next/head'
import { observer } from 'mobx-react-lite'
import { RichText } from 'prismic-reactjs'
import Router from 'next/router'

import BagItem from '../components/BagItem'
import CheckOut from '../components/CheckOut'

const Bag = ({ bag }) => {
  const { order } = bag
  const { items, location } = order

  const getTotal = () => {
    let price = 0

    items.forEach(item => (price += item.price * item.quantity))

    return price.toFixed(2)
  }

  return (
    <div className="container">
      <Head>
        <title>Order Placed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="orderPage">
        {items ? (
          <div className="order">
            <h1>Order Placed for {location.name}, see you soon!</h1>
            {console.log(order.store)}
            <ul>
              {items.map(item => (
                <div className="orderItem" key={RichText.asText(item.name)}>
                  <img src={item.picture.url} alt={RichText.asText(item.name)} />
                  <span>
                    {RichText.asText(item.name)} x{item.quantity}
                  </span>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h1>No order found</h1>
          </div>
        )}
      </main>
    </div>
  )
}

export default observer(Bag)
