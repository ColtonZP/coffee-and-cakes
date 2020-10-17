import add from '../public/add.svg'

export default function Coffee({ coffee }) {
    console.log(coffee)
    return (
        <div>
            <main>
                <h1>Coffee</h1>
                {coffee.map((coffee) => (
                    <div className="item-card" key={coffee.name}>
                        <h2>{coffee.name}</h2>
                        <span>
                            <b>Calories</b> {coffee.calories}
                        </span>
                        <span>
                            <b>Caffeine</b> {coffee.caffeine}
                            <b>mg</b>
                        </span>
                        <button>
                            <img src={add} alt="add" />
                        </button>
                    </div>
                ))}
            </main>

            <footer></footer>
        </div>
    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env
    const res = await fetch(`${API_URL}/coffees`)
    const coffee = await res.json()

    return { props: { coffee } }
}
