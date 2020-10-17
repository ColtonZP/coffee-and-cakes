import '../styles/index.scss'
import Nav from './nav'

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Nav />
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default MyApp
