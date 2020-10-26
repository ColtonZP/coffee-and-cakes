import Head from 'next/head'
import { observer } from 'mobx-react-lite'

import Item from '../components/BagItem'

const Bag = ({ bag }) => {
    const { items } = bag

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
                <ul>
                    {items.map(item => (
                        <Item key={item} item={item} bag={bag} />
                    ))}
                </ul>
                {items.length > 0 ? (
                    <div>
                        <span>Total: {getTotal()}</span>
                    </div>
                ) : (
                    <div>
                        <span>Cart Empty</span>
                    </div>
                )}
            </main>
        </div>
    )
}

export default observer(Bag)
