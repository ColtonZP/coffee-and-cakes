import '../styles/global.scss'
import BagState from '../lib/Bag.js'
import Nav from '../components/nav'

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Nav />
            <Component {...pageProps} bag={BagState} />
        </React.Fragment>
    )
}

export default MyApp
