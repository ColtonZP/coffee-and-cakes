import Head from 'next/head'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

import { Client } from '../lib/prismic-config'
import facebook from '../public/facebook.svg'
import instagram from '../public/instagram.svg'
import twitter from '../public/twitter.svg'

export default function Home({ home }) {
  const { ad_1, ad_1_item, ad_2, ad_2_item, ad_3, ad_3_item } = home

  return (
    <div>
      <Head>
        <title>Coffee Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
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

        <div className="specials">
          <div className="block">{/* happy hour */}</div>
          <div className="block">{/* delivery */}</div>
          <div className="block">{/* contactless order and pick up */}</div>
        </div>
      </main>

      <footer className="contact">
        <h1 className="container">Stay connected!</h1>

        <div className="container">
          <div className="email">
            <h2>Sign up for the news letter</h2>
            <form>
              <input type="email" />
              <input type="submit" />
            </form>
          </div>

          <div className="social">
            <h2>Get social with us</h2>
            <div className="links">
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>
        </div>

        <div className="siteMap container">
          <div className="drinkLinks">
            <h3>
              <Link href="/drinks">Drinks</Link>
            </h3>

            <ul>
              <li>
                <Link href="/drinks#coffee">Coffee</Link>
              </li>
              <li>
                <Link href="/drinks#tea">Tea</Link>
              </li>
            </ul>
          </div>

          <div className="foodLinks">
            <h3>
              <Link href="/food">Food</Link>
            </h3>

            <ul>
              <li>
                <Link href="/food#bakery">Bakery</Link>
              </li>
              <li>
                <Link href="/food#sweets">Sweets</Link>
              </li>
            </ul>
          </div>

          <div className="store">
            <h3>
              <Link href="/find-a-store">Find a store</Link>
            </h3>
          </div>

          <div className="bag">
            <h3>
              <Link href="/bag">Bag</Link>
            </h3>
          </div>
        </div>
      </footer>
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
