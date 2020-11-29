import Head from 'next/head'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

import { Client } from '../lib/prismic-config'

export default function Home({ home }) {
  const { ad_1, ad_1_item, ad_2, ad_2_item, ad_3, ad_3_item } = home

  return (
    <div className="container">
      <Head>
        <title>Coffee Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="jumbotron">
          <div className="block">
            <img className="background" src={ad_1.background.url} alt="" />
            <div className="ad">
              <img className="itemImage" src={ad_1_item.picture.url} alt="" />
              <div className="info">
                {RichText.render(ad_1.description)}
                <Link href={`/${ad_1.category}/${ad_1.type}/${ad_1.item.uid}`}>
                  <button>Get it now</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="block">
            <img className="background" src={ad_2.background.url} alt="" />
            <div className="ad">
              <img className="itemImage" src={ad_2_item.picture.url} alt="" />
              <div className="info">
                {RichText.render(ad_2.description)}
                <Link href={`/${ad_2.category}/${ad_2.type}/${ad_2.item.uid}`}>
                  <button>Get it now</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="block">
            <img className="background" src={ad_3.background.url} alt="" />
            <div className="ad">
              <img className="itemImage" src={ad_3_item.picture.url} alt="" />
              <div className="info">
                {RichText.render(ad_3.description)}
                <Link href={`/${ad_3.category}/${ad_3.type}/${ad_3.item.uid}`}>
                  <button>Get it now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="options">
          <div className="block">{/* happy hour */}</div>
          <div className="block">{/* delivery */}</div>
          <div className="block">{/* contactless order and pick up */}</div>
          <div className="block">{/* specials */}</div>
        </div>

        <div className="contact">
          {/*
              email list
              social links
          */}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const getAd = id =>
    Client()
      .getByID(id)
      .then(res => res.data)

  const getItem = id =>
    Client()
      .getByID(id)
      .then(res =>
        Client()
          .getByUID(res.data.item.type, res.data.item.uid)
          .then(res => res.data),
      )

  const home = await Client()
    .getSingle('home_page')
    .then(async res => ({
      ad_1: await getAd(res.data.ad_1.id),
      ad_1_item: await getItem(res.data.ad_1.id),

      ad_2: await getAd(res.data.ad_2.id),
      ad_2_item: await getItem(res.data.ad_2.id),

      ad_3: await getAd(res.data.ad_3.id),
      ad_3_item: await getItem(res.data.ad_3.id),
    }))

  return { props: { home } }
}
