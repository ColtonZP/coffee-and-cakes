import Link from 'next/link'

export default function Links({ toggleMenu }) {
  return (
    <div className="links">
      <Link href="/">
        <a onClick={() => toggleMenu && toggleMenu(false)}>Home</a>
      </Link>
      <Link href="/drinks">
        <a onClick={() => toggleMenu && toggleMenu(false)}>Drinks</a>
      </Link>
      <Link href="/food">
        <a onClick={() => toggleMenu && toggleMenu(false)}>Food</a>
      </Link>
      <div className="rightMenu">
        <Link href="/find-a-store">
          <a onClick={() => toggleMenu && toggleMenu(false)}>Find a store</a>
        </Link>
        <Link href="/bag">
          <a onClick={() => toggleMenu && toggleMenu(false)}>Bag</a>
        </Link>
      </div>
    </div>
  )
}
