import Link from 'next/link'
export default function Nav() {
    return (
        <nav>
            <div className="container">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/plants">
                    <a>Plants</a>
                </Link>
                <div className="right-menu">
                    <Link href="/stores">
                        <a>Find a store</a>
                    </Link>
                    <Link href="/bag">
                        <a>Bag</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
