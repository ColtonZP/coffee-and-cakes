import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

import { Client } from '../lib/prismic-config'

export default function Home({ home }) {
  return (
    <div className="container">
      <Head>
        <title>Coffee Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="jumbotron">
          <div className="block">
            <img className="background" src={home.data.ad_1_background.url} alt="" />
            <div className="ad">
              <img className="itemImage" src={home.data.ad_1_coffee.url} alt="" />
              {RichText.render(home.data.ad_1_description)}
            </div>
          </div>

          <div className="block">
            <img className="background" src={home.data.ad_2_background.url} alt="" />
            <div className="ad">
              <img className="itemImage" src={home.data.ad_2_coffee.url} alt="" />
              {RichText.render(home.data.ad_2_description)}
            </div>
          </div>

          <div className="block">
            <img className="background" src={home.data.ad_3_background.url} alt="" />
            <div className="ad">
              <img className="itemImage" src={home.data.ad_3_coffee.url} alt="" />
              {RichText.render(home.data.ad_3_description)}
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
  const home = await Client().getSingle('home_page')

  return { props: { home } }
}
