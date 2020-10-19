import Head from 'next/head'

import add from '../public/add.svg'

export default function Plants({ coffee }) {
    const { API_URL } = process.env

    const isNew = date => {
        const day = new Date(date)
        day.setDate(day.getDate() + 30)
        return day >= new Date()
    }

    return (
        <div className="container">
            <Head>
                <title>Plants</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="drinks">
                <h1>Plants</h1>
                <div className="item-grid">
                    {coffee.map(coffee => (
                        <div className="item-card" key={coffee.name}>
                            <img
                                className="photo"
                                src={coffee.image && API_URL + coffee.image.url}
                                alt={coffee.name}
                            />
                            <h2>
                                {isNew(coffee.published_at) && <span className="new">New</span>}{' '}
                                {coffee.name}
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
                            <button>
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
