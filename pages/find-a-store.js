import Head from 'next/head'
import { observer } from 'mobx-react-lite'

import Map from '../components/Map'

function FindAStore({ bag }) {
  const { setStore, store } = bag
  return (
    <div>
      <Head>
        <title>Find a Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="stores">
        <Map setStore={setStore} store={store} />
      </main>
    </div>
  )
}

export default observer(FindAStore)
