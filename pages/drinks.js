import Head from 'next/head'
import { observer } from 'mobx-react-lite'

import add from '../public/add.svg'

export default function Drinks({ coffee, bag }) {
    const { API_URL } = process.env
    const { addItem } = bag

    const isBadge = coffee => {
        const day = new Date(coffee.published_at)
        day.setDate(day.getDate() + 30)
        if (coffee.seasonal) {
            return <span className="badge">Seasonal</span>
        } else if (day >= new Date()) {
            return <span className="badge">New</span>
        }
    }

    return (
        <div className="container">
            <Head>
                <title>Drinks</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="drinks">
                <h1>Coffee</h1>
                <div className="item-grid">
                    {coffee.map(coffee => (
                        <div className="item-card" key={coffee.name}>
                            <img
                                className="photo"
                                src={coffee.image && coffee.image.url}
                                alt={coffee.name}
                            />
                            <h2>
                                {isBadge(coffee)} {coffee.name}
                            </h2>
                            <p>{coffee.description}</p>
                            <div className="nutrition">
                                <span>
                                    <b>Calories</b> {coffee.calories}
                                </span>
                                <span>
                                    <b>Caffeine</b> {coffee.caffeine}mg
                                </span>
                            </div>
                            <span className="price">${coffee.price.toFixed(2)}</span>
                            <button onClick={() => addItem(coffee)}>
                                <img src={add} alt="add" /> <span>Add</span>
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/coffees`)
    const coffee = await res.json()

    return { props: { coffee } }
}
