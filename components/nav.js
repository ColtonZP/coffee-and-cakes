import { useState } from 'react'
import Links from './links'

export default function Nav() {
    const [menu, toggleMenu] = useState(false)

    return (
        <nav>
            <div className="mobile">
                <div className="container">
                    {/* toggle class active if pressed, change to button */}
                    <button
                        className={`menu-bars ${menu && 'active'}`}
                        onClick={() => toggleMenu(!menu)}>
                        <div className="top bar"></div>
                        <div className="middle bar"></div>
                        <div className="bottom bar"></div>
                    </button>
                    {menu && <Links toggleMenu={toggleMenu} />}
                </div>
            </div>
            <div className="desktop">
                <div className="container">
                    <Links />
                </div>
            </div>
        </nav>
    )
}
