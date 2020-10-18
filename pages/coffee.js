import add from '../public/add.svg'

export default function Coffee({ coffee }) {
    console.log(coffee)
    return (
        <div className="container">
            <h1>Coffee</h1>
            <div className="item-grid">
                {coffee.map((coffee) => (
                    <div className="item-card" key={coffee.name}>
                        <h2>{coffee.name}</h2>
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
        </div>
    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/coffees`)
    const coffee = await res.json()

    return { props: { coffee } }
}
