export default function Coffee({ coffee }) {
    console.log(coffee)
    return (
        <div>
            <main>
                <h1>Coffee</h1>
                {coffee.map((coffee) => (
                    <div key={coffee.name}>
                        <h1>{coffee.name}</h1>
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
