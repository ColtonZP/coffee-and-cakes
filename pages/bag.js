import Head from 'next/head'
import { observer } from 'mobx-react-lite'

const Bag = ({ bag }) => {
    const { items, addItem } = bag
    return (
        <div className="container">
            <Head>
                <title>Bag</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <ul>
                    {items.map(item => (
                        <li key={item}>
                            <span>{item.name} x</span>
                            <input type="number" value={item.quantity} />
                        </li>
                    ))}
                </ul>
                <button onClick={() => addItem({ name: 'item' })}>Add Item</button>
            </main>
        </div>
    )
}

export default observer(Bag)
