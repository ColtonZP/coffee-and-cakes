import Head from 'next/head'
import { observer } from 'mobx-react-lite'

import Item from '../components/BagItem'

const Bag = ({ bag }) => {
    const { items, removeItem } = bag
    return (
        <div className="container">
            <Head>
                <title>Bag</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <ul>
                    {items.map(item => (
                        <Item item={item} bag={bag} />
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default observer(Bag)
