import Head from 'next/head'

export default function Home({ ads }) {
    const topAd = ads.find(ad => ad.Position === 'TOP_AD')
    const middleAd = ads.find(ad => ad.Position === 'MIDDLE_AD')
    const bottomAd = ads.find(ad => ad.Position === 'BOTTOM_AD')
    return (
        <div className="container">
            <Head>
                <title>Coffee Demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="jumbotron">
                    <div className="block">
                        <img className="background" src={topAd.Background.url} alt="" />
                        <div className="ad">
                            <img className="itemImage" src={topAd.coffee.image.url} alt="" />
                            <p>{topAd.Description}</p>
                        </div>
                    </div>
                    <div className="block">
                        <img className="background" src={middleAd.Background.url} alt="" />
                        <div className="ad">
                            <p>{middleAd.Description}</p>
                            <img className="itemImage" src={middleAd.coffee.image.url} alt="" />
                        </div>
                    </div>
                    <div className="block">
                        <img className="background" src={bottomAd.Background.url} alt="" />
                        <div className="ad">
                            <img className="itemImage" src={bottomAd.coffee.image.url} alt="" />
                            <p>{bottomAd.Description}</p>
                        </div>
                    </div>
                </div>
                <h1>Fan Favorites</h1>
                <div className="favs">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/front-page-ads`)
    const ads = await res.json()

    return { props: { ads } }
}
