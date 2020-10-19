import Head from 'next/head'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Coffee Demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="jumbotron">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>
                <h1>Fan Favorites</h1>
                <div className="favs">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>
            </main>

            <footer></footer>
        </div>
    )
}
