import Head from 'next/head'

import Map from '../components/Map'

export default function FindAStore({ bag }) {
    return (
        <div>
            <Head>
                <title>Find a Store</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="stores">
                <Map bag={bag} />
            </main>
        </div>
    )
}
