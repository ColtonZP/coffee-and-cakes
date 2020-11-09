import '../styles/global.scss'
import BagState from '../lib/Bag.js'
import Nav from '../components/nav'

export default class MyApp extends React.Component {
    componentDidMount() {
        let inBag = JSON.parse(localStorage.getItem('inBag'))
        let store = JSON.parse(localStorage.getItem('store'))

        if (inBag === null || inBag === undefined) {
            inBag = []
        }

        if (store === null || store === undefined) {
            store = {}
        }

        BagState.pullItems(inBag)
        BagState.setStore(store)
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Nav />
                <Component {...pageProps} bag={BagState} />
            </>
        )
    }
}
