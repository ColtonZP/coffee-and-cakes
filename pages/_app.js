import '../styles/global.scss'
import Nav from '../components/nav'

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Nav />
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default MyApp
