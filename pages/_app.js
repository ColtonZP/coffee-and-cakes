import '../styles/global.scss'
import BagState from '../lib/Bag.js'
import Nav from '../components/nav'

export default class MyApp extends React.Component {
    componentDidMount() {
        let res = JSON.parse(localStorage.getItem('inBag'))

        if (res === null || res === undefined) {
            res = []
        }

        BagState.pullItems(res)
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
