import Head from 'next/head'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

import { Client } from '../lib/prismic-config'

export default function Home({ home }) {
  // const ad_1_item = Client().getByUID('bakery', home.data.ad_1_item.uid)

  console.log(home)
  return (
    <div className="container">
      <Head>
        <title>Coffee Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="jumbotron">
          {/* <div className="block">
            <img className="background" src={home.data.ad_1_background.url} alt="" />
            <div className="ad">
              <img className="itemImage" src={ad_1_item.data.picture.url} alt="" />
              <div className="info">
                {RichText.render(home.data.ad_1_description)}
                <Link href={`/${home.data.category}/${home.data.type}/${ad_1_item.uid}`}>
                  <button>Get it now</button>
                </Link>
              </div>
            </div>
          </div> */}

          {/* <div className="block">
            <img className="background" src={home.data.ad_2_background.url} alt="" />
            <div className="ad">
              <img className="itemImage" src={home.data.ad_2_coffee.url} alt="" />
              <div className="info">
                {RichText.render(home.data.ad_2_description)}
                <button>Get it now</button>
              </div>
            </div>
          </div>

          <div className="block">
            <img className="background" src={home.data.ad_3_background.url} alt="" />
            <div className="ad">
              <img className="itemImage" src={home.data.ad_3_coffee.url} alt="" />
              <div className="info">
                {RichText.render(home.data.ad_3_description)}
                <button>Get it now</button>
              </div>
            </div>
          </div> */}
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
  const home = await Client()
    .getSingle('home_page')
    .then(async res => {
      const ad_1_info = await Client()
        .getByID(res.data.ad_1.id)
        .then(res => res.data)

      const ad_1_item = await Client()
        .getByID(res.data.ad_1.id)
        .then(
          async res =>
            await Client()
              .getByUID(res.data.item.type, res.data.item.uid)
              .then(res => res.data),
        )

      const ads = {
        ad_1: ad_1_info,
        ad_1_item: ad_1_item,
      }

      return ads
    })

  return { props: { home } }
}
