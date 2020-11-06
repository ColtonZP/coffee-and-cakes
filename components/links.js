import Link from 'next/link'

export default function Links() {
    return (
        <div className="links">
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/drinks">
                <a>Drinks</a>
            </Link>
            <Link href="/food">
                <a>Food</a>
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
    )
}
